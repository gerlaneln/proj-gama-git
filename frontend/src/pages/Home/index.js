import logo from './jobsNET.svg';
import './style.css';
import './cep.js';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
//import Inputmask from "inputmask";

function App(props) {
    const history = useHistory();

    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);

    return(
        <>
            <script src="./cep.js" type="module" ddefer></script>
            <div className="header">
                <img src={logo} alt="jobsNET"/>
                <h2>Banco de Currículo</h2>
            </div>
                        
            <form>
                <h2>Dados Pessoais</h2>

                <fieldset>
                    <label className="name required">Nome Completo: </label>
                    <input className="nameInput" size="75" required/>
                </fieldset>
                
                <fieldset>
                    <label className="profissao required">Profissão: </label>
                    <input className="profissaoInput" size="70" required/>
                </fieldset>
                
                <fieldset>
                    <label className="dataNasc required">Data de nascimento: </label>
                    <input className="dataInput" type="date" required/>
                </fieldset>
                
                <fieldset>
                    <label className="estadoCivil">Estado Civil: </label>
                    <select className="selectCivil" id="selecionar">
                        <option value="" selected>Selecione</option>
                        <option value="solteiro">Solteira(o)</option>
                        <option value="casado">Casada(o)</option>
                        <option value="separado">Separada(o)</option>
                        <option value="divorciado">Divorciada(o)</option>
                        <option value="viuvo">Viúva(o)</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label className="genero">Gênero: </label>
                    <select className="selectGenero" id="selecionar">
                        <option value="" selected>Selecione</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="nao binario">Não Binário</option>
                        <option value="prefiro nao responder">Prefiro não responder</option>
                    </select>
                </fieldset>
                
                <h2>Endereço</h2>

                <fieldset>
                    <label className="cep required">CEP:</label>
                    <input className="cepInput" id="cep" type="number" placeholder="00000000" required/> 
                </fieldset>
                              
                <fieldset>
                    <label className="logradouro required">Logradouro: </label>
                    <input className="logradouroInput" id="logradouro" type="text" size="70" required/>
                </fieldset>
                
                <fieldset>
                    <label className="numero required">Nº: </label>
                    <input className="numeroInput" size="6" required/>
                </fieldset>
                
                <fieldset>
                    <label className="bairro required">Bairro: </label>
                    <input className="bairroInput required" id="bairro" size="25" required/>
                </fieldset> 
                
                <fieldset>
                    <label className="cidade required">Cidade: </label>
                    <input className="cidadeInput" id="cidade" size="24" required/>
                </fieldset>
                
                <fieldset>
                    <label className="estado required">Estado: </label>
                    <input className="estadoInput" id="estado" size="2" required/>
                </fieldset>
                
                <h2>Contato</h2>

                <fieldset>
                    <label className="telFixo">Telefone Fixo: </label>
                    <input className="telFixoInp" size="20" placeholder="(99)9999-9999"/>
                </fieldset>
                
                <fieldset>
                    <label className="celular required">Celular: </label>
                    <input className="celularInp" size="20" placeholder="(99)99999-9999" required/>
                </fieldset>
                
                <fieldset>
                    <label className="email required">E-mail: </label>
                    <input type="email" className="emailInput" size="30" placeholder="name@example.com" required/>
                </fieldset>

                <h2>Documentos</h2>

                <fieldset>
                    <label className="identidade">Identidade: </label>
                    <input className="idInput"/>
                </fieldset>                      
                
                <fieldset>
                    <label className="cpf required">CPF: </label>
                    <input className="cpfInput" required/>
                </fieldset>

                <h2>Informações Adicionais</h2>
                
                <fieldset>
                    <label className="veiculo">Possui veículo: </label>
                    <select className="selectVeiculo" id="selecionar">
                        <option value="" selected>Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label className="habilitacao">Habilitação: </label>
                    <select className="selectHabilitacao" id="selecionar">
                        <option value="" select>Selecione</option>
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
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </>
    );
}

export default App;