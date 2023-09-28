let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")



campoPrazo.addEventListener("input", function (e) {
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} mês (es)`
    // calcular()
    let campoValor = e.target.value
    calcular(campoValor)
})


campoQtde.addEventListener("change", (e) => calcular(e.target.value))
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)

function calcular(campoCalcua) {
    let valor = campoCalcua * 19 //regra de negocio 

    if (campoTipo.value == 1) valor += -2
       

    if (campoLayoutSim.checked) valor -= valor * 0.10
       

    if (campoJs.checked) valor -= valor * 0.05

    document.querySelector('#Resultado').innerText = `R$ ${valor.toFixed(2)}` ;
}


// let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
// valor *= 1 + taxaDeUrgencia


// // resultado.innerText = 'R$ ${valor}'