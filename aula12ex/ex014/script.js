function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#f3cab2'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#d8d15a'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#383c48'
    }

}