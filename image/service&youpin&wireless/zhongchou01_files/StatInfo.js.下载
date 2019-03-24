var  BASE_URL = window.location.href;
var  BASE_URL_COME = BASE_URL.indexOf('.com');
// let BASE_URL_PROTOCOL = window.location.protocol;
var BASE_URL_DOMAIN = BASE_URL.substr(0, BASE_URL_COME + 4);
var BASE_URL_COOKIE_ARR = BASE_URL_DOMAIN.split('.');
var BASE_URL_COOKIE = BASE_URL_COOKIE_ARR[BASE_URL_COOKIE_ARR.length - 2];

var genuuid = (function() {
    var T = function() {
        var d = 1 * new Date(), i = 0;
        while (d === 1 * new Date()) {
            i++;
        }
        return d.toString(16) + i.toString(16);
    };
    var R = function() {
        return Math.random().toString(16).replace('.', '');
    };
    var UA = function(n) {
        var ua = navigator.userAgent, i, ch, buffer = [], ret = 0;

        function xor(result, byte_array) {
            var j, tmp = 0;
            for (j = 0; j < byte_array.length; j++) {
                tmp |= (buffer[j] << j * 8);
            }
            return result ^ tmp;
        }
        for (i = 0; i < ua.length; i++) {
            ch = ua.charCodeAt(i);
            buffer.unshift(ch & 0xFF);
            if (buffer.length >= 4) {
                ret = xor(ret, buffer);
                buffer = [];
            }
        }

        if (buffer.length > 0) {
            ret = xor(ret, buffer);
        }

        return ret.toString(16);
    };

    return function() {
        // 有些浏览器取个屏幕宽度都异常...
        var se = String(window.screen.height * window.screen.width);
        if (se && /\d{5,}/.test(se)) {
            se = se.toString(16);
        } else {
            se = String(Math.random() * 31242).replace('.', '').slice(0, 8);
        }
        var val = (T() + '-' + R() + '-' + UA());
        if(val) {
            return val;
        }else{
            return (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);
        }

    };
})();


var YouPin_stat = {
    getCookieVal: function(offset, encode) {
        var endstr = document.cookie.indexOf(';', offset);
        if (endstr === -1) {
            endstr = document.cookie.length;
        }
        if (!encode) {
            return document.cookie.substring(offset, endstr);
        }
        return decodeURIComponent(document.cookie.substring(offset, endstr));
    },
    getCookie: function(name, domain, callback, encode) {
        var arg = name + '=';
        var i = 0;
        var  j = 0;
        while (i < document.cookie.length) {
            j = i + arg.length;
            if (document.cookie.substring(i, j) === arg) {
                var val = YouPin_stat.getCookieVal(j, encode);
                if (callback) {
                    callback(val);
                }

                return val;
            }
            i = document.cookie.indexOf(' ', i)  + 1;

            if (!i) {
                if (callback) {
                    callback(null);
                }

                return null;
            }
        }
    },
    setCookie: function(name, value, domain, expires) {
        var  argv = arguments;
        var argc = arguments.length;
        var now = new Date();
        expires = expires || new Date(2117, now.getMonth() + 1, now.getUTCDate());
        var path = '/';
        //TODO
        domain = (argc > 2) ? argv[2] : '.' + BASE_URL_COOKIE + '.com';
        var secure = false;
        var _ex = expires === 'session' ? expires : expires.toGMTString();
        document.cookie = name + '=' +
            encodeURIComponent(value) + ((!expires) ?
                '' :
                ('; expires=' + _ex )) +
            ((path == null) ?
                '' :
                ('; path=' + path)) +
            ((!domain) ?
                '' :
                ('; domain=' + domain)) + ((secure === true) ? '; secure' : '');
    },
    UUID: genuuid,
    getQueryParam: function(url, param) {
        param = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var regexS = '[\\?&]' + param + '=([^&#]*)',
            regex = new RegExp(regexS),
            results = regex.exec(url);
        if (results === null || (results && typeof (results[1]) !== 'string' && results[1].length)) {
            return '';
        } else {
            return decodeURIComponent(results[1]).replace(/\+/g, ' ');
        }
    },
    os: (function() {
        var ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }()),
    setdistinct_id: function() {
        var idkey = 'youpindistinct_id';
        if(!YouPin_stat.getCookie(idkey)) {
            YouPin_stat.setCookie(idkey, YouPin_stat.UUID())
        }
    },
    setSource: function() {
        var source = YouPin_stat.getQueryParam(window.location.href, 'source');
        //增加渠道来源规则
        var reg = /^P_h69\-/;
        if(source) {
            var _time = reg.test(source) ? 7 * 24 * 60 * 60 * 1000 : 0.5 * 60 * 60 * 1000;
            var expires = new Date(Date.now() + _time);
            YouPin_stat.setCookie('mijiasn', source, '.' + BASE_URL_COOKIE + '.com', expires)
        }
    },

    setSessionId() {
        var date = new Date();
        let session_id = date.getTime() + '_' + YouPin_stat.UUID();
        //var expires =  new Date(new Date().setFullYear(2027));
        
        if(!YouPin_stat.getCookie('youpin_sessionid')) {
            YouPin_stat.setCookie('youpin_sessionid', session_id,'.' + BASE_URL_COOKIE + '.com', 'session');
        }
    },
    setmjclient() {
        var client = YouPin_stat.getCookie('mjclient');
        if (!client) {
          YouPin_stat.setCookie('mjclient', YouPin_stat.os.isPc ? 'PC' : 'M')
        }
    },
    init: function() {
        YouPin_stat.setdistinct_id();
        YouPin_stat.setSource();
        YouPin_stat.setmjclient();
        YouPin_stat.setSessionId();
    }
};
YouPin_stat.init();
