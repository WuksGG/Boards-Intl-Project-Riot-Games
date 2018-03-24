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
    }, 2000);
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
        z = "https://boards.oce.leagueoflegends.com/api/users/"+tArray[3]+"/"+tArray[4];
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
}
function Titles(riot,title,curr){
    if(riot === true){
        $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags crioter'>"+title+"</span>");
    } else {
        switch(title){
            case 'Emissary':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cemissary'><a style='color:#fff' href='https://boards.oce.leagueoflegends.com/en/c/player-behaviour/Edu7E6Bp'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle temissary'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #458b00").end()
                    .attr("id","emissary");
                break;
            case 'Wrenchman':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cwrenchman'><a style='color:#fff' href='https://boards.oce.leagueoflegends.com/en/c/help-support-oce/nE4lj5EB'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle twrenchman'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #c98f1a").end()
                    .attr("id","wrenchman");
                break;
            case 'Instructor':
                $(curr).parents('.byline:not(.discussion-footer)').append("<span class='tags cinstructor'><a style='color:#fff' href='https://boards.oce.leagueoflegends.com/en/c/gameplay-strategy/RaWrI4Hi'>"+title+"</a></span>").end()
                    .closest('.nested-comment').find('.masthead:first').append("<span class='ttriangle tinstructor'></span>").end().end()
                    .closest('.nested-comment:not(.glow):not(.flat)').attr("style","border-top:1px solid #5079c4").end()
                    .attr("id","instructor");
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
                    z = "https://boards.oce.leagueoflegends.com/api/"+appID+"/discussions/"+discID+"/comment/"+l+".json";

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
                                .find(".header.byline.clearfix").append("<span class='op-ref-bar'>In response to: <a href=\'https://boards.oce.leagueoflegends.com/en/player/"+Brealm+"/"+Bname+"\'>"+Bname+"</a> ("+Brealm+") (<a class=\'toggle-op noshow\' href=\'javascript:;\' onclick=\'$(this).hasClass(\"noshow\") ? ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:block\"), $(this).attr(\"class\", \"toggle-op yesshow\"), $(this).text(\"hide\")) : ($(this).parent().parent().parent().find(\".op-ref\").attr(\"style\", \"display:none\"), $(this).attr(\"class\", \"toggle-op noshow\"), $(this).text(\"show\"));\'>show</a>)</span>");
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
        if($subBoard == "Help & Support (OCE)" || $subBoard == "Testing Board"){
            $(".discussion-list-item:not(.wr)").each(function(){
                this.className += " wr";
                $this = $(this);
                discID = $this.attr("data-discussion-id");
                appID = $this.attr("data-application-id");
                z = "https://boards.oce.leagueoflegends.com/api/"+appID+"/discussions/"+discID+".json?page_size=0";
                var curr = this;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status === 200) {
                        var myObj = JSON.parse(this.responseText);
						
                        if(myObj.discussion.content.hasOwnProperty('pinned') === true && myObj.discussion.hasRioterComments === false){
                            var pin = myObj.discussion.content.pinned;
                            var disc = myObj.discussion.id;
                            if (appID === "ElA0rvVL"){
                                $(curr).find(".riot-commented").append("<a href=\'/en/c/help-support-oce/"+disc+"?comment="+pin+"\' class=\'wrench-fist opaque\'>&nbsp;</a>");
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