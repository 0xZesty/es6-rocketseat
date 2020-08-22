// Funão delay aciona o .then após 1s
// TRANSFORMANDO EM ASYNC AWAIT
import axios from 'axios';


const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {  
    await delay(console.log('1s')) 
    await delay(console.log('2s'))
    await delay(console.log('3s'))
 
}      

umPorSegundo();

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)    
        console.log(response.data)    
    } catch(err)  {      
        console.log('Usuário não existe');    
    }
}

getUserFromGithub('Cr3ativeLZ');


class Github {  
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)      
            console.log(response.data);      
        } catch (err) {        
            console.log('Repositório não existe');
        }  
    }
}
Github.getRepositories('Cr3ativeLZ/ecoleta123');
Github.getRepositories('Cr3ativeLZ/ecoleta');

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)    
        console.log(response.data)    
    }catch (err) {      
        console.log('Usuário não existe');    
    }
}
buscaUsuario('diego3g');