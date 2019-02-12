export default {
  server: function () {
    let dev = "http://192.168.31.141:10010"; //开发环境
    let dev2 = "http://192.168.31.129:10010"; //开发环境
    let dev3 = "http://192.168.31.158:10010"; //开发环境
    let prod = "http://api.bitflash.vip"; //生产环境
    let test = "http://192.168.31.43:10010"; //测试环境
    return dev;
  },
  calllbackWebURI: function (uri, title) {
    const appURI = '../new-page/new-page';
    const webURI = 'http://192.168.31.10:8080/#';
    return `${appURI}?src=${webURI}${uri}&title=${title}`
  },
  calllbackWebURIwu: function (uri, title) {
    const appURI = '../new-page/new-page-wu';
    const webURI = 'http://192.168.31.168:8080/#';
    return `${appURI}?src=${webURI}${uri}&title=${title}`
  },
  getURLParameter: function() {
    var localhref = window.location.href;
    var localarr = localhref.split('?')[1] !== undefined ? localhref.split('?')[1].split('&') : [];
    var tempObj = {};
    for (var i = 0; i < localarr.length; i++) {
      tempObj[localarr[i].split('=')[0]] = localarr[i].split('=')[1];
    }
    return tempObj;
  },
  getToken: function () {
    let header = {};

    let oldToken = localStorage.getItem("header") ? JSON.parse(localStorage.getItem("header")).token : null;
    let newToken = this.getURLParameter().token ? this.getURLParameter().token : null;

    if (newToken == null) {
      header = { token: oldToken };
    } else {
      header = { token: newToken };
      localStorage.setItem("header", JSON.stringify(header));
    }
    return header;
  },
  clearToken: function () {
    let localToken = localStorage.getItem("header") ? JSON.parse(localStorage.getItem("header")).token : null;
    if (!!localToken) {
      localStorage.removeItem('header')
    }
  }
}
