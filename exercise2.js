function getNumber(num){
    var inputs = document.getElementById('input');
    switch(num){
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
    }
}

function clearScreen(){
    document.getElementById('input').value= "";
    document.getElementById('answer').value= "";
}

function getOperand(operand){
    var input = document.getElementById('input');
    switch(operand){
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case 'x':
            input.value += '*';
            break;
        case '/':
            input.value += '/';
            break;
    }
}

function compute(){
    var inputss = document.getElementById('input');
    ans = eval(inputss.value);
    document.getElementById('answer').value = '= ' + ans;
}

function cos() {
    var inputz = document.getElementById('input');
    anss = Math.cos(inputz.value);
    document.getElementById('answer').value = '= ' + anss;
}

function sin(form) {
    var inputz = document.getElementById('input');
    anss = Math.sin(inputz.value);
    document.getElementById('answer').value = '= ' + anss;
}

function sqrt(form) {
    var inputz = document.getElementById('input');
    anss = Math.sqrt(inputz.value);
    document.getElementById('answer').value = '= ' + anss;
}