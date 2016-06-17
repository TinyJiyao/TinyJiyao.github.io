/* global DUOSHUO: true */
/* jshint camelcase: false */

typeof DUOSHUO !== 'undefined' ?
    hookTemplate() :
    ($('#duoshuo-script')[0].onload = hookTemplate);


function hookTemplate() {
    var post = DUOSHUO.templates.post;

    DUOSHUO.templates.post = function (e, t) {
        var rs = post(e, t);
        var agent = e.post.agent;
        var userId = e.post.author.user_id;
        var admin = '';

        if (userId && (userId == CONFIG.duoshuo.userId)) {
            admin = '<span class="sskadmin">' + CONFIG.duoshuo.author + '</span>';
        }

        if (agent && /^Mozilla/.test(agent)) {
            rs = rs.replace(/<\/div><p>/, admin + getAgentInfo(agent) + '</div><p>');
        }

        return rs;
    };
}

//显UA开始
function ua(e) {
    var r = new Array;
    var outputer = '';
    if (r = e.match(/FireFox\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_firefox"><i class="fa fa-firefox"></i> FireFox'
    } else if (r = e.match(/Maxthon([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_maxthon"><i class="fa fa-globe"></i> Maxthon'
    } else if (r = e.match(/BIDUBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_ucweb"><i class="fa fa-globe"></i> 百度浏览器'
    } else if (r = e.match(/UBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser'
    } else if (r = e.match(/UCBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser'
    } else if (r = e.match(/MetaSr/ig)) {
        outputer = '<span class="ua_sogou"><i class="fa fa-globe"></i> 搜狗浏览器'
    } else if (r = e.match(/2345Explorer/ig)) {
        outputer = '<span class="ua_2345explorer"><i class="fa fa-globe"></i> 2345王牌浏览器'
    } else if (r = e.match(/2345chrome/ig)) {
        outputer = '<span class="ua_2345chrome"><i class="fa fa-globe"></i> 2345加速浏览器'
    } else if (r = e.match(/LBBROWSER/ig)) {
        outputer = '<span class="ua_lbbrowser"><i class="fa fa-globe"></i> 猎豹安全浏览器'
    } else if (r = e.match(/MicroMessenger\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_qq"><i class="fa fa-weixin"></i> 微信'
            /*.split('/')[0]*/
    } else if (r = e.match(/QQBrowser\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_qq"><i class="fa fa-qq"></i> QQ浏览器'
            /*.split('/')[0]*/
    } else if (r = e.match(/QQ\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_qq"><i class="fa fa-qq"></i> QQ浏览器'
            /*.split('/')[0]*/
    } else if (r = e.match(/MiuiBrowser\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_mi"><i class="fa fa-globe"></i> Miui浏览器'
            /*.split('/')[0]*/
    } else if (r = e.match(/Chrome([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_chrome"><i class="fa fa-chrome"></i> Chrome'
            /*.split('.')[0]*/
    } else if (r = e.match(/safari\/([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_apple"><i class="fa fa-safari"></i> Safari'
    } else if (r = e.match(/Opera[\s|\/]([^\s]+)/ig)) {
        var r1 = r[0].split("/");
        outputer = '<span class="ua_opera"><i class="fa fa-opera"></i> Opera'
    } else if (r = e.match(/Trident\/7.0/gi)) {
        outputer = '<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE 11'
    } else if (r = e.match(/MSIE\s([^\s|;]+)/gi)) {
        outputer = '<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE' + ' ' + r[0]
            /*.replace('MSIE', '').split('.')[0]*/
    } else {
        outputer = '<span class="ua_other"><i class="fa fa-globe"></i> 其它浏览器'
    }
    if (checkMobile()) {
        Mobile = '<br><br>';
    } else {
        Mobile = '';
    }
    return outputer + "</span>" + Mobile;
}

function os(e) {
    var os = '';
    if (e.match(/win/ig)) {
        if (e.match(/nt 5.1/ig)) {
            os = '<span class="os_xp"><i class="fa fa-windows"></i> Windows XP'
        } else if (e.match(/nt 6.1/ig)) {
            os = '<span class="os_7"><i class="fa fa-windows"></i> Windows 7'
        } else if (e.match(/nt 6.2/ig)) {
            os = '<span class="os_8"><i class="fa fa-windows"></i> Windows 8'
        } else if (e.match(/nt 6.3/ig)) {
            os = '<span class="os_8_1"><i class="fa fa-windows"></i> Windows 8.1'
        } else if (e.match(/nt 10.0/ig)) {
            os = '<span class="os_8_1"><i class="fa fa-windows"></i> Windows 10'
        } else if (e.match(/nt 6.0/ig)) {
            os = '<span class="os_vista"><i class="fa fa-windows"></i> Windows Vista'
        } else if (e.match(/nt 5/ig)) {
            os = '<span class="os_2000"><i class="fa fa-windows"></i> Windows 2000'
        } else {
            os = '<span class="os_windows"><i class="fa fa-windows"></i> Windows'
        }
    } else if (e.match(/android/ig)) {
        os = '<span class="os_android"><i class="fa fa-android"></i> Android'
    } else if (e.match(/ubuntu/ig)) {
        os = '<span class="os_ubuntu"><i class="fa fa-desktop"></i> Ubuntu'
    } else if (e.match(/linux/ig)) {
        os = '<span class="os_linux"><i class="fa fa-linux"></i> Linux'
    } else if (e.match(/mac/ig)) {
        os = '<span class="os_mac"><i class="fa fa-apple"></i> Mac OS X'
    } else if (e.match(/unix/ig)) {
        os = '<span class="os_unix"><i class="fa fa-desktop"></i> Unix'
    } else if (e.match(/symbian/ig)) {
        os = '<span class="os_nokia"><i class="fa fa-mobile"></i> Nokia SymbianOS'
    } else {
        os = '<span class="os_other"><i class="fa fa-desktop"></i> 其它操作系统'
    }
    return os + "</span>";
}
//显UA结束

function getAgentInfo(string) {
    $.ua.set(string);

    var UNKNOWN = 'Unknown';
    var sua = $.ua;
    var separator = isMobile() ? '<br><br>' : '<span class="duoshuo-ua-separator"></span>';
    var osName = sua.os.name || UNKNOWN;
    var osVersion = sua.os.version || UNKNOWN;
    var browserName = sua.browser.name || UNKNOWN;
    var browserVersion = sua.browser.version || UNKNOWN;
    var iconMapping = {
        os: {
            android: 'android',
            linux: 'linux',
            windows: 'windows',
            ios: 'apple',
            'mac os': 'apple',
            unknown: 'desktop'
        },
        browser: {
            chrome: 'chrome',
            chromium: 'chrome',
            firefox: 'firefox',
            opera: 'opera',
            safari: 'safari',
            ie: 'internet-explorer',
            wechat: 'wechat',
            qq: 'qq',
            unknown: 'globe'
        }
    };
    var osIcon = iconMapping.os[osName.toLowerCase()];
    var browserIcon = iconMapping.browser[getBrowserKey()];

    return separator +
        '<span class="duoshuo-ua-platform duoshuo-ua-platform-' + osName.toLowerCase() + '">' +
        '<i class="fa fa-' + osIcon + '"></i>' +
        osName + ' ' + osVersion +
        '</span>' + separator +
        '<span class="duoshuo-ua-browser duoshuo-ua-browser-' + browserName.toLowerCase() + '">' +
        '<i class="fa fa-' + browserIcon + '"></i>' +
        browserName + ' ' + browserVersion +
        '</span>';

    function getBrowserKey() {
        var key = browserName.toLowerCase();

        if (key.match(/WeChat/i)) {
            return 'wechat';
        }

        if (key.match(/QQBrowser/i)) {
            return 'qq';
        }

        return key;
    }

    function isMobile() {
        var userAgent = window.navigator.userAgent;

        var isiPad = userAgent.match(/iPad/i) !== null;
        var mobileUA = [
      'iphone', 'android', 'phone', 'mobile',
      'wap', 'netfront', 'x11', 'java', 'opera mobi',
      'opera mini', 'ucweb', 'windows ce', 'symbian',
      'symbianos', 'series', 'webos', 'sony',
      'blackberry', 'dopod', 'nokia', 'samsung',
      'palmsource', 'xda', 'pieplus', 'meizu',
      'midp', 'cldc', 'motorola', 'foma',
      'docomo', 'up.browser', 'up.link', 'blazer',
      'helio', 'hosin', 'huawei', 'novarra',
      'coolpad', 'webos', 'techfaith', 'palmsource',
      'alcatel', 'amoi', 'ktouch', 'nexian',
      'ericsson', 'philips', 'sagem', 'wellcom',
      'bunjalloo', 'maui', 'smartphone', 'iemobile',
      'spice', 'bird', 'zte-', 'longcos',
      'pantech', 'gionee', 'portalmmm', 'jig browser',
      'hiptop', 'benq', 'haier', '^lct',
      '320x320', '240x320', '176x220'
    ];
        var pattern = new RegExp(mobileUA.join('|'), 'i');

        return !isiPad && userAgent.match(pattern);
    }
}
