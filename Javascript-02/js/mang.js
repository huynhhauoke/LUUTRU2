let array = [];
let input = document.getElementById("number");
let p = document.getElementById("data");
let btn = document.getElementById("btn");
btn.addEventListener("click", e => {
    e.preventDefault();
    let x = input.value;
    if(isNaN(x)){
        alert("Ngu! Nhập lại đi số nguyên nha ")
    }
    else{
        array.push(x);
        p.innerHTML = array.join("; ");
    }
    input.value = "";
})