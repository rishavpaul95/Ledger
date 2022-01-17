document.querySelector("#but-Clear").addEventListener("click", () => {
    document.querySelector("#sc").value = "";
})
let screen = document.getElementById('sc');
buttons = document.getElementsByClassName('cal-but');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'Clear') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else if (buttonText == 'Proceed') {
            screen.value = eval(screenValue);
            b = screen.value;
            document.getElementById('calculation_value').value = b;
            const btn = document.getElementById("modal-close");
            var close_modal_event = new Event('click');
            btn.dispatchEvent(close_modal_event);

        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}