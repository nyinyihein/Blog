let icon1 = document.querySelector(".icon1")
let left_links = document.querySelector(".nav-top--left-links ");
icon1.onclick = function () {
    console.log(this.src);
    left_links.classList.toggle("show");
    if (this.src ===  "http://127.0.0.1:5500/images/bar.svg"){
        this.src = "http://127.0.0.1:5500/images/bar2.svg"
    }
    else{
        this.src = "http://127.0.0.1:5500/images/bar.svg"
    }

};
