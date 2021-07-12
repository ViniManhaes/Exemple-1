let fileiraSelecionada = null;
function submeterFormulario(e){
    event.preventDefault();
    let fichaDeDados = lerFichaDeDados();
    if(fileiraSelecionada === null){
        if (checarDados(fichaDeDados) === true) {
            inserirNovoRegistro(fichaDeDados);
        }
    }else{
        atualizarRegistro(fichaDeDados)
    }
    resetarFormulario();
    }

function checarDados(dado){
    let numeros = /^[0-9]+$/;
    if(dado.nome === ""){
        confirm("Insira um nome válido!");
        return false;
    }
    if(dado.sobrenome === ""){
        confirm("Insira um sobrenome válido!");
        return false;
    }
    if(dado.genero === ""){
        confirm("Insira um genero válido!");
        return false;
    }
    if(dado.endereco === ""){
        confirm("Insira um endereco válido!");
        return false;
    }
    if(dado.cep === ""){
        confirm("Insira um CEP válido!");
        return false;
    }
    if(dado.cidade === ""){
        confirm("Insira uma cidade válida!");
        return false;
    }
    return true;
}

function lerFichaDeDados(){
    let fichaDeDados = {};
    fichaDeDados["nome"] = document.getElementById("nome").value;
    fichaDeDados["sobrenome"] = document.getElementById("sobrenome").value;
    fichaDeDados["genero"] = document.getElementById("genero").value;
    fichaDeDados["endereco"] = document.getElementById("endereco").value;
    fichaDeDados["cep"] = document.getElementById("cep").value;
    fichaDeDados["cidade"] = document.getElementById("cidade").value;
    return fichaDeDados;
}

function inserirNovoRegistro(dado){
    let tabela = document.getElementById("baseDados").getElementsByTagName('tbody')[0];
    let novaFileira = tabela.insertRow(tabela.length);
    let cell1 = novaFileira.insertCell(0);
        cell1.innerHTML = dado.nome;
    let cell2 = novaFileira.insertCell(1);
        cell2.innerHTML = dado.sobrenome;
    let cell3 = novaFileira.insertCell(2);
        cell3.innerHTML = dado.genero;
    let cell4 = novaFileira.insertCell(3);
        cell4.innerHTML = dado.endereco;
    let cell5 = novaFileira.insertCell(4);
        cell5.innerHTML = dado.cep;  
    let cell6 = novaFileira.insertCell(5);
        cell6.innerHTML = dado.cidade; 
    let cell7 = novaFileira.insertCell(6);
        cell7.innerHTML = `<a href="#" onClick='editar(this)'>editar</a>
                        <a href="#" onClick='deletar(this)'>deletar</a>`;
}

function resetarFormulario(){
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('cidade').value = '';
    fileiraSelecionada = null;
}

function editar(td){
    fileiraSelecionada = td.parentElement.parentElement;
    document.getElementById('nome').value = fileiraSelecionada.cells[0].innerHTML;
    document.getElementById('sobrenome').value = fileiraSelecionada.cells[1].innerHTML;
    document.getElementById('genero').value = fileiraSelecionada.cells[2].innerHTML;
    document.getElementById('endereco').value = fileiraSelecionada.cells[3].innerHTML;
    document.getElementById('cep').value = fileiraSelecionada.cells[4].innerHTML;
    document.getElementById('cidade').value = fileiraSelecionada.cells[5].innerHTML;
}
function atualizarRegistro(fichaDeDados){
    fileiraSelecionada.cells[0].innerHTML = fichaDeDados.nome;
    fileiraSelecionada.cells[1].innerHTML = fichaDeDados.sobrenome;
    fileiraSelecionada.cells[2].innerHTML = fichaDeDados.genero;
    fileiraSelecionada.cells[3].innerHTML = fichaDeDados.endereco;
    fileiraSelecionada.cells[4].innerHTML = fichaDeDados.cep;
    fileiraSelecionada.cells[5].innerHTML = fichaDeDados.cidade;
}
function deletar(td){
    if(confirm('Tem certeza que quer deletar esse registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('baseDados').deleteRow(row.rowIndex);
        resetarFormulario();
    }    
}