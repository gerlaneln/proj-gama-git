window.onload = function (){
    
    const clean = () => {
        document.getElementById('logradouro').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('estado').value = "";
    }

    const preencherFormulario = endereco => {      
        document.getElementById('logradouro').value = endereco.logradouro;
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
                alert('CEP não encontrado.');
                //document.getElementById('logradouro').value = 'CEP não encontrado';
            }else{
                preencherFormulario(endereco);
            }
        }else{
            alert('CEP inválido.');
            //document.getElementById('logradouro').value = 'CEP Inválido';
        } 
    }
    
    document.getElementById('cep').addEventListener('focusout', pesquisarCep);
    
}

