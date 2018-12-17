let constants = {
  AppName: 'CalcTech',
  ApiUrl: 'http://35.224.168.117/api/',
  MediaUrl: 'http://35.224.168.117/media/',
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
    dataOff: '\u2715'
  },
};

// if (process.env.NODE_ENV !== 'production') {
//   constants.ApiUrl = 'http://localhost:9090/api/';
// }

export default constants;