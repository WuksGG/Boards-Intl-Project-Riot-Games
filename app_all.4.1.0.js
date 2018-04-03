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
	var APIresponse;
	var region = window.location.href.split('.')[1];
	var lang = window.location.href.split('/')[3];
	if(document.getElementsByClassName('discussion-list-item').length > 0){
		isBoardIndex = true;
	} else {
		isBoardIndex = false;
		if (!$('#page-main').find('.sorting.right').attr('style')){
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
		if (lang === 'en'){
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/eZuvYsEr`;
		} else if (lang === 'pl') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/rQQyBoxw`;
		} else if (lang === 'es') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Ov4LX3ej`;
		} else if (lang === 'hu') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/zRAyEAAl`;
		} else if (lang === 'ro') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/zeNkrfcE`;
		} else if (lang === 'fr') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/HQuwfMYs`;
		} else if (lang === 'it') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/cAOZwaUi`;
		} else if (lang === 'de') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Wj1wcocU`;
		} else if (lang === 'el') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Fv0OmEQe`;
		} else if (lang === 'cs') {
			var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/xkHPa6iV`;
		}
	}

	// Initialize Apollo CORS Bridge
	var apolloBaseUrl = `https://apollo.${region}.leagueoflegends.com/apollo`;
	var xhr;
	// setup callback to processApiRequestQueue();
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
		processApiRequestQueue();
	});
	
	// This function will absolutely reach the maximum call stack
	// Need to replace !xhr with a direct callback.
	// We're going to create a request queue to minimize the number of active open function calls.
	globals.GLOB.queueStack = [];
	function apiRequestQueue(requestURI,currentItem){
		if(!xhr){
			let b = {`'requestURI': '${requestURI}, 'currentItem': '${currentItem}`};
			globals.GLOB.queueStack.push(b);
			console.log(globals.GLOB.queueStack);
		} else {
			pullRioterProfiles(currentItem);
		}
	}
	
	function processApiRequestQueue(){
		for(i=0;i<globals.GLOB.queueStack.length;i++){
			let worker = globals.GLOB.queueStack.shift();
			requestURI = worker[0];
			currentItem = worker[1];
			let apolloID = currentItem.attr('data-apollo-pvpnet-id');
			CORSrequest(requestURI,applyRioterProfile,apolloID,currentItem);
		}
	}
	
	function pullRioterProfiles(currentItem){
		var apolloID = currentItem.attr('data-apollo-pvpnet-id');
		var userRegion = currentItem.attr('data-apollo-pvpnet-realm');
		let requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/users/${userRegion}/${apolloID}`;
		if(!xhr){
			apiRequestQueue(requestURI,currentItem);
			return;
		}
		CORSrequest(requestURI,applyRioterProfile,apolloID,currentItem);
	}
	
	function applyRioterProfile(title,currentItem){
		if (title){
			currentItem.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after(`<span class='tags crioter'>${title}</span>`);
		}
	}
	
	// Define CORS request template
	function CORSrequest(requestURI,callback,itemKey,currentItem){
		xhr.request({
			url: requestURI,
			method: 'GET',
		}, ({ status, data }) => {
			// Success!
			cacheResponse(data,callback,itemKey,currentItem);
		}, ({ status, data }) => {
			// Error callback //
			console.log(status);
			console.log(data);
		});
	}
	
	function cacheResponse(APIresponse,callback,itemKey,currentItem){
		if (itemKey === 'groupData'){
			APIresponse = JSON.stringify(JSON.parse(APIresponse).application.metadata);
		} else {
			APIresponse = JSON.parse(APIresponse).user.profile.data.title;
		}
		globals.GLOB[itemKey] = APIresponse;
		if (storageAvailable('sessionStorage')) {
			if (!sessionStorage.getItem(`${region}${lang}_${itemKey}`)) {
				sessionStorage.setItem(`${region}${lang}_${itemKey}`,APIresponse);
			}
		}
		callback(APIresponse,currentItem);
		//CORSrequest(requestURI,applyRioterProfile,apolloID,currentItem);
	}
	
	// Synchronous and callback
	function pullUserGroups(){
		var apiBridgeHandle;
		clearTimeout(apiBridgeHandle);
		if(!xhr){
			apiBridgeHandle = setTimeout(pullUserGroups,0);
			return;
		}
		CORSrequest(requestURI,applyUserGroups,'groupData');
	}
	
	
	
	if(isBoardIndex){
		IndexVoting();
	}
	if(isChronoView){
		commentParent();
	}
	
	// Cache Check!
	// Initialize Group Info Pulling
	if (storageAvailable('sessionStorage')){ // sessionStorage compatible
		if (!sessionStorage.getItem(`${region}${lang}_groupData`)){ // and is not defined
			pullUserGroups();
		} else { // is defined
			groupData = sessionStorage.getItem(`${region}${lang}_groupData`); // Pull from sessionStorage
			globals.GLOB.groupData = groupData;
			applyUserGroups(groupData);
		}
	} else { // not sessionStorage compatible
		pullUserGroups(); // We'll need to utilize API call and not use API response caching.
	}
	
	// Mutation Observer as page loads
	var body = document.getElementsByTagName('body')[0];
	var observer = new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			for(var i=0; i<mutation.addedNodes.length;i++){
				if(globals.GLOB.groupData){
					applyUserGroups(globals.GLOB.groupData);
				}
				if(isBoardIndex){
					IndexVoting();
				}
				if(isChronoView){
					commentParent();
				}
			}
		});
	});
	observer.observe(body,{childList:true});
	
	
	function applyUserGroups(groupData){
		groupData = JSON.parse(groupData);
		var groupMemberList = Object.keys(groupData.groupsUser);
		var groupMemberData = groupData.groupsUser;
		var groupInfo = groupData.groups;
		$('a.profile-hover:not(.cka)').each(function(){
			var $current = $(this);
			this.className += ' cka';
			var apolloID = $current.attr('data-apollo-pvpnet-id');
			if(!$current.parent().hasClass('isRioter')){
				// Sets Non-Rioter Flares
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
			} else {
				// Sets Rioter Titles
				if (storageAvailable('sessionStorage')){ // sessionStorage compatible
					if (!sessionStorage.getItem(`${region}${lang}_${apolloID}`)){ // and is not defined
						pullRioterProfiles($current);
					} else { // is defined
						var rioterProfile = sessionStorage.getItem(`${region}${lang}_${apolloID}`); // Pull from sessionStorage
						applyRioterProfile(rioterProfile,$current);
					}
				} else { // not sessionStorage compatible
					pullRioterProfiles($current);
				}
			}			
		});
		
		
		// We use the .each function to resolve a bug that applies colors to other
		// users if they hover over another user quick enough.
		$('.information-container').each(function(){
			var $current = $(this);
			var groupNumbers = Object.keys(groupInfo);
			for(var i=0;i<groupNumbers.length;i++){
				if ($current.find('.title').text().indexOf(groupInfo[groupNumbers[i]].name) > -1){
					$current
						.find('.summoner-name')
							.css('color',groupInfo[groupNumbers[i]].color)
						.end()
						.find('.title')
							.css('color','#6dc0cd')
							.closest('.profile-hover')
								.addClass('top-bar')
								.css('border-top-color',groupInfo[groupNumbers[i]].color);
					if ($current.closest('.top').find('img').attr('src').indexOf('/NA/Wuks.png') > -1){
						$current
							.find('.title')
								.text('Ohana Means Family');
					}
					return;
				}
			}
		});
	}
	
	function IndexVoting(){
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