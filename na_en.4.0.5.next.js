/** 
TO DO: 
1. Mutation Tracker, rather than on-click
> https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
2. Utilize the CORS Cross Origin Request Sharing to make API calls to apollo.na instead of boards/api
> https://boards.na.leagueoflegends.com/api/yrc23zHg/discussions/FLWYE3Gf.json?page_size=0
> https://apollo.na.leagueoflegends.com/apollo/applications/yrc23zHg/discussions/FLWYE3Gf.json?page_size=0
3. Port to cross regions - EUW/EUNE languages
4. [DONE] Clean up global variables
> https://stackoverflow.com/questions/9397778/how-to-declare-global-variables-when-using-the-strict-mode-pragma
> https://developer.mozilla.org/en-US/docs/Glossary/IIFE
5. Setup a callback for the volunteer tags function once mutation tracker in play
6. Localization of last function for creating new threads; need to localize things like "GO TO COMMENT"
7. Check for thread duplicates :)
**/
(function($,globals){
	/* [START] Let's declare some variables */
	globals.GLOB = {};
	var $boardIndex = $(".discussion-list-item").length;
	var $subBoard = $("#breadcrumbs h2").text();
	console.log($("#comments").find(".flat-comments").length);
	$(function(){ // Do we want to change this to ensure flow?
		globals.GLOB.chronoView = $("#comments").find(".flat-comments").length;
		console.log(globals.GLOB.chronoView);
	});
	var region = window.location.href.split('.')[1];
	var lang = window.location.href.split('/')[3];
	if($(".riotbar-anonymous-link").length < 2){
		var authenticated = true;
		userParse();
	} else {
		var authenticated = false;
	}
	function userParse(){
		var userInfo = $("#riotbar-account-dropdown-links").find(".riotbar-account-link")[2];
		var userParseHandle;
		clearTimeout(userParseHandle);
		if(!userInfo){
			userParseHandle = setTimeout(userParse,0);
			return;
		}
		var userInfoSplit = $("#riotbar-account-dropdown-links").find(".riotbar-account-link")[2].href.split("/");
		globals.GLOB.userRegion = userInfoSplit[5].toUpperCase();
		globals.GLOB.userName = userInfoSplit[6];
		console.log(globals.GLOB.userName);
	}
	/* [END] Let's declare some variables */

	
	/* [BEGIN] This is the Apollo Cross-Domain API Bridge */
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
	/* [END] This is the Apollo Cross-Domain API Bridge */
	
	
	/* [START] Initialize one-time run functions */
	if($("#breadcrumbs h2").text().indexOf(`Recruitment`) === 0){
		recruitment();
	}
	pullVolunteers();
	Cycle();
	flatScroll();
	archivedThread();
	/* [END] Initializing one-time run functions */
	
	
	/* [START] We'll use onclick instead of mutation tracking for a while */
	$(document).click(Cycle);
	/* [END] When are we going to figure out efficient mutation tracking? */ 
	
	/* [START] Defining the cycled functions */
	function Cycle() {
		var intervalID = setInterval(function() {
			if($boardIndex > 0){
				IndexVoting();
				boardIndexFlares();
			}
			newTags();
			if(globals.GLOB.chronoView !== "undefined"){
				commentParent();
			}
		}, 750);
		setTimeout(function() {
			clearInterval(intervalID);
		}, 10000);
	}
	/* [END] Defining the cycled functions */ 
	
	//********************************************//
	//********************************************//
	//****** That concludes housekeeping :) ******//
	//********************************************//
	//********************************************//
	

	
	/** ~~ BEGIN The following function removes voting from the board index and adds voting markers ~~ **/
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
	/** ~~ END The following function removes voting from the board index and adds voting markers ~~ **/

	/** ~~ BEGIN This is a one-time API call that pulls user IDs **/
	function pullVolunteers(){
		var apiBridgeHandle;
		clearTimeout(apiBridgeHandle);
		if (!xhr) {
			apiBridgeHandle = setTimeout(pullVolunteers, 0);
			return;
		}
		//console.log(region);
		if(region === "na"){
			var apiVolunteers = `https://apollo.${region}.leagueoflegends.com/apollo/applications/yrc23zHg`;
		} else if(region === "oce"){
			var apiVolunteers = `https://apollo.${region}.leagueoflegends.com/apollo/applications/Ntey9fRZ`;
		}
		xhr.request({
			url: apiVolunteers,
			method: 'GET',
		}, ({ status, data }) => {
			var myObj = JSON.parse(data);
			globals.GLOB.volunteerList = Object.keys(myObj.application.metadata.groupsUser);
			globals.GLOB.volunteerData = myObj.application.metadata.groupsUser;
		}, ({ status, data }) => {
			// Error callback //
			console.log(status);
			console.log(data);
		});
	}
	/** ~~ END This is a one-time API call that pulls user IDs **/
	
	
	/** ~~ BEGIN The following functions create the flares for volunteers and Rioters ~~ **/
	function newTags(){
		if(globals.GLOB.volunteerList){
			$("a.profile-hover:not(.cka)").each(function(){
				$this = $(this);
				this.className += " cka";
				if($this.parent().hasClass("isRioter") === false){
					newFlares(globals.GLOB.volunteerList,globals.GLOB.volunteerData,$this);
				} else {
					Tags($this);
				}
			});
		}
	}
	function newFlares(volunteerList,volunteerData,$this){
		var i;
		var apolloID = $this.attr('data-apollo-pvpnet-id');
		for(i=volunteerList.length-1;i>-1;i-=1){
			if(apolloID === volunteerList[i].split(':')[1]){
				if(region === "na"){
					if(volunteerData[volunteerList[i]] === "7"){ // herald
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cherald'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Herald</a></span>").end().end()
								.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle therald'></span>").end().end()
								.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9c4ad9").end()
								.attr("id","herald");
					} else if(volunteerData[volunteerList[i]] === "3"){ //advisor
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cadvisor'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Advisor</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tadvisor'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #87CEEB").end()
							.attr("id","advisor");
					} else if(volunteerData[volunteerList[i]] === "1"){ // moderator
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cmoderator'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Moderator</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tmoderator'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #7fe4af").end()
							.attr("id","moderator");
					} else if(volunteerData[volunteerList[i]] === "6"){ // NA Player Support
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cnaps'>NA Player Support</span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tnaps'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #cc6600").end()
							.attr("id","naps");
					} else if(volunteerData[volunteerList[i]] === "5"){ // archivist
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags carchivist'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Archivist</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tarchivist'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9ca200").end()
							.attr("id","archivist");
					}
				} else if(region === "oce"){
					if(volunteerData[volunteerList[i]] === "2"){ // emissary
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cemissary'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/player-behaviour/Edu7E6Bp'>Emissary</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #458b00").end()
							.attr("id","emissary");
					} else if(volunteerData[volunteerList[i]] === "3"){ //wrenchmanoce
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cwrenchmanoce'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/help-support-oce/nE4lj5EB'>Wrenchman</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchmanoce'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #c98f1a").end()
							.attr("id","wrenchmanoce");
					} else if(volunteerData[volunteerList[i]] === "4"){ // instructor
						$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after("<span class='tags cinstructor'><a href='https://boards."+region+".leagueoflegends.com/"+lang+"/c/announcements-en/91vEPc8g'>Instructor</a></span>").end().end()
							.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tinstructor'></span>").end().end()
							.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #5079c4").end()
							.attr("id","instructor");
					}
				}
			}
		}
	}
	function Tags($this) {
		var tArray = $this.attr("href").split('/');
		z = `https://boards.${region}.leagueoflegends.com/api/users/${tArray[3]}/${tArray[4]}`;
		var curr = this;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status === 200) {
				var myObj = JSON.parse(this.responseText);
				if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title') === true){
					var title = myObj.profile.data.title;
					$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").after(`<span class='tags crioter'>${title}</span>`);
				}
			}
		};
		xmlhttp.open("GET", z, true);
		xmlhttp.send();
	}
	/** ~~ END The above functions create the flares for volunteers and Rioters ~~ **/



	/** ~~ BEGIN The following function adds parent comment functionality to Chronological View ~~ **/
	function commentParent(){
		if(globals.GLOB.chronoView === 1 && $boardIndex < 2) {
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
						//$(this).find(".controls").append('<li data-bind="visible"><a class="toggle-reply-form permalink" href="?show=flat&comment='+l+'">Go to Parent</a></li>');
					}
				}
			});
		}
	}
	/** ~~ END The following function adds parent comment functionality to Chronological View ~~ **/


	/** ~~ BEGIN The following function adds 'commented' flares to specific sub-board indexes ~~ **/
	function boardIndexFlares() {
		if($boardIndex > 0 && xhr){
			//console.log(xhr);
			if(["Help & Support","Ask the Community","Discuss the Boards","Help & Support (OCE)","Testing Area"].indexOf($subBoard) > -1){
				$discussionItems = $(".discussion-list-item:not(.wr)");
				for(var i=0;i<$discussionItems.length;i++){
					$current = $($discussionItems[i]);
					$discussionItems[i].className += " wr";
					discID = $current.attr("data-discussion-id");
					appID = $current.attr("data-application-id");
					//var z = `https://boards.${region}.leagueoflegends.com/api/${appID}/discussions/${discID}.json?page_size=0"`;
					let z = `https://apollo.${region}.leagueoflegends.com/apollo/applications/${appID}/discussions/${discID}?page_size=0&`					
					threadFlare($current,i,z);
				}
			}
		}
	}
	function threadFlare($current,i,z){
		xhr.request({
			url: z,
			method: 'GET'
		}, ({ status, data })=> {
			// Success callback //
			var myObj = JSON.parse(data);
			//console.log(status);
			if(myObj.discussion.content.hasOwnProperty('pinned') === true && myObj.discussion.hasRioterComments === false){
					var pin = myObj.discussion.content.pinned;
					var disc = myObj.discussion.id;
					if(appID === "okOuNvuT"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
					}
					else if(appID === "tn3qAbc8"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
					}
					else if (appID === "osqw6G4M"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'poro-fist opaque\'>&nbsp;</a>");
					}
					else if(appID === "6heBIhQc" || appID === "ElA0rvVL"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'dtb-fist opaque\'>&nbsp;</a>");
					}
				}
		}, ({ status, data })=> {
			// Error callback //
			console.log(status)
			console.log(data)
		});
		
		/*
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status === 200) {
				var myObj = JSON.parse(this.responseText);
				if(myObj.discussion.content.hasOwnProperty('pinned') === true && myObj.discussion.hasRioterComments === false){
					var pin = myObj.discussion.content.pinned;
					var disc = myObj.discussion.id;
					if(appID === "okOuNvuT"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
					}
					else if(appID === "tn3qAbc8"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
					}
					else if (appID === "osqw6G4M"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'poro-fist opaque\'>&nbsp;</a>");
					}
					else if(appID === "6heBIhQc"){
						$current.find(".riot-commented").append("<a href=\'/"+lang+"/f/"+appID+"/d/"+disc+"?comment="+pin+"\' class=\'dtb-fist opaque\'>&nbsp;</a>");
					}
				}
			}
		};
		xmlhttp.open("GET", z, true);
		xmlhttp.send();*/
	}
	/*AutoProfileSync();
	function AutoProfileSync(){
		let z = `https://apollo.na.leagueoflegends.com/apollo/applications/tn3qAbc8/discussions/95ngqLwb/comment/0002/vote`;
		xhr.request({
			url: z,
			method: 'PUT',
			data: {
				id: 'userVote',
				content: 'down'
			}
		}, ({ status, data })=> {
			// Success callback //
			console.log(status)
			console.log(data)
		}, ({ status, data })=> {
			// Error callback //
			console.log(status)
			console.log(data)
		});
	}*/
	
	function AskTheCommunity(){
		// We want to do a number of things:
		// 1. We want to check to see if a question mark exists in the question
		// 2. We want to check to see if the appropriate tag is being used
		
		// If the above conditions aren't met, we need to do a number of things:
		// 1. We'll want to have the OP able to see their own post on the Boards Index, but in a highlighted manner, indicating that their post doesn't meet guidelines [UNPUBLISHED, exclamation mark as icon, colored]
		// 2. We'll want to have the appropriate messaging from within the post, indicating that the post does not adhere to the guidelines of the Board
		// So we'll have 2 different aspects within this; the first will be a check to see if it's ask the community; the second check will be whether it's within the index or within a thread. Let's get started.
		
		if(["Ask the Community"].indexOf($subBoard) > -1){ // Check that the active sub-board is Ask the Community
			if($boardIndex < 2) { // You've entered a discussion
				// 1. Title Check -> Tags, Question Mark
				// Error Message Throwing
				// Green bar at the top if best answer has been selected!
			}
			if($boardIndex > 0){ // You've entered the Board Index
				// 1. Title Check -> Tags, Question Mark
				// 2. Conditional Hiding, with emphasis to original posters
				// Icons to denote if something has been answered, if something has been posted incorrectly (all in the index voting area)
			}
		}
	}
	/** ~~ END The following function adds 'commented' flares to specific sub-board indexes ~~ **/


	/** [START] We're going to run level checks **/
	
	/** [END] Level checks **/ 
	

	/** ~~ BEGIN The following functions only run once, on page load ~~ **/
	/** INCOMPLETE/PARTIAL - Scrolls to top of page when new page clicked **/
	function flatScroll() {
		if($("#comments").find(".pager.clearfix").length !== 0) {
			$(".pager").children("a").click(function(){
				$('html,body').animate({
					scrollTop: $(".comments-header-container").offset().top},
						'slow');
			});
		}
	}
	/** This function clarifies the closed thread messaging; encourages players to create new threads if thread is closed **/
	function archivedThread(){
		if($boardIndex === 0 && $(".cant-comment-warning").length === 2 && $("#sidebar").find("div.new-discussion-box.box a").length === 0){
			var s = $("#comments").find("span.cant-comment-warning").text();
			var l = $("#sidebar").find("div.new-discussion-box.box a").attr("href");
			switch(lang){
				case "en":
					if(s.indexOf("Commenting is disabled") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>This thread has been archived. <a href="'+l+'">Create a new thread instead?</a>');
					}
					break;
				case "pl":
					if(s.indexOf("Komentowanie jest wyłączone") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Ten wątek został zamknięty. <a href="'+l+'">Wątek został zamknięty. Aby kontynuować dyskusję, stwórz nowy wątek.</a>');
					}
					break;
				case "es":
					if(s.indexOf("Los comentarios están desactivados") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Esta discusión ha sido archivada. <a href="'+l+'">¿Crear una nueva discusión en su lugar?</a>');
					}
					break;
				case "hu":
					if(s.indexOf("A hozzászólás nem engedélyezett") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>A téma archiválva lett. <a href="'+l+'">Létrehozol inkább egy új témát?</a>');
					}
					break;
				case "ro":
					if(s.indexOf("Comentariile sunt dezactivate") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Această postare a fost arhivată. <a href="'+l+'">Creezi o nouă postare?</a>');
					}
					break;
				case "pt":
					if(s.indexOf("Comentários desativados") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Esta discussão foi arquivada. <a href="'+l+'">Criar uma nova discussão em vez disso?</a>');
					}
					break;
				case "fr":
					if(s.indexOf("Les commentaires sont désactivés") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Cette discussion a été archivée. <a href="'+l+'">Voulez vous créer un nouveau sujet ?</a>');
					}
					break;
				case "it":
					if(s.indexOf("I commenti sono disabilitati") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Questa discussione è stata archiviata. <a href="'+l+'">Vuoi creare una nuova discussione?</a>');
					}
					break;
				case "de":
					if(s.indexOf("Kommentare sind deaktiviert") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Diese Diskussion wurde archiviert. <a href="'+l+'">Soll eine neue Diskussion erstellt werden?</a>');
					}
					break;
				case "el":
					if(s.indexOf("Τα σχόλια έχουν απενεργοποιηθεί") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Αυτή η συζήτηση έχει μπει στο αρχείο. <a href="'+l+'">Θέλεις να δημιουργήσεις μια νέα συζήτηση;</a>');
					}
					break;
				case "cs":
					if(s.indexOf("Komentáře jsou zakázány") > -1){
						$(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Tato diskuze byla archivována. <a href="'+l+'">Chceš vytvořit novou diskuzi?</a>');
					}
					break;
			}
		}
	}
	
	
	
	
	
	
	
	function recruitment(){

		$("#discussion-list").find("tr.discussion-list-item").css("display","none");
		$("#discussions").find(".show-more").css("display","none");
		$("#discussion-list").html(`
		<p style="visibility:hidden;position:absolute">Welcome to the Boards Recap, your one-stop shop for great and notable discussions. We know some of you aren't able to follow the Boards as much as you like to, so we'll work to fill in the gaps in the meantime! Without further ado, here's what you may have missed while you were busy climbing the ranked ladder:</p>

		<script type="text/javascript" src="https://static.boards.lol/wuks/feed/freewall.min.js"></script>
		<link rel="stylesheet" type="text/css" href="https://static.boards.lol/wuks/feed/recap.min.css" />
		<!-- START FILTERING -->
		<div class="layout">
			<div class="filter-items">
				<div class="filter-label active" >All Articles</div>
				<div class="filter-label" data-filter=".featured">Featured Posts</div>
				<div class="filter-label" data-filter=".news">Boards News</div>
				<div class="filter-label" data-filter=".roundup">Weekly Roundup</div>
				<div class="filter-label" data-filter=".redpost">Riot Posts</div>
			</div>
		</div>
		<!-- END FILTERING -->
		<!-- START FREEWALL -->
		<div id="freewall" class="free-wall">

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(https://i.imgur.com/DrqbjMp.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/c7He9MWq', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Gameplay</p>
						<h2>More Information About Upcoming Leveling and Rewards Changes</h2>
						<table><tr><td class="tleft">By Cactopus</td><td class="tmid">|</td><td class="tright">September 11, 2017</td></tr></table>
						<p class="summary">Cactopus hits the Boards with a quick FAQ about the upcoming leveling and rewards changes.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(https://i.imgur.com/YBmA0vk.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/tMx1eY6r', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Gameplay</p>
						<h2>Xin Zhao Gameplay Update</h2>
						<table><tr><td class="tleft">By Riot Xenogenic</td><td class="tmid">|</td><td class="tright">September 11, 2017</td></tr></table>
						<p class="summary">Xenogenic discusses the updates for Xin Zhao about to hit the PBE.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 featured" data-fixSize=0 style="background-image:url(http://i.imgur.com/Q9vx539.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/team-recruitment/ZLwcTzPv', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Featured Article</p>
						<h2>Invasion: Onslaught - Looking for Group Megathread</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">September 10, 2017</td></tr></table>
						<p class="summary">Group up with other players to complete party-exclusive missions!</p>
					</div>
				</div>
			</div>

			<div class="brick size22 roundup" data-fixSize=0 style="background-image:url(http://i.imgur.com/9L3bfXe.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/KFaAxs9y', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Community Roundup</p>
						<h2>A Player's Guide to Invasion: Onslaught</h2>
						<table><tr><td class="tleft">By Steelflame</td><td class="tmid">|</td><td class="tright">September 10, 2017</td></tr></table>
						<p class="summary">Some community advice for those looking to turn those 'A' runs into 'S' runs.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 roundup" data-fixSize=0 style="background-image:url(http://i.imgur.com/XWlO2Qg.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/dYHJ9rgE', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Community Roundup</p>
						<h2>Are Star Guardian Quests Asking Too Much of Players?</h2>
						<table><tr><td class="tleft">By SomethingAncient</td><td class="tmid">|</td><td class="tright">September 7, 2017</td></tr></table>
						<p class="summary">Riot defaultchar addresses concerns regarding premade-specific missions and mission difficulties.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/scMQsc0.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/community-moderation/0EXPIEZ1', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Filtering Red Tracker</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">September 6, 2017</td></tr></table>
						<p class="summary">Quality of life changes for Red Tracker after considerable feedback.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 featured" data-fixSize=0 style="background-image:url(https://i.imgur.com/gonDjUR.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/3THTrhmb', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Featured Article</p>
						<h2>Breakdown of Upcoming Changes to Leveling, IP, & Rewards</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">September 1, 2017</td></tr></table>
						<p class="summary">We take a look into what's new, what's changing, and what's leaving with the new leveling and rewards system.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(http://i.imgur.com/YPARBUR.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/3THTrhmb', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Gameplay</p>
						<h2>Runes Corner: Late-Game Focused Runes</h2>
						<table><tr><td class="tleft">By RiotWrekz</td><td class="tmid">|</td><td class="tright">August 30, 2017</td></tr></table>
						<p class="summary">We shift our attention from rune keystones to regular runes geared for the late game.</p>
					</div>
				</div>
			</div>


			<div class="brick size24 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/sQ64gcl.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/community-moderation/ujg7ma7p', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Introducing: Boards Recap</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">August 30, 2017</td></tr></table>
						<p class="summary">Introducing a new way to catch up on posts that you may have missed while you were busy climbing the ranked ladder.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 roundup" data-fixSize=0 style="background-image:url(http://i.imgur.com/EYgadum.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/KPKccG7T', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Community Roundup</p>
						<h2>Calling It Quits</h2>
						<table><tr><td class="tleft">By HateDaddy</td><td class="tmid">|</td><td class="tright">August 29, 2017</td></tr></table>
						<p class="summary">Pain. Frustration. Disillusionment.</p>
						<p class="summary">An honest discussion about why League of Legends doesn't feel like the game he once enjoyed.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(http://i.imgur.com/TufTnh5.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/riot-official/IVVl2Rei', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Player Behavior</p>
						<h2>Rewards For Old Honor Are Rolling Out By 9/30</h2>
						<table><tr><td class="tleft">By Riot NaKyle</td><td class="tmid">|</td><td class="tright">August 28, 2017</td></tr></table>
						<p class="summary">Riot announces the rewards for the retired Honor system; they're Summoner Icons with some steep requirements.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(http://i.imgur.com/3AUvtqq.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/story-art/rxzko0ME-kindred-spotify-playlist', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Story & Sound</p>
						<h2>Kindred Spotify Playlist</h2>
						<table><tr><td class="tleft">By FauxSchizzle</td><td class="tmid">|</td><td class="tright">August 25, 2017</td></tr></table>
						<p class="summary">An insight into inspiration: FauxShizzle shares the Spotify playlist he listened to while working on Kindred.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(http://i.imgur.com/wGdxxC3.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/JELGkanE-quick-gameplay-thoughts-august-25', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Gameplay</p>
						<h2>Quick Gameplay Thoughts:<br />August 25</h2>
						<table><tr><td class="tleft">By Meddler</td><td class="tmid">|</td><td class="tright">August 25, 2017</td></tr></table>
						<p class="summary">Meddler discusses potential balance changes as League of Legends heads into the Patch 7.18, the "Worlds Patch".</p>
					</div>
				</div>
			</div>

			<div class="brick size22 roundup" data-fixSize=null style="background-image:url(http://i.imgur.com/XNJYJwT.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/AxtIMqvv-the-more-i-know-about-rune-changes-the-less-im-excited-for-s8', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Community Roundup</p>
						<h2>Rune Changes & Concerns About Balance</h2>
						<table><tr><td class="tleft">By tough noogies</td><td class="tmid">|</td><td class="tright">August 24, 2017</td></tr></table>
						<p class="summary">Players express shared concerns about balance in Season 8, notably in the wake of the <i>Runes Reforged</i> changes. Riot Sparkle discusses the rationale behind certain decisions.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=null style="background-image:url(http://i.imgur.com/ryVvREs.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/4KAg8Y1F-runes-corner-summoner-specialist-and-hextech-freezeray', '_blank')">
				<div class="title-nograd">
					<div class='cover'>
						<p class="category">Riot Post · Gameplay</p>
						<h2>Runes Corner: Summoner Specialist and Hextech Freezeray</h2>
						<table><tr><td class="tleft">By Riot Stashu</td><td class="tmid">|</td><td class="tright">August 23, 2017</td></tr></table>
						<p class="summary">Stashu reveals two potential rune keystones for the upcoming <i>Runes Reforged</i> update.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=null style="background-image:url(http://i.imgur.com/m8hMZ3E.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/league-videos/TX4O1Nfz-two-years-later-league-videos-sub-board-returns', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Two Years Later, League Videos Sub-Board Returns</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">August 22, 2017</td></tr></table>
						<p class="summary">The <i>League Videos</i> sub-board is back as the <i>Streams & Videos</i> sub-board after two long years.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 redpost" data-fixSize=0 style="background-image:url(http://i.imgur.com/DrOxYT5.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/developer-corner/pzksp71i-lets-talk-skin-portraits-again', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Riot Post · Art</p>
						<h2>Let's Talk Skin Portraits (Again)</h2>
						<table><tr><td class="tleft">By Ququroon</td><td class="tmid">|</td><td class="tright">August 18, 2017</td></tr></table>
						<p class="summary">Provided strong feedback and concerns from the community, Riot looks to identify and improve upon a number of the recently released skin portraits.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 featured" data-fixSize=0 style="background-image:url(http://i.imgur.com/4twwzEy.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/RVhc65Ez-megathread-lets-discuss-caitlyn', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Featured Article</p>
						<h2>Let's Discuss: Caitlyn</h2>
						<table><tr><td class="tleft">By Teridax68</td><td class="tmid">|</td><td class="tright">August 10, 2017</td></tr></table>
						<p class="summary">The Gameplay Wardens are back with another champion megathread- this time for Caitlyn, a champion known for her oppressive zone control and range.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/dpjCiJO.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/skin-champion-concepts/QE5FbR34-cc-feature-headers-upcoming-projects', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>C&C Feature Headers & Upcoming Projects</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">August 8, 2017</td></tr></table>
						<p class="summary">Wuks and the Archivists share some upcoming projects in Concepts & Creations to keep an eye out for.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 featured" data-fixSize=0 style="background-image:url(http://i.imgur.com/Qs8OCzU.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/gameplay-balance/ENUEELfG', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Featured Article</p>
						<h2>Let's Discuss: Rengar</h2>
						<table><tr><td class="tleft">By Teridax68</td><td class="tmid">|</td><td class="tright">July 19, 2017</td></tr></table>
						<p class="summary">Having recently dealt with an influx of Rengar-related threads, the Gameplay Wardens gather player sentiments in a megathread about this controversial champion.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/oLuk6ih.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/GD/FcIzcGa5-071117-the-direction-of-gd-miscellaneous', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>The Direction of GD and Miscellaneous</h2>
						<table><tr><td class="tleft">By the GD Wardens</td><td class="tmid">|</td><td class="tright">July 7, 2017</td></tr></table>
						<p class="summary">Changes to the GD and Miscellaneous communities are on the horizon.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/vnUxlKh.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/community-moderation/qVlculPP-boards-moderation-discord', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Join us in the Boards Moderation Discord!</h2>
						<table><tr><td class="tleft">By Deep Terror Nami</td><td class="tmid">|</td><td class="tright">June 16, 2017</td></tr></table>
						<p class="summary">Share your Boards feedback and directly discuss reports with the moderation team through the Boards Moderation Discord!</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/FmA4RqN.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/community-moderation/Tb0KiGzh-lets-talk-boards-improving-boards-culture', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Let's Talk Boards -<br />Improving Boards Culture</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">May 17, 2017</td></tr></table>
						<p class="summary">We take a look at the old League of Legends Forums and other regions' Boards to take cues on how we can improve the North American Boards.</p>
					</div>
				</div>
			</div>

			<div class="brick size22 news" data-fixSize=0 style="background-image:url(http://i.imgur.com/Aur5I1A.png)" onclick="window.open('https://boards.na.leagueoflegends.com/en/c/community-moderation/EnnbY9AE', '_blank')">
				<div class="title-grad">
					<div class='cover'>
						<p class="category">Boards News</p>
						<h2>Let's Talk Boards - Introduction</h2>
						<table><tr><td class="tleft">By Wuks</td><td class="tmid">|</td><td class="tright">May 10, 2017</td></tr></table>
						<p class="summary">The Arbiters discuss their experiences with player-run Boards moderation within the Player Behavior sub-board and express their future plans for visible and player-run moderation.</p>
					</div>
				</div>
			</div>


		</div>
				<script type="text/javascript">
					$(function() {
						var wall = new Freewall("#freewall");
						wall.reset({
							selector: '.brick',
							animate: true,
							cellW: 160,
							cellH: 160,
				gutterY: 8,
				gutterX: 8,
							fixSize: 0,
							onResize: function() {
								wall.refresh();
							}
						});
										wall.fitZone();
						$(".filter-label").click(function() {
							$(".filter-label").removeClass("active");
							var filter = $(this).addClass('active').data('filter');
							if (filter) {
								wall.filter(filter);
							} else {
								wall.unFilter();
							}
						});

						wall.fitWidth();
					});
				</script>
		`);
		
	}
	
	/** ~~ END The above functions only run once, on page load ~~ **/
}(jQuery,this));