const elements = document.querySelectorAll(".btn-row");
let display = document.getElementById('display').textContent;
let firstNumber = '';
let secondNumber = '';
let op = '';
let result = 0;
let count = 0;

elements.forEach(element => {
    element.addEventListener("click", function(event) {
        const value = event.target.textContent;
        if(!isNaN(value)){
            if(count == 0){
                firstNumber += value;
                document.getElementById('display').textContent = firstNumber;
            }else {
                secondNumber += value;
                document.getElementById('display').textContent = secondNumber;
            }
        }else if(value == "+" || value == "-" || value == "*" || value == "/" || value == "=" || value == "C" || value == "%"){
            op = value;
            if(value == "=" && firstNumber == '' && secondNumber == ''){
                document.getElementById('display').textContent = 'Error';
                return;
            }else if(firstNumber != '' && secondNumber == 0 && op == "="){
                document.getElementById('display').textContent = 'Error';
                return;
            }
            count = 1;
            document.getElementById('display').textContent = op;
        }
        switch (op) {
            case "+":
                result = Number(firstNumber) + Number(secondNumber);  
                break;
            case "-":
                result = Number(firstNumber) - Number(secondNumber);
                break;
            case "*":
                result = Number(firstNumber) * Number(secondNumber);
                break;
            case "/":
                result = Number(firstNumber) / Number(secondNumber);
                break;
                case "%":
                result = Number(firstNumber) % Number(secondNumber);
                break;
            case "=":
                console.log(result);
                
                if(firstNumber != '' && secondNumber != ''){
                    document.getElementById('display').textContent = result;
                    firstNumber = result;
                    secondNumber = '';
                }
                break;
            case "C":
                firstNumber = '';
                secondNumber = '';
                op = '';
                result = 0;
                document.getElementById('display').textContent = result;
                count = 0;
                break;
            default:
                break;
            }
        
    });
});