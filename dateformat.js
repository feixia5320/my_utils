/**
 * 日期格式化
 * 正则表达式
 * let a = new Date().Format('yyyy-MM-dd hh:mm:ss')
 */
{
  Date.prototype.Format = function (str) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    // RegExp.$1
    if (/(y+)/.test(str)) {
      str = str.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(str)) {
        str = str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return str;
  }
  //使用方法2
  // let a = new Date()
  // let b = format.call(a,'yyyy:M-d')
  // console.log(b)

  /**
   * a = formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
   */
  function formatDate(t, str) {
    var obj = {
      yyyy: t.getFullYear(),
      yy: ("" + t.getFullYear()).slice(-2),
      M: t.getMonth() + 1,
      MM: ("0" + (t.getMonth() + 1)).slice(-2),
      d: t.getDate(),
      dd: ("0" + t.getDate()).slice(-2),
      H: t.getHours(),
      HH: ("0" + t.getHours()).slice(-2),
      h: t.getHours() % 12,
      hh: ("0" + t.getHours() % 12).slice(-2),
      m: t.getMinutes(),
      mm: ("0" + t.getMinutes()).slice(-2),
      s: t.getSeconds(),
      ss: ("0" + t.getSeconds()).slice(-2),
      w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function ($1) {
      // $1
      return obj[$1]
    });
  }
  let s = formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

  // 数字转为大写
  let str = "sdfs1fdsf2sdf3";
  let any = ['零', '一', '二', '三'];
  //arguments：匹配的字符，index，所有字符
  str = str.replace(/\d/g, function(){
    return any[arguments[0]];
  })

}