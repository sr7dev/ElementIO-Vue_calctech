<template>
    <div class="summer-school">
        <el-row>
            <el-col>
                <el-card class="summer-school__card">
                    <h4 class="text-black-50">Для записи на отдельные курсы (ЕНТ, НИШ, IELTS, НУ, робототехника и.т.д.),
                        пройдите
                        <router-link :to="{name: 'courses'}">
                            сюда
                        </router-link>
                    </h4>
                    <section class="summer-school__card__list">
                        <div v-for="item in data" class="summer-school__card__list__item">
                            <div class="summer-school__card__list__item__header">
                                <div class="summer-school__card__list__item__header__tariff">{{item.tariff}}</div>
                                <div class="summer-school__card__list__item__header__cost">{{item.cost}}</div>
                                <div class="summer-school__card__list__item__header__period">{{item.period}}</div>
                            </div>
                            <div class="summer-school__card__list__item__description">
                                <div class="summer-school__card__list__item__description__item text-black-50"
                                     v-for="desc in item.description">
                                    {{desc}}
                                </div>
                            </div>
                            <router-link :to="{name: 'contacts'}">
                                <el-button class="summer-school__card__list__item__button" round> Записаться</el-button>
                            </router-link>
                        </div>
                    </section>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="summer-school__subjects">
            <el-col :span="6">
                <img src="/img/about.jpg">
            </el-col>
            <el-col :span="13">
                <h4 class="summer-school__subjects__title">ДОПОЛНИТЕЛЬНЫЕ ПРЕДМЕТЫ</h4>
                <div class="summer-school__subjects__description">Книжный клуб, робототехника (4-9 классы), физика,
                    химия, биология, подготовка в НИШ (5 классы), подготовка к поступлению в Назарбаев Университет
                    (10-11 классы), IELTS.
                </div>
            </el-col>
            <el-col :span="2">
                <a href="tel:+77478552148">
                    <el-button class="summer-school__subjects__button">8 747 855 2148</el-button>
                </a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                data: [
                    {
                        tariff: 'БАЗОВЫЙ',
                        cost: '12000₸',
                        period: 'в месяц',
                        description: ['8 ЧАСОВ МАТЕМАТИКИ', '8 ЧАСОВ АНГЛИЙСКОГО']
                    },
                    {
                        tariff: 'СТАНДАРТНЫЙ',
                        cost: '15000₸',
                        period: 'в месяц',
                        description: ['8 ЧАСОВ МАТЕМАТИКИ', '8 ЧАСОВ АНГЛИЙСКОГО', '7 ЧАСОВ ДОПОЛНИТЕЛЬНОГО ПРЕДМЕТА']
                    },
                    {
                        tariff: 'ИНТЕНСИВНЫЙ',
                        cost: '18000₸',
                        period: 'в месяц',
                        description: ['10 ЧАСОВ МАТЕМАТИКИ', '10 ЧАСОВ АНГЛИЙСКОГО', '10 ЧАСОВ ДОПОЛНИТЕЛЬНОГО ПРЕДМЕТА']
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .summer-school {

        padding: 100px;

        &__card {
            &__list {
                display: flex;
                justify-content: space-between;
                &__item {
                    width: 31%;
                    margin-top: 20px;
                    text-align: center;
                    position: relative;
                    padding-bottom: 100px;
                    margin-bottom: 40px;
                    &__header {
                        /*text-align: center;*/
                        color: white;
                        background-color: $app-color-green1;
                        padding: 30px;
                        &__tariff {
                            font-size: 1.3rem;
                            font-weight: 400;
                            line-height: 1.6;
                        }
                        &__cost {
                            font-size: 2rem;
                            font-weight: 400;
                            line-height: 1.6;
                        }
                        &__period {
                            font-size: 1.1rem;
                            font-weight: 400;
                            line-height: 1.6;
                        }

                    }
                    &__description {
                        text-align: center;
                        &__item {
                            margin: 20px;
                        }
                    }
                    &__button {
                        position: absolute;
                        bottom: 30px;
                        color: white;
                        background-color: $app-color-green1;
                        left: 32%;
                    }
                    &__button:hover {
                        background: #87D62C;
                        color: white;
                    }
                    &__button:active {
                        border: #87D62C;
                        background: #87D62C;
                        color: white;
                    }
                    &__button:focus {
                        border: #87D62C;
                        background: #87D62C;
                        color: white;
                    }
                }
                &__item:hover {
                    cursor: pointer;
                    box-shadow: 0px 3px 0px #72c02c;
                }
            }
        }
        &__subjects {
            background-color: $app-color-green1;
            padding: 30px;
            margin-top: 40px;
            img {
                width: 270px;
            }
            &__title {
                color: white;
                font-size: 2rem;
                font-weight: 400;
                line-height: 1.6;
            }
            &__description {
                color: white;
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 1.6;
            }
            &__button {
                color: white;
                border-color: #4d4d4d;
                background-color: #4d4d4d;
                margin-top: 55%;
            }
            &__button:hover {
                color: white;
                border-color: #6c6c6c;
                background-color: #6c6c6c;
            }
            &__button:active {
                color: white;
                border-color: #4d4d4d;
                background-color: #4d4d4d;
            }
            &__button:focus {
                color: white;
                border-color: #4d4d4d;
                background-color: #4d4d4d;
            }
        }
    }

    a, a:hover {
        color: $app-color-green1;
        outline: none;
    }
</style>