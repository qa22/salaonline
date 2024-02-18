// #####################
//    menu-bar

window.onscroll = function(){
    scroll();
};
function scroll(){
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("header-top").style.top = "0";
    } else {
        document.getElementById("header-top").style.top = "-70px";
    }
};