let color = "#000";
//Select color input 
let rowVal, colVal;
//Select size input
$("#sizePicker :submit").on("click", function(evt) {
    evt.preventDefault();
    makeGrid();
});
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let body = $("#pixel_canvas")[0];
    rowVal = $("#input_height").val();
    colVal = $("#input_width").val();
    for (let r = 0; r < rowVal; r++) {
        let row = body.insertRow(r);
        for (let c = 0; c < colVal; c++) {
            let cell = row.insertCell(c);
            $(cell).on('click', function(evt) {
                evt.target.style.backgroundColor = $("#colorPicker").val();
                this.style.borderColor = "#000";
            });
        }
    }
    return false;
}