/** 
TO DO: 
1. Mutation Tracker, rather than on-click
> https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
2. Utilize the CORS Cross Origin Request Sharing to make API calls to apollo.na instead of boards/api
> https://boards.na.leagueoflegends.com/api/yrc23zHg/discussions/FLWYE3Gf.json?page_size=0
> https://apollo.na.leagueoflegends.com/apollo/applications/yrc23zHg/discussions/FLWYE3Gf.json?page_size=0
3. Port to cross regions - EUW/EUNE languages
4. Clean up global variables
> https://stackoverflow.com/questions/9397778/how-to-declare-global-variables-when-using-the-strict-mode-pragma
> https://developer.mozilla.org/en-US/docs/Glossary/IIFE
**/

$(function(){
    Cycle();
	flatScroll();
	archived();
});
$(document).click(Cycle);

var $boardIndex = $(".discussion-list-item").length;
var $chronoView = 0;
var $subBoard = $("#breadcrumbs h2").text();
var firstRun = 1;
var pageURL = window.location.href;
var region = null;
var lang = null;

function Cycle() {
    var intervalID = setInterval(function() {
		if(firstRun = 1){
			$chronoView = $("#comments").find(".list").length;
			var pagePath = pageURL.split('/');
			var pageHost = pageURL.split('.');
			region = pageHost[1];
			lang = pagePath[3];
			++firstRun;
		}
        if($boardIndex > 0){
            IndexVoting();
            //boardIndexFlares();
        }
        newTags();
        commentParent();
    }, 750);
    setTimeout(function() {
        clearInterval(intervalID);
    }, 4500);
}


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
            $v.find("ul.riot-voting").append("<li>Vote</li>").end()
                .find(".total-votes").attr('style','color:#22b722');
        } else if(total === 0){
            $v.find(".total-votes").attr('style','color:#13bbc1').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        } else if(total > 0){
            $v.find(".total-votes").attr('style','color:#22b722').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        } else if(total < 0){
            $v.find(".total-votes").attr('style','color:#fd3b3b').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        }
    }
}
/** ~~ END The following function removes voting from the board index and adds voting markers ~~ **/



/** ~~ BEGIN The following functions create the flares for volunteers and Rioters ~~ **/
function newTags(){
	z = "https://boards."+region+".leagueoflegends.com/api/LMxoEARA/discussions/yyKrU1eL?page_size=0";
	var curr = this;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status === 200) {
			var myObj = JSON.parse(this.responseText);
			var volList = myObj.discussion.content.body_html;
			var volParts = volList.split(';');
			var SeniorEmissary = volParts[1].split(',');
			var Emissary = volParts[3].split(',');
			var JuniorEmissary = volParts[5].split(',');
			var SeniorWrenchman = volParts[7].split(',');
			var Wrenchman = volParts[9].split(',');
			var JuniorWrenchman = volParts[11].split(',');
			$("a.profile-hover:not(.cka)").each(function(){
				$this = $(this);
				this.className += " cka";
				if($this.parent().hasClass("isRioter") === false){
					newFlares(SeniorEmissary,Emissary,JuniorEmissary,SeniorWrenchman,Wrenchman,JuniorWrenchman,$this);
				} else {
					Tags($this);
				}
			});
		}
	};
	xmlhttp.open("GET", z, true);
	xmlhttp.send();
}
function newFlares(SE,E,JE,SW,W,JW,$this){
	var i;
	var apolloID = $this.attr('data-apollo-pvpnet-id');
	for(i=SE.length-1;i>-1;i-=1){
		if(apolloID === SE[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cemissary'><a style='color:#fff' href='https://boards."+region+".leagueoflegends.com/en/c/announcements-en/91vEPc8g'>Senior Emissary</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #00aa00").end()
                    .attr("id","emissary");
		}
	}
	for(i=E.length-1;i>-1;i-=1){
		if(apolloID === E[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cemissary'><a style='color:#fff' href='https://boards."+region+".leagueoflegends.com/en/c/announcements-en/91vEPc8g'>Emissary</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #00aa00").end()
                    .attr("id","emissary");
		}
	}
	for(i=JE.length-1;i>-1;i-=1){
		if(apolloID === JE[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cemissary'><a style='color:#fff' href='https://boards."+region+".leagueoflegends.com/en/c/announcements-en/91vEPc8g'>Junior Emissary</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #00aa00").end()
                    .attr("id","emissary");
		}
	}
	for(i=SW.length-1;i>-1;i-=1){
		if(apolloID === SW[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cwrenchman'><a style='color:#fff' href='https://boards.euw.leagueoflegends.com/en/c/announcements-en/gmQTWs7V'>Senior Wrenchman</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchman'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #ff5214").end()
                    .attr("id","wrenchman");
		}
	}
	for(i=W.length-1;i>-1;i-=1){
		if(apolloID === W[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cwrenchman'><a style='color:#fff' href='https://boards.euw.leagueoflegends.com/en/c/announcements-en/gmQTWs7V'>Wrenchman</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchman'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #ff5214").end()
                    .attr("id","wrenchman");
		}
	}
	for(i=JW.length-1;i>-1;i-=1){
		if(apolloID === JW[i]){
			$this.parents('.byline:not(.discussion-footer)').append("<span class='tags cwrenchman'><a style='color:#fff' href='https://boards.euw.leagueoflegends.com/en/c/announcements-en/gmQTWs7V'>Junior Wrenchman</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchman'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #ff5214").end()
                    .attr("id","wrenchman");
		}
	}
}
function Tags($this) {
	var tArray = $this.attr("href").split('/');
	z = "https://boards."+region+".leagueoflegends.com/api/users/"+tArray[3]+"/"+tArray[4];
	var curr = this;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status === 200) {
			var myObj = JSON.parse(this.responseText);
			if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title') === true){
				var title = myObj.profile.data.title;
				$this.parents('.byline:not(.discussion-footer)').append("<span class='tags crioter'>"+title+"</span>");
			}
		}
	};
	xmlhttp.open("GET", z, true);
	xmlhttp.send();
}
/** ~~ END The above functions create the flares for volunteers and Rioters ~~ **/



/** ~~ BEGIN The following function adds parent comment functionality to Chronological View ~~ **/
function commentParent(){
    if($chronoView === 0 && $boardIndex < 2) {
        var tArray = $("#discussion").find("li.view-in-mod-tool a").attr("href").split('/');
        var appID = tArray[4];
        var discID = tArray[6];
        $(".nested-comment:not(.isChild):not(.isDeleted)").each(function(){
            this.className += " isChild";
            var n1 = $(this).attr("id");
            if(undefined !== n1 && n1.length){
                if (n1.length > 12){
                    l = n1.slice(8,-4);
                    z = "https://boards."+region+".leagueoflegends.com/api/"+appID+"/discussions/"+discID+"/comment/"+l+".json";
                    var comment = this;
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status === 200) {
                            var myObj = JSON.parse(this.responseText);
                            var Bname = myObj.user.name;
                            var Brealm = myObj.user.realm;
                            var Bmsg = myObj.message;
                            $(comment).find(".body").prepend("<p class='op-ref' style='display:none'>"+Bmsg+"</p>").end()
                                .find(".header.byline.clearfix").append("<span class='op-ref-bar'>In response to: <a href=\'https://boards."+region+".leagueoflegends.com/en/player/"+Brealm+"/"+Bname+"\'>"+Bname+"</a> ("+Brealm+") (<a class=\'toggle-op noshow\' href=\'javascript:;\' onclick=\'$(this).hasClass(\"noshow\") ? ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:block\"), $(this).attr(\"class\", \"toggle-op yesshow\"), $(this).text(\"hide\")) : ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:none\"), $(this).attr(\"class\", \"toggle-op noshow\"), $(this).text(\"show\"));\'>show</a>)</span>");
                        }
                    };
                    xmlhttp.open("GET", z, true);
                    xmlhttp.send();
                    $(this).find(".controls").append('<li data-bind="visible"><a class="toggle-reply-form permalink" href="?show=flat&comment='+l+'">Go to Parent</a></li>');
                }
            }
        });
    }
}
/** ~~ END The following function adds parent comment functionality to Chronological View ~~ **/


