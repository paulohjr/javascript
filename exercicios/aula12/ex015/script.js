function carregar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
var soma = ano - fano.value 
if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`Verifique os dados e tente novamente.`)
} else {
    var radsex = document.getElementsByName('radsex') 
    res.innerHTML = (`A idade é ${soma}`)
    var genero = ``
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (radsex[0].checked){
        genero = `Homem`
        if (soma >= 0 && soma <10){
            //crinça
            img.setAttribute('src', 'crianca-homem.jpg')
        } else if (soma >= 10 && soma < 21) { 
            //jovem
            img.setAttribute('src','homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'homem-velho.jpg')
        }
    } else{
        genero = `Mulher`
        if (soma >= 0 && soma <10){
            //crinça
            img.setAttribute('src', 'crianca-mulher.jpg')
        } else if (soma >= 10 && soma < 21) { 
            //jovem
            img.setAttribute('src','mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src','mulher-velha.jpg')
        }
    }
    res.style.textAlign = "center"
    img.style.width = '250px'
    img.style.height = '250px'
    img.style.borderRadius = '800px'
    res.innerHTML = (`Detectamos o ${genero} com idade de ${soma} anos`)
    img.appendChild(img)
}
}