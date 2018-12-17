<template>
  <label class="cursor-pointer mw-100 m-0">
    <div v-if="loading" class="d-flex align-items-center justify-content-center border rounded border-secondary"
         style="width: 120px; height: 120px;">
      <i class="spnr big"></i>
    </div>
    <template v-else="">
      <img v-if="value" :src="utils.fmtMediaImageFit(value, iw || 500, ih)"
           class="mw-100 border rounded border-light" style="min-width: 120px; min-height: 120px"/>
      <div v-else="" class="d-flex align-items-center justify-content-center rounded bg-gray-100"
           style="width: 120px; height: 120px;">
        <i class="font-5xl icon-cloud-upload text-secondary"></i>
      </div>
      <b-file accept="image/*" class="d-none" @change="onImgSelected"></b-file>
    </template>
  </label>
</template>

<script>
  import constants from "../../constants";
  import ajax from "../../ajax";
  import utils from "../../utils";

  export default {
    props: ['value', 'iw', 'ih'],
    data() {
      return {
        utils, constants,
        loading: false,
      };
    },
    methods: {
      onImgSelected(e) {
        if (!e.target.files.length) return;
        this.loading = true;
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file, file.name);
        ajax.reqMedia('temp', {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.$emit('input', response.data.path);
          this.loading = false;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'auth'});
          } else {
            this.$emit('upload_fail');
          }
        });
      },
    },
  }
</script>
