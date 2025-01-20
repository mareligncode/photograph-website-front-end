function change(){
    document.getElementById('im').src='j1.jfif';
}
function changee(){
    document.getElementById('imm').src='j2.png';
}
function changeee(){
    document.getElementById('immm').src='j3.jfif';
}
function drop() {
    var x = document.getElementById('header');
    // Toggle the 'responsive' class to show or hide navbar links
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}


// function toggleMenu() {
//     const header = document.querySelector('.header');
//     header.classList.toggle('active');
// }