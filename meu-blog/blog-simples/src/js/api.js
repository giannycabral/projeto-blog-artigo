const API_URL = 'https://api.exemplo.com/posts';

export const criarPost = async (post) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    return response.json();
};

export const visualizarPosts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const deletarPost = async (postId) => {
    const response = await fetch(`${API_URL}/${postId}`, {
        method: 'DELETE',
    });
    return response.ok;
};