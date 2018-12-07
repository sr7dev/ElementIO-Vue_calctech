import constants from './constants'
import utils from './utils'
import stg from './stg'

let lang = 'ru';

function getXHR() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (ee) {
    }
  }
  return null;
}

function cpfetch(url, opts) {
  if (typeof fetch !== 'undefined') {
    return fetch(url, opts);
  }
  return (new Promise(function (resolve) {
    let xhr = getXHR();
    xhr.open(opts.method || 'GET', url, true);
    xhr.onreadystatechange = (() => {
      if (xhr.readyState !== 4) return;
      resolve({
        text() {
          return Promise.resolve(xhr.responseText);
        },
        status: xhr.status,
      });
    });
    if (opts.headers) {
      for (let k in opts.headers) {
        xhr.setRequestHeader(k, opts.headers[k]);
      }
    }
    xhr.send(opts.body || undefined);
  }));
}

export default {
  req(url, opts) {
    opts = opts || {};
    opts.headers = {};
    let tkn = stg.get('auth_token');
    if (!opts.without_token && tkn) {
      opts.headers["Authorization"] = tkn;
    }
    if (opts.body !== undefined) {
      if (!(opts.body instanceof FormData)) {
        opts.headers["Content-Type"] = 'application/json';
        opts.body = JSON.stringify(opts.body);
      }
    }
    if (opts.pars !== undefined) {
      url = url + ((url.indexOf('?') < 0) ? '?' : '&') + utils.serializeObj(opts.pars);
    }
    opts.headers["ch-language"] = lang || 'ru';
    return cpfetch(url, opts).then(response => {
      return response.text().then((responseText) => {
        let responseObj = null;
        if (responseText.length > 0) {
          responseObj = JSON.parse(responseText);
        }
        if (response.status > 199 && response.status < 300) {
          return {status: response.status, data: responseObj};
        }
        let err = new Error();
        err.status = response.status;
        err.data = responseObj;
        throw err;
      });
    });
  },
  reqAPI(url, opts) {
    return this.req(constants.ApiUrl + url, opts);
  },
}