/** ~~ BEGIN The following function adds 'commented' flares to specific sub-board indexes ~~ **/
function boardIndexFlares() {
    if($boardIndex > 0){
        //if($subBoard == "Help & Support" || $subBoard == "Ask the Community" || $subBoard == "Discuss the Boards" || $subBoard == "Testing Area"){
            $(".discussion-list-item:not(.wr)").each(function(){
                this.className += " wr";
                $this = $(this);
                discID = $this.attr("data-discussion-id");
                appID = $this.attr("data-application-id");
				z = "https://apollo.na.leagueoflegends.com/apollo/applications/"+appID+"/discussions/"+discID+"?page_size=0";
                //z = "https://boards.na.leagueoflegends.com/api/"+appID+"/discussions/"+discID+".json?page_size=0";
                //var curr = this;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status === 200) {
                        var myObj = JSON.parse(this.responseText);
                        if(myObj.discussion.content.hasOwnProperty('pinned') === true && myObj.discussion.hasRioterComments === false){
                            var pin = myObj.discussion.content.pinned;
                            var disc = myObj.discussion.id;
                            if(appID === "okOuNvuT"){
                                $this.find(".riot-commented").append("<a href=\'/en/c/ask-the-community/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
                            }
                            else if (appID === "osqw6G4M"){
                                $this.find(".riot-commented").append("<a href=\'/en/c/help-support/"+disc+"?comment="+pin+"\' class=\'poro-fist opaque\'>&nbsp;</a>");
                            }
                            else if(appID === "6heBIhQc"){
                                $this.find(".riot-commented").append("<a href=\'/en/c/community-moderation/"+disc+"?comment="+pin+"\' class=\'dtb-fist opaque\'>&nbsp;</a>");
                            }
                        }
                    }
                };
                xmlhttp.open("GET", z, true);
                xmlhttp.send();
            });
        //}
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
function archived() {
    if($boardIndex === 0 && $("#sidebar").find("div.new-discussion-box.box a").length !== 0){
        var s = $("#comments").find("span.cant-comment-warning").text();
        if(s.indexOf("Commenting is disabled") !== -1){
            var l = $("#sidebar").find("div.new-discussion-box.box a").attr("href");
            if(undefined !== l && l.length){
                if(l.length > -1){
                    $(".cant-comment-warning").html('<span class="icon-lock-brown"></span>This thread has been archived. <a href="'+l+'">Create a new thread instead?</a>');
                }
            }
        }
    }
}
/** ~~ END The above functions only run once, on page load ~~ **/