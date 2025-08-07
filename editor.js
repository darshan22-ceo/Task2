document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const summary = document.getElementById("summary").value;
  const content = document.getElementById("content").value;

  const newPost = { title, image, summary, content };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(newPost); // Add to top
  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Post saved!");
  this.reset();
});
