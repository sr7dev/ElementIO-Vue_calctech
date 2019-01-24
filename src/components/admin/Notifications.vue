<template>
    <div class="notifications">
        <el-container>
            <el-card class="notifications__list">
                <div slot="header" class="notifications__list__title">
                    <h3>Ваши уведомления</h3>
                    <el-button type="text">Удалить все</el-button>
                </div>
                <el-card class="notifications__list__item" v-for="(item, index) in notifications">
                    <i class="el-icon-close notifications__list__item__close-icon"
                       @click="deleteItem(index)"
                    ></i>
                    <el-row>
                        <el-col :span="2">
                            <i class="el-icon-info notifications__list__item__icon"></i>
                        </el-col>
                        <el-col :span="20" :offset="1">
                            <section>
                                <h4>{{item.title}}</h4>
                                <p>{{item.description}}</p>
                            </section>
                        </el-col>
                    </el-row>
                </el-card>
            </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        data:()=> {
            return {
                notifications: [
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Вы добавлены в группу учеников',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Вам присвоена группа учеников',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Новое задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    },
                    {
                        title: 'Внимание!',
                        description: 'Модератор одобрил вопрос/задание',
                    }
                ]
            }
        },
        methods: {
            deleteItem(index){
                this.notifications.splice(index, 1)
            }
        }
    }
</script>


<style lang="scss" scoped>

    .notifications {

        &__list {
            width: 100%;
            &__title {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            &__item {
                margin: 20px;
                position: relative;
                &__close-icon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    color: red;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                &__icon {
                    color: $app-color-green1;
                    font-size: 3rem;
                    width: 50%;
                }
            }

        }

    }

</style>