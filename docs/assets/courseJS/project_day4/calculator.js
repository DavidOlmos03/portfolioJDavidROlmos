function getNumber1(){
    var number1 = document.getElementById("firstNumber").value;
    return number1;
}
function getNumber2(){
    var number2 = document.getElementById("secondNumber").value;
    return number2;
}

function showResult(result){
    document.getElementById("result").value = result;
    /*
    let resultado = document.getElementById("result").value;
    resultado = result;*/
}
function addition(){
    let addition = +getNumber1() + +getNumber2();
    showResult(addition);
}
function subtraction(){
    let subtraction = +getNumber1() - +getNumber2();
    showResult(subtraction);
}
function multiplication(){
    let multiplication = +getNumber1() * +getNumber2();
    showResult(multiplication);
}
function division(){
    let division = +getNumber1() / +getNumber2();
    showResult(division);
}
function square_root(){
    let sqrt = Math.sqrt(getNumber1());
    showResult(sqrt);
}
function power(){
    let power = Math.pow(+getNumber1(),+getNumber2());
    showResult(power);
}
function absolute_value(){
    let division = Math.abs(+getNumber1());
    showResult(division);
}
function random(){
    let minimo = +getNumber1();
    let maximo = +getNumber2();
    maximo = maximo+1;
    let random = Math.random()*(maximo - minimo) + minimo;
    showResult(Math.floor(random));
}
function round(){
    let round = Math.round(+document.getElementById("result").value);
    showResult(round);
}
function floor(){
    let round = Math.floor(+document.getElementById("result").value);
    showResult(round);
}
function ceil(){
    let round = Math.ceil(+document.getElementById("result").value);
    showResult(round);
}
/**
 * logaritmo
 */
function logaritmo(){
  let log = Math.log10(+getNumber1());
  showResult(log);
}
/**
 * Seno
 */
function sin(){
  let sin = Math.sin(getNumber1());
  showResult(sin);
}
/**
 * coseno
 */
function cos(){
  let cos = Math.cos(getNumber1());
  showResult(cos);
}
/**
 * tangente
 */
function tan(){
  let tan = Math.tan(getNumber1());
  showResult(tan)
}
