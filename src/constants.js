let constants = (() => {
  let res = {
    
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
