<template>
  <b-card no-body class="animated fadeIn">
    <b-form @submit.prevent="onSubmit">
      <b-card-body class="px-0 pb-2">
        <b-container fluid>
          <b-row class="align-items-start">
            <b-col md="6" lg="5">
              <b-form-group label="Тип">
                <b-form-radio-group buttons
                                    button-variant="outline-primary"
                                    v-model.number="data.type_id"
                                    :options="$store.state.attachment_types"
                                    value-field="id"
                                    text-field="name"></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="4" md="3">
              <b-form-group label="Порядковый номер">
                <b-form-input type="number" pattern="\d*" v-model.number="data.ord"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="align-items-start">
            <b-col v-if="data.type_id === constants.AttachmentTypeText" lg="8">
              <b-form-group label="Текст">
                <b-form-textarea :rows="7" v-model="data.v" :disabled="loading" no-resize/>
              </b-form-group>
            </b-col>
            <b-col v-if="data.type_id === constants.AttachmentTypeImage" lg="10">
              <b-form-group label="Картина">
                <ImgInput v-model="data.v" :iw="700"></ImgInput>
              </b-form-group>
            </b-col>
            <b-col v-if="data.type_id === constants.AttachmentTypeVideo" lg="8">
              <b-form-group label="Ссылка на видео">
                <b-form-input type="text" v-model.trim="data.v"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row v-if="failFB">
            <b-col>
              <b-alert variant="danger" show>
                <i class="fa fa-warning mr-3"></i>{{failFB}}
              </b-alert>
            </b-col>
          </b-row>
        </b-container>
      </b-card-body>
      <b-card-footer>
        <div class="d-flex align-items-center">
          <b-button type="submit" variant="success" :disabled="loading">
            {{data.id ? 'Изменить' : 'Создать'}}
          </b-button>
          <b-button :variant="data.id ? 'danger' : 'secondary'" :disabled="loading" class="ml-2"
                    @click.prevent="onDeleteClick">
            {{data.id ? 'Удалить' : 'Отмена'}}
          </b-button>
          <div v-if="loading" class="ml-2">
            <i class="spnr"></i>
          </div>
        </div>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
  import _ from "lodash";
  import constants from "../../../../constants"
  import ajax from "../../../../ajax"
  import utils from "../../../../utils"
  import ImgInput from '@/components/common/ImgInput'

  export default {
    props: ['taskId', 'sd'],
    components: {ImgInput},
    data() {
      return {
        ld: _, constants, utils,
        loading: false,
        failFB: '',
        data: null,
      };
    },
    // watch: {
    //   'data.type_id'() {
    //     this.data.v = '';
    //   },
    // },
    methods: {
      emptyData() {
        return {
          id: 0,
          type_id: constants.AttachmentTypeText,
          v: '',
          ord: 0,
        };
      },
      onSubmit() {
        this.loading = true;
        this.failFB = '';
        let req = null;
        if (this.data.id) {
          req = ajax.reqAPI(`tasks/${this.taskId}/attachments/${this.data.id}`, {method: 'PUT', body: this.data});
        } else {
          req = ajax.reqAPI(`tasks/${this.taskId}/attachments`, {method: 'POST', body: this.data});
        }
        req.then(response => {
          if (!this.data.id && response.data.id) {
            this.data.id = response.data.id;
          }
          this.$emit('updated', _.assign({}, this.data));
          this.loading = false;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'auth'});
          } else {
            this.loading = false;
            this.failFB = utils.retrieveApiErrorDsc(error);
          }
        });
      },
      onDeleteClick() {
        if (!this.data.id) {
          this.$emit('deleted');
          return;
        }
        this.$store.commit('confirm', {
          msg: 'Вы уверены что хотите удалить эту запись?',
          okCb: () => {
            this.loading = true;
            this.failFB = '';
            ajax.reqAPI(`tasks/${this.taskId}/attachments/${this.data.id}`, {method: 'DELETE'}).then(response => {
              this.$emit('deleted');
            }).catch(error => {
              if (error.status === 401) {
                this.$store.commit('setProfile', null);
                this.$router.push({name: 'auth'});
              } else {
                this.loading = false;
                this.failFB = utils.retrieveApiErrorDsc(error);
              }
            });
          },
        });
      },
    },
    created() {
      this.data = _.assign({}, this.emptyData(), this.sd);
    },
  }
</script>
