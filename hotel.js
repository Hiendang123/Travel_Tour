// Hàm cắt chuỗi (truncateString)

var hotels = [
  {name: "Melia Hanoi", price: 2500000, location: "Hoan Kiem - Ha Noi", description: "Khách sạn sang trọng tại trung tâm thành phố", img: ""},
  {name: "Sofitel Legend Metropole Hanoi", price: 4000000, location: "Hoan Kiem - Ha Noi", description: "Khách sạn lịch sử với phong cách cổ điển", img: ""},
  {name: "Hilton Hanoi Opera", price: 2200000, location: "Hoan Kiem - Ha Noi", description: "Khách sạn gần Nhà hát Lớn Hà Nội", img: ""},
  {name: "Lotte Hotel Hanoi", price: 3000000, location: "Ba Dinh - Ha Noi", description: "Khách sạn 5 sao với tầm nhìn toàn cảnh", img: ""},
  {name: "JW Marriott Hotel Hanoi", price: 5000000, location: "Nam Tu Liem - Ha Noi", description: "Khách sạn đẳng cấp quốc tế", img: ""},
  {name: "InterContinental Hanoi Westlake", price: 3500000, location: "Tay Ho - Ha Noi", description: "Khách sạn ven hồ Tây", img: ""},
  
  {name: "The Reverie Saigon", price: 6000000, location: "District 1 - Ho Chi Minh", description: "Khách sạn 5 sao với nội thất sang trọng", img: ""},
  {name: "Caravelle Saigon", price: 3500000, location: "District 1 - Ho Chi Minh", description: "Khách sạn lịch sử tại trung tâm thành phố", img: ""},
  {name: "Rex Hotel Saigon", price: 3000000, location: "District 1 - Ho Chi Minh", description: "Khách sạn cổ điển với lịch sử phong phú", img: ""},
  {name: "Park Hyatt Saigon", price: 5500000, location: "District 1 - Ho Chi Minh", description: "Khách sạn 5 sao với dịch vụ đẳng cấp", img: ""},
  {name: "Pullman Saigon Centre", price: 2300000, location: "District 1 - Ho Chi Minh", description: "Khách sạn hiện đại với tiện nghi cao cấp", img: ""},
  {name: "New World Saigon Hotel", price: 2700000, location: "District 1 - Ho Chi Minh", description: "Khách sạn nổi tiếng tại trung tâm thành phố", img: ""},
  
  {name: "Muong Thanh Luxury Da Nang", price: 2300000, location: "Ngu Hanh Son - Da Nang", description: "Khách sạn gần biển với dịch vụ sang trọng", img: ""},
  {name: "Vinpearl Condotel Riverfront Da Nang", price: 2700000, location: "Hai Chau - Da Nang", description: "Khách sạn hiện đại bên bờ sông Hàn", img: ""},
  {name: "Grand Mercure Danang", price: 2500000, location: "Hai Chau - Da Nang", description: "Khách sạn với thiết kế hiện đại", img: ""},
  {name: "InterContinental Danang Sun Peninsula Resort", price: 10000000, location: "Son Tra - Da Nang", description: "Khu nghỉ dưỡng đẳng cấp quốc tế", img: ""},
  {name: "Novotel Danang Premier Han River", price: 3000000, location: "Hai Chau - Da Nang", description: "Khách sạn cao cấp bên sông Hàn", img: ""},
  {name: "Fusion Maia Danang", price: 4500000, location: "Ngu Hanh Son - Da Nang", description: "Khu nghỉ dưỡng sang trọng ven biển", img: ""},
];
hotels.forEach((hotels, index) => {
  hotels.id = index + 1; 
});
localStorage.setItem("hotels", JSON.stringify(hotels));
function truncateString(str, num) {
  if (typeof str !== "string" || typeof num !== "number") {
    return "Invalid input";
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function loadHotels() {
  const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
  const hotelList = document.getElementById("hotel-package-list");

  if (hotels.length === 0) {
    hotelList.innerHTML =
      "<tr><td colspan='7'>Không có khách sạn nào!</td></tr>";
    return;
  }

  hotelList.innerHTML = hotels
    .map((hotel) => {
      console.log("Hotel images:", hotel.images); // Kiểm tra các ảnh

      // Kiểm tra và xử lý trường hợp hình ảnh không hợp lệ hoặc rỗng
      const imagesHTML =
        Array.isArray(hotel.images) && hotel.images.length > 0
          ? hotel.images
              .map((img) =>
                img
                  ? `<img src="${img}" alt="Hotel Image" width="80" height="80" onerror="this.onerror=null;this.src='fallback.jpg';" />`
                  : ""
              )
              .join("")
          : "No images available";

      return `
              <tr>
                <td>${hotel.id}</td>
                <td>${hotel.name}</td>
                <td>${hotel.location}</td>
                <td>${truncateString(
                  hotel.description,
                  100
                )}</td> <!-- Cắt ngắn mô tả -->
                <td>${hotel.price}</td>
                <td>${imagesHTML}</td>
                <td>
                  <button class="btn btn-warning" onclick="openHotelModal(${
                    hotel.id
                  })">Sửa</button>
                  <button class="btn btn-danger" onclick="deleteHotel(${
                    hotel.id
                  })">Xóa</button>
                </td>
              </tr>
            `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  loadHotels();
  document.getElementById("addHotelBtn").addEventListener("click", function () {
    openHotelModal();
  });
});

function openHotelModal(id = null) {
  if (id) {
    // Nếu có id thì đang ở chế độ chỉnh sửa
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const hotel = hotels.find((h) => h.id === id);

    if (hotel) {
      document.getElementById("hotel-id").value = hotel.id;
      document.getElementById("hotel-name").value = hotel.name;
      document.getElementById("hotel-price").value = hotel.price;
      document.getElementById("hotel-location").value = hotel.location;
      document.getElementById("hotel-description").value =
        hotel.description || "";
      document.getElementById("hotel-images").value = hotel.images.join(",");
    }
  } else {
    // Nếu không có id thì đang ở chế độ thêm mới
    document.getElementById("hotel-id").value = "";
    document.getElementById("hotel-name").value = "";
    document.getElementById("hotel-price").value = "";
    document.getElementById("hotel-location").value = "";
    document.getElementById("hotel-description").value = "";
    document.getElementById("hotel-images").value = "";
  }
  // Hiển thị modal
  $("#hotelModal").modal("show");
}

function saveHotel() {
  const id = document.getElementById("hotel-id").value;
  const name = document.getElementById("hotel-name").value;
  const price = document.getElementById("hotel-price").value;
  const location = document.getElementById("hotel-location").value;
  const description = document.getElementById("hotel-description").value;
  let images = document.getElementById("hotel-images").value.trim();
  console.log(images);

  images = images ? images.split(",").map((img) => img.trim()) : [];
  console.log("Saving hotel with data:", {
    id,
    name,
    price,
    location,
    description,
    images,
  });

  let hotels = JSON.parse(localStorage.getItem("hotels")) || [];

  if (id) {
    // Chỉnh sửa khách sạn
    hotels = hotels.map((hotel) =>
      hotel.id === parseInt(id)
        ? { id: parseInt(id), name, price, location, description, images }
        : hotel
    );
  } else {
    // Thêm khách sạn mới
    const newId =
      hotels.length > 0 ? Math.max(...hotels.map((hotel) => hotel.id)) + 1 : 1;
    hotels.push({ id: newId, name, price, location, description, images });
  }

  console.log("Updated hotels list:", hotels);

  // Lưu vào localStorage
  localStorage.setItem("hotels", JSON.stringify(hotels));
  loadHotels();
  $("#hotelModal").modal("hide");
}

// Hàm xóa khách sạn
function deleteHotel(id) {
  let hotels = JSON.parse(localStorage.getItem("hotels")) || [];
  hotels = hotels.filter((hotel) => hotel.id !== id);
  localStorage.setItem("hotels", JSON.stringify(hotels));
  loadHotels();
}

// Hiển thị danh sách khách sạn khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
  loadHotels();

  // Đảm bảo rằng nút "Thêm khách sạn" hoạt động
  document.getElementById("addHotelBtn").addEventListener("click", function () {
    openHotelModal();
  });
});

function load() {
  var listhotels = localStorage.getItem("hotels");
  if (listhotels) {
    hotels = JSON.parse(listhotels);
  } else {
    localStorage.setItem("listhotels", JSON.stringify(hotels));
  }
}

load();

function listload() {
  var listHotelHTML = "";
  for (var i in hotels) {
    var data = hotels[i];
    listHotelHTML += '<div class="tour-wrap">';
    listHotelHTML += '<a href="./detail1.html" class="tour-entry animate-box">';
    listHotelHTML += `<div class="tour-img" style="background-image: url('${data.images[0]}')"></div>`;
    listHotelHTML += '<span class="desc">';
    listHotelHTML +=
      '<p class="star"><span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>545 Reviews</p>';
    listHotelHTML += "<h2>Athens, Greece</h2>";
    listHotelHTML += '<span class="city">Athens, Greece</span>';
    listHotelHTML += '<span class="price">$450</span>';
    listHotelHTML += "</span>";
    listHotelHTML += "</a>";
    listHotelHTML += "</div>";
  }
  var card = document.getElementById("card");
  if (card) {
    card.innerHTML = listHotelHTML;
  } else {
    console.error('Element with id "card" not found.');
  }
}
console.log(data.images);

listload();
