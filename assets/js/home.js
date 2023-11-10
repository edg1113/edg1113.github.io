card_grid = document.querySelector("body > section.section.grey-bg > div > div > div > div > div:nth-child(2) > div > div");
contoller = document.querySelector("body > section.section.grey-bg > div > div > div > div > div.scroller");
var start = 0;
on_resize();

window.addEventListener('resize', on_resize)
for(let i=0; i<contoller.children.length; i++){
    if (i == 0){
        contoller.children[i].style.opacity = 1.0;
    }
    contoller.children[i].addEventListener('click', change_visible)
    contoller.children[i].idx = i
}

function change_visible(event) {
    idx = event.srcElement.idx;
    len = get_visible_num();
    start = idx * len
    set_visible(start, start + len);
    change_opacity(idx);
}

function change_opacity(idx){
    for(let i=0; i<contoller.children.length; i++){
        if (i == idx){
            contoller.children[i].style.opacity = 1.0;
        }
        else {
            contoller.children[i].style.opacity = 0.2;
        }
    }

}

function on_resize() {
    if (start > get_visible_num() * 2) {
        start = get_visible_num() * 2
    }
    set_visible(start, start+get_visible_num());
}

function get_visible_num(){
    if (window.innerWidth<=768){
        return 1;
    }
    else if (window.innerWidth<=1024){
        return 2;
    }
    else {
        return 3;
    }
}

function set_visible(start, end){
    for (let i=0; i< card_grid.children.length; i++){
        if (i >= start && i < end){
            card_grid.children[i].style.display= 'block';
        }
        else {
            card_grid.children[i].style.display= 'none';
        }
    }
}