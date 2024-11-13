// JavaScript to dynamically display blog posts
document.addEventListener("DOMContentLoaded", function () {
    const posts = [
        {
            title: "First Blog Post",
            date: "January 1, 2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            title: "Second Blog Post",
            date: "February 1, 2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        }
    ];

    const blogPostsContainer = document.querySelector(".blog-posts");

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-date">Published on: ${post.date}</p>
            <p class="post-content">${post.content}</p>
            <a href="#" class="read-more" onclick="alert('Read More clicked for ${post.title}')">Read More</a>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
