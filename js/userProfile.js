$(document).ready(function () {


    /*--------------------- [ slider for posts ] ------------------------*/
    //  --------------------update carousal bootstrap------------------
    $('.carousel').carousel({
        interval: false
    });

    /*--------------------- [ slider for  saved posts ] ------------------------*/
    // --------------------slider glider----------------
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        // Force centering slide after resize event
        resizeLock: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    /*--------------------- [ user profile (toggle rate star in one post)] ------------------------*/
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

    //  ----------------------slider for one post---------------------
    let imgObject = [
        "images/pro1/pexels-photo-706137.jpeg",
        "images/pro1/bed-with-white-bed-sheet-and-pillowcase-set-1267438.jpg",
        "images/pro1/background4.jpg", "images/pro1/photo-1558976825-6b1b03a03719.jpg"
    ];
    let mainImg = 0;
    let nextImg = 1;
    let prevImg = imgObject.length - 1;

    function loadgallery() {
        let mainView = document.getElementById('mainview');
        mainView.style.background = "url(" + imgObject[mainImg] + ")";
        mainView.style.backgroundSize = "cover";
        mainView.style.backgroundPosition = "top center";
    }

    // -------------------next photo----------------
    function scrollRight() {
        prevImg = mainImg;
        mainImg = nextImg;
        if (nextImg >= (imgObject.length - 1))
            nextImg = 0;
        else
            nextImg++;

        loadgallery();
    }

    // -----------------------previous photo--------------------
    function scrollLeft() {
        nextImg = mainImg;
        mainImg = prevImg;

        if (prevImg === 0)
            prevImg = imgObject.length - 1;
        else
            prevImg--;

        loadgallery();
    }
    document.getElementById('navright').addEventListener('click', scrollRight);
    document.getElementById('navleft').addEventListener('click', scrollLeft);

    // ------------------load default photo--------------------------
    loadgallery();

    //  ----------------------slider for  saved one post---------------------
    let simgObject = [
        "images/user/savedposts/s1.jpg",
        "images/user/savedposts/s2.jpg",
        "images/user/savedposts/s3.jpg", "images/user/savedposts/s4.jpg"
    ];
    let smainImg = 0;
    let snextImg = 1;
    let sprevImg = simgObject.length - 1;

    function sloadgallery() {
        let smainView = document.getElementById('smainview');
        smainView.style.background = "url(" + simgObject[smainImg] + ")";
        smainView.style.backgroundSize = "cover";
        smainView.style.backgroundPosition = "top center";
    }

    // ---------------------next photo----------------------
    function sscrollRight() {
        sprevImg = smainImg;
        smainImg = snextImg;
        if (snextImg >= (simgObject.length - 1))
            snextImg = 0;
        else
            snextImg++;
        sloadgallery();
    }

    // ----------------------previous photo-----------------------
    function sscrollLeft() {
        snextImg = smainImg;
        smainImg = sprevImg;
        if (sprevImg === 0)
            sprevImg = simgObject.length - 1;
        else
            sprevImg--;
        sloadgallery();
    }
    document.getElementById('snavright').addEventListener('click', sscrollRight);
    document.getElementById('snavleft').addEventListener('click', sscrollLeft);

    // ---------------load default photo---------------
    sloadgallery();
});
// -------------------------------tab toggle user profile ---------------------------
function opentab(evt, tabname) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}
//------------------open default tap ----------------
document.getElementById("defaultopen").click();


