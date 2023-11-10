header = document.querySelector("body > div.container > div.row > div > h1 > a");
header.style.color = "white";

for (var i = 1; i < 6; i++) {
    header_menu = document.querySelector("body > div.container > div.row > div > nav > div > ul > li:nth-child("+i+") > a");
    header_menu.style.color = "white";
    nav_link = document.querySelector("body > div.container > div.nav-box > li:nth-child("+i+")");
    nav_link.classList.remove("white-hover", "gray-hover");
    nav_link.classList.add('gray-hover');
}

for (var i = 1; i < 6; i++) {
    header_menu = document.querySelector("body > div.container > div.nav-box > li:nth-child("+i+") > a");
    header_menu.style.color = "white";
}

item = document.querySelector("body > div.container > div.nav-box");
item.style.borderColor = "white";

nav_bar = document.getElementsByClassName("main-nav-bar")[0];
nav_bar.style.filter = "invert(100%) sepia(17%) saturate(2%) hue-rotate(234deg) brightness(111%) contrast(101%)";
