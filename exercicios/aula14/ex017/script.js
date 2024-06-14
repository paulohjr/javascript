function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert(`Digite um numero!`)
    }else{
    var n = Number(num.value)
    tab.innerHTML = ''
    for (c = 1; c <= 10; c + 1) {
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
}
}
}