 //创建绘图对象 
 var raphael;
 //初始化x和y
 var x = 0,
     y = 0,
     r;
 var lx1 = 0,
     ly1 = 0,
     lx2 = 0,
     lxy2 = 0;
 var vx1 = 0,
     vy1 = 0,
     vx2 = 0,
     vy2 = 0;
 var ex1 = 0,
     ey1 = 0,
     ex2 = 0,
     ey2 = 0,
     ey3 = 0,
     ey4 = 0;
 var charWidth = 20;
 var charHeight = 100;
 $(function() {
     raphael = Raphael("holder", 1388, 786);
     //raphael =  new Raphael("holder", 1388, 786);
      //showLove();
     //window.setInterval(reDraw, 5000);
 });
 
  function reDraw() {
    console.log("raphael--->",raphael);
    //raphael = new Raphael("holder", 1388, 786);
    showLove();
    //raphael = "";
  }
 var count = 0;

 function drawL() {
     var xStart = 80,
         yStart = 20;
     if (count < charWidth) {
         ly1 = yStart;
         lx1 = xStart + 3 * count;
         for (var j = 0; j < charHeight; j++) {
             ly1 = ly1 + 3;
             raphael.circle(lx1, ly1, 1).attr({ fill: "#33ff00", "stroke-width": 0 });
         }

         lx2 = xStart + (charWidth - 1) * 3;
         ly2 = yStart + charHeight * 3 - (charWidth - 1) * 3 + 3 * count;
         for (var n = 0; n < 50; n++) {
             lx2 = lx2 + 3;
             raphael.circle(lx2, ly2, 1).attr({ fill: "#33ff00", "stroke-width": 0 });
         }
         count++;
     } else {
         window.setInterval(drawHeart, 1);
     }
 }
 var count2 = 0;

 function drawHeart() {
     if (count2 < 90) {
         for (var j = 0; j < 90; j++) {
             r = Math.PI / 45 * count2 * (1 - Math.sin(Math.PI / 45 * j)) * 19;
             x = r * Math.cos(Math.PI / 45 * j) * Math.sin(Math.PI / 45 * count2) + 420;
             y = -r * Math.sin(Math.PI / 45 * j) + 360 / 4;
             raphael.circle(parseInt(x), parseInt(y), 1).attr({ fill: "#ff0033", "stroke-width": 0 });
         }
         count2++;
     } else {
         window.setInterval(drawV, 1);
     }
 }
 var count3 = 0;

 function drawV() {
     var vStartX = 580,
         vStartY = 70,
         vStartx2 = 780;
     if (count3 < 84) {
         vx1 = vStartX + count3 * 1.2; //x平移
         vy1 = vStartY + count3 * 3; //打印下一行
         for (var i = 0; i < charWidth; i++) {
             vx1 = vx1 + 3;
             raphael.circle(vx1, vy1, 1).attr({ fill: "#ffff00", "stroke-width": 0 });
         }
         vx2 = vStartx2 - count3 * 1.2; //x平移6个像素
         vy2 = vStartY + count3 * 3; //打印下一行
         for (var j = 0; j < charWidth; j++) {
             vx2 = vx2 + 3;
             raphael.circle(vx2, vy2, 1).attr({ fill: "#ffff00", "stroke-width": 0 });
         }
         count3++;
     } else {
         window.setInterval(drawE, 1);
     }
 }
 var count4 = 0;

 function drawE() {
     var eStartX = 910,
         eStartY = 70;
     charHeight = 84;
     if (count4 < charWidth) {
         ey1 = eStartY;
         ex1 = eStartX + 3 * count4;
         for (var j = 0; j < charHeight; j++) {
             ey1 = ey1 + 3;
             raphael.circle(ex1, ey1, 1).attr({ fill: "#33ffff", "stroke-width": 0 });
         }

         ex2 = eStartX + (charWidth - 1) * 3;
         ey2 = eStartY + charHeight * 3 - (charWidth - 1) * 3 + 3 * count4;
         ey3 = eStartY + 3 * (count4 + 1);
         ey4 = eStartY + charHeight * 3 - (charWidth - 1) * 3 * 2.6 + 3 * count4;
         for (var n = 0; n < 50; n++) {
             ex2 = ex2 + 3;
             raphael.circle(ex2, ey2, 1).attr({ fill: "#33ffff", "stroke-width": 0 });
             raphael.circle(ex2, ey3, 1).attr({ fill: "#33ffff", "stroke-width": 0 });
             if (n < 35) {
                 raphael.circle(ex2, ey4, 1).attr({ fill: "#33ffff", "stroke-width": 0 });
             }
         }
         count4++;
     } else {
        //raphael = "";
        //raphael = Raphael("holder", 1388, 786);
     }
 }
 
 function showLove() {
     //var who = $("#who").val();
     var who = "XBL";
     raphael.print(400, 450, who, raphael.getFont("whoa"), 200).attr({ fill: "#ff33ff" });
     window.setInterval(drawL,1);
 }