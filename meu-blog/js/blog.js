function criarElementoPost(post) {
    return `
    <article class="blog-post-container" data-post-id="${post.id}">
        <div class="row">
            <div class="blog-post-image col-3">
                <img src="https://via.placeholder.com/150" alt="Post image">
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