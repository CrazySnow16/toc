//var NC_BASE_URL="http://172.18.100.189:7777";
//var NC_BASE_URL="http://172.18.70.60:8080";
//var NC_BASE_URL="http://172.18.70.72:7777";


function getArgsFromHref(sHref, sArgName)
{
  var args=sHref.split("?");
  var retval="";

  if(args[0]==sHref) /*参数为空*/
  {
    return retval; /*无需做任何处理*/
  }  
  var str = args[1];
  args = str.split("&");
  for(var i = 0; i < args.length; i ++)
  {
    str = args[i];
    var arg = str.split("=");
    if(arg.length <= 1) continue;
    if(arg[0] == sArgName) retval = arg[1]; 
  }
  return retval;
}
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }

  var hourStr = date.getHours();
  if (hourStr >= 0 && hourStr <= 9) {
    hourStr = "0" + hourStr;
  }
  var minuteStr = date.getMinutes();
  if (minuteStr >= 0 && minuteStr <= 9) {
    minuteStr = "0" + minuteStr;
  }
  var secondStr = date.getSeconds();
  if (secondStr >= 0 && secondStr <= 9) {
    secondStr = "0" + secondStr;
  }

  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + hourStr + seperator2 + minuteStr + seperator2 + secondStr;
  //alert("now："+currentdate);
  return currentdate;
}









