function mostrarDeposito() {
    document.getElementById('formulario-deposito').classList.remove('oculto');
    document.getElementById('formulario-retirada').classList.add('oculto');
}

function mostrarRetirada() {
    document.getElementById('formulario-retirada').classList.remove('oculto');
    document.getElementById('formulario-deposito').classList.add('oculto');
}

function fecharFormulario(formularioId) {
    document.getElementById(formularioId).classList.add('oculto');
}

function depositar() {
    const valor = parseFloat(document.getElementById('valor-deposito').value);
    let saldoAtual = parseFloat(document.getElementById('saldo').textContent.replace('R$', '').replace(',', '.'));
    saldoAtual += valor;
    document.getElementById('saldo').textContent = `R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;
    fecharFormulario('formulario-deposito');
}

function retirar() {
    const valor = parseFloat(document.getElementById('valor-retirada').value);
    let saldoAtual = parseFloat(document.getElementById('saldo').textContent.replace('R$', '').replace(',', '.'));
    saldoAtual -= valor;
    document.getElementById('saldo').textContent = `R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;
    fecharFormulario('formulario-retirada');
}