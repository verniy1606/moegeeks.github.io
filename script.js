fetch("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.min.js")
    .then(r => { return r.text() })
    .then(t => eval(t))
    .then(() => {
        $(function () {
            $("#header").load("partials/header.html", function () {
                $(".article-title-item").text(moe_articleTitle);
            });

            $("#footer").load("partials/footer.html", function () {

            });

            /* $.get("partials/head.html", function (data) {
                $("head").append(data);
            }, "text"); */
        });

        // When the site is ready
        $(document).ready(function () {
            // Sets the <title>
            $(document).attr("title", "moegeeks.com");
        });
    });