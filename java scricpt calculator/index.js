
let screen = document.getElementById('screen');
//if anyone click on any button of calculator
buttons = document.querySelectorAll('button');
//screen value
let screenValue = '';
//using for loop for item of button
for (item of buttons) {
    
    item.addEventListener('click', (a) => {
        //if anyone click on the targeted  button on which he/she click
        buttonText = a.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            //if button text is 5 then multiply with the number
            buttonText = '*';
            //screen value become button text
            screenValue += buttonText;
            screen.value = screenValue;
        }
        //if anyone click on the C button of calculator then screen of the calculator becomes clear
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        //if our button text is = then its evaluate screen value
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}