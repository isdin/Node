var moment = require("moment");
var unique = require("uniq");

alert("OH NOOOOO");
var p = prompt("hello");
var msg;
switch(p)
{
    case "coucou" : msg = "Je viens de dire hello";
    break;
    case "tg" : msg= "soit poli";
    break;
    case "isdin" : msg = "c'est moi";
    break;
    default : msg = "wat ?"; 
}
alert(msg);