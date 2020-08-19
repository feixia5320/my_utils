
5.�����¡�����
/**
 * �����¡&���
 * @param obj
 * @returns {{}}
 */
function clone(obj){
    if(typeof obj !== "object"){
        return obj;
    }
    let newobj;
    if(obj instanceof Array){
        newobj = [];
    }else{
        newobj = {};
    }
    for(let key in obj){
        if(typeof obj[key] !== "object"){
            newobj[key] = obj[key]
        }else{
            newobj[key] = clone(obj[key]);
            
        }
    }
    return newobj;
}

function cloneObj(obj) {
  var newO = {};
  if (obj instanceof Array) {
    newO = [];
  }
  for (var key in obj) {
    var val = obj[key];
    newO[key] = typeof val === 'object' ? arguments.callee(val) : val;
  }
  return newO;
};
���ƴ���
��¡������ǿ��

/**
 * �����¡&���
 * @param obj
 * @returns {{}}
 */
function clone(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;
  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // Handle Array
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0,len = obj.length; i < len; ++i) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }
  // Handle Object
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
}
���ƴ���
����������

var origin = {
  a: "text",
  b: null,
  c: undefined,
  e: {
    f: [1, 2]
  }
}
1.��ȡָ���ֽ������ַ���
/**
 * ��ȡָ���ֽڵ��ַ���
 * @param str Ҫ��ȡ���ַ���
 * @param len Ҫ��ȡ�ĳ��ȣ������ֽڼ���
 * @param suffix ��ȡǰlen����������ַ����滻�ַ���һ���á�����
 * @returns {*}
 */
function cutString(str, len, suffix) {
  if (!str) return "";
  if (len <= 0) return "";
  if (!suffix) suffix = "";
  var templen = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      templen += 2;
    } else {
      templen++
    }
    if (templen == len) {
      return str.substring(0, i + 1) + suffix;
    } else if (templen > len) {
      return str.substring(0, i) + suffix;
    }
  }
  return str;
}
���ƴ���
2.�ж��Ƿ�΢��
/**
 * �ж�΢�������
 * @returns {Boolean}
 */
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
���ƴ���
3.��ȡʱ���ʽ�ļ�������
function getTimeFormat(time) {
  var date = new Date(parseInt(time) * 1000);
  var month, day, hour, min;
  parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
  date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
  date.getHours() < 10 ? hour = '0' + date.getHours() : hour = date.getHours();
  date.getMinutes() < 10 ? min = '0' + date.getMinutes() : min = date.getMinutes();
  return [month, day].join('-') + '  ' + hour + ':' + min
}

function getTimeFormatYMD(time) {
  var date = new Date(parseInt(time) * 1000);
  var year, month, day;
  year = date.getFullYear();
  parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
  date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
  return [year, month, day].join('-')
}

function getTimeFormatAll(time) {
  var date = new Date(parseInt(time) * 1000);
  var year, month, day, hour, min, second;
  year = date.getFullYear();
  parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
  date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
  date.getHours() < 10 ? hour = '0' + date.getHours() : hour = date.getHours();
  date.getMinutes() < 10 ? min = '0' + date.getMinutes() : min = date.getMinutes();
  date.getSeconds() < 10 ? second = '0' + date.getSeconds() : second = date.getSeconds();

  return [year, month, day].join('-') + '  ' + hour + ':' + min + ':' + second
}
���ƴ���
4.��ȡ�ַ����ֽڳ���
/**
 * ��ȡ�ַ����ֽڳ���
 * @param {String}
 * @returns {Boolean}
 */
function checkLength(v) {
  var realLength = 0;
  var len = v.length;
  for (var i = 0; i < len; i++) {
    var charCode = v.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) realLength += 1;
    else realLength += 2;
  }
  return realLength;
}
���ƴ���
���ƴ���
6.��֯�ṹ����֤��֤
��֤����

