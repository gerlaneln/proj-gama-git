'use strict';

window.onload = function (){
    
    const clean = () => {
        document.getElementById('rua').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('estado').value = "";
    }

    const preencherFormulario = endereco => {      
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }

    const isNum = (num) => /^[0-9]+$/.test(num);

    const cepValido = (cep) => cep.length == 8 && isNum(cep);

    const pesquisarCep = async() => {
        clean();

        const cep = document.getElementById('cep').value;
        const url = `http://viacep.com.br/ws/${cep}/json`;

        if(cepValido(cep)){
            const dados = await fetch(url);
            const endereco = await dados.json();
            if(endereco.hasOwnProperty('erro')){
                document.getElementById('rua').value = 'CEP Inválido';
            }else{
                preencherFormulario(endereco);
            }
        }else{
            document.getElementById('rua').value = 'CEP Inválido';
        } 
    }
    
    document.getElementById('cep').addEventListener('focusout', pesquisarCep);
    
}

