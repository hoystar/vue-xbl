var $ = function() {
    var dom = {};
    return {
        get: function($) {
            if (!dom[$]) dom[$] = document.getElementById($);
            return dom[$];
        },
        apply: function(s, t, d) {
            if (t && typeof t == 'object') $.apply(s, d)
            if (s && t && typeof s == 'object' && typeof t == 'object') {
                for (var i in t) { s[i] = t[i] }
            }
            return s;
        },
        createEl: function(attribute, tag) {
            if (!tag) tag = "span";
            var el = document.createElement(tag);
            $.apply(el, attribute);
            return el;
        }
    }
}()
var chrisTree = function(params) {
    $.apply(this.param, params || {})
    this.__construct();
}
chrisTree.prototype = {
    param: {},
    __construct: function() {
        var x = this.param.x,
            y = this.param.y,
            xy = [];
        for (var i = 0; i < 7; i++) {
            xy = this.createTree(x, y, i / 4)
            x = xy[0];
            y = xy[1];
        }

        this.createRoot(x, y, xy[2]);
    },
    createTree: function(x, y, level) {
        var lel = level || 0.1
        for (i = 0; i < 110 * lel; i += 10) {
            for (j = i - 10; j < 2 * i; j += 10) {

                var el = $.createEl({
                    id: "div_" + x + "_" + i + "_" + y + "_" + j
                }, "span");
                el.style.cssText = "width:5px;height:5px;position:absolute;left:" + (x - i * 3 / 2 + j) + "px;top:" + (y + i) + "px;font-size:0px;background:#00ff00";

                //document.body.appendChild(el);

                document.getElementById('tree').appendChild(el);

                if (j == i - 10) this.lightUp(el.id, x - i * 3 / 2 + j, y + i);
            }

            this.lightUp(el.id, x - i * 3 / 2 + j, y + i);
        }
        return [this.param.x, this.param.y + 110 * lel, y + i]
    },
    createRoot: function(x, y, l) {
        for (var i = 0; i < 50; i++) {
            var el = $.createEl({
                id: "div_" + x + "_" + i + "_" + y + "_" + j
            }, "span");
            el.style.cssText = "width:5px;height:5px;position:absolute;left:" + x + "px;top:" + (l + i) + "px;font-size:0px;background:#fff";

            //document.body.appendChild(el);
            document.getElementById('tree').appendChild(el);
        }
    },
    createText: function(text) {
        var el = $.createEl({
            id: "text",
            innerHTML: text,
            align: 'center'
        })
        el.style.cssText = "color:#fff;background:#fff:margin:4px;padding:3px;top:500px;left:500px;font-size:20px;position:absolute";

        //document.body.appendChild(el);
        document.getElementById('tree').appendChild(el);

    },
    lightUp: function(id, x, y) {
        var self = this,
            i = 0;
        setTimeout(function() {
            i++;
            $.get(id).style.background = self.lightColor[i % self.lightColor.length];
            setTimeout(arguments.callee, 200);
        }, this.param.howToShine(x, y))
    },
    lightColor: ['#ff0000', "#00ff00", "#ffff00", "#ff6600", "#66ff00"]

}

new chrisTree({
    x: 400,
    y: 180,
    howToShine: function(x, y) { return 100 + x - y }
})

new chrisTree({
    x: 700,
    y: 180,
    howToShine: function(x, y) { return Math.sqrt(x * x - 2 * x * y + y * y) * 10 }
})
var ct = new chrisTree({
    x: 1000,
    y: 180,
    howToShine: function(x, y) { return x + y }
});
//ct.createText('Merry chrismas!:)))))'); 