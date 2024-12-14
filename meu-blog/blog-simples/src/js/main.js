// src/js/main.js

import { visualizarPosts, criarPost, deletarPost } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    carregarPosts(); // Carrega posts ao iniciar a página

    const form = document.getElementById('post-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const corpo = document.getElementById('corpo').value;
        criarPost({ titulo, corpo });
        form.reset();
    });
});

function carregarPosts() {
    visualizarPosts().then(posts => {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-post-container';
            postElement.innerHTML = `
                <div class="row">
                    <div class="col-7">
                        <div class="blog-post-title">${post.titulo}</div>
                        <div class="blog-post-body">${post.corpo}</div>
                    </div>
                    <div class="col-2 d-flex align-items-center">
                        <a style="color:white" class="btn btn-danger m-auto" onclick="deletarPost(${post.id})">X</a>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    });
}