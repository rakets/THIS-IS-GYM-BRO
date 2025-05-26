// // Функция для очистки поля ввода и установки текста по умолчанию
// function clearInput(inputElement) {
//     inputElement.value = "";
// }

// A function for clearing the input field and setting the default text
function clearInput(inputElement) {
    inputElement.value = "";
}

// A function to restore the default text when clicked outside the input field
function restoreDefaultValue(inputElement, defaultValue) {
    if (inputElement.value === "") {
        inputElement.value = defaultValue;
    }
}

// Tracking clicks outside the input fields
document.addEventListener("click", function(event) {
    var inputElements = document.querySelectorAll("input[type='text']"); // We get all the input fields of the "text" type
    inputElements.forEach(function(inputElement) {
        if (!inputElement.contains(event.target)) { // We check that the click was not made inside the input field.
            restoreDefaultValue(inputElement, inputElement.getAttribute("data-default-value")); // Restoring the default value
        }
    });
});

function openPDF(way){
    window.open(way, '_blank');
}

// function to send message in "Contact"
function writeLetter(form, event){
    event.preventDefault(); 

    let nameUser = form.name.value;
    let emailUser = form.email.value;
    const emailTo = "vushkevih@gmail.com";

    if(nameUser == ""){
        alert("Please write your name");
        return;
    }
    if(emailUser == ""){
        alert("Please write text of your letter");
        return;
    }
    const subject = `Piśmo klienta ${nameUser}` ;
    const body = `Hello!\n\n My name is ${nameUser}\n\n ${emailUser}\n\nWith best regards,\n ${nameUser}`;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
}

// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById('burger-button');
    const menu = document.getElementById('main-menu');

    if (burgerButton && menu) {
        burgerButton.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }
});


