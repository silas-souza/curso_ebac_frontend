function validarFormulario() {
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
    const mensagem = document.getElementById("mensagem");

    // Verifica se os campos foram preenchidos
    if (campoA === "" || campoB === "") {
        document.getElementById("mensagem").style.color = "orange";
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Converte os valores para números e compara
    if (Number(campoB) > Number(campoA)) {
        document.getElementById("mensagem").style.color = "green";
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
    } else {
        document.getElementById("mensagem").style.color = "red";
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
    }
}