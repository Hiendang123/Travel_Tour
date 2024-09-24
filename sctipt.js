const boxes = document.querySelectorAll(".box");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  },
  { threshold: 0.5 } // Chỉ khi phần tử xuất hiện 50% trong viewport
);

boxes.forEach((box) => {
  observer.observe(box);
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: false, // Cho phép hiệu ứng chạy mỗi khi phần tử xuất hiện
    duration: 1000, // Tốc độ hiệu ứng (tuỳ chỉnh nếu cần)
  });
});

// Sử dụng IntersectionObserver để kích hoạt hiệu ứng khi phần tử vào viewport
const heading = document.querySelector(".heading");
const content = document.querySelector(".content");

const observerHeading = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heading.classList.add("animate__left");
        content.classList.add("animate__right");
      }
    });
  },
  { threshold: 0.5 }
);

// Quan sát các phần tử
observerHeading.observe(heading);
observerHeading.observe(content);

// Nếu bạn có thêm một đoạn mã khác cần IntersectionObserver, hãy dùng biến khác
const anotherElement = document.querySelector(".another-element");

const observerAnother = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anotherElement.classList.add("animate__someOtherAnimation");
      }
    });
  },
  { threshold: 0.5 }
);
 
observerAnother.observe(anotherElement);
