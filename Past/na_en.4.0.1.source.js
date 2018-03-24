$(function(){
    Cycle();
});
$(document).click(Cycle);

var $boardIndex = $(".discussion-list-item").length;
var $chronoView = 0;
var $subBoard = $("#breadcrumbs h2").text();
var firstRun = 1;

function Cycle() {
    var intervalID = setInterval(function() {
		if(firstRun = 1){
			$chronoView = $("#comments").find(".list").length;
			++firstRun;
		}
        if($boardIndex > 0){
            IndexVoting();
            HelpSupport();
        }
        Tags();
        commentParent();
    }, 500);
    setTimeout(function() {
        clearInterval(intervalID);
    }, 4000);
}

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
        var up = $(v).attr("data-apollo-up-votes");
        var down = $(v).attr("data-apollo-down-votes");
        var total = up - down;
        if(total === 1){
            $(v).find("ul.riot-voting").append("<li>Vote</li>").end()
                .find(".total-votes").attr('style','color:#22b722');
        } else if(total === 0){
            $(v).find(".total-votes").attr('style','color:#13bbc1').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        } else if(total > 0){
            $(v).find(".total-votes").attr('style','color:#22b722').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        } else if(total < 0){
            $(v).find(".total-votes").attr('style','color:#fd3b3b').end()
                .find("ul.riot-voting").append("<li>Votes</li>");
        }
    }
}

function Tags() {
    $("a.profile-hover:not(.ck)").each(function(){
        $this = $(this);
        this.className += " ck";
        var tArray = $this.attr("href").split('/');
        z = "https://boards.na.leagueoflegends.com/api/users/"+tArray[3]+"/"+tArray[4];
        var curr = this;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title') === true){
                    var title = myObj.profile.data.title;
                    var isRiot = myObj.isRioter;
                    Titles(isRiot,title,curr);
                }
            }
        };
        xmlhttp.open("GET", z, true);
        xmlhttp.send();
    });

    /*
    var pList = $("a.profile-hover:not(.ck)");
    for(i=0;i<pList.length;++i){
        console.log(i);
        var p = pList[i];
        $(p).addClass("ck");
		//var Profile = $(p).attr("href");
		//var tArray = Profile.split('/');
        var tArray =  $(p).attr("href").split('/');
		z = "https://boards.na.leagueoflegends.com/api/users/"+tArray[3]+"/"+tArray[4];

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status === 200) {
				var myObj = JSON.parse(this.responseText);
				if(myObj.profile !== null && myObj.profile.data.hasOwnProperty('title') === true){
					var title = myObj.profile.data.title;
					var isRiot = myObj.isRioter;
                    console.log(p);
                    console.log(z);
					Titles(isRiot,title,p);
				}
			}
		};
		xmlhttp.open("GET", z, true);
		xmlhttp.send();
    }*/
}
function Titles(riot,title,curr){
    if(riot === true){
        $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags crioter'>"+title+"</span>");
    } else {
        switch(title){
            case 'Herald':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cherald'><a style='color:#fff' href='https://boards.na.leagueoflegends.com/en/c/community-moderation/LZ0eNgrM'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle therald'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9c4ad9").end()
                    .attr("id","herald");
                break;
            case 'Advisor':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cadvisor'><a style='color:#fff' href='https://boards.na.leagueoflegends.com/en/c/community-moderation/LZ0eNgrM'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tadvisor'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #87CEEB").end()
                    .attr("id","advisor");
                break;
            case 'Moderator':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cmoderator'><a style='color:#fff' href='https://boards.na.leagueoflegends.com/en/c/community-moderation/LZ0eNgrM'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tmoderator'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #7fe4af").end()
                    .attr("id","moderator");
                break;
            case 'NA Player Support':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cnaps'>"+title+"</span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tnaps'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #cc6600").end()
                    .attr("id","naps");
                break;
            case 'Archivist':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags carchivist'><a style='color:#fff' href='https://boards.na.leagueoflegends.com/en/c/community-moderation/LZ0eNgrM'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tarchivist'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #9ca200").end()
                    .attr("id","archivist");
                break;
        }
    }
}

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
                    z = "https://boards.na.leagueoflegends.com/api/"+appID+"/discussions/"+discID+"/comment/"+l+".json";

                    var comment = this;

                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status === 200) {
                            var myObj = JSON.parse(this.responseText);
                            var Bname = myObj.user.name;
                            var Brealm = myObj.user.realm;
                            var Bmsg = myObj.message;
                            //apiPass(Bname,Brealm,Bmsg,comment);
                            $(comment).find(".body").prepend("<p class='op-ref' style='display:none'>"+Bmsg+"</p>").end()
                                .find(".header.byline.clearfix").append("<span class='op-ref-bar'>In response to: <a href=\'https://boards.na.leagueoflegends.com/en/player/"+Brealm+"/"+Bname+"\'>"+Bname+"</a> ("+Brealm+") (<a class=\'toggle-op noshow\' href=\'javascript:;\' onclick=\'$(this).hasClass(\"noshow\") ? ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:block\"), $(this).attr(\"class\", \"toggle-op yesshow\"), $(this).text(\"hide\")) : ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:none\"), $(this).attr(\"class\", \"toggle-op noshow\"), $(this).text(\"show\"));\'>show</a>)</span>");
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



function HelpSupport() {
    if($boardIndex > 0){
        if($subBoard == "Help & Support" || $subBoard == "Ask the Community" || $subBoard == "Discuss the Boards" || $subBoard == "Testing Area"){
            $(".discussion-list-item:not(.wr)").each(function(){
                this.className += " wr";
                $this = $(this);
                discID = $this.attr("data-discussion-id");
                appID = $this.attr("data-application-id");
                z = "https://boards.na.leagueoflegends.com/api/"+appID+"/discussions/"+discID;
                var curr = this;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status === 200) {
                        var myObj = JSON.parse(this.responseText);
                        if(myObj.discussion.content.hasOwnProperty('pinned') === true && myObj.discussion.hasRioterComments === false){
                            var pin = myObj.discussion.content.pinned;
                            var disc = myObj.discussion.id;
                            if(appID === "okOuNvuT"){
                                $(curr).find(".riot-commented").append("<a href=\'/en/c/ask-the-community/"+disc+"?comment="+pin+"\' class=\'atc-fist opaque\'>&nbsp;</a>");
                            }
                            else if (appID === "osqw6G4M"){
                                $(curr).find(".riot-commented").append("<a href=\'/en/c/help-support/"+disc+"?comment="+pin+"\' class=\'poro-fist opaque\'>&nbsp;</a>");
                            }
                            else if(appID === "6heBIhQc"){
                                $(curr).find(".riot-commented").append("<a href=\'/en/c/community-moderation/"+disc+"?comment="+pin+"\' class=\'dtb-fist opaque\'>&nbsp;</a>");
                            }
                        }
                    }
                };
                xmlhttp.open("GET", z, true);
                xmlhttp.send();
            });
        }
    }
}

/** INCOMPLETE - Scrolls to top of page when new page clicked **/
$(function flatScroll() {
    if($("#comments").find(".pager.clearfix").length !== 0) {
        $(".pager").children("a").click(function(){
            $('html,body').animate({
                scrollTop: $(".comments-header-container").offset().top},
                                   'slow');
        });
    }
});


/** For Help & Support only **/
$(function HSarchive() {
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
});