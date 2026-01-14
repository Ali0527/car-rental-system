// Fill car name in booking form
function bookCar(carName) {
    document.getElementById('car').value = carName;
    document.getElementById('name').focus();
    window.location.href = "#booking"; // Scroll to booking section
}

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const car = document.getElementById('car').value;
    const name = document.getElementById('name').value;
    const days = document.getElementById('days').value;

    if(car && name && days) {
        document.getElementById('confirmation').textContent = 
        `Thank you, ${name}! You have booked ${car} for ${days} day(s).`;
        document.getElementById('bookingForm').reset();
    } else {
        alert("Please fill in all fields!");
    }
});
