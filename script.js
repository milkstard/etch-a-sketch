secondContainer = document.createElement('div');
secondContainer.classList.toggle('grid-container');

mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(secondContainer);

//create a loop to make a 16x16 grid
for(let i=1; i<=16*16; i++){
    let tempContainer = document.createElement('div');
    tempContainer.classList.toggle(`grid-child-${i}`);
    secondContainer.appendChild(tempContainer);
    tempContainer.textContent = `${i}`;
}

let targetInfo = "";
document.onmouseover = (e) => targetInfo = e.target.classList;//console.log(e.target.classList);