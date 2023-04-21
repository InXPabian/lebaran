const movieItems=document.querySelector(".movies-content").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=12;
let index=1;

const pagination=Math.ceil(movieItems.length/maxItem);
console.log(pagination)

prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
})
next.addEventListener("click",function(){
    index++;
    check();
    showItems();
})

function check(){
    if(index==pagination){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");
    }

    if(index==1){
        prev.classList.add("disabled");
    }
    else{
        prev.classList.remove("disabled");

    }
}

function showItems() {
    for(let i=0;i<movieItems.length; i++){
        movieItems[i].classList.remove("show");
        movieItems[i].classList.add("hide");

        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            // if i greater than and equal to (index*maxItem)-maxItem;
            // means (1*8)-8=0 if index=2 then (2*8)-8=8
            movieItems[i].classList.remove("hide");
            movieItems[i].classList.add("show");
    }
    page.innerHTML=index;
}
}

window.onload=function(){
    showItems();
    check();
}