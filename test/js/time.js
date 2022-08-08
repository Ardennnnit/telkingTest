var time1 = document.getElementById('time1');
var localtime = setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = date.getHours();
    if (ampm >12){
        ampm = 'pm'
    } else {
        ampm = 'am';
    };
    if (hours > 12){
        hours = hours - 12;
    } else {
        hours = hours;
    }


    time1.innerHTML = hours + ':' +minutes + '  ' + ampm
},1)

var time2 = document.getElementById('time2');
var localtime = setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = date.getHours();
    if (ampm >12){
        ampm = 'pm'
    } else {
        ampm = 'am';
    };
    if (hours > 12){
        hours = hours - 12;
    } else {
        hours = hours;
    }

    time2.innerHTML = hours + ':' +minutes + '  ' + ampm
},1)