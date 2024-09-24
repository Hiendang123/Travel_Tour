var user = [
    {
      id: "USER1",
      username: "admin",
      fullname: "Đặng Văn Hiền",
      sdt: "0777549640",
      email: "hiendang123@gmail.com",
      password: "1",
      role: "admin",
    },
    {
      id: "USER2",
      username: "user",
      fullname: "Lê Thành Tài",
      sdt: "0899175228",
      email: "ThanhTai123@gmail.com",
      password: "1",
      role: "user",
    },
  ];


  
  // Đẩy mảng user vào local storage
  var saveUser = function () {
    localStorage.setItem("listUser", JSON.stringify(user));
  };
  
  // Lấy list user từ Local Storage
  var loadUser = function () {
    var storedUser = JSON.parse(localStorage.getItem("listUser"));
    if (storedUser) {
      user = storedUser;
    }
  };
  
  // Kiểm tra và tải lại mảng người dùng từ localStorage khi trang được tải
  if (localStorage.getItem("listUser")) {
    loadUser();
  } else {
    saveUser(); // Nếu không có dữ liệu thì lưu mảng mặc định vào localStorage
  }
  
  // Chức năng đăng ký
  var dangky = function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
  
    // Tạo người dùng mới từ input
    var newUser = {
      id: "USER" + (user.length + 1),
      fullname: document.getElementById("fullnamed").value,
      username: document.getElementById("usernamed").value,
      phonenumber: document.getElementById("phoned").value,
      email: document.getElementById("emaild").value,
      password: document.getElementById("passwordd").value,
      role: "user",
    };
  
    // Thêm người dùng mới vào mảng user
    user.push(newUser);
  
    // Lưu mảng người dùng cập nhật vào localStorage
    saveUser();
  
    // Kiểm tra xem dữ liệu đã được lưu thành công hay chưa
    console.log(localStorage.getItem("listUser"));
  
    // Thông báo thành công
    swal("Thành Công", "Đăng ký thành công!", "success").then(() => {
      // Chuyển hướng đến trang đăng nhập sau khi hiển thị thông báo
      window.location.href = "./login.html";
    });
  };
  
  // Hàm tải danh sách người dùng từ localStorage
  var loadUser = function () {
    var storedUser = JSON.parse(localStorage.getItem("listUser"));
    if (storedUser) {
      user = storedUser;
    } else {
      console.log("No user data found in localStorage.");
    }
  };
  
  // Hàm đăng nhập
  var login = function (event) {
    event.preventDefault(); // Ngăn chặn hành vi submit form mặc định
  
    var inputLogin = document.getElementById("loginName").value; // Lấy giá trị nhập từ input (username hoặc email)
    var inputPassword = document.getElementById("loginPassword").value; // Lấy mật khẩu
    loadUser(); // Tải danh sách người dùng từ localStorage
  
    // Tìm kiếm người dùng với username hoặc email và password khớp
    var foundUser = user.find(function (u) {
      return (
        (u.username === inputLogin || u.email === inputLogin) &&
        u.password === inputPassword
      );
    });
  
    if (foundUser) {
      console.log("User found: ", foundUser); // Log người dùng tìm thấy
  
      if (foundUser.role === "admin") {
        console.log("Admin login successful. Redirecting..."); // Nếu là admin
        swal("Thành Công", "Đăng nhập thành công!", "success").then(() => {
          window.location.href = "./admin.html"; // Chuyển hướng tới trang admin sau khi thông báo hoàn tất
        });
      } else {
        swal("Thành Công", "Đăng nhập thành công!", "success").then(() => {
          window.location.href = "./Home.html"; // Chuyển hướng tới trang user sau khi thông báo hoàn tất
        });
      }
    } else {
      console.log("Login failed. Incorrect username/email or password."); // Thông báo lỗi
      swal("Lỗi", "Tên đăng nhập, email hoặc mật khẩu không đúng!", "error");
    }
  };
  
  // Kiểm tra localStorage khi tải trang
  if (localStorage.getItem("listUser") === null) {
    saveUser(); // Nếu chưa có dữ liệu, lưu mảng người dùng mặc định vào localStorage
  }
  /////

// // Hàm hiển thị người dùng
// function displayUsers() {
//   var userTableBody = document.getElementById("user-list");
//   userTableBody.innerHTML = ""; // Xóa nội dung cũ trước khi thêm mới

