var autoplay = true;
var autoplay_Delay = 2000;
var autoplayId;
var intervalId;

var lunbo;
var pic;
var pic_items;
var lis;

var pic_item_width;
var curIndex = 0;

window.onload = function () {
    initElements();
    initEvents();
    if (autoplay) {
        startAnimation(pic);
    }
}

function initElements() {
    lunbo = document.getElementById("lunbo");
    pic_items = lunbo.getElementsByClassName("pic_li");
    pic = lunbo.getElementsByClassName("pic")[0];
    lis = lunbo.getElementsByClassName("lis")[0];

    var firstItem = pic_items[0].cloneNode(true);
    pic.appendChild(firstItem);

    pic_item_width = pic_items[0].offsetWidth;

}

//鼠标悬浮
function initEvents() {
    lunbo.addEventListener("mouseover", function () {
        clearTimeout(autoplayId);
        autoplay = false;
    });

    lunbo.addEventListener("mouseout", function () {
        autoplay = true;
        startAnimation(pic);
    });

    var li = lis.children;
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("index", i);
        li[i].addEventListener("click", function () {
            var index = parseInt(this.getAttribute("index"));
            next(index);
        });
    }

    var left_jiantou = lunbo.getElementsByClassName("left-jiantou")[0];
    var right_jiantou = lunbo.getElementsByClassName("right-jiantou")[0];

    left_jiantou.addEventListener("click", function () {
        prev()
    });
    right_jiantou.addEventListener("click", function () {
        next()
    });
}

function prev() {
    var element = pic;
    var li = element.children;
    curIndex = curIndex + 1;
    if (curIndex < 0) {
        element.style.left = -((li.length - 1) * pic_item_width) + "px";
        curIndex = li.length - 2;
    }
    move(element, -(curIndex * pic_item_width));
}

function next(nextIndex) {
    var element = pic;
    var li = element.children;
    if ((nextIndex != null) && (typeof (nextIndex) != "undefined")) {
        curIndex = nextIndex;
    } else {
        curIndex = curIndex + 1;
        if (curIndex > (li.length - 1)) {
            element.style.left = 0 + "px";
            curIndex = 1;
        }
    }
    move(element, -(curIndex * pic_item_width));
}

function startAnimation(element) {
    if (autoplayId) {
        clearTimeout(autoplayId);
    }
    autoplayId = setTimeout(function () {
        next();
    }, autoplay_Delay);
}

function setCurrentActiveIndicator(index) {
    var li = lis.children;
    if (index == li.length) {
        index = 0;
    }
    for (var i = 0; i < li.length; i++) {
        if (i == index) {
            li[i].className = "li1 active";
        } else {
            li[i].className = "li1"
        }
    }
}