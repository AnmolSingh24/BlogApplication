function addBlog() {
    var title = document.getElementById("blog-title").value;
    var content = document.getElementById("blog-content").value;
    const blog1 = {
        title: title,
        content: content,
        id: Date.now()
    }
    var blog2 = [];
    var blog2 = JSON.parse(localStorage.getItem("blog1")) || [];
    console.log(JSON.stringify(blog2))
    blog2.push(blog1);
    console.log(JSON.stringify(blog2));
    localStorage.setItem("blog1", JSON.stringify(blog2));
    alert("✅ Your Blog Has Been Added")
    window.location = "/BlogApplication/Dashboard/Dashboard.html"
}

function showBlogs() {
    var blogs = JSON.parse(localStorage.getItem("blog1")) || [];
    console.log(blogs);
    for (let i = 0; i < blogs.length; i++) {
        console.log(blogs[i]);
        var item = document.createElement("div");
        item.innerHTML = "<b> <br>" + blogs[i].title + "</b> <b onclick='deleteBlog(\"" + blogs[i].title + blogs[i].content + "\")'></b>";
    }
}