function calcularIMC() {
    const nomeInput = document.getElementById('nome');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');

    const nome = nomeInput.value;
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    const resultadoElement = document.getElementById('resultado');
    const resultadoContainer = document.getElementById('resultado-container');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, digite valores válidos para peso e altura.');
        return;
    }

    const imc = calcularIMCValor(peso, altura);
    const resultadoTexto = gerarTextoResultado(nome, imc);

    resultadoElement.innerHTML = resultadoTexto;
    resultadoContainer.style.display = 'block';
}

function calcularIMCValor(peso, altura) {
    return peso / (altura * altura);
}

function gerarTextoResultado(nome, imc) {
    let resultadoTexto = `${nome}, seu IMC é: ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultadoTexto += 'Abaixo do peso. Para melhorar, procure um nutricionista para orientação e siga uma dieta equilibrada.';
    } else if (imc < 24.9) {
        resultadoTexto += 'Peso normal. Continue mantendo um estilo de vida saudável com alimentação balanceada e exercícios físicos.';
    } else if (imc < 29.9) {
        resultadoTexto += 'Sobrepeso. Recomenda-se adotar uma dieta equilibrada e aumentar a prática de atividades físicas.';
    } else if (imc < 34.9) {
        resultadoTexto += 'Obesidade I. Consulte um médico e um nutricionista para desenvolver um plano de perda de peso seguro e eficaz.';
    } else if (imc < 39.9) {
        resultadoTexto += 'Obesidade II. É crucial buscar orientação médica e seguir um plano de alimentação saudável, juntamente com atividades físicas regulares.';
    } else {
        resultadoTexto += 'Obesidade III. Procure ajuda médica imediatamente para desenvolver um plano de tratamento abrangente, incluindo mudanças na dieta e exercícios físicos supervisionados.';
    }

    return resultadoTexto;
}