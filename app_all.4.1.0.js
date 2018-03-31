/*!
 * League of Legends Boards Revamp Project (NA/OCE/EU)
 * Version: 4.1.0
 * Requires: jQuery 2.1.0+
 *
 * Author: Michael 'Wuks' Chan
 * 
 * Developed primarily and exclusively for Riot Games, 
 * for use on the League of Legends Apollo Boards.
 *
 * Copyright (c) 2018 Michael Chan 
 */
(function($,globals,sessionStorage){
	// Define globally scoped object
	globals.GLOB = {};
	
	// Initialize & set variables
	var isBoardIndex;
	var isChronoView;
	var isLoggedIn;
	var groupData;
	var region = window.location.href.split('.')[1];
	var lang = window.location.href.split('/')[3];
	if(document.getElementsByClassName('discussion-list-item').length > 0){
		isBoardIndex = true;
	} else {
		isBoardIndex = false;
		console.log(!$('.sorting.right').attr('style'));
		if (!$('.sorting.right').attr('style')){
		//if (document.getElementById('comments').getElementsByClassName('show-more').length !== 0){
			isChronoView = false;
		} else { isChronoView = true; }
	}
	if(document.getElementsByClassName('logged-in').length > 0){
		isLoggedIn = true;
	} else { isLoggedIn = false; }
	var subBoard = document.getElementById('breadcrumbs').getElementsByTagName('h2')[0].innerText;
	
	// Define each Boards' API location
	if(region === 'na'){
		var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/yrc23zHg`;
	} else if (region === 'oce') {
		var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Ntey9fRZ`;
	} else if (region === 'euw' || region === 'eune') {
		// Filter down EU languages
		if (lang === 'pl') {
		} else if (lang === 'es') {
		} else if (lang === 'hu') {
		} else if (lang === 'ro') {
		} else if (lang === 'pt') {
		} else if (lang === 'fr') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/HQuwfMYs`;
		} else if (lang === 'it') {
		} else if (lang === 'de') {
		} else if (lang === 'el') {
		} else if (lang === 'cs') {
		}
	}

	// Initialize Apollo CORS Bridge
	var apolloBaseUrl = `https://apollo.${region}.leagueoflegends.com/apollo`;
	var xhr;
	$.getScript(`${apolloBaseUrl}/cors/easyXDM.min.js`, ()=> {
        xhr = new easyXDM.Rpc({
            remote: `${apolloBaseUrl}/cors/index.html`,
            swf: `${apolloBaseUrl}/easyXDM.swf`,
            remoteHelper: `${apolloBaseUrl}/name.html`
        }, {
            remote: {
                request: {}
            }
        });
	});
	
	// Define CORS request template
	function CORSrequest(requestURI,callback){
		xhr.request({
			url: requestURI,
			method: 'GET',
		}, ({ status, data }) => {
			// Success!
			callback(data);
		}, ({ status, data }) => {
			// Error callback //
			console.log(status);
			console.log(data);
		});
	}
	
	// EVERYTHING BELOW THIS LINE NEEDS TO BE ADJUSTED
	if(isBoardIndex){
		IndexVoting();
	}
	if(isChronoView){
		commentParent();
	}
	
	
	// Cache Check!
	// Initialize Group Info Pulling
	if (storageAvailable('sessionStorage')){ // sessionStorage compatible
		if (!sessionStorage.getItem(`${region}${lang}groupData`)){ // and is not defined
			pullUserGroups();
		} else { // is defined
			groupData = sessionStorage.getItem(`${region}${lang}groupData`); // Pull from sessionStorage
			globals.GLOB.groupData = groupData;
			applyUserGroups(groupData);
		}
	} else { // not sessionStorage compatible
		pullUserGroups(); // We'll need to utilize API call and not use API response caching.
	}
	
	// Also, note to self, that we'll need different sessionStorage based on Board,
	// since we'll see collisions, primarily among the European Boards.
	
	// Mutation Observer as page loads
	var body = document.getElementsByTagName('body')[0];
	var observer = new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			for(var i=0; i<mutation.addedNodes.length;i++){
				if(globals.GLOB.groupData){
					applyUserGroups(globals.GLOB.groupData);
					IndexVoting();
					//$('.expanding-wrapper textarea').attr('placeholder','Hello, it\s me Wuks');
				}			
			}
		});
	});
	observer.observe(body,{childList:true});
	
	// Synchronous and callback
	function pullUserGroups(){
		var apiBridgeHandle;
		clearTimeout(apiBridgeHandle);
		if(!xhr){
			apiBridgeHandle = setTimeout(pullUserGroups,0);
			return;
		}
		CORSrequest(requestURI,cacheUserGroups);
	}
	
	// Pulls the different groups and associated user ID's within groups
	function cacheUserGroups(groupData){
		if (storageAvailable('sessionStorage')) {
			if (!sessionStorage.getItem(`${region}${lang}groupData`)) {
				sessionStorage.setItem(`${region}${lang}groupData`,groupData);
				globals.GLOB.groupData = groupData;
			} else {
				globals.GLOB.groupData = groupData;
			}
		} else {
			globals.GLOB.groupData = groupData;
		}
		applyUserGroups(groupData);
	}
	
	function applyUserGroups(groupData){
		var groupData = JSON.parse(groupData);
		var groupMemberList = Object.keys(groupData.application.metadata.groupsUser);
		var groupMemberData = groupData.application.metadata.groupsUser;
		var groupInfo = groupData.application.metadata.groups;
		//console.log(groupInfo);
		
		$('a.profile-hover:not(.cka)').each(function(){
			var $current = $(this);
			this.className += ' cka';
			if(!$current.parent().hasClass('isRioter')){ // Sets Non-Rioter Flares
				var apolloID = $current.attr('data-apollo-pvpnet-id');
				for(var i=groupMemberList.length-1;i>-1;i-=1){
					if(apolloID === groupMemberList[i].split(':')[1]){
						var currentGroup = groupInfo[groupMemberData[groupMemberList[i]]];
						$current
							.parents('.byline:not(.discussion-footer)')
								.find('.inline-profile:first')
									.after(`<span class='tags' style='background-color:${currentGroup.color}'>${currentGroup.name}</span>`)
								.end()
							.end()
							.closest('.nested-comment')
								.find('.masthead:first')
									.append(`<span class='ttriangle' style='border-top: 25px solid ${currentGroup.color}'></span>`)
								.end()
							.end()
							.closest('.nested-comment:not(.glow):not(.flat)')
								.attr('style',`border-top:1px solid ${currentGroup.color}`)
							.end()
							.css('color',currentGroup.color);
					}
				}
			} else { // Sets Rioter Titles
				var tArray = $current.attr("href").split('/');
				let z = `https://boards.${region}.leagueoflegends.com/api/users/${tArray[3]}/${tArray[4]}`;
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status === 200) {
						var myObj = JSON.parse(this.responseText);
						if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title')){
							var title = myObj.profile.data.title;
							current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after(`<span class='tags crioter'>${title}</span>`);
						}
					}
				};
				xmlhttp.open("GET", z, true);
				xmlhttp.send();
			}			
		});
		
		// We use the .each function to resolve a bug that applies colors to other
		// users if they hover over another user quick enough.
		$('.information-container').each(function(){
			var $current = $(this);
			if($current.find('.summoner-name').text() === 'Wuks'){
				$current
					.find('.summoner-name')
						.css('color','#9c4ad9')
						.end()
					.find('.title')
						.text('Ohana Means Family')
						.css('color','#6dc0cd')
					.closest('.profile-hover')
						.addClass('top-bar')
						.css('border-top-color','#9c4ad9');
			}
			if($current.find('.title').text().indexOf('Herald') > -1){
				$current.find('.summoner-name').css('color','#9c4ad9').end()
					.find('.title').css('color','#6dc0cd')
					.closest('.profile-hover')
						.addClass('top-bar')
						.css('border-top-color','#9c4ad9');
			} else if($current.find('.title').text().indexOf('Advisor') > -1){
				$current.find('.summoner-name').css('color','#87CEEB').end()
					.find('.title').css('color','#6dc0cd')
					.closest('.profile-hover')
						.addClass('top-bar')
						.css('border-top-color','#87CEEB');
			} else if($current.find('.title').text().indexOf('Moderator') > -1){
				$current.find('.summoner-name').css('color','#7fe4af').end()
					.find('.title').css('color','#6dc0cd')
					.closest('.profile-hover')
						.addClass('top-bar')
						.css('border-top-color','#7fe4af');
			}
		});
	}
	
	function IndexVoting(){
		// Obtain a object of voting
		$('#discussion-list')
			.find('ul.upVoted:not(#cv)')
				.attr('id','cv')
				.parent()
					.parent()
						.css('border-left','2px solid #009700')
					.end()
				.end()
			.end()
			.find('ul.downVoted:not(#cv)')
				.attr('id','cv')
				.parent()
					.parent()
						.css('border-left','2px solid #e23636')
					.end()
				.end()
			.end()
			.find('button.up-vote')
				.remove()
			.end()
			.find('button.down-vote')
				.remove()
			.end();
		$('#discussion-list').find('.riot-apollo.voting:not(.wx)').each(function(){
			$v = $(this);
			$v.addClass('wx');
			var up = $v.attr('data-apollo-up-votes');
			var down = $v.attr('data-apollo-down-votes');
			var total = up - down;
			if (total === 1){
				$v.find('.total-votes').attr('style','color:#13bbc1').end()
					.find('ul.riot-voting').append('<li>vote</li>');
			} else if (total === 0){
				$v.find('.total-votes').attr('style','color:#13bbc1').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if (total > 5){
				$v.find('.total-votes').attr('style','color:#22b722').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if([2,3].indexOf(total) > -1){
				$v.find('.total-votes').attr('style','color:#b3c524').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if([-1,-2].indexOf(total) > -1){
				$v.find('.total-votes').attr('style','color:#ffda4e').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if([-3,-4].indexOf(total) > -1){
				$v.find('.total-votes').attr('style','color:#ffa51b').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if(total < -4){
				$v.find('.total-votes').attr('style','color:#ffa51b').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			} else if([4,5].indexOf(total) > -1){
				$v.find('.total-votes').attr('style','color:#86bf00').end()
					.find('ul.riot-voting').append('<li>votes</li>');
			}
		});
	}

	function commentParent(){
		var tArray = $("#discussion").find("li.view-in-mod-tool a").attr("href").split('/');
		var appID = tArray[4];
		var discID = tArray[6];
		$(".nested-comment:not(.isChild):not(.isDeleted)").each(function(){
			this.className += " isChild";
			var n1 = $(this).attr("id");
			if(undefined !== n1 && n1.length){
				if (n1.length > 12){
					l = n1.slice(8,-4);
					var z = `https://boards.${region}.leagueoflegends.com/api/${appID}/discussions/${discID}/comment/${l}.json`; // we're going to utilize the apollo bridge and apollo api instead of the boards api proxy; we're getting a decent number of errors when pulling some comments and it returning an error 500/internal
					var comment = this;
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status === 200) {
							var myObj = JSON.parse(this.responseText);
							var Bname = myObj.user.name;
							var Brealm = myObj.user.realm;
							var Bmsg = myObj.message;
							if(myObj.deleted === true){
								Bmsg = `<span style="color:#fff;background-color:#9e2020;padding:3px 10px;border-radius:5px;display:inline-flex">Sorry! The comment you have requested is no longer available.</span>`;
							}
							$(comment).find(".body").prepend("<div class='op-ref' style='display:none'><p>"+Bmsg+"</p><a class='footer' href='?show=flat&comment="+l+"'>GO TO COMMENT</a></div>").end()
								.find(".header.byline.clearfix").append("<span class='op-ref-bar'>In response to: <a href=\'https://boards."+region+".leagueoflegends.com/"+lang+"/player/"+Brealm+"/"+Bname+"\'>"+Bname+"</a> ("+Brealm+") (<a class=\'toggle-op noshow\' href=\'javascript:;\' onclick=\'$(this).hasClass(\"noshow\") ? ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:block\"), $(this).attr(\"class\", \"toggle-op yesshow\"), $(this).text(\"hide\")) : ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:none\"), $(this).attr(\"class\", \"toggle-op noshow\"), $(this).text(\"show\"));\'>show</a>)</span>");
						}
					};
					xmlhttp.open("GET", z, true);
					xmlhttp.send();
				}
			}
		});
	}

	

	
	// Mozilla's Feature-detecting Storage function
	// From: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
	function storageAvailable(type) {
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				storage.length !== 0;
		}
	}
	
}(jQuery,this,this.sessionStorage));

