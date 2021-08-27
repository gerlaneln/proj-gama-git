class cep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataInit
        }
    }
    url = () => {
        return `http://viacep.com.br/ws/${this.state.cep}/json/`;
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value }, () => {
            this.buscarCep();
        });
    }

    buscarCep() {
        if (this.state.cep.length < 8) {
            return;
        } else {
            fetch(this.url(), { mode: 'cors' })
                .then((res) => res.json())
                .then((data) => {
                    if (data.hasOwnProperty("erro")) {
                        this.setState({ data: dataInit });
                        alert('Cep não existente');
                    } else {
                        this.setState({ data });
                    }
                })
                .catch(err => consolelog(err));
        }
    }
}