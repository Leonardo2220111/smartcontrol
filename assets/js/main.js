let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let data = new Date().toLocaleString("pt-BR", {dateStyle: "short",hour12: false })
console.log(`Olá ${nome} ${sobrenome} hoje é ${data}. 67`)
const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
let dataAtual = new Date()
const fuso_horario = dataAtual.getTimezoneOffset() / 60
let horas = new Date().toLocaleString("pt-BR", {hour: "2-digit", minute: "2-digit", hour12: false })






setInterval(() => {
    let bemVindoElement = document.getElementById("bem-vindo")
    bemVindoElement.innerHTML = `Bem-vindo, ${nome} ${sobrenome}! Hoje é  ${semana[new Date().getDay()]}, ${data} - ${horas} (-${fuso_horario}:00)`
}, 3*1000)
