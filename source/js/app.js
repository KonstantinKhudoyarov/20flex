$(function(){
    $('.today-navigation a').click(function(){
        $(this).parents('.today-tabs').find('.today-wrap').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false
    });
});

//youtubeShowVideo
function youtubeShowVideo() {
    var i, c, y, v, n;
    v = document.getElementsByClassName("youtube");
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&disablekb=0&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    }
}
youtubeShowVideo();
//end youtubeShowVideo

function revClose() {
    let temper = $('.composition-content-box');
    for (let i = 0; i < temper.length; i++) {        temper[i].classList.remove('content-plus');    }
}
revClose();
$('.composition-component__cbtn').on('click', function () {
    this.parentElement.parentElement.classList.toggle("content-plus");
});