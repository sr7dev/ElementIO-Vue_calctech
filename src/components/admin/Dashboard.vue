<template>
    <div>
        <hr>

        <b-row>
            <b-col md="4">
                <b-card :img-src="utils.fmtMediaImageFit(profile.avatar, 300, 300) || 'img/default_avatar.jpg'">
                     <div class="user-card__content__info">
                        <div class="user-card__content__info__item">
                            {{profile.first_name}}
                        </div>
                        <div class="user-card__content__info__item">
                            {{profile.last_name}}
                        </div>
                        <div class="user-card__content__info__item">
                            {{profile.username}}
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="8">
                 <notifications></notifications>
            </b-col>
        </b-row>
        <!-- <b-row>
            <b-col :span="6">
                <el-form label-position="top">
                    <el-card>
                        <div class="card-text user-card__content">
                            <div class="user-card__content__title">Мой профиль</div>
                            <div style="width: 200px; height: 200px; margin: 0 auto">
                                <img class="user-card__content__avatar" :src="utils.fmtMediaImageFit(profile.avatar, 300, 300) || 'img/default_avatar.jpg'">
                            </div>
                            <div class="user-card__content__info">
                                <div class="user-card__content__info__item">
                                    {{profile.first_name}}
                                </div>
                                <div class="user-card__content__info__item">
                                    {{profile.last_name}}
                                </div>
                                <div class="user-card__content__info__item">
                                    {{profile.username}}
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-form>
            </b-col>
            <b-col :span="16" :offset="2">
                <notifications></notifications>
            </b-col>
        </b-row> -->
    </div>
</template>

<script>
    import constants from "@/constants";
    import utils from "@/utils";
    import notifications from "@/components/admin/Notifications"

    export default {
        components: {
            notifications
        },
        data() {
            return {
                utils, constants,
                profile: {},
            };
        },
        computed: {
            avatar() {
                return this.profile.avatar ? constants.MediaUrl + this.profile.avatar : 'img/default_avatar.jpg'
            },
        },
        created() {
            this.profile = this.$store.state.profile
        },
        methods: {},
    }

</script>

<style lang="scss" scoped>
    .card{
        border: 0;  
    }
    .user-card {

        box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.09);

        &__content {

            text-align: center;
            padding: 10px;

            &__title {
                font-size: 1.3rem;
                font-weight: bold;
                margin-bottom: 20px;
            }

            &__avatar {
                width: 100%;
                height: 100%;
                object-fit: none;
            }

            &__info {
                margin-top: 20px;
                text-align: left;
                &__item {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        color: white;
    }
</style>
