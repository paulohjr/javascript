function add(){
    var num = window.document.getElementById('txtnum')
    var lista = window.document.getElementById('ilista')
    var res = window.document.getElementById('res')
    if (num.value.length == 0){
        window.alert(`Digite o valor para iniciar!`)
        lista.innerHTML = ``
        
    }else {
        
        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `Numero é ${n}`
        lista.appendChild(item)
        n++
        if ( n > 100 ){
            window.alert(`Digite um numero valido de 1 a 100`)
        }
    }
    }