//   user.forEach(function (userData) {
//     var row = `
//       <tr>
//         <td>${userData.id}</td>
//         <td>${userData.username}</td>
//         <td>${userData.fullname}</td>
//         <td>${userData.sdt}</td>
//         <td>${userData.email}</td>
//         <td>${userData.password}</td>
//         <td>${userData.role}</td>
//         <td>
//           <button class="btn btn-sm btn-primary" onclick="editUser('${userData.id}')">Sửa</button>
//           <button class="btn btn-sm btn-danger" onclick="deleteUser('${userData.id}')">Xóa</button>
//         </td>
//       </tr>
//     `;
//     userTableBody.innerHTML += row;
//   });
// }

// // Gọi hàm để hiển thị danh sách người dùng khi tải trang
// document.addEventListener("DOMContentLoaded", function () {
//   displayUsers();
// });

// // Hàm sửa người dùng (chưa code đầy đủ, tùy ý bạn thêm)
// function editUser(id) {
//   alert("Sửa user với ID: " + id);
// }

// // Hàm xóa người dùng (chưa code đầy đủ, tùy ý bạn thêm)
// function deleteUser(id) {
//   alert("Xóa user với ID: " + id);
// }


var selectedUserId = null; // Biến để lưu ID user được chọn

// Hàm hiển thị người dùng
function displayUsers() {
  var userTableBody = document.getElementById("user-list");
  userTableBody.innerHTML = ""; // Xóa nội dung cũ trước khi thêm mới

  user.forEach(function (userData) {
    var row = `
      <tr>
        <td>${userData.id}</td>
        <td>${userData.username}</td>
        <td>${userData.fullname}</td>
        <td>${userData.sdt}</td>
        <td>${userData.email}</td>
        <td>${userData.password}</td>
        <td>${userData.role}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="editUser('${userData.id}')">Sửa</button>
          <button class="btn btn-sm btn-danger" onclick="deleteUser('${userData.id}')">Xóa</button>
        </td>
      </tr>
    `;
    userTableBody.innerHTML += row;
  });
}

// Gọi hàm để hiển thị danh sách người dùng khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  displayUsers();
});

// Hàm sửa người dùng
function editUser(id) {
  // Lưu lại ID người dùng đang chỉnh sửa
  selectedUserId = id;
  
  // Lấy dữ liệu người dùng từ mảng dựa trên ID
  var userData = user.find(u => u.id === id);
  
  // Đưa dữ liệu lên modal (form)
  document.getElementById("user-id").value = userData.id;
  document.getElementById("user-name").value = userData.username;
  document.getElementById("user-fullname").value = userData.fullname;
  document.getElementById("user-phone").value = userData.sdt;
  document.getElementById("user-email").value = userData.email;
  document.getElementById("user-password").value = userData.password;
  document.getElementById("user-role").value = userData.role;

  // Mở modal (form sửa user)
  $('#userModal').modal('show');
}

// Hàm lưu user sau khi chỉnh sửa
function saveUser() {
  // Kiểm tra xem có đang ở chế độ sửa hay không
  if (selectedUserId) {
    // Tìm người dùng trong mảng và cập nhật dữ liệu
    user = user.map(u => {
      if (u.id === selectedUserId) {
        return {
          id: selectedUserId,
          username: document.getElementById("user-name").value,
          fullname: document.getElementById("user-fullname").value,
          sdt: document.getElementById("user-phone").value,
          email: document.getElementById("user-email").value,
          password: document.getElementById("user-password").value,
          role: document.getElementById("user-role").value,
        };
      }
      return u;
    });

    // Đặt lại selectedUserId để không còn ở chế độ sửa
    selectedUserId = null;
  } else {
    // Nếu không có ID user chọn, tức là đang thêm user mới
    var newUser = {
      id: "USER" + (user.length + 1), // Tạo ID mới dựa trên số lượng user hiện tại
      username: document.getElementById("user-name").value,
      fullname: document.getElementById("user-fullname").value,
      sdt: document.getElementById("user-phone").value,
      email: document.getElementById("user-email").value,
      password: document.getElementById("user-password").value,
      role: document.getElementById("user-role").value,
    };
    user.push(newUser);
  }

  // Đóng modal và cập nhật lại danh sách người dùng
  $('#userModal').modal('hide');
  displayUsers();
}

// Hàm xóa người dùng
function deleteUser(id) {
  // Xác nhận trước khi xóa
  if (confirm("Bạn có chắc chắn muốn xóa user này?")) {
    // Lọc ra các user không phải là user cần xóa
    user = user.filter(u => u.id !== id);
    displayUsers(); // Cập nhật lại danh sách
  }
}