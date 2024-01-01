let array = [4,4.8,5,4,3];
/*
 *Crete the elements <li> for to have all notes
 */
function listNotes(){
    let list = document.getElementById("ulNotes");

    for(let note of array){
        let item = document.createElement("li");
        item.innerText = note;
        list.appendChild(item);
    }
}
/**
 * Calculate the average between all notes 
 */
function average(){
    let sum = 0;

    for(let item of array){
        sum = sum+item;
    }
    average = sum/5;
    document.getElementById("average").textContent = average;
}
/**
 * Calculate the best note
 */
function bestNote(){
    let best = 0;
    let i = 0;
    while(i<5){
        if(array[i]>best){
            best = array[i];
        }
        i++;
    }
    document.getElementById("bestNote").textContent = best;
}
/**
 * Calculate if exist some "aplazo"
 */
function aplazo(){
    let flag = "No exist";
    let i = 0;
    do{
        if(array[i] < 3){
            flag = "exist";
            break;
        }
        i++;
    }while(i<5)

    document.getElementById("aplazo").textContent = flag;
}