var Library = {};
var SONGLIST = ['http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/01.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/10.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/07.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd108/07.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/03.mp3',
    'http://music.163.com/song/media/outer/url?id=38673096.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd110/11.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd110/11.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/10.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd111/09.mp3',
    'http://music.163.com/song/media/outer/url?id=261711.mp3',
    'http://music.163.com/song/media/outer/url?id=41631168.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/01.mp3',
    'http://music.163.com/song/media/outer/url?id=262227.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/05.mp3',
    'http://music.163.com/song/media/outer/url?id=262232.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n1/67/96/538884926.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/01.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/10.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/02.mp3',
    'http://mp3hot.9ku.com/hot/2013/09-19/561084.mp3',
    'http://music.163.com/song/media/outer/url?id=26300444.mp3',
    'http://music.163.com/song/media/outer/url?id=261562.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/08.mp3',
    'http://65.ierge.cn/8/126/252124.mp3',
    'http://music.163.com/song/media/outer/url?id=34516570.mp3',
    'http://music.163.com/song/media/outer/url?id=34516572.mp3',
    'http://music.163.com/song/media/outer/url?id=36664009.mp3',
    'http://music.163.com/song/media/outer/url?id=38679075.mp3',
    'http://music.163.com/song/media/outer/url?id=453927862.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd110/07.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/06.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd63/08.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/09.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/12.mp3',
    'http://music.163.com/song/media/outer/url?id=261919.mp3',
    'http://music.163.com/song/media/outer/url?id=262242.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd103/12.mp3',
    'http://music.163.com/song/media/outer/url?id=261904.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd111/10.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/03.mp3',
    'http://music.163.com/song/media/outer/url?id=453927862.mp3',
    'http://music.163.com/song/media/outer/url?id=431363022.mp3',
    'http://music.163.com/song/media/outer/url?id=35920105.mp3',
    'http://music.163.com/song/media/outer/url?id=38019351.mp3',
    'http://music.163.com/song/media/outer/url?id=399366438.mp3',
    'http://music.163.com/song/media/outer/url?id=33223624.mp3',
    'http://music.163.com/song/media/outer/url?id=262295.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/04.mp3',
    'http://music.163.com/song/media/outer/url?id=262646.mp3',
    'http://music.163.com/song/media/outer/url?id=262312.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n3/16/89/3193470389.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/11.mp3',
    'http://music.163.com/song/media/outer/url?id=262187.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/01.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/06.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd105/12.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n2/31/79/2454387075.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/08.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://music.163.com/song/media/outer/url?id=261714.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/08.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/08.mp3',
    'http://music.163.com/song/media/outer/url?id=261935.mp3',
    'http://mp3.9ku.com/mp3/297/296383.mp3',
    'http://music.163.com/song/media/outer/url?id=27875293.mp3',
    'http://music.163.com/song/media/outer/url?id=38392591.mp3',
    'http://music.163.com/song/media/outer/url?id=1803573.mp3',
    'http://music.163.com/song/media/outer/url?id=35920103.mp3',
    'http://music.163.com/song/media/outer/url?id=28957363.mp3',
    'http://music.163.com/song/media/outer/url?id=35920102.mp3',
    'http://music.163.com/song/media/outer/url?id=262679.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/09.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/12.mp3',
    'http://music.163.com/song/media/outer/url?id=27875293.mp3',
    'http://music.163.com/song/media/outer/url?id=28626095.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://music.163.com/song/media/outer/url?id=36664008.mp3',
    'http://music.163.com/song/media/outer/url?id=30474787.mp3',
    'http://music.163.com/song/media/outer/url?id=442315454.mp3',  
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd105/02.mp3',
    'http://webftp.bbs.hnol.net/linm/Music/2015/08/lzlzsly/08.mp3',
    'http://music.163.com/song/media/outer/url?id=261881.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/03.mp3',
    'http://webftp.bbs.hnol.net/linm/Music/2014/09/zhVSlzl/11.mp3',
    'http://music.163.com/song/media/outer/url?id=262211.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://music.163.com/song/media/outer/url?id=4467033.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/07.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/11.mp3',
    'http://music.163.com/song/media/outer/url?id=261708.mp3',
    'http://other.web.rz01.sycdn.kuwo.cn/resource/n3/61/48/2125536631.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n1/25/75/841513233.mp3',
    'http://music.163.com/song/media/outer/url?id=262689.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd107/12.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd105/11.mp3',
    'http://music.163.com/song/media/outer/url?id=262213.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/11.mp3',
    'http://mp3.9ku.com/mp3/297/296401.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/12.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/02.mp3',
    'http://music.163.com/song/media/outer/url?id=261641.mp3',
    'http://music.163.com/song/media/outer/url?id=262204.mp3',
    'http://mp3new.9ku.com/new/2014/12-30/656985.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/11.mp3',
    'http://music.163.com/song/media/outer/url?id=262298.mp3',
    'http://65.ierge.cn/8/126/252123.mp3',
     'http://music.163.com/song/media/outer/url?id=26114928.mp3',
      'http://music.163.com/song/media/outer/url?id=28976305.mp3',
       'http://music.163.com/song/media/outer/url?id=26262255.mp3',
        'http://music.163.com/song/media/outer/url?id=1803584.mp3',
         'http://music.163.com/song/media/outer/url?id=33394067.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/04.mp3',
    'http://music.163.com/song/media/outer/url?id=261637.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/02.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n3/25/17/1954040729.mp3',
    'http://webftp.bbs.hnol.net/zhangyu/music/cd63/01.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/12.mp3',
    'http://65.ierge.cn/8/126/252118.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd101/03.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n1/35/29/2292082980.mp3',
    'http://65.ierge.cn/8/126/252121.mp3',
    'http://music.163.com/song/media/outer/url?id=4459960.mp3',
    'http://music.163.com/song/media/outer/url?id=4459963.mp3',
    'http://music.163.com/song/media/outer/url?id=28168056.mp3',
    'http://music.163.com/song/media/outer/url?id=28996008.mp3',
    'http://music.163.com/song/media/outer/url?id=28996013.mp3',
    'http://music.163.com/song/media/outer/url?id=28957363.mp3',
    'http://music.163.com/song/media/outer/url?id=35920102.mp3',
    'http://music.163.com/song/media/outer/url?id=262679.mp3',
    'http://music.163.com/song/media/outer/url?id=262303.mp3',
    'http://webftp.bbs.hnol.net/linm/Music/2014/09/zhVSlzl/09.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n1/18/19/1488142632.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n2/96/25/4194581140.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd101/08.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/10.mp3',
    'http://music.163.com/song/media/outer/url?id=262327.mp3',
    'http://other.web.ra01.sycdn.kuwo.cn/resource/n3/128/14/90/1272725771.mp3',
    'http://music.163.com/song/media/outer/url?id=262444.mp3',
    'http://other.web.ra01.sycdn.kuwo.cn/resource/n3/83/69/3916813326.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/06.mp3',
    'http://music.163.com/song/media/outer/url?id=261686.mp3',
    'http://65.ierge.cn/8/126/252127.mp3',
    'http://music.163.com/song/media/outer/url?id=4459963.mp3',
    'http://music.163.com/song/media/outer/url?id=28168056.mp3',
    'http://music.163.com/song/media/outer/url?id=28996008.mp3',
    'http://music.163.com/song/media/outer/url?id=28996013.mp3',
    'http://music.163.com/song/media/outer/url?id=28957363.mp3',
    'http://music.163.com/song/media/outer/url?id=35920102.mp3',
    'http://music.163.com/song/media/outer/url?id=262679.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/07.mp3',
    'http://music.163.com/song/media/outer/url?id=262216.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd113/10.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd101/01.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/05.mp3',
    'http://65.ierge.cn/11/172/344067.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/05.mp3',
    'http://music.163.com/song/media/outer/url?id=262191.mp3',
    'http://other.web.re01.sycdn.kuwo.cn/resource/n3/22/64/2204611915.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd106/05.mp3',
    'http://65.ierge.cn/8/126/252122.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/08.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/07.mp3',
    'http://webftp.bbs.hnol.net/linm/Music2/2016/05/lzlhsdl/02.mp3',
    'http://music.163.com/song/media/outer/url?id=262675.mp3',
    'http://music.163.com/song/media/outer/url?id=262219.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/01.mp3',
    'http://qqma.tingge123.com:83/123/2014/05/广场舞舞女泪.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/03.mp3',
    'http://other.web.rc01.sycdn.kuwo.cn/resource/n1/29/31/2030262590.mp3',
    'http://music.163.com/song/media/outer/url?id=262237.mp3',
    'http://webftp.bbs.hnol.net/xingchen/yy/liandexinshi.mp3',
    'http://music.163.com/song/media/outer/url?id=27875293.mp3',
    'http://music.163.com/song/media/outer/url?id=38392591.mp3',
    'http://music.163.com/song/media/outer/url?id=1803573.mp3',
    'http://music.163.com/song/media/outer/url?id=35920103.mp3',
    'http://music.163.com/song/media/outer/url?id=28957363.mp3',
    'http://music.163.com/song/media/outer/url?id=35920102.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd63/03.mp3',
    'http://1.wp.zp68.com/sub/filestores/2016/12/19/e5a189173704a1cbb37056aed42ca572.mp3',
    'http://music.163.com/song/media/outer/url?id=262292.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd63/05.mp3',
    'http://mp3.9ku.com/mp3/297/296432.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/12.mp3',
    'http://music.163.com/song/media/outer/url?id=261719.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd110/10.mp3',
    'http://music.163.com/song/media/outer/url?id=262301.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/02.mp3',
    'http://music.163.com/song/media/outer/url?id=261895.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd104/06.mp3',
    'http://65.ierge.cn/8/126/252126.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/11.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd102/03.mp3',
    'http://music.163.com/song/media/outer/url?id=262208.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/09.mp3',
    'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/09.mp3',
    'http://music.163.com/song/media/outer/url?id=262195.mp3'
];
Library.ease = function() {
    this.target = 0;
    this.position = 0;
    this.move = function(target, speed) {
        this.position += (target - this.position) * speed;
    }
}


