let cartButton = document.getElementsByClassName("btn");
let cartContainer = document.querySelector(".cart-container");
let showMsg = document.getElementById("msg");

for(let i = 0; i < cartButton.length; i++){
 cartButton[i].addEventListener("click", function(e){
   showMsg.innerHTML = "";
    let parent = e.target.parentNode;
    let clone = parent.cloneNode(true);
    alert("Item added to cart!");
    cartContainer.appendChild(clone);
    clone.lastElementChild.innerText = "Buy now";
 })
}