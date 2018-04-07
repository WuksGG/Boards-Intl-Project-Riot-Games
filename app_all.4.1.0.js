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
(function($,globals,localStorage){
	// Define globally scoped object
	globals.GLOB = {};
	var currentTime = (new Date).getTime();
	var expireTime = currentTime + (1000 * 60 * 60);
	
	// Initialize & set variables
	var isBoardIndex;
	var isChronoView;
	var isLoggedIn;
	var groupData;
	var APIresponse;
	var region = window.location.href.split('.')[1];
	var lang = window.location.href.split('/')[3];
	
	var garbageCollection = currentTime + (1000 * 60 * 60 * 24);
	if (storageAvailable('localStorage')) {
		if (!localStorage.getItem(`${region}${lang}_persist`)) {
			localStorage.setItem(`${region}${lang}_persist`,garbageCollection);
		} else {
			var persistTime = localStorage.getItem(`${region}${lang}_persist`);
			if(currentTime > persistTime){ // expire all data
				localStorage.clear();
				localStorage.setItem(`${region}${lang}_persist`,garbageCollection);
			}
		}
	}
	
	if(document.getElementsByClassName('new-discussion-box')[0].getElementsByTagName('a')[0]){
		var createLink = document.getElementsByClassName('new-discussion-box')[0].getElementsByTagName('a')[0].getAttribute('href');
	} else {
		document.getElementsByClassName('new-discussion-box')[0].remove();
	}
	
	// LOCALIZATION
	var commentDisable_1;
	var commentDisable_2;
	var commentDeleted = 'Sorry! The comment you have requested is no longer available.';
	var goToComment;
	var show = 'Show';
	var hide = 'Hide';
	var responseTo = 'Response To';
	if(lang === 'en'){
		commentDisable_1 = "This thread has been archived."; 
		commentDisable_2 = "Create a new thread instead?";
		goToComment = "GO TO COMMENT";
		commentDeleted = "Sorry! The comment you have requested is no longer available.";
		show = "Show";
		hide = "Hide";
		responseTo = 'Response To';
	} else if(lang === 'pl'){
		commentDisable_1 = "Ten wątek został zamknięty.";
		commentDisable_2 = "Aby kontynuować dyskusję, stwórz nowy wątek.";
		goToComment = "PRZEJDŹ DO KOMENTARZA";
		commentDeleted = "Przepraszamy! Komentarz do którego chcesz uzyskać dostęp jest aktualnie niedostępny.";
		show = "Pokaż";
		hide = "Ukryj";
		responseTo = responseTo;
	} else if(lang === 'es'){
		commentDisable_1 = "Esta discusión ha sido archivada."
		commentDisable_2 = "¿Crear una nueva discusión en su lugar?";
		goToComment = "IR A COMENTARIO";
		commentDeleted = "¡Lo sentimos! El comentario que intentas ver ya no esta disponible.";
		show = "Mostrar";
		hide = "Esconder";
		responseTo = responseTo;
	} else if(lang === 'hu'){
		commentDisable_1 = "A téma archiválva lett.";
		commentDisable_2 = "Létrehozol inkább egy új témát?";
		goToComment = "VISSZA A TÉMÁHOZ";
		commentDeleted = "A hozzászólás, amelyet meg szeretnél tekinteni, már nem elérhető. Sajnáljuk!";
		show = "Mutat";
		hide = "Elrejt";
		responseTo = responseTo;
	} else if(lang === 'ro'){ // Localization Confirmed
		commentDisable_1 = "Această postare a fost arhivată.";
		commentDisable_2 = "Creezi o nouă postare?";
		goToComment = "MERGI LA COMENTARIU";
		commentDeleted = "Ne pare rău! Comentariul pe care îl cauți nu mai este disponibil.";
		show = "Arată";
		hide = "Ascunde";
		responseTo = "Răspunde-i lui";
	} else if(lang === 'pt'){
		commentDisable_1 = "Esta discussão foi arquivada.";
		commentDisable_2 = "Criar uma nova discussão em vez disso?";
		goToComment = "IR PARA COMENTÁRIO";
		commentDeleted = commentDeleted;
		show = show;
		hide = hide;
		responseTo = responseTo;
	} else if(lang === 'fr'){
		commentDisable_1 = "Cette discussion a été archivée.";
		commentDisable_2 = "Voulez vous créer un nouveau sujet ?";
		goToComment = "SE RENDRE AU COMMENTAIRE";
		commentDeleted = commentDeleted;
		show = show;
		hide = hide;
		responseTo = responseTo;
	} else if(lang === 'it'){
		commentDisable_1 = "Questa discussione è stata archiviata.";
		commentDisable_2 = "Vuoi creare una nuova discussione?";
		goToComment = "VAI AL COMMENTO";
		commentDeleted = "Spiacenti! Il commento che vorresti visualizzare non è più disponibile.";
		show = "Mostra";
		hide = "Nascondi";
		responseTo = responseTo;
	} else if(lang === 'de'){
		commentDisable_1 = "Diese Diskussion wurde archiviert.";
		commentDisable_2 = "Soll eine neue Diskussion erstellt werden?";
		goToComment = "ZUM KOMMENTAR";
		show = show;
		hide = hide;
		responseTo = responseTo;
	} else if(lang === 'el'){
		commentDisable_1 = "Αυτή η συζήτηση έχει μπει στο αρχείο.";
		commentDisable_2 = "Θέλεις να δημιουργήσεις μια νέα συζήτηση";
		goToComment = "Πηγαίντε στο σχόλιο";
		show = show;
		hide = hide;
		responseTo = responseTo;
	} else if(lang === 'cs'){ // Localization Confirmed
		commentDisable_1 = "Tato diskuze byla archivována.";
		commentDisable_2 = "Chceš vytvořit novou diskuzi?";
		goToComment = "PŘEJÍT NA KOMENTÁŘ";
		commentDeleted = "Omlouváme se, ale požadovaný komentář již není k dispozici.";
		show = "Zobrazit";
		hide = "Skrýt";
		responseTo = "Reakce na";
	}
	
	function archivedThread(){
		if(!isBoardIndex && document.getElementsByClassName('cant-comment-warning')[1] && createLink){
			document.getElementsByClassName('cant-comment-warning')[1].innerHTML = `<span class=\'icon-lock-brown\'></span>${commentDisable_1} <a class=\'requires-auth\' href=\'${createLink}\'>${commentDisable_2}</a>`;
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
			if (storageAvailable('localStorage')){
				if (!localStorage.getItem(`${region}${lang}_${appId}_${discId}`)){
					pullThread(currentItem);
				} else {
					var threadInfo = localStorage.getItem(`${region}${lang}_${appId}_${discId}`);
					var itemExpire = JSON.parse(threadInfo).expire;
					if(currentTime > itemExpire){
						pullThread(currentItem);
					} else {
						applyThreadFlare(threadInfo,currentItem);
					}
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
			currentItem.find('.voting').html('<div class=\'locked\' title=\'Commenting is disabled\'></div>');
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
	
	function applyUserGroups(groupData){
		groupData = JSON.parse(groupData).application.metadata;
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
				if (storageAvailable('localStorage')){ // localStorage compatible
					if (!localStorage.getItem(`${region}${lang}_${apolloID}`)){ // and is not defined
						pullRioterProfiles($current);
					} else { // is defined
						var rioterProfile = localStorage.getItem(`${region}${lang}_${apolloID}`); // Pull from localStorage
						var itemExpire = JSON.parse(rioterProfile).expire;
						if(currentTime > itemExpire){
							pullRioterProfiles($current);
						} else {
							applyRioterProfile(rioterProfile,$current);
						}
					}
				} else { // not localStorage compatible
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
	
	function cacheResponse(APIresponse,callback,itemKey,currentItem){
		if (callback.name === 'applyUserGroups'){
			/*APIresponse = JSON.parse(APIresponse).application.metadata;
			groups = JSON.stringify(APIresponse.groups);
			groupsUser = JSON.stringify(APIresponse.groupsUser);
			APIresponse = `{"groups": ${groups}, "groupsUser": ${groupsUser}}`;*/
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
		if (storageAvailable('localStorage')) {
			APIresponse = JSON.parse(APIresponse);
			APIresponse['expire'] = expireTime;
			APIresponse = JSON.stringify(APIresponse);
			localStorage.setItem(`${region}${lang}_${itemKey}`,APIresponse);
			/*if (!localStorage.getItem(`${region}${lang}_${itemKey}`)) {
				localStorage.setItem(`${region}${lang}_${itemKey}`,APIresponse);
			} else if({
				localStorage.setItem(`${region}${lang}_${itemKey}`,APIresponse);
			}*/
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
	if (storageAvailable('localStorage')){ // localStorage compatible
		if (!localStorage.getItem(`${region}${lang}_groupData`)){ // and is not defined
			pullUserGroups();
		} else { // is defined
			groupData = localStorage.getItem(`${region}${lang}_groupData`); // Pull from localStorage
			var itemExpire = JSON.parse(groupData).expire;
			if(currentTime > itemExpire){
				pullUserGroups();
			} else {
				globals.GLOB.groupData = groupData;
				applyUserGroups(groupData);
			}
		}
	} else { // not localStorage compatible
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
				$this.html('<div class=\'voting-locked\' title=\'Voting is disabled\'></div>');
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
					if (storageAvailable('localStorage')){
						if (!localStorage.getItem(`${region}${lang}_${appId}_${discId}_${l}`)){
							pullCommentData(requestURI,currentItem);
						} else {
							var commentData = localStorage.getItem(`${region}${lang}_${appId}_${discId}_${l}`);
							var itemExpire = JSON.parse(commentData).expire;
							if(currentTime > itemExpire){
								pullCommentData(requestURI,currentItem);
							} else {
								renderComment(commentData,currentItem);
							}
						}
					} else {
						pullCommentData(requestURI,currentItem);
					}
				}
			}
		});
	}
	
	function renderComment(commentData,currentItem){
		commentData = JSON.parse(commentData);
		var message = commentData.message;
		var commentId = commentData.id;
		var userRealm = commentData.userRealm;
		var userName = commentData.userName;
		if(commentData.deleted){
			message = `<span style="color:#fff;background-color:#9e2020;padding:3px 10px;border-radius:5px;display:inline-flex">${commentDeleted}</span>`
		}
		currentItem
			.find('.body')
				.prepend(`<div class=\'op-ref\' style=\'display:none\'><p>${message}</p><a class=\'footer\' href=\'?show=flat&comment=${commentId}\'>${goToComment}</a></div>`)
			.end()
			.find('.header.byline.clearfix')
				.append(`<span class=\'op-ref-bar\'>${responseTo}: <a href=\'https://boards.${region}.leagueoflegends.com/${lang}/player/${userRealm}/${userName}\'>${userName}</a> (${userRealm})
				(<a class=\'toggle-op noshow\' href=\'javascript:;\' 
				onclick=\"$(this).hasClass(\'noshow\') ? ($(this).parent().parent().parent().find(\'.op-ref\').attr(\'style\',\'display:block\'),
				$(this).attr(\'class\',\'toggle-op yesshow\'), 
				$(this).text(\'${hide}\')) : ($(this).parent().parent().parent().find(\'.op-ref\').attr(\'style\',\'display:none\'), $(this).attr(\'class\',\'toggle-op noshow\'), $(this).text(\'${show}\'));\">${show}</a>)</span>`);
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
	
}(jQuery,this,this.localStorage));