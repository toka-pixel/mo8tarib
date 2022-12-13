/*------------------------ [ Search Icon ] ------------------------------*/
$(document).ready(function () {
  var acc = document.getElementsByClassName("accordion");
  var i;
  var size = screen.width;
  size = size / 2;
  var search = document.getElementById('Search');
  var searchcontent = document.getElementById('SearchContent');

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  search.onclick = function () {
    searchcontent.style.height = "100%";
  };

  window.onclick = function (event) {
    if (event.target == searchcontent) {
      searchcontent.style.height = "0%";
    }
  };

  //  effect of search-icon
  $(".search-icon").click(function () {
    $(".in").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(this).toggleClass("search-translate");
  });
});

// write type in search screen
function mytype(object) {
  var type = object.innerText;
  document.getElementById('ptype').innerHTML = type;
}

/*---------------------- [ Notification Icon ] --------------------------*/
$(document).ready(function () {
  $(".notification-link .notification").click(function () {
    $(".notifi-dropdown").toggleClass("active");
    //  When Click On The Notification Icon ,
    // The Number Of Notifications Will Be Hide 
    document.getElementById("notifi-num").style.display = "none";
  })
});

/*------------------------- [ Logout Icon ] ----------------------------*/
function Logout(msg, btn) {
  var confirmBox = $("#logoutContent");

  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function () {
    confirmBox.hide();
    location.href = "signup&&signin.html";
  });
  confirmBox.find(".yes").click(btn);
  confirmBox.show();
  confirmBox.find(".no").unbind().click(function () {
    confirmBox.hide();
    location.href = "#";
  });
  confirmBox.find(".no").click(btn);
  confirmBox.show();
}

/*----------------- [ Black And White Background ] ----------------------*/
//  Identify Three Colors Of Themes
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

//  To Chages Themes With Each Other
function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

//  Connet Button With Function 
document.getElementById('themeButton').onclick = toggleTheme;

/*------------------------ [ Editing Icon ] -----------------------------*/
$(document).ready(function () {
  //  Action (...) Icon Of First Post
  $(".myEditing-icon").click(function () {
    $(".myEditing-dropdown").toggleClass("active");
  })

  //  Action (...) Icon Of Second Post
  $(".otherEditing-icon").click(function () {
    $(".otherEditing-dropdown").toggleClass("active");
  })
});

/*------------------------ [ My Hiding Icon ] -----------------------------*/
var a;

//  For Hiding And Undoing First Post  
function myShow_myHide() {
  if (a == 1) {
    document.getElementById("myPost").style.display = "block";
    document.getElementById("unDoingMe").style.display = "none";
    return a = 0;
  } else {
    document.getElementById("myPost").style.display = "none";
    document.getElementById("unDoingMe").style.display = "block";
    return a = 1;
  }
}

//  For Deleting First Post From (x) Circle Icon Of Hiding Option
$(".unDoingMe-icon").click(function () {
  document.getElementById("unDoingMe").style.display = "none";
});

//  For Hiding And Undoing Second Post
function otherShow_otherHide() {
  if (a == 1) {
    document.getElementById("otherPost").style.display = "block";
    document.getElementById("unDoingOther").style.display = "none";
    return a = 0;
  } else {
    document.getElementById("otherPost").style.display = "none";
    document.getElementById("unDoingOther").style.display = "block";
    document.getElementById("unDoingOther").style.marginTop = "70px";
    return a = 1;
  }
}

//  For Deleting Second Post From (x) Circle Icon Of Hiding Option
$(".unDoingOther-icon").click(function () {
  document.getElementById("unDoingOther").style.display = "none";
});

/*------------------------ [ My Deleting Icon ] -----------------------------*/
//  For Show Deleting Box Massege
$(".deleting-content").click(function () {
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this post?",
    confirmButtonColor: "#ffa41b",
    confirmButtonText: "Yes, delete it !",
    closeOnConfirm: true
  })
    .then(willDelete => {
      if (willDelete) {
        swal("Deleted!", "Your imaginary post has been deleted!", "success");
      }
    });

  //  For Already Delete Post  
  document.getElementById("myPost").style.display = "none";
  document.getElementById("otherPost").style.marginTop = "70px";
});

