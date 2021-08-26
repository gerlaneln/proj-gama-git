import logo from './jobsNET.svg';
import './style.css';

function App(props){

    function pesquisaCPF(){
        
    }

    return(
        <>
            <div className="header">
                <img src={logo} alt="jobsNET"/>
                <h2>Banco de Currículo</h2>
            </div>

            <form>
                <h3>Digite o seu CPF</h3>
                <input className="buscaCPF" required/>

                <div className="buttondiv">
                    <button type="submit" onClick={pesquisaCPF}>Buscar</button>
                </div>
            </form>
        </>
    );
}

export default App;