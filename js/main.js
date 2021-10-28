// calling class btn_number a

let btnNumbers = document.getElementsByClassName("btn-numbers");
let btnoperators = document.getElementsByClassName("btn-ops");

let input = "";
let result = 0;
let operator =  "";

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', function (e) {
        input += e.target.innerHTML;
        document.getElementById("pinput").innerHTML = input;
        console.log(e.target.innerHTML);


    });

}

// operator

for (let i = 0; i < btnoperators.length; i++) {
    btnoperators[i].addEventListener('click', function (e) {
        document.getElementById("pinput").innerHTML = "";
        operator = e.target.innerHTML;
        result += parseInt(input);
        input = "";

    });
}
document.getElementById("btnequal").addEventListener('click', function (e){
    if (operator == "+") {
        let answer = addNumber(input);
        document.getElementById('panswer').innerHTML = answer;
    }
    else if(operator== '-'){
        let answer = substNumber(input);
        document.getElementById('panswer').innerHTML =answer; 
    }
    else if(operator=='/'){
        let answer =multNumber(input);
        document.getElementById('panswer').innerHTML =answer;
    }
    else if(operator=='x'){
        let answer = multNumber(input);
        document.getElementById('panswer').innerHTML = answer
    }

});

// calcutatio operatory using function


function addNumber(input) {
    return result + parseFloat(input);

} function substNumber(input) {
    return result - parseFloat(input);
}
function devideNumber(input) {
    return result / parseFloat(input);
}
function multNumber(input) {
    return result * parseFloat(input);
}
