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
	$(function(){
		globals.GLOB.chronoView = $("#comments").find(".flat-comments").length;
	});
	var region = window.location.href.split('.')[1];
	var lang = window.location.href.split('/')[3];
	/* [END] Ok simmer down. We're done declaring variables now.*/

	
	// BEGIN APOLLO API BRIDGE //
	var apolloBaseUrl = `https://apollo.${region}.leagueoflegends.com/apollo`;
	var xhr;
	$.getScript(`${apolloBaseUrl}/cors/easyXDM.min.js`, ()=> {
        xhr = new easyXDM.Rpc({
            remote: `${apolloBaseUrl}/cors/index.html`,
            swf: `${apolloBaseUrl}/easyXDM.swf`,
            remoteHelper: `${apolloBaseUrl}/name.html`
        }, {
            remote: {
                request: {} // request is exposed by /cors/
            }
        });
	});
	// END APOLLO API BRIDGE //
	
	
	/* [START] Initialize one-time run functions */
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
	
	//*********************************************//
	//*********************************************//
	//******* That concludes housekeeping :) ******//
	//*********************************************//
	//*********************************************//
	

	
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
				$v.find(".total-votes").attr('style','color:#b3c524').end()
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
		var z = `https://boards.${region}.leagueoflegends.com/api/tn3qAbc8/discussions/R9ENc662?page_size=0`;
		//var curr = this;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status === 200) {
				var myObj = JSON.parse(this.responseText);
				var volList = myObj.discussion.content.body_html;
				var volParts = volList.split(';');
				globals.GLOB.Group1 = volParts[1].split(',');
				globals.GLOB.Group2 = volParts[3].split(',');
				globals.GLOB.Group3 = volParts[5].split(',');
				globals.GLOB.Group4 = volParts[7].split(',');
				globals.GLOB.Group5 = volParts[9].split(',');
			}
		};
		xmlhttp.open("GET", z, true);
		xmlhttp.send();
	}
	/** ~~ END This is a one-time API call that pulls user IDs **/
	
	
	/** ~~ BEGIN The following functions create the flares for volunteers and Rioters ~~ **/
	function newTags(){
		if(globals.GLOB.Group1){
			$("a.profile-hover:not(.cka)").each(function(){
				$this = $(this);
				this.className += " cka";
				if($this.parent().hasClass("isRioter") === false){
					newFlares(globals.GLOB.Group1,globals.GLOB.Group2,globals.GLOB.Group3,globals.GLOB.Group4,globals.GLOB.Group5,$this);
				} else {
					Tags($this);
				}
			});
		}
	}
	function newFlares(Group1,Group2,Group3,Group4,Group5,$this){
		var i;
		var apolloID = $this.attr('data-apollo-pvpnet-id');
		for(i=Group1.length-1;i>-1;i-=1){
			if(apolloID === Group1[i]){
				$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append("<span class='tags cherald'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Herald</a></span>").end().end()
						.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle therald'></span>").end().end()
						.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9c4ad9").end()
						.attr("id","herald");
			}
		}
		for(i=Group2.length-1;i>-1;i-=1){
			if(apolloID === Group2[i]){
				$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append("<span class='tags cadvisor'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Advisor</a></span>").end().end()
						.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tadvisor'></span>").end().end()
						.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #87CEEB").end()
						.attr("id","advisor");
			}
		}
		for(i=Group3.length-1;i>-1;i-=1){
			if(apolloID === Group3[i]){
				$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append("<span class='tags cmoderator'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Moderator</a></span>").end().end()
						.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tmoderator'></span>").end().end()
						.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #7fe4af").end()
						.attr("id","moderator");
			}
		}
		for(i=Group4.length-1;i>-1;i-=1){
			if(apolloID === Group4[i]){
				$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append("<span class='tags carchivist'><a href='https://boards.na.leagueoflegends.com/"+lang+"/c/community-moderation/LZ0eNgrM'>Archivist</a></span>").end().end()
						.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tarchivist'></span>").end().end()
						.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9ca200").end()
						.attr("id","archivist");
			}
		}
		for(i=Group5.length-1;i>-1;i-=1){
			if(apolloID === Group5[i]){
				$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append("<span class='tags cnaps'>NA Player Support</span>").end().end()
						.closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tnaps'></span>").end().end()
						.closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #cc6600").end()
						.attr("id","naps");
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
					$this.parents('.byline:not(.discussion-footer)').find(".inline-profile:first").append(`<span class='tags crioter'>${title}</span>`);
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
						var z = `https://boards.${region}.leagueoflegends.com/api/${appID}/discussions/${discID}/comment/${l}.json`;
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
			if(["Help & Support","Ask the Community","Discuss the Boards","Testing Area"].indexOf($subBoard) > -1){
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
					else if(appID === "6heBIhQc"){
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
	/** ~~ END The above functions only run once, on page load ~~ **/
}(jQuery,this));