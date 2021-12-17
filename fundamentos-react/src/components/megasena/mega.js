//Pega um número que não será repetido no resto do array
function gerarNumeroNaoContido(min, max, array){
    
    //Gera um número
    const aleatorio = parseInt(Math.random() + (max + 1 - min) + min)

    //Se o número está incluso no array, então gere outro diferente, senão inclua
    return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) : 
        aleatorio
}
//Teste
console.log(gerarNumeroNaoContido(1, 5 , [2, 3]))//deve retornar o números não inclusos que é 1, 4 e 5

/*
Explicação do funcionamento:
gerarNumeroNaoContido(1, 60 , [0, 0, 0, 0, 0, 0])
aletório = 15
array = [15, 0, 0, 0, 0, 0]
aleatório = 26
array = [15, 26, 0, 0, 0, 0]
aleatório = 36
array = [15, 26, 36, 0, 0, 0]
...
*/

function gerarNumeros(qtde){
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {//acumulador: a resposta é passado como parâmetro na próxima chamada
        
            const novoNumero = gerarNumeroNaoContido(1,60,nums)

            //Teste
            console.log([...nums, novoNumero])
            
            //Retorna todos os elementos anteriores do array e o novo numero
            return [...nums, novoNumero]
        
        }, []) //array começa vazio

        .sort((n1,n2) => n1 - n2) //Ordem crescente
}
console.log(gerarNumeros(7))

/*
Explicando o funcionamento do teste:
[54]
[54, 45]
[54, 45, 50]
[54, 45, 50, 52]
[54, 45, 50, 52, 41]
[54, 45, 50, 52, 41, 9]
*/
