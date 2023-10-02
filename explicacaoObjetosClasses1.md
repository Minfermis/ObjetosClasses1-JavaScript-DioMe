# Projeto: Classe de Carros - Cálculo de Custo de Viagem

## Introdução

Neste projeto, desenvolvemos uma classe chamada "carros" em JavaScript para modelar carros e calcular o custo de uma viagem com base na distância a percorrer e no preço do combustível. Este código é uma demonstração de programação orientada a objetos e encapsula as informações relacionadas aos carros, permitindo um cálculo eficiente do custo da viagem.

## Descrição do Código

1. **Definição da Classe "carros":** Começamos definindo uma classe chamada "carros". Uma classe é uma estrutura que descreve como criar objetos relacionados.

~~~Javascript
class carros {
    marca;
    cor;
    gastoPorKM;
~~~

2. **Propriedades da Classe:** A classe "carros" possui três propriedades: "marca", "cor" e "gastoPorKM". Essas propriedades representam informações específicas de um carro, como a marca, a cor e o consumo de combustível por quilômetro.

3. **Método "constructor":** Utilizamos um método especial chamado "constructor" para criar novos objetos do tipo "carros". Esse método recebe informações como marca, cor e consumo de combustível e atribui essas informações às propriedades do objeto.

~~~Javascript
    constructor (marca, cor, gastoPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }
~~~
4. **Método "gastoDaViagem":** Implementamos um método chamado "gastoDaViagem" que calcula o custo de uma viagem de carro com base na distância a ser percorrida ("distanciaKm") e no preço do combustível ("precoCombustivel"). O método multiplica a distância pela taxa de consumo de combustível e pelo preço do combustível para calcular o custo total da viagem.
~~~javascript
    gastoDaViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoPorKM *       precoCombustivel;
    }
} 
~~~
## Demonstração

Para ilustrar o funcionamento da classe "carros", criamos dois objetos:

- Um carro denominado "pajetoTR4" com a marca "Mitsubishi", a cor "Verde" e um consumo de 1/10 de combustível por quilômetro.
~~~Javascript
const pajetoTR4 = new carros('Mitsubish','Verde',1/10);
console.log(pajetoTR4.gastoDaViagem(300,5.30));
~~~

- Outro carro chamado "zafira" com a marca "Chevrolet", a cor "Prata" e um consumo de 1/12 de combustível por quilômetro.

~~~javascript
const zafira = new carros('Chevrolet','Prata',1/12);
console.log(zafira.gastoDaViagem(300,5.30));
~~~

Utilizamos o método "gastoDaViagem" para calcular o custo de uma viagem de 300 quilômetros a um preço de combustível de R$5,30 para ambos os carros. Os resultados foram impressos no console.

## Conclusão

Este projeto exemplifica a criação de uma classe em JavaScript para modelar objetos relacionados, fornecendo uma estrutura organizada para armazenar informações e realizar cálculos específicos. A classe "carros" demonstra como encapsular dados e funcionalidades, facilitando a reutilização e manutenção do código. É um exemplo valioso de programação orientada a objetos que pode ser aplicado em cenários do mundo real, como cálculos de custos em viagens de carro.
