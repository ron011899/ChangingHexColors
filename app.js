function changeHexColors(){
    let hex_num_let =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hex_comb = '';

    for(let i = 0; i < 6; i++){
        let random_comb = Math.floor(Math.random() * hex_num_let.length);

        hex_comb += hex_num_let[random_comb];
    }
    document.getElementById('code').innerHTML = hex_comb;

    document.getElementsByTagName('body')[0].style.backgroundColor = "#" + hex_comb;
}