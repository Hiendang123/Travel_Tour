// Function to open the modal
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'flex'; // Hiển thị modal khi gọi hàm
    }
}

// Function to close the modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none'; // Ẩn modal khi gọi hàm
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Ẩn modal khi click ra ngoài
    }
}
