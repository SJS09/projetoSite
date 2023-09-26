let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")


campoPrazo.addEventListener("Input", function () {
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = 'Prazo: ${campoPrazo.value} semanas'
    calcular()
})


campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)

function calcular() {
    let qtde = campoQtde.value
    let valor = qtde * 19

    if (campoTipo.value == 2) valor = -2

    if (campoLayoutSim.checked) valor -= valor * 0.10

    if (campoJs.checked) valor *= valor * 0.5

    let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
    valor *= 1 + taxaDeUrgencia


    resultado.innerText = 'R$ ${valor}'
}
