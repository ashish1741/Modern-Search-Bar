const search = document.querySelector(".search")
const btn =document.querySelector(".btn");
const input =document.getElementById("seachbox")
const btns = document.querySelector("button");

btn.addEventListener("click" ,() =>{
    search.classList.toggle("active");
    input.focus();
    
})

// done----------------