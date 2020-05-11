
let color = document.querySelector('#colorPicker');
let table = document.querySelector('#pixelCanvas');
let sizePicker = document.querySelector('#sizePicker');

let height = document.querySelector('#inputHeight').Value;
let width = document.querySelector('#inputWidth').value;
makeGrid(height, width);


sizePicker.addEventListener("click", (event) => {
    event.preventDefault();
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    table.firstElementChild.remove();

    makeGrid(height, width);
});

function makeGrid(height, width) {
    for( let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for( let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener("click", (event) => {
                cell.style.backgroundColor = color.value;
            })
        }
    }
}
