input = document.querySelector("input[type='text']")

function ph () {

    document.body.style.backgroundColor = "red";
    // input.setAttribute('placeholder','enter your name');
};

function phr () {
    input.setAttribute('placeholder', '');
};

input.addEventListener("mouseover", ph);
input.addEventListener("mouseout", phr);