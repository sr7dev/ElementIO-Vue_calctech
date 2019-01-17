<template>
    <div class="py-3">
        <b-row>
            <b-col lg="3">
                <b-card tag="article"
                        class="mb-2 user-card">
                    <div class="card-text user-card__content">
                        <div class="user-card__content__title">Мой профиль</div>
                        <img class="user-card__content__avatar" :src="avatar">
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
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <b-card>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #e64b3b"><i
                                    class="fa fa-sort-alpha-asc font-lg"></i></div>
                            <b-media-body>
                                <div class="hdr">
                                    Отдельные предметы
                                </div>
                                <div class="dsc">
                                    Подтянем математику, физику, химию, биологию, английский по школьной и
                                    университетской программ.
                                    Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                    </b-card>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import constants from "@/constants";
    import utils from "@/utils";


    export default {
        data() {
            return {
                utils, constants,
                profile: {},
                // notification
            };
        },
        computed: {
            avatar() {
                return this.profile.avatar ? this.profile.avatar : 'img/default_avatar.jpg'
            }
        },
        created() {
            this.profile = this.$store.state.profile
        }
    }
</script>

<style lang="scss">
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
