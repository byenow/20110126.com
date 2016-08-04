function render() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var now = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  var past = "2011-1-26";
  var day = DateDiff(past, now);

  function DateDiff(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式
    var aDate, oDate1, oDate2, iDays
    aDate = sDate1.split("-")
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]) //转换为12-18-2006格式
    aDate = sDate2.split("-")
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
    return iDays
  }
  document.getElementById("day").innerHTML = day + "<span>天</span>";
  document.getElementById("hour").innerHTML = hour + "<span>小时</span>";
  document.getElementById("minute").innerHTML = minute + "<span>分钟</span>";
  document.getElementById("second").innerHTML = second + "<span>秒</span>";
}

setInterval(render, 1000);
