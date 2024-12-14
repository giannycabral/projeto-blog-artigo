function criarElementoPost(post) {
    return `
    <article class="blog-post-container" data-post-id="${post.id}">
        <div class="row">
            <div class="blog-post-image col-3">
                <img src="${post.image}" alt="Imagem do post">
            </div>
            <div class="col-7">
                <div class="blog-post-title">${post.title}</div>
                <div class="blog-post-body">${post.body}</div>
            </div>
            <div class="col-2 d-flex align-items-center">
                <a style="color:white" class="btn btn-danger m-auto" onclick="DeletarPost(this)">X</a>
            </div>
        </div>
    </article>`;
}

async function carregarPosts() {
    const posts = await getPosts();
    const container = document.querySelector('.blog-posts-section');
    container.innerHTML = ''; // Limpa posts existentes
    posts.forEach(post => {
        container.insertAdjacentHTML('beforeend', criarElementoPost(post));
    });
}

async function DeletarPost(elemento) {
    const post = elemento.closest('.blog-post-container');
    const postId = post.dataset.postId;
    await deletePost(postId);
    post.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-post-form');
    form.addEventListener('submit', handleSubmit);
    carregarPosts();
});

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const novoPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        image: formData.get('image') || 'https://via.placeholder.com/150'
    };

    try {
        const postCriado = await createPost(novoPost);
        const container = document.querySelector('.blog-posts-section');
        container.insertAdjacentHTML('afterbegin', criarElementoPost(postCriado));
        event.target.reset();
    } catch (error) {
        console.error('Erro ao criar post:', error);
    }
}