let items = document.querySelectorAll("#box1-t > div");
let bk = document.querySelector(".bk");

let last = 0;

for (let i = 0; i < items.length; i++) {
    items[i].onmouseenter = function(){
        items[last].style.color = "black";
        this.style.color = "black";
        last = i ;
        bk.style.left = i * 110 +"px"
    }
    
}
