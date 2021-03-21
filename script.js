function numOne() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let one = 1;
    document.getElementById('ans').appendChild(document.createTextNode(one));
}
function numTwo() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let two = 2;
    document.getElementById('ans').appendChild(document.createTextNode(two));
}
function numThree() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let three = 3;
    document.getElementById('ans').appendChild(document.createTextNode(three));
}
function numFour() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let four = 4;
    document.getElementById('ans').appendChild(document.createTextNode(four));
}
function numFive() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let five = 5;
    document.getElementById('ans').appendChild(document.createTextNode(five));
}
function numSix() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let six = 6;
    document.getElementById('ans').appendChild(document.createTextNode(six));
}
function numSeven() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let seven = 7;
    document.getElementById('ans').appendChild(document.createTextNode(seven));
}
function numEight() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let eight = 8;
    document.getElementById('ans').appendChild(document.createTextNode(eight));
}
function numNine() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let nine = 9;
    document.getElementById('ans').appendChild(document.createTextNode(nine));
}
function numZero() {
    let num = document.getElementById('ans').textContent;
    if (num == '0') {
        document.getElementById('ans').textContent = "";
    }
    let zero = 0;
    document.getElementById('ans').appendChild(document.createTextNode(zero));
}
function numDot() {
    let dot = "." ;
    document.getElementById('ans').appendChild(document.createTextNode(dot));
}

function operClear() {
    document.getElementById('ans').textContent = "0";
}
function operAdd() {
    let plus = '+';
    // let add = one + two;
    document.getElementById('ans').appendChild(document.createTextNode(plus));
}

function operSub() {
    let sub = '-';
    // let add = one + two;
    document.getElementById('ans').appendChild(document.createTextNode(sub));
}
function operMul() {
    let mul = 'x';
    // let add = one + two;
    document.getElementById('ans').appendChild(document.createTextNode(mul));
}

function operDiv() {
    let div = '÷';
    // let add = one + two;
    document.getElementById('ans').appendChild(document.createTextNode(div));
}

function operEqual() {
    // let res = eval(document.getElementById('ans'));
    let num = document.getElementById('ans').textContent;
    let num1 = num.replace(/x/g, "*");
    let num2 = num1.replace(/÷/g, "/");
    let sum = eval(num2);
    document.getElementById('ans').textContent = "";
    document.getElementById('ans').textContent = sum;
    console.log(sum);
}