$(document).ready(function() {
    var title = "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> <span id=\"name\">LuisGraterol</span> <i class=\"fa fa-terminal\" aria-hidden=\"true\"></i>";

    setTimeout(function(){
        $(".title").html(title);
    },2500);

    // Setup
    $.ajaxSetup({ cache: false });

    var colors = [
        "#B55348",
        "#DC7633",
        "#325184"
    ]

    $("body").css("background-color", colors[Math.floor(Math.random() * (colors.length))]);
});
