
$( document ).ready(function() {
	
$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBnsdQFFPtUP3VyEmPSoo5i8si1PtQFvUA&channelId=UC550zOIS0v4MxCp60tNRPTQ&part=snippet,id&order=date&maxResults=20',function(data,status,xhr){
var act = "active";
data.items.forEach(function(video){
	
if(video.id.videoId){
	
$("#vid-car").append(
"<div class='item "+ act + "'><div class='embed-responsive embed-responsive-16by9'><iframe class='com-borda' align='middle' id='video_clip' style='margin: 0 auto; display:block;' src='http://www.youtube.com/embed/" + video.id.videoId + "' frameborder='0' allowfullscreen=''></iframe></div></div>")
	act= ""
}
})
});
});


$("#btnÁlbum").click(function(){


	 $('html,body').animate({
        scrollTop: $("#album").offset().top - 90},
        'slow');
	if($("#butaoMobile").css("display") == "block"){
		$("#butaoMobile").trigger('click')
	}
	

})

$("#btnHome").click(function(){


	 $('html,body').animate({
        scrollTop: 0},
        'slow');
	if($("#butaoMobile").css("display") == "block"){
		$("#butaoMobile").trigger('click')
	}
	

})

$("#btnBanda").click(function(){


	 $('html,body').animate({
        scrollTop: $("#banda").offset().top - 90},
        'slow');

if($("#butaoMobile").css("display") == "block"){
		$("#butaoMobile").trigger('click')
	}

})
$("#btnFoto").click(function(){


	 $('html,body').animate({
        scrollTop: $("#foto").offset().top - 90},
        'slow');

if($("#butaoMobile").css("display") == "block"){
		$("#butaoMobile").trigger('click')
	}

})
$("#btnVideo").click(function(){


	 $('html,body').animate({
        scrollTop: $("#video").offset().top - 90},
        'slow');

if($("#butaoMobile").css("display") == "block"){
		$("#butaoMobile").trigger('click')
	}

})

$("#butaoMobile").click(function(){

console.log($("#cabecalho").css('background-color') )
	if($("#cabecalho").css('background-color') == "rgb(0, 0, 0)"){
		$("#cabecalho").css('background-color', 'transparent')
	}
	else{
		$("#cabecalho").css('background-color', "rgb(0, 0, 0)")
	}
})


$( document ).ready(function() {
$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();


if (scrollPosition < $("#album").position().top - 300) {
        $("#btnVideo").removeClass("withBorder")
		$("#btnBanda").removeClass("withBorder")
		$("#btnFoto").removeClass("withBorder")
		$("#btnÁlbum").removeClass("withBorder")
    }

if (scrollPosition > $("#video").position().top - 300) {
        $("#btnVideo").addClass("withBorder")
		$("#btnBanda").removeClass("withBorder")
		$("#btnFoto").removeClass("withBorder")
		$("#btnÁlbum").removeClass("withBorder")
    }

 else if (scrollPosition > $("#foto").position().top  - 300) {
        $("#btnFoto").addClass("withBorder")
		$("#btnBanda").removeClass("withBorder")
		$("#btnVideo").removeClass("withBorder")
		$("#btnÁlbum").removeClass("withBorder")
    }
    else if (scrollPosition > $("#banda").position().top  - 300) {
        $("#btnBanda").addClass("withBorder")
		$("#btnÁlbum").removeClass("withBorder")
		$("#btnVideo").removeClass("withBorder")
		$("#btnFoto").removeClass("withBorder")
    }
 else if (scrollPosition > $("#album").position().top  - 300) {
        $("#btnÁlbum").addClass("withBorder")
		$("#btnBanda").removeClass("withBorder")
		$("#btnVideo").removeClass("withBorder")
		$("#btnFoto").removeClass("withBorder")
    }
	
});
});

