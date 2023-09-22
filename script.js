// light & dark Mode : ld--mode

let x=0;
function switchButton() {
    ++x;
    if(x%2!==0) {
        // header
        document.getElementById('switchMode').style.backgroundColor="black";
        document.getElementById('ld--mode').style.justifyContent="flex-end";
        document.getElementById('page').style.backgroundColor="rgb(30,30,30)";
        document.getElementById('header').style.backgroundColor="rgb(30,30,30)";
        document.getElementById('nav').style.backgroundColor="rgb(30,30,30)";
        // main
        document.getElementById('main').style.backgroundColor="rgb(17, 86, 113)";
        document.querySelectorAll('.ovtxt').forEach((element) => {
            element.style.color="lightgray";
        })
        document.querySelectorAll('.ovtxt--title').forEach((element) => {
            element.style.color="white";
        })
        // whyCardenX
        document.querySelectorAll('.whyHead').forEach((element) => {
            element.style.color = "white";
        })
        // footer
        document.getElementById('footer').style.backgroundColor="rgb(17, 86, 113)";
        document.querySelectorAll('.cntxt--description').forEach((element) => {
            element.style.color = "lightgray";
        })
        document.querySelectorAll('.link--social').forEach((element) => {
            element.style.color="white";
        })
    }
    if(x%2==0) {
        // header
        document.getElementById('switchMode').style.backgroundColor="white";
        document.getElementById('ld--mode').style.justifyContent="flex-start";
        document.getElementById('page').style.backgroundColor="white";
        document.getElementById('header').style.backgroundColor="white";
        document.getElementById('nav').style.backgroundColor="white";
        // main
        document.getElementById('main').style.backgroundColor="rgb(48, 170, 218)";
        document.querySelectorAll('.ovtxt').forEach((element) => {
            element.style.color = "black";
        })
        document.querySelectorAll('.ovtxt--title').forEach((element) => {
            element.style.color = "white";
        })
        // whyCardenX
        document.querySelectorAll('.whyHead').forEach((element) => {
            element.style.color = "black";
        })
        // footer
        document.getElementById('footer').style.backgroundColor="rgb(48, 170, 218)";
        document.querySelectorAll('.cntxt--description').forEach((element) => {
            element.style.color = "black";
        })
        document.querySelectorAll('.link--social').forEach((element) => {
            element.style.color = "black";
        })
    }
}


// mobileMenuBar
function show() {
    document.getElementById('view').style.display="none";
    document.getElementById('hide').style.display="inline-block";
    document.getElementById('nav').style.right="0";
}
function hide() {
    document.getElementById('view').style.display="inline-block";
    document.getElementById('hide').style.display="none";
    document.getElementById('nav').style.right="-100%";
}