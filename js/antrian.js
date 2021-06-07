var count = 0;

function lower() {
    count -= 1;
    document.getElementById('Antrian').innerHTML = count;
}
function add() {
    count += 1;
    document.getElementById('Antrian').innerHTML = count;
}