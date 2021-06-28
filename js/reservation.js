
function payfunction(payment, paymenttype) {
    var i, paycontent, paylinks;
    paycontent = document.getElementsByClassName("paycontent");
    for (i = 0; i < paycontent.length; i++) {
      paycontent[i].style.display = "none";
    }
    paylinks = document.getElementsByClassName("paylinks");
    for (i = 0; i < paylinks.length; i++) {
      // paylinks[i].className = paylinks[i].className.replace(" active", "");
    }
    document.getElementById(paymenttype).style.display = "block";
    // payment.currentTarget.className += " active";
  }

  