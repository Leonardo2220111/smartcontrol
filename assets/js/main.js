let nomeUsuario = prompt("Digite seu nome:");
let sobreNomeUsuario = prompt("Digite seu sobrenome:");
let data = new Date().toLocaleString("pt-BR",{dateStyle: "full", timeStyle: "short", hour12: false, timeZone: "America/Sao_Paulo"});

console.log(`Olá, ${nomeUsuario} ${sobreNomeUsuario}! Hoje é ${data}.`);

const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let dataAtual = new Date();
const fuso_horario = dataAtual.getTimezoneOffset() / -60;
let horas = new Date().toLocaleString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });



setInterval(() => {
    let bemVindo = document.getElementById("bemvindo");
    bemVindo.innerHTML = `Olá, ${nomeUsuario} ${sobreNomeUsuario}! Hoje é ${semana[new Date().getDay()]}, ${data} - ${horas} (-${fuso_horario}:00h)`;

}, 3*1000)