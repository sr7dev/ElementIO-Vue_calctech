let constants = (() => {
  let res = {
    AppName: 'CalcTech',
    ApiUrl: 'http://35.198.156.152/api/',
    MediaUrl: 'http://35.198.156.152/media/',
    SystemErrMsg: 'Извините, произошла системная ошибка',

    AttachmentTypeText: 1,
    AttachmentTypeImage: 2,
    AttachmentTypeVideo: 3,

    TaskKindQuestion: 1,
    TaskKindGroup: 2,
    TaskTypeOneChoice: 1,
    TaskTypeMultipleChoice: 2,
    TaskTypeOpen: 3,
    TaskTypeEssay: 4,

    switchLabelIcon: {
      dataOn: '\u2713',
      dataOff: '\u2715',
    },
  };

  if(process.env.VUE_APP_ApiUrl) {
    res.ApiUrl = process.env.VUE_APP_ApiUrl;
  }
  if(process.env.VUE_APP_MediaUrl) {
    res.MediaUrl = process.env.VUE_APP_MediaUrl;
  }

  return res;
})();

export default constants;
