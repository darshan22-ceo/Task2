const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

function renderPosts(posts) {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = posts
    .map(
      (post) => `
    <article class="post">
      <img src="${post.image}" alt="${post.title}" />
      <h2>${post.title}</h2>
      <p>${post.summary}</p>
      <a href="#" onclick='alert("Full post: ${post.content}");' class="read-more-btn">Read More</a>
    </article>`
    )
    .join("");
}

let posts = JSON.parse(localStorage.getItem("posts")) || [];

if (selectedCategory) {
  posts = posts.filter((post) =>
    post.category?.toLowerCase().includes(selectedCategory.toLowerCase())
  );
}

renderPosts(posts);

document.getElementById("searchInput")?.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  renderPosts(filtered);
});
