<template>
  <b-card no-body class="animated fadeIn">
    <b-form @submit.prevent="onSubmit">
      <b-card-body class="px-0 pb-2">
        <b-container fluid>
          <b-row class="align-items-start">
            <b-col lg="auto" class="d-flex align-items-center pb-3 pb-lg-0">
              <c-switch v-model="data.is_correct" color="primary" :disabled="loading"/>
              <div class="ml-2">верный</div>
            </b-col>
            <b-col lg="6">
              <b-form-group label="Текст ответа">
                <b-form-textarea :rows="3" v-model="data.txt" :disabled="loading" no-resize/>
              </b-form-group>
            </b-col>
            <b-col lg="4">
              <b-form-group label="Картина">
                <ImgInput v-model="data.img"></ImgInput>
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
  import {Switch as cSwitch} from '@coreui/vue'
  import ImgInput from '@/components/common/ImgInput'

  export default {
    props: ['taskId', 'sd'],
    components: {cSwitch, ImgInput},
    data() {
      return {
        ld: _, constants, utils,
        loading: false,
        failFB: '',
        data: null,
      };
    },
    methods: {
      emptyData() {
        return {
          id: 0,
          is_correct: false,
          txt: '',
          img: '',
        };
      },
      onSubmit() {
        this.loading = true;
        this.failFB = '';
        let req = null;
        if (this.data.id) {
          req = ajax.reqAPI(`tasks/${this.taskId}/answers/${this.data.id}`, {method: 'PUT', body: this.data});
        } else {
          req = ajax.reqAPI(`tasks/${this.taskId}/answers`, {method: 'POST', body: this.data});
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
            ajax.reqAPI(`tasks/${this.taskId}/answers/${this.data.id}`, {method: 'DELETE'}).then(response => {
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
