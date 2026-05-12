function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#6ba5f1'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#D1A884'
    } else {
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#382D26'
    }
} 