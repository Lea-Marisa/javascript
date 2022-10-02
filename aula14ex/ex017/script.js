function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // antes de começar a mostrar a tabuada, 'limpar' a última tabuada
        while (c <= 10) {
            let item = document.createElement('option') // para criar elemento em JS
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // util para outras linguagens de programação para saber qual item foi selecionado; para JS não faz diferença
            tab.appendChild(item)
            c++
        }
    }
   
    
}