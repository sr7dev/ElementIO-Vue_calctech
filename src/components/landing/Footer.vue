<template>
    <div class="vendor-footer">
        <div class="row1 py-4 text-white-80 font-lg">
            <b-container>
                <b-row>
                    <b-col lg="3" md="6" class="py-4">
                        <img src="img/logo.png" style="width: 134px; height: 31px"/>
                        <div class="mt-4 lh1_6">
                            Наша цель - дать детям возможность получения качественного и доступного образования.
                        </div>
                    </b-col>
                    <b-col lg="3" md="6" class="py-4"></b-col>
                    <b-col lg="3" md="6" class="py-4">
                        <div class="hdr">ПОЛЕЗНЫЕ ССЫЛКИ</div>
                        <ul class="menu">
                            <li><span>О нас</span> <i class="fa fa-angle-right"></i></li>
                            <li><span>Курсы</span> <i class="fa fa-angle-right"></i></li>
                            <li><span>Летняя Школа</span> <i class="fa fa-angle-right"></i></li>
                            <li><span>Вакансии</span> <i class="fa fa-angle-right"></i></li>
                            <li><span>Наши контакты</span> <i class="fa fa-angle-right"></i></li>
                        </ul>
                    </b-col>
                    <b-col lg="3" md="6" class="py-4">
                        <div class="hdr">НАШИ КОНТАКТЫ</div>
                        <div class="address">
                            Кокшетау, Акмолинская область<br/>
                            Ауельбекова 90<br/>
                            Телефон: <a href="tel:+77478552148">+7 747 855 2148</a><br/>
                            Email: <a href="mailto:calctech.kokshe@gmail.com">calctech.kokshe@gmail.com</a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="row2 font-lg text-white-80 py-4">
            <b-container>2018 © Все права защищены.</b-container>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .vendor-footer .row1 {
        background-color: rgba(0, 0, 0, .9);
    }

    .vendor-footer .hdr {
        padding-bottom: .5rem;
        border-bottom: 1px solid rgba(114, 192, 44, .6);
    }

    .vendor-footer .menu {
        list-style: none;
        display: block;
        margin: .85rem 0 0;
        padding: 0;
    }

    .vendor-footer .menu > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .7rem 0;
        line-height: 1.4;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        cursor: pointer;
    }

    .vendor-footer .menu > li:last-child {
        border-bottom: none;
    }

    .vendor-footer .menu > li:hover > span {
        text-decoration: underline;

    }

    .vendor-footer .address {
        line-height: 2;
        margin-top: 1.4rem;
        background-size: cover;
        background: url("/img/map2.png") no-repeat center;
    }

    .vendor-footer .address a {
        color: $app-color-green1;
        text-decoration: none;
    }

    .vendor-footer .address a:hover {
        text-decoration: underline;
    }

    .vendor-footer .row2 {
        background-color: rgba(0, 0, 0, 1);
    }
</style>
