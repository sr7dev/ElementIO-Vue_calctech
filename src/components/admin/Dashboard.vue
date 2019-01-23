<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-form label-position="top">
                    <el-card>
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
                    </el-card>
                </el-form>
            </el-col>
            <el-col :span="16" :offset="2">
                <notifications></notifications>
            </el-col>
        </el-row>
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
                return this.profile.avatar ? this.profile.avatar : 'img/default_avatar.jpg'
            },
        },
        created() {
            this.profile = this.$store.state.profile
        },
        methods: {},
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