/*---------------------- [ Read And Less More ] -------------------------*/
// First Read More And Less For First Post 
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var linkText = document.getElementById("myBtnreadmore");

  // Puting After Dot (...) Read More Link and Action Of It 
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    linkText.innerHTML = "Read more";
    moreText.style.display = "none";
  }

  // Replace Read Less Link With Read More Link and Action Of It 
  else {
    dots.style.display = "none";
    linkText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Second Read More And Less For Second Post 
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var linkText = document.getElementById("myBtnreadmore2");

  // Puting After Dot (...) Read More Link and Action Of It 
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    linkText.innerHTML = "Read more";
    moreText.style.display = "none";
  }

  // Replace Read Less Link With Read More Link and Action Of It 
  else {
    dots.style.display = "none";
    linkText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/*------------------------- [ Post Images ] ----------------------------*/
/*    Click On Images    */
var image_traker = 1;

//  For First Image Post That Transfer Between Images When 
//  Click On At Any Location Of Photos     
function changeImg1() {
  var image = document.getElementById('postImages');
  if (image_traker == 1) {
    image.src = "images/pro1/background4.jpg";
    image_traker = 2;
  } else if (image_traker == 2) {
    image.src = "images/pro1/photo-1558976825-6b1b03a03719.jpg";
    image_traker = 3;
  } else if (image_traker == 3) {
    image.src = "images/pro1/pexels-photo-706137.jpeg";
    image_traker = 4;
  } else {
    image.src = "images/pro1/bed-with-white-bed-sheet-and-pillowcase-set-1267438.jpg";
    image_traker = 1;
  }
}

// For Second Image Post That Transfer Between Images When 
//  Click On At Any Location Of Photos     
function changeImg2() {
  var image2 = document.getElementById('postImages2');
  if (image_traker == 1) {
    image2.src = "images/pro1/photo-1569428047118-ae9338065103.jpg";
    image_traker = 2;
  } else if (image_traker == 2) {
    image2.src = "images/pro1/photo-1541194577687-8c63bf9e7ee3.jpg";
    image_traker = 3;
  } else if (image_traker == 3) {
    image2.src = "images/pro1/photo-1572177215152-32f247303126.jpg";
    image_traker = 4;
  } else if (image_traker == 4) {
    image2.src = "images/pro1/photo-1506730447-7683abca8434.jpg";
    image_traker = 5;
  } else {
    image2.src = "images/pro1/pexels-photo-1879061.jpeg";
    image_traker = 1;
  }
}

/*  Next And Previous Button  */

//  For First Image Post That Transfer Between Images When 
//  Click On The Next And Previous Icon      
var arr = new collection(["images/pro1/pexels-photo-706137.jpeg",
  "images/pro1/bed-with-white-bed-sheet-and-pillowcase-set-1267438.jpg",
  "images/pro1/background4.jpg", "images/pro1/photo-1558976825-6b1b03a03719.jpg"
]);

function collection(postImages) {
  this.postImages = postImages;
  this.i = 0;
  this.next = function (element) {
    var img = document.getElementById(element);

    this.i++;
    if (this.i >= postImages.length) {
      this.i = 0;
    }

    img.src = postImages[this.i];
  };
  this.prev = function (element) {
    var img = document.getElementById(element);

    this.i--;
    if (this.i < 0) {
      this.i = postImages.length - 1;
    }

    img.src = postImages[this.i];
  };
  this.next("postImages");
}

// For Second Image Post That Transfer Between Images When 
//  Click On The Next And Previous Icon   
var arr2 = new collection2(["images/pro1/photo-1506730447-7683abca8434.jpg",
  "images/pro1/pexels-photo-1879061.jpeg",
  "images/pro1/photo-1569428047118-ae9338065103.jpg",
  "images/pro1/photo-1541194577687-8c63bf9e7ee3.jpg",
  "images/pro1/photo-1572177215152-32f247303126.jpg"
]);

function collection2(postImages2) {
  this.postImages2 = postImages2;
  this.j = 0;
  this.next2 = function (element) {
    var img2 = document.getElementById(element);
    this.j++;
    if (this.j >= postImages2.length) {
      this.j = 0;
    }
    img2.src = postImages2[this.j];
  };
  this.prev2 = function (element) {
    var img2 = document.getElementById(element);
    this.j--;
    if (this.j < 0) {
      this.j = postImages2.length - 1;
    }
    img2.src = postImages2[this.j];
  };
  this.next2("postImages2");
}

/*--------------------- [ Post Like && DisLike ] ------------------------*/
// For Like Icon Post    
$(".like").click(function () {
  $(".like").toggleClass('likebutton-clicked');
});

// For DisLike Icon Post    
$(".dislike").click(function () {
  $(".dislike").toggleClass('dislikebutton-clicked');
});
