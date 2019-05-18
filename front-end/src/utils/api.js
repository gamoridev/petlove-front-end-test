export async function getCep(cep) {
    // retorna as informações do CEP digitado
    return fetch(`http://localhost:3001/cep/${cep}`)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            throw new Error('Erro ao conectar com o servidor, tente novamente mais tarde.');
        })
}