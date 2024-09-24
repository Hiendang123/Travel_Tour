// Lấy ID từ URL
function getHotelId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Hàm để hiển thị chi tiết khách sạn
function displayHotelDetail() {
    const id = getHotelId();
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const hotel = hotels.find(h => h.id == id); // Tìm khách sạn theo ID

    if (hotel) {
        document.querySelector('.hotel-name').textContent = hotel.name;
        document.querySelector('#hotel-location').textContent = hotel.location;
        document.querySelector('#hotel-price').textContent = `${hotel.price} VND`;
        document.querySelector('#hotel-description').textContent = hotel.description;
        // Hiển thị hình ảnh
        const imageContainer = document.querySelector('.slider');
        imageContainer.innerHTML = hotel.images.map(img => `
            <div class="item">
                <img src="${img}" alt="Hotel Image" class="img-fluid">
            </div>
        `).join('');
        
        // Khởi tạo slider nếu có
        sliderGallery(); // Nếu bạn đã có hàm này
    } else {
        // Xử lý trường hợp không tìm thấy khách sạn
        document.querySelector('.hotel-name').textContent = "Khách sạn không tồn tại.";
    }
}


function listload() {
    var listHotelHTML = "";
    for (var i in hotels) {
        var data = hotels[i];
        console.log(`URL: detail1.html?id=${data.id}`);  // Kiểm tra URL xem có đúng không
        listHotelHTML += '<div class="tour-wrap">';
        listHotelHTML += `<a href="./detail1.html?id=${data.id}" class="tour-entry animate-box">`; // Chuyển hướng với ID
        listHotelHTML += `<div class="tour-img" style="background-image: url('${data.images[0] || 'fallback.jpg'}')"></div>`;
        listHotelHTML += '<span class="desc">';
        listHotelHTML += '<p class="star"><span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>545 Reviews</p>';
        listHotelHTML += `<h2>${data.name}</h2>`;
        listHotelHTML += `<span class="city">${data.location}</span>`;
        listHotelHTML += `<span class="price">${data.price} VND</span>`;
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



// Khi trang chi tiết được tải
document.addEventListener('DOMContentLoaded', displayHotelDetail);
