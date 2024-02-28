let contador = 0;

const intervalo = setInterval(() => {
    console.log("olá, contador:", contador);
    contador++;
}, 1000);


    clearInterval(intervalo); // para o intervalo após 5 segundos
