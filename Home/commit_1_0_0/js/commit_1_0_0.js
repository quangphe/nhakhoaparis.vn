document.addEventListener("DOMContentLoaded", function() {
    var defaultOption = "op1"; // Option mặc định là "Hà Nội"
    
    var defaultItem = document.getElementById(defaultOption);
    if (defaultItem) {
        defaultItem.style.display = "block";
    }
    
    var selectBox = document.getElementById("select-box");
    selectBox.addEventListener("change", function() {
        var selectedOption = selectBox.options[selectBox.selectedIndex].value;
        
        var allItems = document.getElementsByClassName("commit_1_0_0__box3__item");
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].style.display = "none";
        }
        
        var selectedItem = document.getElementById(selectedOption);
        if (selectedItem) {
            selectedItem.style.display = "block";
        }
    });
});

var slide_service = tns({
    container: ".commit_1_0_0__box2",
    items: 1,
    navContainer: "#commit_1_0_0__box1__tabs",
    navAsThumbnails: true,
    autoplay: false,
    autoplayTimeout: 1000,
    gutter: 10,
    loop: false,
    controls: false,
});
var thumbnails_sv = tns({
    container: ".commit_1_0_0__box1__tabs",
    items: 6,
    slideBy: "page",
    autoplay: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    lazyloadSelector: ".tns-lazy",
    gutter: 0,
    loop: false,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controls: false,
    responsive: {
        280: {
            items: 5
        },
        375: {
            items: 5,
            mouseDrag: false,
            touch: true,
            gutter: 10,
        },
        820: {
            items: 5,
        },
        1024: {
            items: 5
        }
    },
});