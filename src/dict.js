import ajax from "./ajax";

export default {
  configs: {},
  reload() {
    return Promise.resolve(true);
    // return Promise.all([
    //   this.reloadConfigs(),
    // ]);
  },
  reloadConfigs() {
    return ajax.reqAPI(`configs`, {without_token: true}).then(response => {
      this.configs = response.data;
    });
  },
}
