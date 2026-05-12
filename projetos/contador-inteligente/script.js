let contador = localStorage.getItem("contador")

if (contador === null) {
    contador = 0
} else {
    contador = Number(contador)
}

const numero = document.getElementById("numero")
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const reset = document.getElementById("reset")
const mensagem = document.getElementById("mensagem")

mais.addEventListener("click", function() {
    contador++
    atualizarTela()
})

menos.addEventListener("click", function() {
    contador--
    atualizarTela()
})

reset.addEventListener("click", function() {
    contador = 0
    atualizarTela ()
})

function atualizarCor() {
    if (contador > 0) {
        numero.style.color = "green"
        mensagem.innerText = "Número positivo"
    } else if (contador < 0 ) {
        numero.style.color = "red"
        mensagem.innerText = "Número negativo"
    } else {
        numero.style.color = "black"
        mensagem.innerText = "Número neutro"
    }
}

function atualizarTela() {
    numero.innerText = contador
    localStorage.setItem("contador", contador)
    atualizarCor()
    
}

atualizarTela()