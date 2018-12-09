<template>
  <b-modal :size="src.size || 'md'"
           :title="src.hdr || 'Внимание'"
           header-class="py-2"
           body-class="py-4 px-4"
           footer-class="py-2"
           visible hide-header-close
           @hide.prevent="onHide">
    <div v-html="src.msg"></div>
    <div slot="modal-footer">
      <template v-if="src.buttons">
        <template v-for="(btn, i) in src.buttons">
          <b-button :variant="btn.variant || 'secondary'" class="px-4" :class="{'ml-2': i}" @click="btnClick(btn)">
            {{ btn.txt }}
          </b-button>
        </template>
      </template>
      <template v-else="">
        <b-button variant="success" class="px-4" @click="onClose">ОК</b-button>
      </template>
    </div>
  </b-modal>
</template>

<script>
  export default {
    computed: {
      src() {
        return this.$store.state.modal || {};
      },
    },
    methods: {
      onHide() {
        this.src.preventHide || this.onClose();
      },
      onClose() {
        let src = this.src;
        this.$store.commit('set', ['modal', null]);
        src.onClose && src.onClose();
      },
      btnClick(btn) {
        this.onClose();
        btn.cb && btn.cb();
      },
    },
  }
</script>
