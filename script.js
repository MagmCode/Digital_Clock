// Se crea la funcion "clock"
function clock(){
    // Encabezado con la fecha
    var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

    // funcion del reloj 
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h < 11 ? 'AM': 'PM';

    h = h < 10 ? '0'+h: h;
    m = m < 10 ? '0'+m: m;
    s = s < 10 ? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    
}
// Se llama a la funcion "clock" para que se ejecute cada 400 milisegundos (0.4 segs) y se actualize el reloj en pantalla
var inter = setInterval(clock,400);