��֯����������ÿһ�����ء�������塢����ҵ��λ��ȫ����Χ��Ψһ�ġ�ʼ�ղ���ķ��������ʶ������ʹ�õ���֯����������1997��䲼ʵʩ����8λ���֣����д������ĸ����������1λ���֣����д������ĸ��У������ɡ�����������ϵ�У��������Σ�˳����뷽����У���밴���й�ʽ���㣺8 C9 = 11 - MOD(��Ci * Wi��11)�� (2) i = 1���У�MOD������ʾ���ຯ����i������ʾ�����ַ�������λ����ţ�Ci������ʾ��iλ���ϵĴ����ַ���ֵ�����ø�¼A�������ַ����������ַ���C9������ʾУ���룻Wi������ʾ��iλ���ϵļ�Ȩ���ӣ�����ֵ���±�i 1 2 3 4 5 6 7 8 Wi 3 7 9 10 5 8 4 2��MOD����ֵΪ1����C9 = 10��ʱ��У��������ĸX��ʾ��

��֤������

checkOrgCodeValid: function(el) {
  var txtval = el.value;
  var values = txtval.split("-");
  var ws = [3, 7, 9, 10, 5, 8, 4, 2];
  var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var reg = /^([0-9A-Z]){8}$/;
  if (!reg.test(values[0])) {
    return false
  }
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    sum += str.indexOf(values[0].charAt(i)) * ws[i];
  }
  var C9 = 11 - (sum % 11);
  var YC9 = values[1] + '';
  if (C9 == 11) {
    C9 = '0';
  } else if (C9 == 10) {
    C9 = 'X';
  } else {
    C9 = C9 + '';
  }
  return YC9 == C9;
}
���ƴ���
7.���֤����֤
/**
 * ��֤���֤��
 * @param el ��������input
 * @returns {boolean}
 */
function checkCardNo(el) {
  var txtval = el.value;
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(txtval)
}
���ƴ���
8.js����Ϊurl���http��ʶ
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  
  <title></title>
  <script>
        var html = 'http:/ / www.google.com ';
        html += '\rwww.google.com ';
        html += '\rcode.google.com ';
        html += '\rhttp: //code.google.com/hosting/search?q=label%3aPython';
        var regex = /(https?:\/\/)?(\w+\.?)+(\/[a-zA-Z0-9\?%=_\-\+\/]+)?/gi;
        alert('before replace:');
        alert(html);
        html = html.replace(regex,
            function(match, capture) {
                if (capture) {
                    return match
                } else {
                    return 'http://' + match;
                }
            });
        alert('after replace:');
        alert(html); 
    </script>
</head>
<body>  
</body>
</html>

���ƴ���
9.URL��Ч��У�鷽��
/**
 * URL��Ч��У��
 * @param str_url
 * @returns {boolean}
 */
function isURL(str_url) { 
  // ��֤url
  var strRegex = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //           
  ftp��user@ + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP��ʽ��URL- 199.194.52.184
  + "|" // ����IP��DOMAIN��������
  + "([0-9a-z_!~*'()-]+\.)*" // ����- www.
  + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // ��������
  + "[a-z]{2,6})" // first level domain- .com or .museum
  + "(:[0-9]{1,4})?" // �˿�- :80
  + "((/?)|" // a slash isn't required if there is no file name
  + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  var re = new RegExp(strRegex);
  return re.test(str_url);
}
// ���������
functionisURL(str) {
  return !! str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}
���ƴ���
10.�Զ���jsonp����
/**
 * �Զ����װjsonp����
 * @param options
 */
jsonp = function(options) {
  options = options || {};
  if (!options.url || !options.callback) {
    throw new Error("�������Ϸ�");
  }
  //���� script ��ǩ�����뵽ҳ����
  var callbackName = ('jsonp_' + Math.random()).replace(".", "");
  var oHead = document.getElementsByTagName('head')[0];
  options.data[options.callback] = callbackName;
  var params = formatParams(options.data);
  var oS = document.createElement('script');
  oHead.appendChild(oS);
  //����jsonp�ص�����
  window[callbackName] = function(json) {
    oHead.removeChild(oS);
    clearTimeout(oS.timer);
    window[callbackName] = null;
    options.success && options.success(json);
  };
  //��������
  oS.src = options.url + '?' + params;
  //��ʱ����
  if (options.time) {
    oS.timer = setTimeout(function() {
      window[callbackName] = null;
      oHead.removeChild(oS);
      options.fail && options.fail({
        message: "��ʱ"
      });
    },
    time);
  }
};
/**
 * ��ʽ������
 * @param data
 * @returns {string}
 */
