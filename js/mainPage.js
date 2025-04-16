// // Функция для очистки поля ввода и установки текста по умолчанию
// function clearInput(inputElement) {
//     inputElement.value = "";
// }

// Функция для очистки поля ввода и установки текста по умолчанию
function clearInput(inputElement) {
    inputElement.value = "";
}

// Функция для восстановления текста по умолчанию при клике вне поля ввода
function restoreDefaultValue(inputElement, defaultValue) {
    if (inputElement.value === "") {
        inputElement.value = defaultValue;
    }
}

// Отслеживание кликов вне полей ввода
document.addEventListener("click", function(event) {
    var inputElements = document.querySelectorAll("input[type='text']"); // Получаем все поля ввода типа "text"
    inputElements.forEach(function(inputElement) {
        if (!inputElement.contains(event.target)) { // Проверяем, что клик был сделан не внутри поля ввода
            restoreDefaultValue(inputElement, inputElement.getAttribute("data-default-value")); // Восстанавливаем значение по умолчанию
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

