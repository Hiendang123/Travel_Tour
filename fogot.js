var emailToForgot;

function forgot() {
  var login1 = document.getElementById("login1");
  var login2 = document.getElementById("login2");

  var ussername = document.getElementById("ussername").value;

  var storedUser = JSON.parse(localStorage.getItem("listUser"));

  var filter = storedUser.filter((item) => item.username == ussername);

  if (filter.length == 0) {
    swal("fail", "Forgot password failed!", "failed");
  } else {
    login1.style.display = "none";
    login2.style.display = "block";
    emailToForgot = filter;
  }
}

function forgott() {
  var newpass = document.getElementById("newpass").value;
  var confirmpass = document.getElementById("comfirmpass").value;
  var storedUser = JSON.parse(localStorage.getItem("listUser"));

  console.log(emailToForgot);
  if (newpass != confirmpass) {
    alert("Mật khẩu xác nhận không đúng");
  } else {
    for (var i = 0; i < storedUser.length; i++) {
      if (emailToForgot[0].email == storedUser[i].email) {
        storedUser[i].password = newpass;
        localStorage.setItem("listUser", JSON.stringify(storedUser));
        window.location.href = "./index.html";
      }
    }
  }
}
