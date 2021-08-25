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
            
            <h2>Dados Pessoais</h2>
            <form>
                <label className="name required">Nome Completo: </label>
                <input className="nameInput" size="80" required/>
                
                <label className="cargo">Cargo Pretendido: </label>
                <input className="cargoInput" size="70"/>
                
                <label className="dataNasc required">Data de nascimento: </label>
                <input className="dataInput" type="date" required/>
                
                <label className="estadoCivil">Estado Civil: </label>
                <select className="selectCivil" id="selecionar">
                    <option value="" selected>Selecione</option>
                    <option value="solteiro">Solteira(o)</option>
                    <option value="casado">Casada(o)</option>
                    <option value="separado">Separada(o)</option>
                    <option value="divorciado">Divorciada(o)</option>
                    <option value="viuvo">Viúva(o)</option>
                </select>
                
                <label className="genero">Gênero: </label>
                <select className="selectGenero" id="selecionar">
                    <option value="" selected>Selecione</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="nao binario">Não Binário</option>
                    <option value="prefiro nao responder">Prefiro não responder</option>
                </select>
                
                <label className="cep required">CEP:</label>
                <input className="cepInput" id="cep" type="number" placeholder="00000000" required/>
                
                <label className="endereco required">Endereço: </label>
                <input className="enderecoInput" id="rua" type="text" size="52" required/>
                
                <label className="numero required">Nº: </label>
                <input className="numeroInput" size="6" required/>
                    
                <label className="bairro required">Bairro: </label>
                <input className="bairroInput required" id="bairro" size="25"/>
                
                <label className="cidade required">Cidade: </label>
                <input className="cidadeInput" id="cidade" size="24" required/>
                
                <label className="estado required">Estado: </label>
                <input className="estadoInput" id="estado" size="2" required/>

                <label className="telFixo">Telefone Fixo: </label>
                <input className="telFixoInp" size="20" placeholder="(99) 9999-9999"/>

                <label className="celular">Celular: </label>
                <input className="celularInp" size="20" placeholder="(99) 99999-9999"/>

                <label className="email">E-mail: </label>
                <input type="email" className="emailInput" size="20" placeholder="name@example.com"/>
            </form>

            <h2>Documentos</h2>
            <form>
                <label className="identidade required">Identidade: </label>
                <input className="idInput" required/>

                <label className="cpf required">CPF: </label>
                <input className="cpfInput" required/>

                <label className="veiculo">Possui veículo: </label>
                <select className="selectVeiculo" id="selecionar">
                    <option value="" selected>Selecione</option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                </select>

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
            </form>
        </>
    );
}

export default App;