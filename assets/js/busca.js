const campoBusca = document.querySelector ('#campo_busca')

campoBusca.addEventListener('input', (evento) => {
    const valorBusca = evento.target.value
    const valorFiltrado = valorBusca.trim().toLowerCase();
    const graficos = document.querySelectorAll('.grafico')

    graficos.forEach((grafico) => {
        const barras = grafico.querySelectorAll('.barra_grafico')
        barras.forEach((barra) => {
            const valorDado = barra.textContent.trim().toLowerCase()

            if (!valorDado.includes(valorFiltrado)){
                barra.style.display = 'none'
            } else {
                barra.style.display = ''
            }
        })

        const todasBarrasOcultas = Array.from(barras).every((barra) => barra.style.display === 'none')
        if (todasBarrasOcultas){
            grafico.style.display = 'none'
        } else {
            grafico.style.display = ''
        }
    })
})