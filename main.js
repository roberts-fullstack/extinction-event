//1. querySelectorAll
//#ord-dinos -> parent id

let dinolist1 = document.querySelectorAll('#ord-dinos li');

function olStrike(){
    for(let i = 0; i < dinolist1.length; i++){
        dinolist1[i].addEventListener('click', function(){
            console.log(dinolist1[i].innerText);
            dinolist1[i].style.textDecoration = 'line-through';
        })
    }
}
olStrike();

//#unord-dinos -> parent div

//Below is the querySelectorAll method to change unord list style
// let dinolist2 = document.querySelectorAll('#unord-dinos li');

// function ulDisappear(){
//     for(let i = 0; i < dinolist2.length; i++){
//         dinolist2[i].addEventListener('click', function(){
//             dinolist2[i].style.opacity = '0';
//         })
//     }
// }

//Below is the event target method to change unord list style
let dinolist2 = document.querySelector('#unord-dinos');

function ulDisappear(){
dinolist2.addEventListener('click', function(event){
    
    let element = event.target;
    console.log(element.innerText);

    element.style.opacity = '0';

    })
}

ulDisappear();

let dinoRow = document.querySelectorAll('#row img');

function rowCollapse(){
    for(let i = 0; i < dinoRow.length; i++){
        dinoRow[i].addEventListener('click', function(){
            // console.log(dinoRow[i]);
        dinoRow[i].style.width = 0;
        })
    }
}

rowCollapse();


let meteorBtn = document.querySelector('#destroy-all');
meteorBtn.addEventListener('click', function(){
    removeAll(arr1,arr2,arr3);
});

let arr1 = document.querySelectorAll('#ord-dinos li');
let arr2 = document.querySelectorAll('#unord-dinos');
let arr3 = document.querySelectorAll('#row img');

function removeAll(arr1, arr2, arr3){
    for(let i = 0; i < arr1.length; i++) {
        
        
            arr1[i].style.textDecoration = 'line-through solid black'; 
        
        }

    for(let i = 0; i < arr2.length; i++) {
        
         
            arr2[i].style.opacity = '0'; 

        }   
    

    for(let i = 0; i < arr3.length; i++) {
        
            arr3[i].style.width = '0px';

            }  
    
}
    // removeAll(arr1,arr2,arr3);