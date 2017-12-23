function createPoint(x,y,c){
  var div = document.createElement("div");
  div.className = "item";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.backgroundColor = c;
  document.getElementById("xx-box").appendChild(div);
}
function heartShape(r,dx,dy,c){//r:大小;dx:水平偏移;dy:垂直偏移;c:颜色
  var m,n,x,y,i;
  for(i = 0; i <= 200; i += 0.04){
    m = i;
    n = -r * (((Math.sin(i) * Math.sqrt(Math.abs(Math.cos(i)))) / (Math.sin(i) + 1.4)) - 2 * Math.sin(i) + 2);
    x = n * Math.cos(m) + dx;
    y = n * Math.sin(m) + dy;
    createPoint(x,y,c);
  }
}
heartShape(100,250,80,"#f00");