function st_get(k) {
  return localStorage && localStorage.getItem && localStorage.getItem(k);
}

function st_set(k, v) {
  try {
    localStorage && localStorage.setItem && localStorage.setItem(k, v);
  } catch (e) {
  }
}

export default {
  cache: {},
  get(k) {
    if (!(k in this.cache)) {
      this.cache[k] = st_get(k);
    }
    return this.cache[k];
  },
  set(k, v) {
    st_set(k, v);
    this.cache[k] = v;
  },
};