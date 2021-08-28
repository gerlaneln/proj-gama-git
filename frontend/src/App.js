import logo from './jobsNET.svg';
import './style.css';
//import './cep.js';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

    const [form, setForm] = useState({
        cpf: '',
        nome: '',
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

    const isNum = (num) => /^[0-9]+$/.test(num);
    const cepValido = (cep) => cep.length == 8 && isNum(cep);

    const fetchAddress = async () => {
        
        if(cepValido(form.cep)){
            const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
            if('erro' in address.data){
                setForm({...form, cep: ''});
                alert('CEP não encontrado');
                setForm({...form, cep: ''});
            }else{
                setForm({ ...form, logradouro: address.data.logradouro, bairro: address.data.bairro, cidade: address.data.localidade, estado: address.data.uf});
            }
        }else{
            setForm({...form, cep: ''});
            alert('CEP inválido');
            setForm({...form, cep: ''});
        }        
    }
    
    const buscaCPF = async (cpf) => {
        if(isNum(cpf)){
            if (cpf.lenght < 11){
                const back = await axios.get('http://localhost:8080/find', { params: { cpf }});
                if(back){
                    setForm({...form, cpf: ''});
                    alert('CPF já cadastrado');
                    setForm({...form, cpf: ''});
                }
            }else{
                setForm({...form, cpf: ''});
                alert('CPF inválido');
            }
        }else{
            setForm({...form, cpf: ''});
            alert('CPF possui caracteres inválidos');
            setForm({...form, cpf: ''});
        }
        
        
    }

    const criarCurriculo = async (candidato) => {
        //console.log(form);
        try {
            const be = await axios.post('http://localhost:8080/register', form);
            if (be.status === 200) {
                alert('Currículo cadastrado com sucesso.');
                setForm({cpf: '',
                nome: '',
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
                cnh: ''});
            }
        } catch (error) {
            alert('Falha ao cadastrar currículo. Entre em contato com o administrador');
        }

    }

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <>
            <div className="header">
                <img src={logo} alt="jobsNET" />
                <h2>Banco de Currículo</h2>
                <p>Cadastre seu currículo. Venha fazer parte do nosso time!</p>
            </div>

            <div id="form">
                <h2>Dados Pessoais</h2>

                <fieldset>
                    <label className="name required">Nome Completo: </label>
                    <input className="nameInput" onChange={(e) => {
                        setForm({ ...form, nome: e.target.value });
                    }} value={form.nome} required />
                </fieldset>

                <fieldset>
                    <label className="profissao required">Cargo: </label>
                    <input className="profissaoInput" onChange={(e) => {
                        setForm({ ...form, profissao: e.target.value });
                    }} value={form.profissao} placeholder="Para qual cargo está se candidatando?" required />
                </fieldset>

                <fieldset>
                    <label className="dataNasc required">Data de nascimento: </label>
                    <input className="dataInput" onChange={(e) => {
                        setForm({ ...form, dataNascimento: e.target.value });
                    }} type="date" value={form.dataNascimento} required />
                </fieldset>

                <fieldset>
                    <label className="estadoCivil">Estado Civil: </label>
                    <select className="selectCivil" onChange={(e) => {
                        setForm({ ...form, estadoCivil: e.target.value.toString() });
                        console.log(e.target.value.toString());
                    }} value={form.estadoCivil} id="selecionar">
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
                        setForm({ ...form, genero: e.target.value.toString() });
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
                    <input className="cepInput" id="cep"
                    onBlur={fetchAddress}
                    onChange={(e) => {
                        setForm({ ...form, cep: e.target.value });
                    }} type="number" placeholder="00000000" value={form.cep} required />
                </fieldset>

                <fieldset>
                    <label className="logradouro required">Logradouro: </label>
                    <input className="logradouroInput"
                        onChange={(e) => {
                            setForm({ ...form, logradouro: e.target.value });
                        }}
                        value={form.logradouro} placeholder="Ex.: Av. Grande Edifício Martin Apt. 3" required />
                </fieldset>

                <fieldset>
                    <label className="numero required">Nº: </label>
                    <input className="numeroInput"
                        onChange={(e) => {
                            setForm({ ...form, num: e.target.value });
                        }}
                        size="6" type="number" value={form.num} required />
                </fieldset>

                <fieldset>
                    <label className="bairro required">Bairro: </label>
                    <input className="bairroInput required"
                        onChange={(e) => {
                            setForm({ ...form, bairro: e.target.value.toString() });
                        }}
                        value={form.bairro} required />
                </fieldset>

                <fieldset>
                    <label className="cidade required">Cidade: </label>
                    <input className="cidadeInput"
                        onChange={(e) => {
                            setForm({ ...form, cidade: e.target.value });
                        }}
                        value={form.cidade} required />
                </fieldset>

                <fieldset>
                    <label className="estado required">Estado: </label>
                    <input className="estadoInput" id="estado"
                        onChange={(e) => {
                            setForm({ ...form, estado: e.target.value });
                        }}
                        size="2" value={form.estado} required />
                </fieldset>

                <h2>Contato</h2>

                <fieldset>
                    <label className="telFixo">Telefone Fixo: </label>
                    <input className="telFixoInp" onChange={(e) => {
                        setForm({ ...form, telFixo: e.target.value.toString() });
                    }} placeholder="(99) 9999-9999" value={form.telFixo} />
                </fieldset>

                <fieldset>
                    <label className="celular required">Celular: </label>
                    <input className="celularInp" pattern="^(\d{2})\s\d{4,}-\d{4}$" type="tel"
                    onChange={(e) => {
                        setForm({ ...form, celular: e.target.value.toString() });
                    }} placeholder="(99) 99999-9999" value={form.celular} required />
                </fieldset>

                <fieldset>
                    <label className="email required">E-mail: </label>
                    <input type="email" onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                    }} className="emailInput" placeholder="name@example.com" value={form.email} required />
                </fieldset>

                <h2>Documentos</h2>

                <fieldset>
                    <label className="identidade">Identidade: </label>
                    <input className="idInput" onChange={(e) => {
                        setForm({ ...form, rg: e.target.value });
                    }} value={form.rg} />
                </fieldset>

                <fieldset>
                    <label className="cpf required">CPF: </label>
                    <input className="cpfInput" onBlur={(e) => {
                        buscaCPF(form.cpf);
                    }}
                    onChange={(e) => {
                        setForm({ ...form, cpf: e.target.value });
                    }} value={form.cpf} type="number" required />
                </fieldset>

                <h2>Informações Adicionais</h2>

                <fieldset>
                    <label className="veiculo">Possui veículo: </label>
                    <select className="selectVeiculo" onChange={(e) => {
                        setForm({ ...form, veiculo: e.target.value });
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
                        setForm({ ...form, cnh: e.target.value });
                        console.log(e.target.value);
                    }} value={form.cnh} id="selecionar">
                        <option value="selecione">Selecione</option>
                        <option value="não">Não possuo</option>
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
            </div>
            <footer>
            <p>Copyright &copy; JobsNET. Made by <a href="https://github.com/gerlaneln" id="sign" target="_blank">gerlaneln</a>.</p>
            </footer>
        </>
    );
}

export default App;