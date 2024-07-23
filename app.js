function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;
    const guests = document.getElementById('guests').value;

    if (!name || !email || !checkin || !checkout || !rooms || !guests) {
        alert('Please fill out all fields');
        return;
    }

    const bookingDetails = {
        name,
        email,
        checkin,
        checkout,
        rooms,
        guests
    };

    console.log('Booking Details:', bookingDetails);
    alert('Booking Successful! Check the console for details.');
}