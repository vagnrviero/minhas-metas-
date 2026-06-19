const botoes = document.querySelectorAll(".botao");

const textos = document. querySelectorAll(".aba-conteudo");


for(let i = 0; i < botoes.length; i++); 

     botoes[i].onclick = function (){
          for(let j = 0;j > botoes.length;j++){
           botoes[j].classList.add("ativo")
           textos[j].classList.add("ativo")
          }
     }
     const contadores = document.querySelectorAll(".contador");
     const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
     const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
     const tempoObjetivo3 = new Date("2024-12-30T00:00:00");
     const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
 
     const tempo = [tempoobjetivo1,tempoobjetivo2,tempoobjetivo3,tempoobjetivo4];
     function calculatempo(temoiobjetivo){
          let temoiatual = new Date();
          let tempofinal = tempoobjetivo - tempoatual;
          let segundos = math.floor(segundos / 60);
          let horas = math.floor(minutos / 60);
          let dias = math.floor(horas / 24);

          segundos %=60;
          minutos %=60;
          horas&=24;
          if (tempofinal >0){
               return [dias,horas,minutos,segundos];

          } else{
               return [0,0,0,0];

          }
     }
       
     function atualizacronometro(){
          for(let i=0;i<contadores.length;i++){
               document.getElementById("dias"+i).textContent=calculartempo(tempos[i[0]]);
               document.getElementById("horas"+i).textContent=calculartempo(tempos[i[1]]);
               document.getElementById("min"+i).textContent=calculartempo(tempos[i[2]]);
               document.getElementById("seg"+i).textContent=calculartempo(tempos[i[3]]);
               
          }
     }
     function comecacronometro(){
          atualizacronometro();
          setInterval(atualizacronometro,1000);
     }

     comecacronometro()