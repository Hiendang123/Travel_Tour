// // Hàm để tải danh sách gói du lịch từ LocalStorage và hiển thị chúng trên bảng
// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   }
//   return str.slice(0, num) + "...";
// }

// function loadTours() {
//   const tours = JSON.parse(localStorage.getItem("tours")) || [];
//   const tourList = document.getElementById("tour-package-list");

//   // Xóa danh sách hiện tại trước khi cập nhật
//   tourList.innerHTML = "";

//   tours.forEach((tour) => {
//     const row = document.createElement("tr");

//     row.innerHTML = `
//             <td>${tour.id}</td>
//             <td>${truncateString(tour.name, 20)}</td>
//             <td>${truncateString(tour.price, 10)}</td>
//             <td>${truncateString(tour.duration, 10)}</td>
//             <td>${truncateString(tour.location, 15)}</td>
//             <td>${truncateString(tour.description, 20)}</td>
//             <td><img style="width:100%;height:80px;" src="${
//               tour.images
//             }"></img></td>
//             <td>
//                 <button class="btn btn-warning btn-sm" onclick="openTourModal(${
//                   tour.id
//                 })">Sửa</button>
//                 <button class="btn btn-danger btn-sm" onclick="deleteTour(${
//                   tour.id
//                 })">Xóa</button>
//             </td>
//         `;

//     tourList.appendChild(row);
//   });
// }

// // Hàm để xóa gói du lịch
// function deleteTour(id) {
//   let tours = JSON.parse(localStorage.getItem("tours")) || [];
//   tours = tours.filter((tour) => tour.id !== id);
//   localStorage.setItem("tours", JSON.stringify(tours));
//   loadTours();
// }

// // Khi trang được tải, gọi hàm loadTours để hiển thị danh sách gói du lịch
// document.addEventListener("DOMContentLoaded", () => {
//   loadTours();
// });

// function openTourModal(id = null) {
//   if (id) {
//     const tours = JSON.parse(localStorage.getItem("tours")) || [];
//     const tour = tours.find((t) => t.id === id);

//     if (tour) {
//       document.getElementById("tour-id").value = tour.id;
//       document.getElementById("tour-name").value = tour.name;
//       document.getElementById("tour-price").value = tour.price;
//       document.getElementById("tour-duration").value = tour.duration;
//       document.getElementById("tour-location").value = tour.location;
//       document.getElementById("tour-description").value = tour.description;
//       document.getElementById("tour-images").value = tour.images.join(",");

//       $("#tourModal").modal("show");
//     }
//   } else {
//     document.getElementById("tour-id").value = "";
//     document.getElementById("tour-name").value = "";
//     document.getElementById("tour-price").value = "";
//     document.getElementById("tour-duration").value = "";
//     document.getElementById("tour-location").value = "";
//     document.getElementById("tour-description").value = "";
//     document.getElementById("tour-images").value = "";

//     $("#tourModal").modal("show");
//   }
// }

// function saveTour() {
//   const id = document.getElementById("tour-id").value;
//   const name = document.getElementById("tour-name").value;
//   const price = document.getElementById("tour-price").value;
//   const duration = document.getElementById("tour-duration").value;
//   const location = document.getElementById("tour-location").value;
//   const description = document.getElementById("tour-description").value;
//   const images = document.getElementById("tour-images").value.split(",");

//   let tours = JSON.parse(localStorage.getItem("tours")) || [];

//   if (id) {
//     tours = tours.map((tour) =>
//       tour.id === parseInt(id)
//         ? {
//             id: parseInt(id),
//             name,
//             price,
//             duration,
//             location,
//             description,
//             images,
//           }
//         : tour
//     );
//   } else {
//     const newId =
//       tours.length > 0 ? Math.max(...tours.map((tour) => tour.id)) + 1 : 1;
//     tours.push({
//       id: newId,
//       name,
//       price,
//       duration,
//       location,
//       description,
//       images,
//     });
//   }

//   localStorage.setItem("tours", JSON.stringify(tours));
//   loadTours();
//   $("#tourModal").modal("hide");
// }

// // Đưa dữ liệu lên HTML
