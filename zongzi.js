/**
 * Created by asus on 2016/6/2.
 */
/*获取 DOM 对象*/
var g = function (id) {
    return document.getElementById(id);
}

/*时间轴对象构造器*/
var Timeline = function(){
    this.order = [];//动画序列
    this.add = function( timeout , func , log ){

        this.order.push({
            timeout:timeout ,
            func:func ,
            log:log ,
        });
    }
    // 参数 ff 支持快进
    this.start = function ( ff ) {
        for( s in this.order){
            (function (me) {
                var fn = me.func;
                var timeout = me.timeout;
                var log = me.log;
                timeout = Math.max(timeout - ( ff || 0 ), 0);

                setTimeout(fn,timeout);
                setTimeout(function () {
                    console.log('time->',timeout,'log->',log)
                },timeout);
            })(this.order[s])
        }
    }
}

var s = new Timeline();

s.add(1000,function(){
    console.log('first')
},'int');

s.add(3500,function(){
    console.log('sec')
},'int');

s.start(2000);

