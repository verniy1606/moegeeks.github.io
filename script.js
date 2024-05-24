/* var script = docmuent.createElement("script");
script.src = "script.js";
document.head.appendChild(script); */

fetch("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.min.js")
.then(r=>{return r.text()})
.then(t=>eval(t))
.then(() => {
    $(function () {
        $("#header").load("partials/header.html", function () {
            $(".article-title-item").text(articleTitle);
        });
    
        $("#footer").load("partials/footer.html", function () {
        
        });
    
        $.get("partials/head.html", function (data) {
            $("head").append(data);
        }, "text");
    });
    
    $(document).ready(function () {
        
    }); 
});