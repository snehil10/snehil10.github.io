/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    var width = $(document).width();
    
    if(width <= 767) {
        $("i").removeClass("fa-5x");
        $("i").addClass("fa-2x");
        $("#heading").css("font-size", "40px");
        $("#heading").css("text-shadow", "1px 2px red");
        $(".message").html("<h4>“And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.”</h4>" 
                + "<h5> ― Kahlil Gibran</h5>");
    }
    
    var back = document.getElementById("background_music");
    back.volume = 0.6;
    $.ajaxSetup({ cache: false });
    
    var qurl = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
    var turl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    var temp = turl + "“And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.”"
     + "― Kahlil Gibran";
     
    $("#getQuote").click(function(){
        
        $("#getQuote").addClass("fa-spin");
        $("#heading").css("color", "red");
        
        $("i").css("color", "red");
        var audio = document.getElementById("gun");
        audio.play();
        
        $(".message").fadeTo('medium', 0, function(){
            $.getJSON(qurl, function(a) {
                if(a.quoteAuthor=="") a.quoteAuthor = "Unknown";
                if(width <= 767) {
                    $(".message").html("<h4>“" + a.quoteText + "”</h4>" + "<h5> — " + a.quoteAuthor + "</h5>");
                } else {
                    $(".message").html("<h2>“" + a.quoteText + "”</h2>" + "<h3> — " + a.quoteAuthor + "</h3>");
                }
                temp = turl + "“" + a.quoteText + "” — " + a.quoteAuthor;
                $(".message").fadeTo('medium', 1);
                $("#getQuote").removeClass("fa-spin");
                $("#heading").css("color", "yellow");
                $("i").css("color", "yellow");
            });
        });
        
    });
    
    $("#volume").click(function(){
        if(back.volume === 0.0) back.volume = 0.6;
        else back.volume = 0.0;
        if($(this).prop("title") === "Mute") $(this).prop("title", "Music");
        else $(this).prop("title", "Mute");
        $(this).toggleClass("fa-volume-off fa-volume-up");
    });
    
    $("#tweet").click(function(){
        window.open(temp);
    });
});


