
let sum;
let array = []
let numbersQuantity = document.getElementById("numbersQuantity");

function obtainNotes(){
  for(let i=0;i<this.numbersQuantity.value;i++){
    let input = document.getElementById("number"+(i+1));
    array[i] = input.value;
  }
}

/*
 * Generate the numbers
 */
function generateInputNumbers(){
  numbers = this.numbersQuantity.value
  let form = document.getElementById("formulario");

  // Eliminar todos los inputs existentes del formulario
  form.innerHTML = '';

  let placeholders = ["First note", "Second note", "Third note", "Fourth note", "Fifth note","Sixth note","Seventh note","Eighth","Ninth note", "Tenth note"];

  for(let i=0;i<numbers;i++){
    let item = document.createElement("input");
    item.id = "number" + (i+1);
    item.type = "number";
    item.className = "form-control";
    item.placeholder = placeholders[i];
    form.appendChild(item);
  }
}
/*
 * Calculate the average between all notes
 */
function average(){

    this.obtainNotes();

    let arrayNew = array;
    let sum = 0;

    for(let item of arrayNew){
        sum = sum+Number(item);
    }
    let averageValue = sum/arrayNew.length;
    document.getElementById("average").textContent = averageValue;
}
/*
 * Calculate the best note
 */
function bestNote(){
    this.obtainNotes();
    let arrayNew = array;

    let best = 0;
    let i = 0;
    while(i<5){
        if(Number(arrayNew[i])>best){
            best = arrayNew[i];
        }
        i++;
    }
    document.getElementById("bestNote").textContent = best;
}
/*
 * Calculate if exist some "aplazo"
 */
function aplazo(){
  this.obtainNotes();
  let arrayNew = array;

    let flag = "No exist";
    let i = 0;
    do{
        if(Number(arrayNew[i]) < 3){
            flag = "exist";
            break;
        }
        i++;
    }while(i<5)

    document.getElementById("aplazo").textContent = flag;
}
