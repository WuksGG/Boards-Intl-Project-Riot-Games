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
	
	
	if(document.getElementsByClassName('new-discussion-box')[0].getElementsByTagName('a')[0]){
		var createLink = document.getElementsByClassName('new-discussion-box')[0].getElementsByTagName('a')[0].getAttribute('href');
	} else {
		document.getElementsByClassName('new-discussion-box')[0].remove();
	}
	
	// LOCALIZATION
	var commentDisable_1;
	var commentDisable_2;
	var goToComment;
	if(lang === 'en'){
		commentDisable_1 = "This thread has been archived."; 
		commentDisable_2 = "Create a new thread instead?";
		goToComment = "GO TO COMMENT";
	} else if(lang === 'pl'){
		commentDisable_1 = "Ten wątek został zamknięty.";
		commentDisable_2 = "Aby kontynuować dyskusję, stwórz nowy wątek.";
		goToComment = "PRZEJDŹ DO KOMENTARZA";
	} else if(lang === 'es'){
		commentDisable_1 = "Esta discusión ha sido archivada."
		commentDisable_2 = "¿Crear una nueva discusión en su lugar?";
		goToComment = "IR A COMENTARIO";
	} else if(lang === 'hu'){
		commentDisable_1 = "A téma archiválva lett.";
		commentDisable_2 = "Létrehozol inkább egy új témát?";
		goToComment = "VISSZA A TÉMÁHOZ";
	} else if(lang === 'ro'){
		commentDisable_1 = "Această postare a fost arhivată.";
		commentDisable_2 = "Creezi o nouă postare?";
		goToComment = "MERGI LA COMENTARIU";
	} else if(lang === 'pt'){
		commentDisable_1 = "Esta discussão foi arquivada.";
		commentDisable_2 = "Criar uma nova discussão em vez disso?";
		goToComment = "IR PARA COMENTÁRIO";
	} else if(lang === 'fr'){
		commentDisable_1 = "Cette discussion a été archivée.";
		commentDisable_2 = "Voulez vous créer un nouveau sujet ?";
		goToComment = "SE RENDRE AU COMMENTAIRE";
	} else if(lang === 'it'){
		commentDisable_1 = "Questa discussione è stata archiviata.";
		commentDisable_2 = "Vuoi creare una nuova discussione?";
		goToComment = "VAI AL COMMENTO";
	} else if(lang === 'de'){
		commentDisable_1 = "Diese Diskussion wurde archiviert.";
		commentDisable_2 = "Soll eine neue Diskussion erstellt werden?";
		goToComment = "ZUM KOMMENTAR";
	} else if(lang === 'el'){
		commentDisable_1 = "Αυτή η συζήτηση έχει μπει στο αρχείο.";
		commentDisable_2 = "Θέλεις να δημιουργήσεις μια νέα συζήτηση";
		goToComment = "Πηγαίντε στο σχόλιο";
	} else if(lang === 'cs'){
		commentDisable_1 = "Tato diskuze byla archivována.";
		commentDisable_2 = "Chceš vytvořit novou diskuzi?";
		goToComment = "PŘEJÍT NA KOMENTÁŘ";
	}
	
	function archivedThread(){
		if(!isBoardIndex && document.getElementsByClassName('cant-comment-warning')[1] && createLink){
			document.getElementsByClassName('cant-comment-warning')[1].innerHTML = `<span class=\'icon-lock-brown\'></span>${commentDisable_1} <a href=\'${createLink}\'>${commentDisable_2}</a>`;
		}
	}
	
	
	if(document.getElementsByClassName('discussion-list-item').length > 0){
		isBoardIndex = true;
	} else {
		isBoardIndex = false;
		if (document.getElementById('comments').getElementsByClassName('muted').length !== 0){
			isChronoView = true;
		} else { isChronoView = false; }
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
			} else if(callback.name === 'renderComment'){
				var URIparts = requestURI.split('/');
				var appId = URIparts[5];
				var discId = URIparts[7];
				var commentId = URIparts[9];
				var itemKey = `${appId}_${discId}_${commentId}`;
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
		var test = currentItem.find('.voting:not(:has(.pin))').length;
		if(!commentsEnabled && currentItem.find('.voting:has(.pin)').length === 0){
			currentItem.find('.voting').html('<div class=\'locked\'></div>');
		}
		if(pinned !== 'undefined'){
			if(!currentItem.hasClass('has-rioter-comments')){
				// 6heBIhQc = Discuss the Boards (NA)
				// ElA0rvVL = Help & Support (OCE)
				// tn3qAbc8 = Testing Area (NA)
				// PlNcL9TL = Sub-Testing Board (OCE)
				// iGy1uadH = Testing Board (OCE)
				if(['iGy1uadH','PlNcL9TL','tn3qAbc8','A7LBtoKc'].indexOf(appId) > -1){
					currentItem.find('.riot-commented').append(`<a href=\'/f/${appId}/d/${discId}?comment=${pinned}\' class=\'dtb-fist opaque\'>&nbsp;</a>`);
				}
			}
		}
	}
	
	function applyRioterProfile(title,currentItem){
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
			APIresponse = JSON.parse(APIresponse).user;
			if(APIresponse.profile){
				APIresponse = APIresponse.profile.data.title;
			} else {
				APIresponse = undefined;
			}
		} else if(callback.name === 'applyThreadFlare'){
			APIresponse = JSON.parse(APIresponse);
			var pinned = APIresponse.discussion.content.pinned;
			var commentEnabled = APIresponse.discussion.commentCreationEnabled;
			APIresponse = `{"pinned": "${pinned}", "commentCreationEnabled": ${commentEnabled}}`;
		} else if(callback.name === 'renderComment'){
			APIresponse = JSON.parse(APIresponse);
			var message = JSON.stringify(APIresponse.message);
			var deleted = APIresponse.deleted;
			var userName = APIresponse.user.name;
			var userRealm = APIresponse.user.realm;
			var id = APIresponse.id;
			APIresponse = `{"message": ${message}, "userName": "${userName}", "userRealm": "${userRealm}", "deleted": ${deleted}, "id": "${id}"}`;
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
	
	$(function(){
		archivedThread();
	});
	
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
				cycle();
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
		}, 5000);
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
		var thread = $('#discussion').find('li.view-in-mod-tool a').attr('href').split('/');
		var appId = thread[4];
		var discId = thread[6];
		$('.nested-comment:not(.isChild):not(.isDeleted)').each(function(){
			this.className += ' isChild';
			currentItem = $(this);
			var commentId = currentItem.attr('id');
			if(undefined !== commentId && commentId.length){
				if(commentId.length > 12){
					var l = commentId.slice(8,-4);
					var requestURI = `https://apollo.${region}.leagueoflegends.com/apollo/applications/${appId}/discussions/${discId}/comment/${l}`;
					if (storageAvailable('sessionStorage')){
						if (!sessionStorage.getItem(`${region}${lang}_${appId}_${discId}_${l}`)){
							pullCommentData(requestURI,currentItem);
						} else {
							var commentData = sessionStorage.getItem(`${region}${lang}_${appId}_${discId}_${l}`);
							renderComment(commentData,currentItem);
						}
					} else {
						pullCommentData(requestURI,currentItem);
					}
				}
			}
		});
	}
	
	function renderComment(commentData,currentItem){
		console.log(commentData);
		commentData = JSON.parse(commentData);
		var message = commentData.message;
		var commentId = commentData.id;
		var userRealm = commentData.userRealm;
		var userName = commentData.userName;
		if(commentData.deleted){
			message = `<span style="color:#fff;background-color:#9e2020;padding:3px 10px;border-radius:5px;display:inline-flex">Sorry! The comment you have requested is no longer available.</span>`
		}
		currentItem
			.find('.body')
				.prepend(`<div class=\'op-ref\' style=\'display:none\'><p>${message}</p><a class=\'footer\' href=\'?show=flat&comment=${commentId}\'>${goToComment}</a></div>`)
			.end()
			.find('.header.byline.clearfix')
				.append(`<span class=\'op-ref-bar\'>Response To: <a href=\'https://boards.${region}.leagueoflegends.com/${lang}/player/${userRealm}/${userName}\'>${userName}</a> (${userRealm})
				(<a class=\'toggle-op noshow\' href=\'javascript:;\' 
				onclick=\"$(this).hasClass(\'noshow\') ? ($(this).parent().parent().parent().find(\'.op-ref\').attr(\'style\',\'display:block\'),
				$(this).attr(\'class\',\'toggle-op yesshow\'), 
				$(this).text(\'hide\')) : ($(this).parent().parent().parent().find(\'.op-ref\').attr(\'style\',\'display:none\'), $(this).attr(\'class\',\'toggle-op noshow\'), $(this).text(\'show\'));\">show</a>)</span>`);
	}
	
	function pullCommentData(requestURI,currentItem){
		var URIparts = requestURI.split('/');
		var appId = URIparts[5];
		var discId = URIparts[7];
		var commentId = URIparts[9];
		if(!xhr){
			apiRequestQueue(requestURI,currentItem,renderComment);
			return;
		}
		var itemKey = `${appId}_${discId}_${commentId}`;
		CORSrequest(requestURI,renderComment,itemKey,currentItem);
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