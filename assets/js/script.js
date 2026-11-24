AOS.init();

document.addEventListener("DOMContentLoaded", function() {

    const contact = document.getElementsByClassName('contact');

    for(let i = 0; i < contact.length; i++) {

        contact[i].addEventListener("click", function() {

            window.open("https://api.whatsapp.com/send?phone=6281288806108&text=Hi%20BUANA%2C%20saya%20mau%20bertanya%20tentang%20sewa%20alat%20berat");

        });

    }

});
