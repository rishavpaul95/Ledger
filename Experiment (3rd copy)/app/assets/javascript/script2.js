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
        }
        else if (buttonText == 'Clear') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'Proceed') {
            screen.value = eval(screenValue);
            b = screen.value;
            document.getElementById('scr').innerHTML = b;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}