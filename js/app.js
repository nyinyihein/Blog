let icon1 = document.querySelector(".icon1")
let left_links = document.querySelector(".nav-top--left-links ");
icon1.onclick = function () {
    // console.log(this.src);
    // console.log(window.location.origin);
    left_links.classList.toggle("show");
    let url = window.location.origin;
    if (this.src === `${url}/images/bar.svg`){
        this.src = `${url}/images/bar2.svg`;
    }
    else{
        this.src = `${url}/images/bar.svg`;
    }

};
