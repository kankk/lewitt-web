var searchIcon = document.getElementById("header-search-icon");
var searchInput = document.getElementById("header-search-input");
var searchBox = document.getElementById("header-search");

var nav1Products = document.getElementById("header-nav1-products");
var nav1Samples = document.getElementById("header-nav1-samples");
var nav1Lewitt = document.getElementById("header-nav1-lewitt");

var nav2Products = document.getElementById("header-nav2-products");
var nav2Samples = document.getElementById("header-nav2-samples");
var nav2Lewitt = document.getElementById("header-nav2-lewitt");

function searchIconClickListener(event) {
    searchBox.style.display = "inline-block";
    searchInput.focus();
}

function searchInputFocusListener(event) {

}

function searchInputBlurListener(event) {
    searchBox.style.display = "none";
}

function initNavEvent() {
    // products-nav
    nav1Products.onmouseover = function(event) {
        nav2Products.style.display = "block";
    };
    nav1Products.onmouseout = function(event) {
        nav2Products.style.display = "none";
    };
    nav2Products.onmouseover = function(event) {
        this.style.display = "block";
    };
    nav2Products.onmouseout = function(event) {
        this.style.display = "none";
    };
    // samples-nav
    nav1Samples.onmouseover = function(event) {
        nav2Samples.style.display = "block";
    };
    nav1Samples.onmouseout = function(event) {
        nav2Samples.style.display = "none";
    };
    nav2Samples.onmouseover = function(event) {
        this.style.display = "block";
    };
    nav2Samples.onmouseout = function(event) {
        this.style.display = "none";
    };
    // lewitt-nav
    nav1Lewitt.onmouseover = function(event) {
        nav2Samples.style.display = "block";
    };
    nav1Lewitt.onmouseout = function(event) {
        nav2Samples.style.display = "none";
    };
    nav2Lewitt.onmouseover = function(event) {
        this.style.display = "block";
    };
    nav2Lewitt.onmouseout = function(event) {
        this.style.display = "none";
    };

}

function init() {
    searchIcon.addEventListener("click", searchIconClickListener, false);
    searchInput.addEventListener("focus", searchInputFocusListener, false);
    searchInput.addEventListener("blur", searchInputBlurListener, false);

    initNavEvent();
}

init();
