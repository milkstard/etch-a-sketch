secondContainer = document.createElement('div');
secondContainer.classList.toggle('grid-container');

mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(secondContainer);

btnContainer = document.querySelector('.btn-container');
let gridSize = 0;
btnContainer.addEventListener('click', ()=>{
    gridSize = prompt("Input a grid size: ");
    while(gridSize < 0 || gridSize > 100)
        gridSize = prompt("Input is not within the raneg of 0-100, put another size to continue: ");
    gridMaker();
})
//create a loop to make a 16x16 grid


function gridMaker(){
    gridRemover();
    let columnPxDivider = 742.133/gridSize;
    let rowPxDivider = 402.133/gridSize;
    secondContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${columnPxDivider}px)`;
    secondContainer.style.gridTemplateRows = `repeat(${gridSize},${rowPxDivider}px)`//`repeat(auto-fit,minmax(960px), 1fr)`;
    for(let i=1; i<=gridSize*gridSize; i++){
        let tempContainer = document.createElement('div');
        let tempSpan = document.createElement('span');
        tempSpan.classList.toggle('toHide');
        tempContainer.classList.toggle(`grid-child-${i}`);
        secondContainer.appendChild(tempContainer);
        tempContainer.appendChild(tempSpan);
        tempContainer.style.border = "1px solid black";
        tempSpan.style.visibility = "hidden";
        tempSpan.textContent = "0";
    }
}

function gridRemover(){
   let child = secondContainer.lastElementChild;
   while(child){
        secondContainer.removeChild(child);
        child = secondContainer.lastElementChild;
   }
}


document.addEventListener('mouseover', function(e){
    let targetClass = `${e.target.classList}`;

    if(targetClass.includes("grid-child")){
        let tempTarget = document.querySelector(`.${targetClass}`);
        tempTarget.style.backgroundColor = 'red';
    }
    else
        return;
})
/*document.onmouseover = (e) => {
    //targetInfo = e.target.classList;
    hoveredElement(e);
}//console.log(e.target.classList);

function hoveredElement(item){
    targetInfo = ` ${item.target.classList}`.trim();
    if(targetInfo.includes("grid-child")){
        console.log(`.${targetInfo}`);
       const temp =  document.querySelector(`.${targetInfo}`);
        temp.addEventListener('mouseover', (e)=> e.target.style.color = red);
    }
    return;
}*/