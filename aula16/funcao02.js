// quando chamamos só 1 parâmetro, SEM passar parâmetros opcionais, o JS retornará NaN

function soma(n1 = 0, n2 = 0) {  // parâmetros opcionais: se eu não passar n1 ou n2, o parâmetro será 0
    return n1 + n2
}

console.log(soma(2))