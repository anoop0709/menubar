
let list = document.querySelectorAll(".list");
for(let i = 0;i < list.length;i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = "list";
        }  
        list[i].className = "list active"     
     }
}

let toggleMenu = document.querySelector('.toggle');
let navWidth = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');
    navWidth.classList.toggle('active');
}
