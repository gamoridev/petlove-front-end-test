const axios = require('axios');

const ITEMS = ['bairro', 'complemento', 'unidade', 'ibge', 'gia']; // Items to remove in parsed response

/**
    * Controller getCep.
    * @param {Integer} cep number.
    * @return {object} The formatted object response
*/
exports.getCep = (req, res) => {
    const cep = req.params.cep;
    const cepRegex = /^[0-9]{8}$/;
    
    // Regex testing for CEP format
    if(cepRegex.test(cep)){
        requestCep(cep)
            .then((response) => {
                let { data, status } = response;
                data = removeObjectProperties(data, ITEMS);
                res.status(200).send({ data, status });
            })
    } else {
        res.status(406).send({ 
            message: "Parâmetro inválido",
            param: req.params.cep
        });
    }
}

/**
    * async Function requestCep HTTP request.
    * @param {Integer} cep number.
    * @return {Promise} Promise object response
*/
async function requestCep(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

/**
    * Function removeObjectProperties.
    * @param {Object, items} Object and its items.
    * @return {object} The formatted object, ie.:
    { cep: "04571-010",
      logradouro: "Avenida Engenheiro Luiz Carlos Berrini",
      localidade: "São Paulo",
      uf: "SP"
    }
*/
var removeObjectProperties = function(object, items) {
    for(var i = 0; i < items.length; i++) {
        if(object.hasOwnProperty(items[i])) {
            delete object[items[i]];
        }
    }
    return object;
};