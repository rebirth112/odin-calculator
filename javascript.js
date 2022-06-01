function clearScreen() {
    document.getElementById('screen').value='';
}

function show(value) {
    document.getElementById('screen').value += value;
}

function calc() {
    var a = document.getElementById('screen').value;
    if (a.includes(' sqrt')) {
        let c = a.replace(' sqrt', '');
        document.getElementById('screen').value = Math.sqrt(c);
    } else if (a.includes(' Power ')) {
        let d = a.replace(' Power ', ' ');
        let newArray = d.split(' ');
        let x = newArray[0];
        let y = newArray[1];
        document.getElementById('screen').value = Math.pow(x, y);
       } else {
        var b = eval(a);
        document.getElementById('screen').value = b;
    }
}

function backspace() {
    let currentValue = document.getElementById('screen').value;
    document.getElementById("screen").value = currentValue.substr(0, currentValue.length - 1);
}

function showOperator(value) {
    if (document.getElementById('screen').value.includes('+') ||
    document.getElementById('screen').value.includes('*') ||
    document.getElementById('screen').value.includes('/') ||
    document.getElementById('screen').value.includes('-') ||
    document.getElementById('screen').value.includes('Power')) {
        calc()
        document.getElementById('screen').value += value;
    } else {
        document.getElementById('screen').value += value;
    }
}