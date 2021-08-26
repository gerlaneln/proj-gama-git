import logo from './jobsNET.svg';
import './style.css';
//import './cep.js';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
    const criarCurriculo = async (candidato) => {
        const be = await axios.post('http://localhost:8080/cadastro', form);
        if(be.status == 200){
            alert('Currículo cadastrado com sucesso.');
        }else{
            alert('Falha ao cadastrar currículo.')
        }
    }
    
    const [form, setForm] = useState({
        cpf: '',
        name: '',
        profissao: '',
        dataNascimento: '',
        estadoCivil: '',
        genero: '',
        cep: '',
        logradouro: '',
        num: '',
        bairro: '',
        cidade: '',
        estado: '',
        telFixo: '',
        celular: '',
        email: '',
        rg: '',
        veiculo: '',
        cnh: ''
    });

    useEffect(() => {
        console.log(form);
    }, [form]);
    
    window.onload = function(){
        
        //const clean = () => {
        //    document.getElementById('logradouro').value = "";
        //    document.getElementById('bairro').value = "";
        //    document.getElementById('cidade').value = "";
        //    document.getElementById('estado').value = "";
        //}
    
        const preencherFormulario = endereco => {      
           document.getElementById('logradouro').value = endereco.logradouro;
           document.getElementById('bairro').value = endereco.bairro;
           document.getElementById('cidade').value = endereco.localidade;
           document.getElementById('estado').value = endereco.uf;
        }
    
        const isNum = (num) => /^[0-9]+$/.test(num);
    
        const cepValido = (cep) => cep.length == 8 && isNum(cep);
    
        const pesquisarCep = async() => {
            //clean();
    
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
           
    return(
        <>
            <div className="header">
                <img src={logo} alt="jobsNET"/>
                <h2>Banco de Currículo</h2>
            </div>
                        
            <form>
                <h2>Dados Pessoais</h2>

                <fieldset>
                    <label className="name required">Nome Completo: </label>
                    <input className="nameInput" onChange={(e) => {
                        setForm({... form, name: e.target.value});
                    }} value={form.name} required/>
                </fieldset>
                
                <fieldset>
                    <label className="profissao required">Profissão: </label>
                    <input className="profissaoInput" onChange={(e) => {
                        setForm({... form, profissao: e.target.value});
                    }} value={form.profissao} required/>
                </fieldset>
                
                <fieldset>
                    <label className="dataNasc required">Data de nascimento: </label>
                    <input className="dataInput" onChange={(e) => {
                        setForm({... form, dataNascimento: e.target.value});
                    }} type="date" value={form.dataNascimento} required/>
                </fieldset>
                
                <fieldset>
                    <label className="estadoCivil">Estado Civil: </label>
                    <select className="selectCivil" onChange={(e) => {
                        setForm({... form, estadoCivil: e.target.value.toString()});
                        console.log(e.target.value.toString());
                    }} value={form.estadoCivil}id="selecionar">
                        <option value="selecione">Selecione</option>
                        <option value="solteiro">Solteira(o)</option>
                        <option value="casado">Casada(o)</option>
                        <option value="separado">Separada(o)</option>
                        <option value="divorciado">Divorciada(o)</option>
                        <option value="viuvo">Viúva(o)</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label className="genero">Gênero: </label>
                    <select className="selectGenero" onChange={(e) => {
                        setForm({... form, genero: e.target.value.toString()});
                        console.log(e.target.value);
                    }} value={form.genero} id="selecionar">
                        <option value="selecione">Selecione</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="nao binario">Não Binário</option>
                        <option value="prefiro nao responder">Prefiro não responder</option>
                    </select>
                </fieldset>
                
                <h2>Endereço</h2>

                <fieldset>
                    <label className="cep required">CEP:</label>
                    <input className="cepInput" id="cep" onChange={(e) => {
                        setForm({... form, cep: e.target.value});
                    }} type="number" placeholder="00000000" value={form.cep} required/> 
                </fieldset>
                              
                <fieldset>
                    <label className="logradouro required">Logradouro: </label>
                    <input className="logradouroInput" 
                    onChange={(e) => {
                        setForm({... form, logradouro: e.target.value});
                    }} 
                    id="logradouro" type="text" value={form.logradouro} required/>
                </fieldset>
                
                <fieldset>
                    <label className="numero required">Nº: </label>
                    <input className="numeroInput"
                    onChange={(e) => {
                        setForm({... form, num: e.target.value});
                    }}
                    size="6" value={form.num} required/>
                </fieldset>
                
                <fieldset>
                    <label className="bairro required">Bairro: </label>
                    <input className="bairroInput required"
                    onChange={(e) => {
                        setForm({... form, bairro: e.target.value});
                    }}
                    id="bairro" value={form.bairro} required/>
                </fieldset> 
                
                <fieldset>
                    <label className="cidade required">Cidade: </label>
                    <input className="cidadeInput"
                    onChange={(e) => {
                        setForm({... form, cidade: e.target.value});
                    }}
                    id="cidade" value={form.cidade} required/>
                </fieldset>
                
                <fieldset>
                    <label className="estado required">Estado: </label>
                    <input className="estadoInput"
                    onChange={(e) => {
                        setForm({... form, estado: e.target.value});
                    }}
                    id="estado" size="2" value={form.estado} required/>
                </fieldset>
                
                <h2>Contato</h2>

                <fieldset>
                    <label className="telFixo">Telefone Fixo: </label>
                    <input className="telFixoInp" onChange={(e) => {
                        setForm({... form, telFixo: e.target.value.toString()});
                    }} placeholder="(99)9999-9999" value={form.telFixo}/>
                </fieldset>
                
                <fieldset>
                    <label className="celular required">Celular: </label>
                    <input className="celularInp" onChange={(e) => {
                        setForm({... form, celular: e.target.value.toString()});
                    }} placeholder="(99)99999-9999" value={form.celular} required/>
                </fieldset>
                
                <fieldset>
                    <label className="email required">E-mail: </label>
                    <input type="email" onChange={(e) => {
                        setForm({... form, email: e.target.value});
                    }} className="emailInput" placeholder="name@example.com" value={form.email} required/>
                </fieldset>

                <h2>Documentos</h2>

                <fieldset>
                    <label className="identidade">Identidade: </label>
                    <input className="idInput" onChange={(e) => {
                        setForm({... form, rg: e.target.value});
                    }} value={form.rg}/>
                </fieldset>                      
                
                <fieldset>
                    <label className="cpf required">CPF: </label>
                    <input className="cpfInput" onChange={(e) => {
                        setForm({... form, cpf: e.target.value});
                    }} value={form.cpf} required/>
                </fieldset>

                <h2>Informações Adicionais</h2>
                
                <fieldset>
                    <label className="veiculo">Possui veículo: </label>
                    <select className="selectVeiculo" onChange={(e) => {
                        setForm({... form, veiculo: e.target.value});
                        console.log(e.target.value);
                    }} value={form.veiculo} id="selecionar">
                        <option value="selecione">Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label className="habilitacao">Habilitação: </label>
                    <select className="selectHabilitacao" onChange={(e) => {
                        setForm({... form, cnh: e.target.value});
                        console.log(e.target.value);
                    }} value={form.cnh} id="selecionar">
                        <option value="selecione">Selecione</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                        <option value="e">E</option>
                        <option value="ab">AB</option>
                        <option value="ac">AC</option>
                        <option value="ad">AD</option>
                        <option value="ae">AE</option>
                    </select>
                </fieldset>
                                
                <div className="buttondiv">
                    <button onClick={() => criarCurriculo()}>Cadastrar</button>
                </div>
            </form>
        </>
    );
}

export default App;