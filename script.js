const inputAll = document.querySelectorAll("input");

let clickEvent = () => {
    document.querySelector("input").classList.add("submitted")
    console.log("he")
}

// inputAll.forEach((item) => {
//     item.addEventListener('click', clickEvent())
// });

inputAll.forEach((item) => {
        item.addEventListener('click', function clickEvent(event){
            event.target.classList.add('submitted'); 
        })
    });
    


// document.addEventListener('click', function handleClick(event) {
//     console.log('user clicked: ', event.target);
  
//     event.target.classList.add('bg-yellow');
//   });
// function classToForm(){
//     document.querySelector("input").classList.add("submitted")
//     console.log("he")

// }

// inputAll.addEventListener("click", classToForm);



// let elements = document.querySelectorAll('.button');

// let clickEvent = () => {
//     console.log('some event content here...')
// }
// elements.forEach((item) => {
//     item.addEventListener('click', clickEvent)
// });