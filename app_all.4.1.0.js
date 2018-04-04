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
	if(document.getElementsByClassName('new-discussion-box')[0].innerText.includes('CREATE A DISCUSSION')){
		var createThread = true;
	} else {
		var createThread = false;
		document.getElementsByClassName('new-discussion-box')[0].remove();
	}
	
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
	// // // resolved
	globals.GLOB.queueStack = [];
	function apiRequestQueue(requestURI,currentItem,callback){
		let discId = currentItem.attr('data-discussion-id');
		var b = {'requestURI': requestURI, 'currentItem': currentItem, 'callback': callback};
		//currentItem.css('backgroundColor','green');
		globals.GLOB.queueStack.push(b);
	}
	
	function processApiRequestQueue(){
		for(i=0;i<globals.GLOB.queueStack.length;i++){
			var worker = globals.GLOB.queueStack.shift();
			var requestURI = worker.requestURI;
			var currentItem = worker.currentItem;
			var callback = worker.callback;
			if(callback.name === 'applyRioterProfile'){
				var itemKey = currentItem.attr('data-apollo-pvpnet-id');
			} else if(callback.name === 'applyThreadFlare'){
				var appId = currentItem.attr('data-application-id');
				var discId = currentItem.attr('data-discussion-id');
				var itemKey = `${appId}_${discId}`;
			}
			CORSrequest(requestURI,callback,itemKey,currentItem);
		}
	}
	
	function boardIndexFlares(){
		$('#discussions').find('tr.discussion-list-item:not(.cn)').each(function(){
			this.className += ' cn';
			var currentItem = $(this);
			//boardIndexFlares($(this));
			var appId = currentItem.attr('data-application-id');
			var discId = currentItem.attr('data-discussion-id');
			if (storageAvailable('sessionStorage')){
				if (!sessionStorage.getItem(`${region}${lang}_${appId}_${discId}`)){
					pullThread(currentItem);
				} else {
					var threadInfo = sessionStorage.getItem(`${region}${lang}_${appId}_${discId}`);
					applyThreadFlare(threadInfo,currentItem);
				}
			} else {
				pullThread(currentItem);
			}
		});
	}
	
	function pullThread(currentItem){
		var appId = currentItem.attr('data-application-id');
		var discId = currentItem.attr('data-discussion-id');
		let requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/${appId}/discussions/${discId}?page_size=0&`;
		if(!xhr){
			apiRequestQueue(requestURI,currentItem,applyThreadFlare);
			return;
		}
		var itemKey = `${appId}_${discId}`;
		CORSrequest(requestURI,applyThreadFlare,itemKey,currentItem);
	}
	
	function applyThreadFlare(threadInfo,currentItem){
		var appId = currentItem.attr('data-application-id');
		var discId = currentItem.attr('data-discussion-id');
		threadInfo = JSON.parse(threadInfo);
		var pinned = threadInfo.pinned;
		var commentsEnabled = threadInfo.commentCreationEnabled;
		if(!commentsEnabled && currentItem.find('.voting:not(:has(.pin))').length === 0){
			currentItem.find('.voting').html('<div class=\'locked\'></div>');
		}
		if(pinned !== 'undefined'){
			if(!currentItem.hasClass('has-rioter-comments')){
				if(['iGy1uadH','PlNcL9TL','tn3qAbc8','A7LBtoKc'].indexOf(appId) > -1){
					currentItem.find('.riot-commented').append(`<a href=\'/f/${appId}/d/${discId}?comment=${pinned}\' class=\'dtb-fist opaque\'>&nbsp;</a>`);
				}
			}
		}
		//currentItem.css('backgroundColor','red');
	}
	
	function applyRioterProfile(title,currentItem){
		console.log(title);
		if (title !== 'undefined'){
			currentItem.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after(`<span class='tags crioter'>${title}</span>`);
		}
	}
	
	function pullRioterProfiles(currentItem){
		var apolloID = currentItem.attr('data-apollo-pvpnet-id');
		var userRegion = currentItem.attr('data-apollo-pvpnet-realm');
		let requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/users/${userRegion}/${apolloID}`;
		if(!xhr){
			apiRequestQueue(requestURI,currentItem,applyRioterProfile);
			return;
		}
		CORSrequest(requestURI,applyRioterProfile,apolloID,currentItem);
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
		if (callback.name === 'applyUserGroups'){
			APIresponse = JSON.parse(APIresponse).application.metadata;
			delete APIresponse.c_bgi;
			delete APIresponse.c_si;
			delete APIresponse.c_sil;
			delete APIresponse.c_hi;
			delete APIresponse.c_hil;
			delete APIresponse.ff;
			APIresponse = JSON.stringify(APIresponse);
		} else if(callback.name === 'applyRioterProfile'){
			APIresponse = JSON.parse(APIresponse).user.profile.data.title;
		} else if(callback.name === 'applyThreadFlare'){
			APIresponse = JSON.parse(APIresponse);
			var pinned = APIresponse.discussion.content.pinned;
			var commentEnabled = APIresponse.discussion.commentCreationEnabled;
			APIresponse = `{"pinned": "${pinned}", "commentCreationEnabled": ${commentEnabled}}`;
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
					boardIndexFlares();
				}
				if(isChronoView){
					commentParent();
				}
				if(xhr){
					processApiRequestQueue();
				}
				//console.log(globals.GLOB.queueStack);
				//cycle();
			}
		});
	});
	observer.observe(body,{childList:true});
	
	// Fallback for errors
	$(document).on('click',cycle());
	function cycle(){
		var intervalID = setInterval(function() {
			if(globals.GLOB.groupData){
				applyUserGroups(globals.GLOB.groupData);
			}
			if(isBoardIndex){
				IndexVoting();
			}
			if(isChronoView){
				commentParent();
				boardIndexFlares();
			}
			if(xhr){
				processApiRequestQueue();
			}
		}, 750);
		setTimeout(function() {
			clearInterval(intervalID);
		}, 10000);
	}
	
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
		$('#discussion-list').find('tr.discussion-list-item:not(.cv)').each(function(){
			this.className += ' cv';
			$this = $(this).find('.voting');
			var vote = $this.find('div').attr('data-apollo-user-vote');
			var upVotes = $this.find('div').attr('data-apollo-up-votes');
			var downVotes = $this.find('div').attr('data-apollo-down-votes');
			var totalVotes = upVotes-downVotes;
			if(vote === 'up'){
				$this.css('border-left','2px solid #009700');
			} else if(vote === 'down'){
				$this.css('border-left','2px solid #e23636');
			} else if(vote == undefined){
				$this.html('<div class=\'voting-locked\'></div>');
			}
			if(vote !== undefined){
				var suffix;
				var color;
				if(totalVotes === 1){
					color = '#13bbc1';
					suffix = 'vote';
				} else {
					suffix = 'votes';
					if(totalVotes === 0){
						color = '#13bbc1';
					} else if(totalVotes > 5){
						color = '#22b722';
					} else if([2,3].indexOf(totalVotes) > -1){
						color = '#9fca68';
					} else if([-1,-2].indexOf(totalVotes) > -1){
						color = '#ffda4e';
					} else if([-3,-4].indexOf(totalVotes) > -1){
						color = '#ffa51b';
					} else if(totalVotes < -4){
						color = '#fd3b3b';
					} else if([4,5].indexOf(totalVotes) > -1){
						color = '#86bf00';
					}
				}
				$this.html(`<div class=\'riot-apollo voting\'><ul class=\'riot-voting\'><li></li><li class=\'total-votes\' style=\'color:${color}\'>${totalVotes}</li><li></li><li>${suffix}</li></ul></div>`);
			}
			
		});
	}

	function commentParent(){
		//https://apollo.na.leagueoflegends.com/apollo/applications/A7LBtoKc/discussions/na3Ko02t/comment/001c0000
		//apollo request format
		var thread = $('#discussion').find('li.view-in-mod-tool a').attr('href').split('/');
		var appId = thread[4];
		var discId = thread[6];
		$('.nested-comment:not(.isChild):not(.isDeleted)').each(function(){
			this.className += ' isChild';
			$this = $(this);
			var commentId = $this.attr('id');
			if(undefined !== commentId && commentId.length){
				if(commentId.length > 12){
					var l = commentId.slice(8,-4);
					var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/{$appId}/discussions/${discId}/comment/${l}`;
					
					```var apolloID = currentItem.attr('data-apollo-pvpnet-id');
					var userRegion = currentItem.attr('data-apollo-pvpnet-realm');
					let requestURI = https://apollo.${region}.leagueoflegends.com/apollo/users/${userRegion}/${apolloID};
					if(!xhr){
						apiRequestQueue(requestURI,currentItem,applyRioterProfile);
						return;
					}
					CORSrequest(requestURI,applyRioterProfile,apolloID,currentItem);```
				}
			}
		});
		
		
		/*
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
		});*/
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