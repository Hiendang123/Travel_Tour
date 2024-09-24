var tours = [
    {
      id: 1,
      name: "Đà Nẵng",
      price: "4.500.000",
      duration: "3 ngày 2 đêm",
      location: "Cầu Vàng",
      description: "Có thể bạn sẽ phải....",
      images:
        "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
    },
    {
      id: 2,
      name: "Quảng Nam",
      price: "2.499.000",
      duration: "2 ngày 1 đêm",
      location: "Hội An",
      description: "Phố cổ Hội An",
      images:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg",
    },
    {
      id: 3,
      name: "Đà Lạt",
      price: "4.950.000",
      duration: "3 ngày 2 đêm",
      location: "Đỉnh PINHATT",
      description: "Đến đây bạn có thể săn mây",
      images:
        "https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-6.jpg?tr=dpr-2,w-675",
    },
    {
      id: 4,
      name: "Nha Trang",
      price: "3.990.000",
      duration: "3 ngày 2 đêm",
      location: "Vinpearl Land",
      description: "Toạ lạc trên đảo Hòn Tre xinh đẹp giữa biển khơi ",
      images:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/04/vinpearl-nha-trang-768x432.jpg",
    },
    {
      id: 5,
      name: "Hà Nội",
      price: "1.999.000",
      duration: "2 ngày 1 đêm",
      location: "Chùa Trấn Quốc",
      description: "Một trong các điểm du lịch Hà Nội ",
      images:
        "https://ik.imagekit.io/tvlk/blog/2017/06/kham-pha-cac-dia-diem-du-lich-o-ha-noi-ma-ban-khong-the-bo-qua-3.jpg?tr=dpr-2,w-675",
    },
    {
      id: 6,
      name: "Hà Nội",
      price: "3.050.000",
      duration: "3 ngày 2 đêm",
      location: "Thuỷ cung Times City",
      description: "Thuỷ cung duy nhất tại Hà Nội",
      images:
        "https://ik.imagekit.io/tvlk/blog/2022/08/Screen-Shot-2022-08-22-at-11.30.47-1024x682.png?tr=dpr-2,w-675",
    },
    {
      id: 7,
      name: "Hà Nội",
      price: "3.599.000",
      duration: "3 ngày 2 đêm",
      location: "Phố cổ Hà Nội",
      description: "Phố Cổ là những ngôi nhà, con đường, góc phố",
      images:
        "https://ik.imagekit.io/tvlk/blog/2017/06/kham-pha-cac-dia-diem-du-lich-o-ha-noi-ma-ban-khong-the-bo-qua-5.jpg?tr=dpr-2,w-675",
    },
    {
      id: 8,
      name: "Đà Nẵng",
      price: "5.000.000",
      duration: "4 ngày 3 đêm",
      location: "Da Nang DownTown",
      description: "Trình diễn múa nước",
      images:
        "https://www.vietnambooking.com/wp-content/uploads/2019/07/asia-park-da-nang-19072019-1.jpg",
    },
    {
      id: 9,
      name: "Hà Nội",
      price: "5.050.000",
      duration: "4 ngày 2 đêm",
      location: "Mega Grand World Hà Nội",
      description: " giải trí, văn hóa và ẩm thực đa dạng",
      images:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1719994337/o8lj76yqhbbmiqbn82af.webp",
    },
    {
      id: 10,
      name: "TP. Hồ Chí Minh",
      price: "3.590.000",
      duration: "3 ngày 2 đêm",
      location: "Dinh Độc Lập",
      description: "lưu giữ những dấu mốc đáng tự hào của dân tộc",
      images:
        "https://lh3.googleusercontent.com/zEKzZBVplA4mBq6TBgW1Ofi6cmh_6sEta7Q4U6zPTgQoC79arEjbeNvPXmABlAvrxylWPeX4wJWe-EoBKnECC0w625cg0ylNIIXbwFoY2RR-rEMuIAV0L27XwhVvsxX516shsSX3I7qHkt9Xh13A6go",
    },
    {
      id: 11,
      name: "TP. Hồ Chí Minh",
      price: "3.690.000",
      duration: "3 ngày 2 đêm",
      location: "Địa đạo củ chi",
      description: "Địa đạo Củ Chi là một điểm du lịch nổi tiếng ở Việt Nam",
      images:
        "https://lh5.googleusercontent.com/qGwjokO-2yegHswtiD2ZijIuKIgzR_NNKfAyC3h-O6g4VdkIzrjlzLyPhEfY2GWJr1kfYTDMw7iZDBJrWi3e71UDA2xyGyF4ZyhFTqLEEH7EpwLQxH54-9HY5Eml4m4WYtlGzm8UV0MbEQ4BQbPR5Uk",
    },
    {
      id: 12,
      name: "Quảng Nam",
      price: "3.000.000",
      duration: "4 ngày 3 đêm",
      location: "VinWonders Nam Hội An",
      description: "thế giới của các hoạt động vui chơi giải trí",
      images:
        "https://static.vinwonders.com/2022/12/dia-diem-du-lich-quang-nam-4-1.jpg",
    },
    {
      id: 13,
      name: "Quảng Nam",
      price: "2.599.000",
      duration: "3 ngày 2 đêm",
      location: "Đảo Tam Hải",
      description: "Tam Hải là một xã đảo bình yên",
      images:
        "https://static.vinwonders.com/2022/12/JpjDF3f8-dia-diem-du-lich-quang-nam-7.jpg",
    },
    {
      id: 14,
      name: "Đà Lạt",
      price: "3.999.000",
      duration: "3 ngày 2 đêm",
      location: "Thác Datanla",
      description: "Địa điểm vui chơi",
      images:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1724667838/avldqqassstdnqmanupp.webp",
    },
    {
      id: 15,
      name: "Đà Lạt",
      price: "3.599.000",
      duration: "2 ngày 1 đêm",
      location: "Lululola Show",
      description: "Show Diễn Âm Nhạc Đỉnh Cao",
      images:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1712052455/juytgsfzqxwhk9bjpos9.webp",
    },
    {
      id: 16,
      name: "Đà Lạt",
      price: "5.250.000",
      duration: "4 ngày 3 đêm",
      location: "Thung Lũng Tình Yêu",
      description: "Thích hợp cho các cặp đôi",
      images:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1718268650/papcic8lj3yjgnxr3tkb.webp",
    },
    {
      id: 17,
      name: "Nha Trang",
      price: "5.325.000",
      duration: "4 ngày 3 đêm",
      location: "Công viên giải trí VinWonders",
      description: "trải nghiệm chặng cáp treo vượt biển dài nhất Việt Nam",
      images:
        "https://tourion.vn/wp-content/uploads/2023/06/tourion-cong-vien-giai-tri-vinwonders-nha-trang-trai-nghiem-thu-vi-khi-du-lich-nha-trang.jpg",
    },
    {
      id: 18,
      name: "Nha Trang",
      price: "4.990.000",
      duration: "3 ngày 2 đêm",
      location: "Hòn Tre",
      description: "hòn đảo lớn nhất vịnh Nha Trang",
      images:
        "https://homepage.momocdn.net/blogscontents/momo-upload-api-220916135025-637989330250363011.png",
    },
    {
      id: 19,
      name: "Đà Nẵng",
      price: "3.990.000",
      duration: "3 ngày 2 đêm",
      location: "Ghềnh Bàng",
      description: "Thu hút khách du lịch đông đảo",
      images:
        "https://statics.vinpearl.com/dia-diem-du-lich-da-nang-2_1631853665.jpg",
    },
    {
      id: 20,
      name: "TP. Hồ Chí Minh",
      price: "1.200.000",
      duration: "2 ngày 1 đêm",
      location: "Du thuyền Sài Gòn ăn tối",
      description: "Ăn tối với du thuyền sang trọng",
      images:
        "https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85/q_85/activities/fubnzq6m8wq5qtrrkcc5.webp",
    },
    {
      id: 21,
      name: "Quảng Nam",
      price: "3.500.000",
      duration: "3 ngày 2 đêm",
      location: "Bán đảo Sơn Trà",
      description: "Bạn có thể thấy khỉ ở đây và khung cảnh tuyệt vời",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMqNpHG-GMk6pBzCrPtUXGAppCeKl1huCZHydItC0iuZ5HDAiZV4cqWO3_XB4nftnYKw&usqp=CAU",
    },
  ];
  localStorage.setItem("tours", JSON.stringify(tours));
  
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  
  function loadTours() {
    const tours = JSON.parse(localStorage.getItem("tours")) || [];
    const tourList = document.getElementById("tour-package-list");
  
    // Xóa danh sách hiện tại trước khi cập nhật
    tourList.innerHTML = "";
  
    tours.forEach((tour) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
              <td>${tour.id}</td>
              <td>${truncateString(tour.name, 20)}</td>
              <td>${truncateString(tour.price, 10)}</td>
              <td>${truncateString(tour.duration, 10)}</td>
              <td>${truncateString(tour.location, 15)}</td>
              <td>${truncateString(tour.description, 20)}</td>
              <td><img style="width:100%;height:80px;" src="${
                tour.images
              }"></img></td>
              <td>
                  <button class="btn btn-warning btn-sm" onclick="openTourModal(${
                    tour.id
                  })">Sửa</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteTour(${
                    tour.id
                  })">Xóa</button>
              </td>
          `;
  
      tourList.appendChild(row);
    });
  }
  
  // Hàm để xóa gói du lịch
  function deleteTour(id) {
    let tours = JSON.parse(localStorage.getItem("tours")) || [];
    tours = tours.filter((tour) => tour.id !== id);
    localStorage.setItem("tours", JSON.stringify(tours));
    loadTours();
  }
  
  // Khi trang được tải, gọi hàm loadTours để hiển thị danh sách gói du lịch
  document.addEventListener("DOMContentLoaded", () => {
    loadTours();
  });
  
  function openTourModal(id = null) {
    if (id) {
      const tours = JSON.parse(localStorage.getItem("tours")) || [];
      const tour = tours.find((t) => t.id === id);
  
      if (tour) {
        document.getElementById("tour-id").value = tour.id;
        document.getElementById("tour-name").value = tour.name;
        document.getElementById("tour-price").value = tour.price;
        document.getElementById("tour-duration").value = tour.duration;
        document.getElementById("tour-location").value = tour.location;
        document.getElementById("tour-description").value = tour.description;
        document.getElementById("tour-images").value = tour.images;  // Sửa chỗ này để lưu chuỗi ảnh
  
        $("#tourModal").modal("show");
      }
    } else {
      document.getElementById("tour-id").value = "";
      document.getElementById("tour-name").value = "";
      document.getElementById("tour-price").value = "";
      document.getElementById("tour-duration").value = "";
      document.getElementById("tour-location").value = "";
      document.getElementById("tour-description").value = "";
      document.getElementById("tour-images").value = "";  // Để trống khi tạo mới
  
      $("#tourModal").modal("show");
    }
  }
  
  
  function saveTour() {
    const id = document.getElementById("tour-id").value;
    const name = document.getElementById("tour-name").value;
    const price = document.getElementById("tour-price").value;
    const duration = document.getElementById("tour-duration").value;
    const location = document.getElementById("tour-location").value;
    const description = document.getElementById("tour-description").value;
    const images = document.getElementById("tour-images").value; // Chỉ lưu chuỗi
  
    let tours = JSON.parse(localStorage.getItem("tours")) || [];
  
    if (id) {
      tours = tours.map((tour) =>
        tour.id === parseInt(id)
          ? {
              id: parseInt(id),
              name,
              price,
              duration,
              location,
              description,
              images,  // Sử dụng chuỗi hình ảnh
            }
          : tour
      );
    } else {
      const newId =
        tours.length > 0 ? Math.max(...tours.map((tour) => tour.id)) + 1 : 1;
      tours.push({
        id: newId,
        name,
        price,
        duration,
        location,
        description,
        images,  // Sử dụng chuỗi hình ảnh
      });
    }
  
    localStorage.setItem("tours", JSON.stringify(tours));
    loadTours();
    $("#tourModal").modal("hide");
  }
  
  
  function displayTours() {
      const storedTours = localStorage.getItem('tours');
      const tours = storedTours ? JSON.parse(storedTours) : [];
      const packageGrid = document.querySelector('.package-grid');
  
      packageGrid.innerHTML = '';
  
      if (!packageGrid) {
          console.error('Không tìm thấy phần tử package-grid');
          return;
      }
      tours.forEach(tour => {
          const card = document.createElement('div');
          card.className = 'package-card';
          
          card.innerHTML = `
              <img style="width:100%;height:40%;" src="${tour.images}">
              <div class="card-content">
                  <h3 style="height:30px;">${truncateString(tour.name, 25)}</h3>
                  <p class="price">${truncateString(tour.price, 20)}</p>
                  <p style="height:30%" class="description">${truncateString(tour.description, 200)}</p>
                  <button onclick="bookTour()">Đặt Ngay</button>
              </div>
          `;
          packageGrid.appendChild(card);
      });
  }
  
  document.addEventListener("DOMContentLoaded", displayTours);
  
  