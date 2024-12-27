setInterval(function () {
    let date = new Date ();
    let h = date.getHours();
    document.getElementsByClassName("hours").item(0).innerHTML
    = h ;

}, 1000);


setInterval(function () {
    let date = new Date ();
    let m = date.getMinutes();
    document.getElementsByClassName("minutes").item(0).innerHTML
    = m ;
}, 1000);

setInterval(function() {
    let date = new Date ();
    let s = date.getSeconds();
    document.getElementsByClassName("sec").item(0).innerHTML
    = s ;
},1000);