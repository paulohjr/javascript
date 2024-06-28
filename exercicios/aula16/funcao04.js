function fatorial(n){
    var fat = 1
    for (var c = n ; c > 1; c--){
    fat = fat * c
    }
    return fat
}

console.log(fatorial(3))
//5! = 5 x 4 x 3 x 2 x 1 = 120