
function capturarValores() {
    let campoNome = document.getElementById('campoNome').value;
    let campoIdade = document.getElementById('campoIdade').value;

    if (campoNome === '' || campoIdade === '') {
        alert('Campo nome ou idade estão vazios!');
        return;
    } 
    
    document.getElementById('mostraNome').textContent = `Nome: ${campoNome} e a Idade ${campoIdade}`;
}