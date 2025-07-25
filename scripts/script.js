let numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 5

console.log(numeroSecreto)


function rodaJogo() {

    let palpite = parseInt(document.getElementById("palpite").value)
    let resultado = document.getElementById("resultado")
    let tentativasRestantes = document.getElementById("tentativas-restantes")


    if (palpite > 0 && palpite <= 100 && tentativas > 0) {

        if (palpite === numeroSecreto) {
            resultado.innerHTML = `PARABÉNS!!! ${palpite} é o número secreto.`
            tentativasRestantes.innerHTML = ""
        } else {
            tentativas--
            if (palpite < numeroSecreto) {
                resultado.innerHTML = `Você errou!<br> Seu palpite ${palpite} é menor que o número secreto.`
            } else {
                resultado.innerHTML = `Você errou!<br> Seu palpite ${palpite} é maior que o número secreto.`
            }

            if (tentativas > 0) {
                tentativasRestantes.innerHTML = `Você tem ${tentativas} tentativas restantes.`
            } else {
                tentativasRestantes.innerHTML = `Você perdeu! O número secreto era ${numeroSecreto}`
            }
        }

    } else if (tentativas === 0) {
        resultado.innerHTML = "Fim de jogo! Atualize a página para jogar novamente."
    } else {
        resultado.innerHTML = `Digite um número válido entre 1 e 100.`
    }
}



