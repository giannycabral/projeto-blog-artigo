// Configuração da API
const API_URL = 'https://api.exemplo.com/posts';

// Funções para interagir com a API
async function carregarPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        posts.forEach(post => criarPost(post.titulo, post.corpo, post.imagem));
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
    }
}

async function criarNovoPost(titulo, corpo, imagem) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo, corpo, imagem })
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao criar post:', error);
    }
}

async function deletarPost(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Erro ao deletar post:', error);
    }
}