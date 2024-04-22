
function PROJECT_DAY3(){
  let timeIsUp;
  let timeInterval;

  function startTime(){
      timeIsUp = setTimeout(completedTime,1000*30); //setTimeout establece un temporizador que llama a completedTime despues de 1000*n milisegundos
      timeInterval = setInterval(tictac,1000);  //setInterval llama a tictac cada 1000 milisegundos
  }
  function completedTime(){
      let elementoSonidoTimeOut = document.getElementById("audioTimeOut");
      elementoSonidoTimeOut.play();
      elementoSonidoTimeOut.addEventListener('ended', function(){
        alert("Game over");
    });

      clearTimeout(timeIsUp);
  }
  function tictac(){
      let elementoTextoCronometro = document.getElementById("textoCronometro");
      if(elementoTextoCronometro.textContent>0){
          let segundos = elementoTextoCronometro.textContent-1;
          elementoTextoCronometro.textContent = segundos;
          if(segundos<=5){
            elementoTextoCronometro.style.color = "red";
          }
      }
  }
  function retry(){
      location.reload();
  }

  function finish() {
      let answer1 = document.getElementById("question1");
      let answer2 = document.getElementById("question2");
      let answer3 = document.getElementById("question3");
      let answer4 = document.getElementById("question4");
      let answer5 = document.getElementById("question5");
      clearTimeout(timeIsUp);
      clearInterval(timeInterval);
      //here
      let actualTime = new Date();
      let date = actualTime.toLocaleDateString("es-Es");
      let answers = answer1.value +"\n"+answer2.value+"\n"+answer3.value +"\n"+answer4.value+"\n"+answer5.value
      alert(date+"\n"+answers);
  }
  function returnIndex(){
      window.history.back();
  }
}

