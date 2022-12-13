$(document).ready(function () {
    /*--------------------- [ slider for all posts ] ------------------------*/
    //  update carousal bootstrap
    $('.carousel').carousel({
        interval: false
    });

    /*-- [ flat profile (toggle rate star in one post)] --*/
    $('.stars li').mouseover(function () {
        var onstar = parseInt($(this).data('value'), 9);
        $(this).parent().children('li.star').each(function (e) {
            if (e < onstar) {
                $(this).addClass('hoverrate');
            }
            else
                $(this).removeClass('hoverrate');
        });
    }).mouseout(function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hoverrate');
        });
    });

    $('.stars li').click(function () {
        var onstar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');
        console.log(onstar);
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selectedrate');
        }
        for (i = 0; i < onstar; i++) {
            $(stars[i]).addClass('selectedrate');
        }
    });
});

// tab toggle flat profile
function fopentab(tabname) {
    var i, tabcontents, tablinks;
    var types = ["addflat", "deletedflats", "pendingflats"];
    tabcontents = document.getElementsByClassName('ftabcontent');

    for (i = 0; i < tabcontents.length; i++)
        tabcontents[i].style.display = "none";
    tablinks = document.getElementsByClassName("ftablink");

    for (i = 0; i < tablinks.length; i++) {
        if (tabname === types[i]) tablinks[i].classList.add("factive");
        else tablinks[i].classList.remove("factive");
    }
    document.getElementById(tabname).style.display = "block";
}

// slider for pending one post
var images = [
    "images/flat/pendingposts/p4.jpg", 
    "images/flat/pendingposts/p1.jpg", 
    "images/flat/pendingposts/p2.jpg",
    "images/flat/pendingposts/p3.jpg"
];
var number = 0;
var len = images.length;
var pmainView = document.getElementById('pmainview');

function ploadgallery() {
    pmainView.style.background = "url(" + images[number] + ")";
    pmainView.style.backgroundSize = "cover";
    pmainView.style.backgroundPosition = "top center";
}

// next photo
function pright() {
    if (number < len - 1) {
        ++number;
    } else {
        number = 0;
    }
    pmainView.style.background = "url(" + images[number] + ")";
    pmainView.style.backgroundSize = "cover";
    pmainView.style.backgroundPosition = "top center";
}

// previous photo
function pleft() {
    if (number > 0) {
        --number;
    } else {
        number = images.length - 1;
    }
    pmainView.style.background = "url(" + images[number] + ")";
    pmainView.style.backgroundSize = "cover";
    pmainView.style.backgroundPosition = "top center";
}

// load default photo
ploadgallery();

// slider for deleted one post
var images2 = [
    "images/user/savedposts/s2.jpg",
    "images/user/savedposts/s1.jpg",
    "images/user/savedposts/s3.jpg",
    "images/user/savedposts/s4.jpg"
];
var number2 = 0;
var len = images2.length;
var dmainView = document.getElementById('dmainview');

function dloadgallery() {
    dmainView.style.background = "url(" + images2[0] + ")";
    dmainView.style.backgroundSize = "cover";
    dmainView.style.backgroundPosition = "top center";
}

// next photo
function dright() {
    if (number2 < len - 1) {
        number2++;
    } else {
        number2 = 0;
    }
    dmainView.style.background = "url(" + images2[number2] + ")";
    dmainView.style.backgroundSize = "cover";
    dmainView.style.backgroundPosition = "top center";
}

// previous photo
function dleft() {
    if (number2 > 0) {
        number2--;
    } else {
        number2 = images2.length - 1;
    }
    dmainView.style.background = "url(" + images2[number2] + ")";
    dmainView.style.backgroundSize = "cover";
    dmainView.style.backgroundPosition = "top center";
}

// load default photo
dloadgallery();