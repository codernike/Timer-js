let counter = document.getElementById('counter');
function start(){
    document.getElementById('counter').innerHTML='9';
    setTimeout(() => {
        document.getElementById('counter').innerHTML='8';
    }, 1000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='7';
    }, 2000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='6';
    }, 3000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='5';
    }, 4000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='4';
    }, 5000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='3';
    }, 6000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='2';
    }, 7000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='1';
    }, 8000);
    setTimeout(() => {
        document.getElementById('counter').innerHTML='0';
    }, 9000);

}