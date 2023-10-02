/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class carros {
    marca;
    cor;
    gastoPorKM;

    constructor (marca, cor, gastoPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }
    
    gastoDaViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoPorKM * precoCombustivel;
    }
}

const pajetoTR4 = new carros('Mitsubish','Verde',1/10);
console.log(pajetoTR4.gastoDaViagem(300,5.30));
const zafira = new carros('Chevrolet','Prata',1/12);
console.log(zafira.gastoDaViagem(300,5.30));
