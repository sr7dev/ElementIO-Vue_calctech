let constants = {
  AppName: 'CalcTech',
  ApiUrl: 'http://35.224.168.117/api/',
  MediaUrl: 'http://35.224.168.117/media/',
  SystemErrMsg: 'Извините, произошла системная ошибка',

  TaskKindQuestion: 1,
  TaskKindGroup: 2,
  TaskTypeOneChoice: 1,
  TaskTypeMultipleChoice: 2,
  TaskTypeOpen: 3,
  TaskTypeEssay: 4,
};

// if (process.env.NODE_ENV !== 'production') {
//   constants.ApiUrl = 'http://localhost:9090/api/';
// }

export default constants;