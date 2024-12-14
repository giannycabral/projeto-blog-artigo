const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    try {
        const response = await fetch(`${API_URL}?_limit=2`);
        const posts = await response.json();
        
        // Personalizar posts iniciais
        const customPosts = [
            {
                id: 1,
                title: "🌟 Olá, Oompa Loompas da tecnologia!! 🌟",
                body: "Seja bem-vindo ao nosso cantinho especial na web! 🚀 *Vamos as Regras:* Evite Linguagem Ofensiva, Mantenha o tom respeitoso e profissional, evitando qualquer tipo de discriminação ou ofensa. Crie posts sobre tecnologia, dicas de estudo etc.. Use sua imaginação.. 💡",
                image: "https://img.freepik.com/vetores-premium/bonito-astronauta-em-pe-com-a-bandeira-dos-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone-isolado_138676-4661.jpg?w=360"
            },
            
        ];
        
        return customPosts;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }
}

async function createPost(post) {
    try {
        const defaultImage = 'https://via.placeholder.com/150';
        const newPost = {
            ...post,
            image: post.image || defaultImage,
            userId: 1,
            id: Date.now()
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        const createdPost = await response.json();
        return { ...createdPost, image: newPost.image };
    } catch (error) {
        console.error('Erro ao criar post:', error);
        throw error;
    }
}

async function deletePost(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Erro ao deletar post:', error);
        throw error;
    }
}