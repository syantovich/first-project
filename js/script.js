let left = document.querySelectorAll(".left"),
    right =document.querySelectorAll(".right");

left.forEach(e=>{
    e.addEventListener("click",()=>{
        let main = e.parentNode.parentNode.parentNode.querySelector(".leftRight");
        let width = main.offsetWidth;
        let k;
        if(main.childNodes.length==7){k=3}else{k=4};
        console.log(main.childNodes.length);
        let nowLeft = main.getBoundingClientRect().left;
            if(nowLeft>(-width/(k-1))){
              main.style.left =`${nowLeft-width/k}px`;  
            }
        
    
    });
});
right.forEach(e=>{
    e.addEventListener("click",()=>{
        let main = e.parentNode.parentNode.parentNode.querySelector(".leftRight");
        let width = main.offsetWidth;
        let k;
        if(main.childNodes.length==7){k=3}else{k=4};
        let nowLeft = main.getBoundingClientRect().left;
            if(nowLeft<(-50)){
              main.style.left =`${nowLeft+width/k}px`;  
            }
        
    
    });
});
let form =document.querySelector(".form");
let menu = document.querySelectorAll(".clickmenu");
    menu.forEach(e=>{
        e.addEventListener("click",()=>{           
            form.style.display="block";
        });
    });
let cross=document.querySelector(".cross");
    cross.addEventListener("click",()=>{form.style.display="none";});

