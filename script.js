
    const buttons = document.querySelectorAll('.button');
    console.log(buttons);
    const display = document.getElementById('display');
    let operators = ["+", '-', '/', '*', '%'];
    let op1, op2=null, operator = null;
    buttons.forEach(element => {
        element.addEventListener('click', (e) => {
            const data = e.target.dataset.value;
            console.log(e);
            if(data == 'ac') display.textContent = "";
            else if(operators.includes(data)) {
                operator = data;
                op1 = display.textContent;
                display.textContent = "";
            }
            else if(data === 'sign') {
                if(display.textContent != "") 
                    display.textContent =  -1 * display.textContent;
            }
            else if(data === '.') {
                if(!display.textContent.includes("."))
                    display.textContent += '.';
            }
            else if(data === '=') {
                op2 = display.textContent;
                if(op1 && op2 && operator) {
                    display.textContent = eval(op1 + " " + operator + " " + op2);
                    op1 = display.textContent;
                    op2 = null;
                    operator = null;
                }
            }
            else {
                display.textContent += data;
            }
        });
    });