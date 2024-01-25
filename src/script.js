document.addEventListener('DOMContentLoaded', function () {
  // Sample data for blog posts (replace with actual data or fetch from a server)
  const blogPosts = [
    { title: 'Post 1', content: 'This is the content of Post 1.' },
    { title: 'Post 2', content: 'This is the content of Post 2.' },
    // Add more posts as needed
  ];

  const blogPostsContainer = document.getElementById('blog-posts');

  // Function to display blog posts
  function displayBlogPosts() {
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      const content = document.createElement('p');

      title.textContent = post.title;
      content.textContent = post.content;

      article.appendChild(title);
      article.appendChild(content);

      blogPostsContainer.appendChild(article);
    });
  }

  // Initial display of blog posts
  displayBlogPosts();
});
