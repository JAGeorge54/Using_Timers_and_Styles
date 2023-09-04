function toggle(){
    const element = document.getElementById('target');
    element.classList.toggle('on');
}
let timer = null;

function start(){
    timer = setTimeout(() => {
        toggle();
        start();
    }, 1000);
}

function stop(){
    clearTimeout(timer);
}