$(function () {
    $("#header").load("partials/header.html", function () {
        $(".article-title-item").text(articleTitle);
    });

    $("#footer").load("partials/footer.html", function () {
        // Do nothing
    });

    // head.htmlの中身を親に追加
    $.get("partials/head.html", function (data) {
        $("head").append(data);
    }, "text");
});

$(document).ready(function () {
    
});