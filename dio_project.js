function calculatorRanked() {
    let herois = [
        { nome: "Glimbol", vitorias: 5, derrotas: 2 },
        { nome: "Trevor", vitorias: 55, derrotas: 20 },
        { nome: "Arus", vitorias: 110, derrotas: 10 }
    ];

    for (let i = 0; i < herois.length; i++) {
        let victoryBalance = herois[i].vitorias - herois[i].derrotas;
        let rank = "";

        if (herois[i].vitorias < 10) {
            rank = "Ferro";
        } else if (herois[i].vitorias <= 20) {
            rank = "Bronze";
        } else if (herois[i].vitorias <= 50) {
            rank = "Prata";
        } else if (herois[i].vitorias <= 80) {
            rank = "Ouro";
        } else if (herois[i].vitorias <= 90) {
            rank = "Diamante";
        } else if (herois[i].vitorias <= 100) {
            rank = "Lendário";
        } else {
            rank = "Imortal";
        }

        console.log(`O Herói ${herois[i].nome} tem de saldo de ${victoryBalance} vitorias está no nível de ${rank}`);
    }
}

calculatorRanked();
