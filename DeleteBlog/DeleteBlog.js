function deleteBlog(title) {
    var title = document.getElementById("deleteTitle").value;
    var blogs = JSON.parse(localStorage.getItem("blog1")) || { title: title, content: content };
    console.log(title);
    if (blogs.find(blog2 => blog2.title === title)) {
        const NewBlogs = [];
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].title !== title) {
                NewBlogs.push(blogs[i]);
            }
        }
        console.log(NewBlogs);
        localStorage.setItem("blog1", JSON.stringify(NewBlogs));
        alert("✅ Your Blog Has Been Deleted");
        window.location = "/BlogApplication/Dashboard/Dashboard.html";
    } else {
        alert("This Blog Doesn't Exist, Please Try Again");
    }
}