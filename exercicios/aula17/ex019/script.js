var num = document.getElementById('txtnum')
var list = document.getElementById('ilista')
var res = document.getElementById('res')
var res1 = document.getElementById('res1')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res1.innerHTML = ''
    }else {
        window.alert(`Valor invalido ou ja encontrado na lista`)
    }
    num.value = ''
    num.focus( )
}

function finalizar() {
if (valores.length == 0){
    window.alert(`Adicionar valores antes de finalizar`)
} else {
    var tot = valores.length
    var maior = valores [0]
    var menor = valores [0]
    var soma = 0
    var media = 0
    for(var pos in valores){
        soma = soma + valores[pos]
        if (valores [pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma/tot

    res1.innerHTML = ''
    res1.innerHTML += `<p>Ao todo, temos ${tot} números de cadastrados</p>`
    res1.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res1.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res1.innerHTML += `<p>Somando todos os numeros temos ${soma}</p>`
    res1.innerHTML += `<p>A Média dos valores é ${media}`

}
}
