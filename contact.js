
document.addEventListener("DOMContentLoaded", function () {

    let contactForm = document.forms.contactForm;

    let contactSpan = document.querySelector('.ContactbtnClose');

    contactForm.onsubmit = function (evt) {
        evt.preventDefault();




        let name = contactForm['firstLastname'].value;
        let select = contactForm['contactSelect'].value;
        let textArea = contactForm['contactTextArea'].value;
        let message = document.querySelector('#contactMessage');
        message.innerHTML = `Tack för ditt mail ${name}!
        vi återkopplar snart.`;


        let contactModal = document.querySelector('#contactModal');
        contactModal.style.display = 'block';


        console.log(name, select, textArea, message);

    };


    contactSpan.onclick = function () {
        contactModal.style.display = 'none';

    }

    window.onclick = function (e) {
        if (e.target == contactModal) {
            contactModal.style.display = 'none';
        }
    }

})






