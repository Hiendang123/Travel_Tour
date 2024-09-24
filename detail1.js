// Select the main image and all thumbnails
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-images img');

// Loop through each thumbnail
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // When a thumbnail is clicked, change the main image's src to the clicked thumbnail's src
        mainImage.src = thumbnail.src;

        // Optionally, you can add a class to highlight the selected thumbnail
        thumbnails.forEach(img => img.classList.remove('active-thumbnail')); // Remove active class from all thumbnails
        thumbnail.classList.add('active-thumbnail'); // Add active class to the clicked thumbnail
    });
});

// Lấy ID từ URL
function getHotelId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Hiển thị chi tiết khách sạn
function displayHotelDetails() {
    const hotelId = getHotelId();
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const hotel = hotels.find(h => h.id == hotelId);

    if (hotel) {
        document.querySelector('.hotel-details h2').textContent = hotel.name;
        document.querySelector('.hotel-type').innerHTML = `Khách Sạn <span class="stars">${'★'.repeat(hotel.stars)}</span>`;
        document.querySelector('.price-amount').textContent = `${hotel.price} VND`;

        // Hiển thị hình ảnh chính
        document.querySelector('.main-image img').src = hotel.images[0];

        // Hiển thị hình ảnh thu nhỏ
        const thumbnailContainer = document.querySelector('.thumbnail-images');
        thumbnailContainer.innerHTML = hotel.images.map(img => `<img src="${img}" alt="Room thumbnail">`).join('');
    } else {
        // Xử lý trường hợp không tìm thấy khách sạn
        document.querySelector('.hotel-details h2').textContent = 'Khách sạn cao cấp';
    }
}

// Khi trang chi tiết được tải
document.addEventListener('DOMContentLoaded', displayHotelDetails);

function getHotelId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Hàm này sẽ được gọi khi trang chi tiết được tải
document.addEventListener('DOMContentLoaded', function() {
    const hotelId = getHotelId();
    console.log('Hotel ID:', hotelId);
    // Dựa vào ID, bạn có thể tìm kiếm thông tin khách sạn trong localStorage hoặc cơ sở dữ liệu để hiển thị
});


const hotels = [
    {
        id: 1,
        name: 'Hanoi Paradise Center Hotel & Spa',
        stars: 5,
        price: '1.270.000',
        images: ['img/Hotel/hotel-hanoi.webp', 'img/Hotel/hotel-hanoi2.webp'],
        location: 'Quận Hoàn Kiếm, Hà Nội',
        description: 'Khách sạn với tiện nghi hiện đại tại trung tâm Hà Nội.'
    },
    // Thêm các khách sạn khác
];

localStorage.setItem('hotels', JSON.stringify(hotels));
