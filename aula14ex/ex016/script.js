
function contar() {
    let ini = window.document.querySelector('input#ini')
    let fim = window.document.querySelector('input#fim')
    let pas = window.document.querySelector('input#pas')
    let res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: </br>'
        let p = Number(pas.value)
        let f = Number(fim.value)
        let i = Number(ini.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }       
}