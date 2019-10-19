'use strict';

function dice() {
    let totalScore = 0;
    while (totalScore < 50) {
        let tirada = Math.round(Math.random() * (6 - 1) + parseInt(1));
        totalScore += tirada;
        alert(`Has sacado un ${tirada} y tu puntuación total es de ${totalScore}`);
    }
    alert(`Has alcanzado la puntación de ${totalScore}. La partida ha terminado`);
}
dice();