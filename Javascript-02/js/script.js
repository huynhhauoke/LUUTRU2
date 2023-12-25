document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let p = document.getElementById("msg");
    if (username == "admin" && password == "123456"){
        p.innerText = "Thành công";
        p.style.color = "green";    }
    else{
        p.innerText = "Đéo hợp lệ, CÚT!";
        p.style.color = "red";
        p.style.fontWeight = "bold";
    }
})