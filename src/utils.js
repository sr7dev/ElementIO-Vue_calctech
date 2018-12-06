import moment from "moment";
import constants from "./constants";

export default {
  serializeObj(obj) {
    return Object.keys(obj).filter(k => (obj[k] !== '')).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&')
  },
  fmtPhone(v) {
    if (!v) return '';
    return v.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2)$3-$4');
  },
  fmtDate(v) {
    if (!v) return '';
    return moment(v).format('LL');
  },
  fmtDatetime(v) {
    if (!v) return '';
    return moment(v).format('LL | LT');
  },
  fmtDurationFromNow(v) {
    if (!v) return '';
    return moment(v).fromNow();
  },
  fmtNumber(v) {
    if (!v && v !== 0) return '';
    return v.toLocaleString();
  },
  fmtMoney(v, curr) {
    if (!v && v !== 0) return '';
    curr = curr || 'тг';
    return `${v.toLocaleString()} ${curr}`;
  },
  normalizeYoutubeURL(v) {
    if (v.indexOf('youtu.be') > -1) {
      let matches = v.match(/youtu.be\/[^&]+/ig);
      if (matches && matches.length > 0) {
        return `https://www.youtube.com/embed/${matches[0].slice(9)}`;
      }
    }
    if (v.indexOf('youtube.com') > -1) {
      let matches = v.match(/v=[^&]+/ig);
      if (matches && matches.length > 0) {
        return `https://www.youtube.com/embed/${matches[0].slice(2)}`;
      }
    }
    return v;
  },
  fullUrl(v) {
    if (v.indexOf('http://') !== 0)
      v = 'http://' + v;
    return v;
  },
  strIdsToObjects(ids, objSrc) {
    return _.map(
      _.filter(
        _.map(
          _.split(ids || '', ','),
          _.parseInt,
        ),
        x => !!x,
      ),
      x => {
        return _.find(objSrc, ['id', x]);
      },
    );
  },
  retrieveApiErrorDsc(error) {
    if (!error) return '';
    return (error.data || {}).error_dsc || constants.SystemErrMsg;
  },
}
