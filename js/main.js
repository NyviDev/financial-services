

function showMenu() {
    let menu = document.getElementById('menu');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function menuHeader() {
    var windowWidth = window.innerWidth;
    let menu = document.getElementById('menu');

    if(windowWidth > 986) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}



