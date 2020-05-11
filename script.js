
let color = document.querySelector('#colorPicker');
let table = document.querySelector('#pixelCanvas');
let sizePicker = document.querySelector('#submit');

let height = document.querySelector('#inputHeight').Value;
let width = document.querySelector('#inputWidth').value;
makeGrid(height, width);
let initial = 0;

sizePicker.addEventListener("click", (event) => {
    event.preventDefault();
    let height = document.querySelector('#inputHeight').value;
    console.log(height)
    let width = document.querySelector('#inputWidth').value;
    console.log(width)
    if(initial!==0){
        table.firstElementChild.remove();
        
    }
   

    makeGrid(height, width);
    initial++
});

function makeGrid(height, width) {
    for( let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        
        for( let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            
       cell.addEventListener("mousemove", (event) => {
                cell.style.backgroundColor = color.value;
            })
        }
    }
}
