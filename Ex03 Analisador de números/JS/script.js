let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inList(n, list) {
    if(list.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function analisando(){
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('[ERRO] valor invalido ou já esta na lista')
    }
    num.value = ''
    num.focus() 
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior =valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrado. </p>`
        res.innerHTML += `<p> O maior valor informado é ${maior} e o menor valor é ${menor}. </p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}. </p>`
        res.innerHTML += `<p> A media dos valores é ${media}. </p>`
        
    }
}