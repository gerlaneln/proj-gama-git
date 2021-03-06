const Candidato = require('../models/Candidato');

module.exports = {
    async register (req, res, next) {

        const { cpf, nome, profissao, dataNascimento, estadoCivil, genero, cep, logradouro, num, bairro, cidade, estado, telFixo, celular, email, rg, veiculo, cnh
        } = req.body;

        const newCandidato = new Candidato();

        newCandidato.cpf=cpf;
        newCandidato.nome = nome;
        newCandidato.profissao=profissao;
        newCandidato.dataNascimento = dataNascimento;        
        newCandidato.estadoCivil = estadoCivil;
        newCandidato.genero = genero;
        newCandidato.cep = cep;
        newCandidato.logradouro = logradouro;
        newCandidato.num = num;
        newCandidato.bairro=bairro;
        newCandidato.cidade = cidade;
        newCandidato.estado = estado;        
        newCandidato.telFixo=telFixo;
        newCandidato.celular=celular;
        newCandidato.email=email;
        newCandidato.rg=rg;
        newCandidato.veiculo=veiculo;
        newCandidato.cnh=cnh;

        newCandidato.save((err, saveCandidato) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro ao salvar candidato.');
            }
            return res.status(200).send(saveCandidato);
        });
    },
};
