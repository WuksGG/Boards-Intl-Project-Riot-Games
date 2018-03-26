(function($,globals,localStorage){
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
		if (document.getElementById('comments').getElementsByClassName('show-more').length > 0){
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
		// Filter down languages
		if (lang === 'pl') {
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
	
	
	// Cache Check!
	// Initialize Group Info Pulling
	if (storageAvailable('localStorage')){ // localStorage compatible
		if (!localStorage.getItem('groupData')){ // and is not defined
			pullUserGroups();
		} else { // is defined
			groupData = localStorage.getItem('groupData'); // Pull from localStorage
			globals.GLOB.groupData = groupData;
			applyUserGroups(groupData);
		}
	} else { // not localStorage compatible
		pullUserGroups(); // We'll need to utilize API call and not use API response caching.
	}
	
	// Also, note to self, that we'll need different localStorages based on Board,
	// since we'll see collisions, primarily among the European Boards.
	
	// Mutation Observer as page loads
	var body = document.getElementsByTagName('body')[0];
	var observer = new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			for(var i=0; i<mutation.addedNodes.length;i++){
				if(globals.GLOB.groupData){
					applyUserGroups(globals.GLOB.groupData);
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
		if (storageAvailable('localStorage')) {
			if (!localStorage.getItem('groupData')) {
				localStorage.setItem('groupData',groupData);
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
		groupMemberList = Object.keys(groupData.application.metadata.groupsUser);
		groupMemberData = groupData.application.metadata.groupsUser;
		$('a.profile-hover:not(.cka)').each(function(){
			var $current = $(this);
			this.className += ' cka';
			if($current.parent().hasClass('isRioter') === false){ // Sets Non-Rioter Flares
				var i;
				var apolloID = $current.attr('data-apollo-pvpnet-id');
				for(i=groupMemberList.length-1;i>-1;i-=1){
					if(apolloID === groupMemberList[i].split(':')[1]){
						if(region === "na"){
							if(groupMemberData[groupMemberList[i]] === "7"){ // herald
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cherald'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Herald</a></span>").end().end()
										.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle therald'></span>").end().end()
										.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9c4ad9").end()
										.attr("id","herald");
							} else if(groupMemberData[groupMemberList[i]] === "3"){ //advisor
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cadvisor'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Advisor</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tadvisor'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #87CEEB").end()
									.attr("id","advisor");
							} else if(groupMemberData[groupMemberList[i]] === "1"){ // moderator
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cmoderator'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Moderator</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tmoderator'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #7fe4af").end()
									.attr("id","moderator");
							} else if(groupMemberData[groupMemberList[i]] === "6"){ // NA Player Support
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cnaps'>NA Player Support</span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tnaps'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #cc6600").end()
									.attr("id","naps");
							} else if(groupMemberData[groupMemberList[i]] === "5"){ // archivist
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags carchivist'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Archivist</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tarchivist'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9ca200").end()
									.attr("id","archivist");
							}
						} else if(region === "oce"){
							if(groupMemberData[groupMemberList[i]] === "2"){ // emissary
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cemissary'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/player-behaviour/Edu7E6Bp'>Emissary</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #458b00").end()
									.attr("id","emissary");
							} else if(groupMemberData[groupMemberList[i]] === "3"){ //wrenchmanoce
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cwrenchmanoce'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/help-support-oce/nE4lj5EB'>Wrenchman</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchmanoce'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #c98f1a").end()
									.attr("id","wrenchmanoce");
							} else if(groupMemberData[groupMemberList[i]] === "4"){ // instructor
								$current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cinstructor'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/announcements-en/91vEPc8g'>Instructor</a></span>").end().end()
									.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tinstructor'></span>").end().end()
									.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #5079c4").end()
									.attr("id","instructor");
							}
						}
					}
				}
			} else { // Sets Rioter Titles
				var tArray = $current.attr("href").split('/');
				let z = `https://boards.${region}.leagueoflegends.com/api/users/${tArray[3]}/${tArray[4]}`;
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status === 200) {
						var myObj = JSON.parse(this.responseText);
						if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title') === true){
							var title = myObj.profile.data.title;
							current.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after(`<span class='tags crioter'>${title}</span>`);
						}
					}
				};
				xmlhttp.open("GET", z, true);
				xmlhttp.send();
			}
		});
		var hoverTitle = $('.information-container .title').text();
		if(hoverTitle.indexOf('Herald') > -1){
			$('.information-container .summoner-name').css('color','#9c4ad9');
			$('.information-container .title').css('color','#6dc0cd');
		} else if(hoverTitle.indexOf('Advisor') > -1){
			$('.information-container .summoner-name').css('color','#87CEEB');
			$('.information-container .title').css('color','#6dc0cd');
		} else if(hoverTitle.indexOf('Moderator') > -1){
			$('.information-container .summoner-name').css('color','#7fe4af');
			$('.information-container .title').css('color','#6dc0cd');
		}
	}
		
	
	/*
	function IndexVoting(){
			$("#discussion-list")
				.find("td.voting:not(#cv):not(:has(.pin)):contains('                ')")
					.attr("id","cv")
					.html("<div class='locked'></div>")
				.end()
				.find("ul.upVoted:not(#cv)")
					.attr("id","cv")
					.parent()
						.parent()
							.css("border-left","2px solid #009700")
						.end()
					.end()
				.end()
				.find("ul.downVoted:not(#cv)")
					.attr("id","cv")
					.parent()
						.parent()
							.css("border-left","2px solid #e23636")
						.end()
					.end()
				.end()
				.find("button.up-vote")
					.remove()
				.end()
				.find("button.down-vote")
					.remove()
				.end();
		var vList = $("#discussion-list").find(".riot-apollo.voting:not(.wx)");
		for(var i=0;i<vList.length;++i){
			var v = vList[i];
			v.className += " wx";
			$v = $(v);
			var up = $v.attr("data-apollo-up-votes");
			var down = $v.attr("data-apollo-down-votes");
			var total = up - down;
			if(total === 1){
				$v.find(".total-votes").attr('style','color:#13bbc1').end()
					.find("ul.riot-voting").append("<li>vote</li>");
			} else if(total === 0){
				$v.find(".total-votes").attr('style','color:#13bbc1').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if(total > 5){
				$v.find(".total-votes").attr('style','color:#22b722').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if([2,3].indexOf(total) > -1){
				$v.find(".total-votes").attr('style','color:#9fca68').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if([-1,-2].indexOf(total) > -1){
				$v.find(".total-votes").attr('style','color:#ffda4e').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if([-3,-4].indexOf(total) > -1){
				$v.find(".total-votes").attr('style','color:#ffa51b').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if(total < -4){
				$v.find(".total-votes").attr('style','color:#fd3b3b').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			} else if([4,5].indexOf(total) > -1){
				$v.find(".total-votes").attr('style','color:#86bf00').end()
					.find("ul.riot-voting").append("<li>votes</li>");
			}
		}
	}
	*/

	

	

	
	// Mozilla's Feature-detecting localStorage function
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

