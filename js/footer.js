$(function(){
    var link=document.createElement("link");
    link.rel="stylesheet";
    link.href="css/footer.css";
    document.head.appendChild(link);
    $.ajax({
        type:"get",
        url:"public/footer.html"
    }).then(html=> {
      $("#footer").load("public/footer.html");
})
});