$(function () {

    var $mainButton = $(".content_button").find("button");
    var $popupButton = $(".popup_content_button").find("button");
    var $inputEmail = $("#form_email");
    var $inputPassword = $("#form_password");
    var $popup = $(".popup");
    var $popupContent = $(".popup_content");


    var $inputEmailVal = $inputEmail.val();
    var $inputPasswordVal = $inputPassword.val();


    $mainButton.on("click", function () {
        event.preventDefault();
        $popup.css("display", "flex");
    });

    $popupButton.on("click", function () {
        event.preventDefault();
        loadData();
    });

    function loadData() {
        const http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                $popupContent.html = this.responseText;
            }
        };

        http.open("POST", "http://recruitment-api.pyt1.stg.jmr.pl/login", true);
        http.setRequestHeader("Content-type", "application/json");
        http.send();
    }
});