formatParams = function(data) {
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }
  return arr.join('&');
}
���ƴ���
11.cookie����
//дcookies
setCookie = function(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  exp.setTime(exp.getTime() + strsec * 1);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//cookie������������
getsec = function(str) {
  var str1 = str.substring(1, str.length) * 1;
  var str2 = str.substring(0, 1);
  if (str2 == "s") {
    return str1 * 1000;
  } else if (str2 == "h") {
    return str1 * 60 * 60 * 1000;
  } else if (str2 == "d") {
    return str1 * 24 * 60 * 60 * 1000;
  }
}
//��ȡcookies
getCookie = function(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) return (arr[2]);
  else return null;
}

//ɾ��cookies
delCookie = function(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
���ƴ���
12.��������ַ��� (��ָ������)
/**
 * ��������ַ���(��ָ������)
 * @param len
 * @returns {string}
 */
randomString = function(len) {
  len = len || 8;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /****Ĭ��ȥ�������׻������ַ�oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
���ƴ���
13.������ж�
function parseUA() {
  var u = navigator.userAgent;
  var u2 = navigator.userAgent.toLowerCase();
  return { //�ƶ��ն�������汾��Ϣ
    trident: u.indexOf('Trident') > -1,
    //IE�ں�
    presto: u.indexOf('Presto') > -1,
    //opera�ں�
    webKit: u.indexOf('AppleWebKit') > -1,
    //ƻ�����ȸ��ں�
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
    //����ں�
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    //�Ƿ�Ϊ�ƶ��ն�
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    //ios�ն�
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    //android�ն˻�uc�����
    iPhone: u.indexOf('iPhone') > -1,
    //�Ƿ�ΪiPhone����QQHD�����
    iPad: u.indexOf('iPad') > -1,
    //�Ƿ�iPad
    webApp: u.indexOf('Safari') == -1,
    //�Ƿ�webӦ�ó���û��ͷ����ײ�
    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
    weixin: u2.match(/MicroMessenger/i) == "micromessenger",
    ali: u.indexOf('AliApp') > -1,
  };
}
var ua = parseUA();
if (!ua.mobile) {
  location.href = './pc.html';
}

���ƴ���
14.Rem�ƶ�������
var rem = {
  baseRem: 40,
  // ��׼�ֺţ�����iphone6Ӧ��Ϊ20���˴�����2�������ڼ���
  baseWidth: 750,
  // ��׼�ߴ���˴��ǰ���ihpone6�ĳߴ�
  rootEle: document.getElementsByTagName("html")[0],
  initHandle: function() {
    this.setRemHandle();
    this.resizeHandle();
  },
  setRemHandle: function() {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    this.rootEle.style.fontSize = clientWidth * this.baseRem / this.baseWidth + "px";
  },
  resizeHandle: function() {
    var that = this;
    window.addEventListener("resize",
    function() {
      setTimeout(function() {
        that.setRemHandle();
      },
      300);
    });
  }
};
rem.initHandle();
���ƴ���
15.��ȡurl�����
function GetRequest() {
  var url = location.search; //��ȡurl��"?"������ִ�
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
���ƴ���
16.��̬����JS
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/";
  if (typeof(callback) != "undefined") {
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }
  }
  script.src = url;
  document.body.appendChild(script);
}
���ƴ���
17.���������ɫֵ
function getRandomColor () {
  const rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
//ȥ�������ظ���ֵ
let unique = function(arr) {  
    let hashTable = {};
    let data = [];
        for(let i=0,l=arr.length;i<l;i++) {
            if(!hashTable[arr[i]]) {
                hashTable[arr[i]] = true;
            data.push(arr[i]);
            }
        }
    return data
}
//������������ֵ
function getMaxProfit(arr) {

    var minPrice = arr[0];
    var maxProfit = 0;

    for (var i = 0; i < arr.length; i++) {
        var currentPrice = arr[i];

        minPrice = Math.min(minPrice, currentPrice);

        var potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}


//�������ָ�ƶ����ȵ��ַ���
function randomString(n) {  
  let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
  let tmp = '',
      i = 0,
      l = str.length;
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}

