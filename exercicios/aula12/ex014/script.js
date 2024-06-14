function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var h1 = window.document.getElementById('h1')
    var p = window.document.getElementById('p')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    msg.style.fontSize ='1.4em'
    if (hora >= 0 && hora < 12){
        img.src = 'dia.jpg'
        h1.style.color = 'black'
        h1.style.fontWeight = 'bolder'
        p.style.color = 'black'
        p.style.fontWeight ='bolder'
        document.body.style.backgroundColor = '#ffffe0'
    } else if (hora >=12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#ecb653'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'gray'
    }


}