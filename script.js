const display = document.querySelector(".display");
let counter = parseInt(display.innerText);

const btns = document.querySelectorAll('.click-button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",function(event){
        buttonClick(event.target.innerText);
    })
}

function buttonClick(value){
    switch(value){
        case "DECREASE":
            counter--;
            break;
        case "RESET":
            counter=0;
            break;
        case "INCREASE":
            counter++;
            break;
    }
    rerender();
}

function rerender()
{
    display.innerText=counter;
    if(counter<0)
        display.style.color='red';
    else
        display.style.color='green';
}

