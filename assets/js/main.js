<script src="assets/js/main.js"></script>

const obterNomeUsuario = () => {
    const nome = prompt("Digite seu nome:");
    const sobrenome = prompt("Digite seu sobrenome:");

    return `${nome} ${sobrenome}`;
};

const formatarDataHora = () => {
    const agora = new Date();

    const diasSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    const diaSemana = diasSemana[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    const deslocamento = -agora.getTimezoneOffset();
    const sinal = deslocamento >= 0 ? "+" : "-";
    const horasFuso = String(
        Math.floor(Math.abs(deslocamento) / 60)
    ).padStart(2, "0");

    const minutosFuso = String(
        Math.abs(deslocamento) % 60
    ).padStart(2, "0");

    const fusoHorario = `${sinal}${horasFuso}:${minutosFuso}`;

    return `${diaSemana}, ${dia}/${mes}/${ano} – ${horas}:${minutos} (${fusoHorario})`;
};

const exibirBoasVindas = () => {
    const elementoMensagem = document.querySelector("#mensagem-boas-vindas");

    if (!elementoMensagem) {
        console.log("Elemento de boas-vindas não encontrado.");
        return;
    }

    const usuario = obterNomeUsuario();
    const dataAtual = formatarDataHora();

    elementoMensagem.textContent = `Olá, ${usuario}! Hoje é ${dataAtual}`;

    console.log("Usuário:", usuario);
    console.log("Data atual:", dataAtual);
    console.log("Mensagem exibida:", elementoMensagem.textContent);
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript carregado com sucesso!");

    exibirBoasVindas();
});

</body>