var tv = {
    /* ==== variables ==== */
    O: [],
    screen: {},
    grid: {
        size: 9, // 4x4 grid
        borderSize: 6, // borders size
        zoomed: false
    },
    angle: {
        x: new Library.ease(),
        y: new Library.ease()
    },
    camera: {
        x: new Library.ease(),
        y: new Library.ease(),
        zoom: new Library.ease(),
        focalLength: 750 // camera Focal Length
    },

    /* ==== init script ==== */
    init: function() {
        var self = this;
        this.screen.obj = document.getElementById('screen');
        var img = document.getElementById('bankImages').getElementsByTagName('img');
        this.screen.obj.onselectstart = function() { return false; }
        this.screen.obj.ondrag = function() { return false; }
        /* ==== create images grid ==== */

        var ni = 0;
        var n = (tv.grid.size / 2) - .5;
        //var src = "http://music.163.com/song/media/outer/url?id=262195.mp3";
        var audioDom = document.getElementsByTagName('audio')[0];
        for (var y = -n; y <= n; y++) {
            for (var x = -n; x <= n; x++) {
                /* ==== create HTML image element ==== */
                var o = document.createElement('img');
                var i = img[(ni++) % img.length];
                o.className = 'tvout';
                o.src = i.src;
                tv.screen.obj.appendChild(o);
                /* ==== 3D coordinates ==== */
                o.point3D = {
                    x: x,
                    y: y,
                    z: new Library.ease()
                };
                /* ==== push object ==== */
                o.point2D = {};
                o.ratioImage = 1;
                tv.O.push(o);
                /* ==== on mouse over event ==== */
                o.onmouseover = function() {
                    if (!tv.grid.zoomed) {
                        if (tv.o) {
                            /* ==== mouse out ==== */
                            tv.o.point3D.z.target = 0;
                            tv.o.className = 'tvout';
                        }
                        /* ==== mouse over ==== */
                        this.className = 'tvover';
                        this.point3D.z.target = -.5;
                        tv.o = this;
                    }
                }
                /* ==== on click event ==== */
                o.onclick = function() {
                    if (!tv.grid.zoomed) {
                        /* ==== zoom in ==== */
                        tv.camera.x.target = this.point3D.x;
                        tv.camera.y.target = this.point3D.y;
                        tv.camera.zoom.target = tv.screen.w * 1.25;
                        let randNum = Math.round(Math.random() * 200);
                        audioDom.src = SONGLIST[randNum];
                        audioDom.play();

                        tv.grid.zoomed = this;
                    } else {
                        if (this == tv.grid.zoomed) {
                            /* ==== zoom out ==== */
                            tv.camera.x.target = 0;
                            tv.camera.y.target = 0;
                            tv.camera.zoom.target = tv.screen.w / (tv.grid.size + .1);
                            tv.grid.zoomed = false;
                        }
                    }
                }
                /* ==== 3D transform function ==== */
                o.calc = function() {
                    /* ==== ease mouseover ==== */
                    this.point3D.z.move(this.point3D.z.target, .5);
                    /* ==== assign 3D coords ==== */
                    var x = (this.point3D.x - tv.camera.x.position) * tv.camera.zoom.position;
                    var y = (this.point3D.y - tv.camera.y.position) * tv.camera.zoom.position;
                    var z = this.point3D.z.position * tv.camera.zoom.position;
                    /* ==== perform rotations ==== */
                    var xy = tv.angle.cx * y - tv.angle.sx * z;
                    var xz = tv.angle.sx * y + tv.angle.cx * z;
                    var yz = tv.angle.cy * xz - tv.angle.sy * x;
                    var yx = tv.angle.sy * xz + tv.angle.cy * x;
                    /* ==== 2D transformation ==== */
                    this.point2D.scale = tv.camera.focalLength / (tv.camera.focalLength + yz);
                    this.point2D.x = yx * this.point2D.scale;
                    this.point2D.y = xy * this.point2D.scale;
                    this.point2D.w = Math.round(
                        Math.max(
                            0,
                            this.point2D.scale * tv.camera.zoom.position * .8
                        )
                    );
                    /* ==== image size ratio ==== */
                    if (this.ratioImage > 1)
                        this.point2D.h = Math.round(this.point2D.w / this.ratioImage);
                    else {
                        this.point2D.h = this.point2D.w;
                        this.point2D.w = Math.round(this.point2D.h * this.ratioImage);
                    }
                }
                /* ==== rendering ==== */
                o.draw = function() {
                    if (this.complete) {
                        /* ==== paranoid image load ==== */
                        if (!this.loaded) {
                            if (!this.img) {
                                /* ==== create internal image ==== */
                                this.img = new Image();
                                this.img.src = this.src;
                            }
                            if (this.img.complete) {
                                /* ==== get width / height ratio ==== */
                                this.style.visibility = 'visible';
                                this.ratioImage = this.img.width / this.img.height;
                                this.loaded = true;
                                this.img = false;
                            }
                        }
                        /* ==== HTML rendering ==== */
                        this.style.left = Math.round(
                            this.point2D.x * this.point2D.scale +
                            tv.screen.w - this.point2D.w * .5
                        ) + 'px';
                        this.style.top = Math.round(
                            this.point2D.y * this.point2D.scale +
                            tv.screen.h - this.point2D.h * .5
                        ) + 'px';
                        this.style.width = this.point2D.w + 'px';
                        this.style.height = this.point2D.h + 'px';
                        this.style.borderWidth = Math.round(
                            Math.max(
                                this.point2D.w,
                                this.point2D.h
                            ) * tv.grid.borderSize * .01
                        ) + 'px';
                        this.style.zIndex = Math.floor(this.point2D.scale * 100);
                    }
                }
            }
        }
        /* ==== start script ==== */
        tv.resize();
        mouse.y = tv.screen.y + tv.screen.h;
        mouse.x = tv.screen.x + tv.screen.w;
        tv.run();
    },

    /* ==== resize window ==== */
    resize: function() {
        var o = tv.screen.obj;
        tv.screen.w = o.offsetWidth / 2;
        tv.screen.h = o.offsetHeight / 2;
        tv.camera.zoom.target = tv.screen.w / (tv.grid.size + .1);
        for (tv.screen.x = 0, tv.screen.y = 0; o != null; o = o.offsetParent) {
            tv.screen.x += o.offsetLeft;
            tv.screen.y += o.offsetTop;
        }
    },

    /* ==== main loop ==== */
    run: function() {
        /* ==== motion ease ==== */
        tv.angle.x.move(-(mouse.y - tv.screen.h - tv.screen.y) * .0025, .1);
        tv.angle.y.move((mouse.x - tv.screen.w - tv.screen.x) * .0025, .1);
        tv.camera.x.move(tv.camera.x.target, tv.grid.zoomed ? .25 : .025);
        tv.camera.y.move(tv.camera.y.target, tv.grid.zoomed ? .25 : .025);
        tv.camera.zoom.move(tv.camera.zoom.target, .05);
        /* ==== angles sin and cos ==== */
        tv.angle.cx = Math.cos(tv.angle.x.position);
        tv.angle.sx = Math.sin(tv.angle.x.position);
        tv.angle.cy = Math.cos(tv.angle.y.position);
        tv.angle.sy = Math.sin(tv.angle.y.position);
        /* ==== loop through all images ==== */
        for (var i = 0, o; o = tv.O[i]; i++) {
            o.calc();
            o.draw();
        }
        /* ==== loop ==== */
        setTimeout(tv.run, 32);
    }
}

/* ==== global mouse position ==== */
var mouse = {
    x: 0,
    y: 0
}
document.onmousemove = function(e) {
    if (window.event) e = window.event;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    return false;
}