const { get } = require("lodash");

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
      S: this.getMilliseconds(), //毫秒
    };
    // RegExp.$1
    if (/(y+)/.test(str)) {
      str = str.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(str)) {
        str = str.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return str;
  };
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
      hh: ("0" + (t.getHours() % 12)).slice(-2),
      m: t.getMinutes(),
      mm: ("0" + t.getMinutes()).slice(-2),
      s: t.getSeconds(),
      ss: ("0" + t.getSeconds()).slice(-2),
      w: ["日", "一", "二", "三", "四", "五", "六"][t.getDay()],
    };
    return str.replace(/([a-z]+)/gi, function ($1) {
      // $1
      return obj[$1];
    });
  }
  let s = formatDate(new Date(1409894060000), "yyyy-MM-dd HH:mm:ss 星期w");

  // 数字转为大写
  let str = "sdfs1fdsf2sdf3";
  let any = ["零", "一", "二", "三"];
  //arguments：匹配的字符，index，所有字符
  str = str.replace(/\d/g, function () {
    return any[arguments[0]];
  });

  // 转为驼峰式名称
  function cssStyle2DomStyle(sName) {
    // (?!^)反向引用,去除第一个字符串开头的
    return sName
      .replace(/(?!^)\-(\w)(\w+)/g, function (a, b, c) {
        return b.toUpperCase() + c.toLowerCase();
      })
      .replace(/^\-/, "");
  }

  cssStyle2DomStyle("back-ground-color");
}
/**
 * 嵌套数组展开，扁平化
 */
{
  var arr = [1, [[2, 3], 4], [5, 6]];

  var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
      var item = a[i];
      if (typeof item !== "number") {
        yield* flat(item);
      } else {
        yield item;
      }
    }
  };
  let res = [];
  for (var f of flat(arr)) {
    res.push(f);
  }
  console.log(res);
  // 1, 2, 3, 4, 5, 6

  /**
   * 普通方法
   */
  var arro = [1, [[2, 3], 4], [5, 6]];

  function getdata(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (typeof item == "number") {
        res.push(item);
      } else {
        res = [...res, ...getdata(item)];
      }
    }
    return res;
  }
  console.log(getdata(arro));
}
/**
 * 斐波那契数列
 */
{
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }

  for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
  }
  /**
   * 普通方法
   */
  function ff({ a, b }) {
    return {
      a: b,
      b: a + b,
    };
  }
  let arr = { a: 0, b: 1 };
  for (let i = 0; i < 10; i++) {
    arr = ff(arr);
    console.log(arr);
  }
}
