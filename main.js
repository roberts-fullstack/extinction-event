// ===== VARIABLES =====

let crossList = document.querySelectorAll(".cross-list li");
let fadeAway = document.querySelectorAll(".fade-away li");
let imgShrink = document.querySelector(".img-shrink");
let imgShrink2 = document.querySelectorAll(".img-shrink img");
let destroyAll = document.querySelector("#destroy-all");


// ===== TESTS =====

console.log(crossList);
console.log(fadeAway);
console.log(imgShrink);
console.log(imgShrink2);

// ========== PROGRAM ==========

crossSwitch(crossList);
opacitySwitch(fadeAway);
collapseSwitch(imgShrink);

// ===== DESTROY ALL ====

destroyAll.addEventListener("click", function(){

    extinguishAll(crossList,fadeAway,imgShrink2);

})


// ========== FUNCTIONS ===========

function crossSwitch(array){
    for (let i = 0; i < array.length; i++) {
    
        array[i].addEventListener('click', function(){
    
            if (array[i].style.textDecoration !== "line-through solid red"){
                array[i].style.textDecoration = "line-through solid red";
            } else {
                array[i].style.textDecoration = "none";
            }
    
        })
        
    }
}

function opacitySwitch(array){
    for (let i = 0; i < array.length; i++) {
    
        array[i].addEventListener('click', function(){
    
            if(array[i].style.opacity !== "0" ){
                array[i].style.opacity = "0";
            } else {
                array[i].style.opacity = "100";
            }
        })
    }
}

function collapseSwitch(imgVar){

    imgVar.addEventListener("click", function(event){
        element = event.target;
    
        if (element.style.width !== "0px"){
            element.style.width = "0px";
        }
    
    })
}

function extinguishAll(array1,array2,array3){

    for (let i = 0; i < array1.length; i++) {
    
        array1[i].style.textDecoration = "line-through solid red"

        }
    
    for (let i = 0; i < array2.length; i++) {

        array2[i].style.opacity = "0";

    }

    for (let i = 0; i < array3.length; i++) {

        array3[i].style.width = "0px";

    }
        
}


