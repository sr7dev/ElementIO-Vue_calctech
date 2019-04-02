<template>
    <div class="container course">
        <el-row>
            <el-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Книжный Клуб</h2>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> По данным статистики 25 % казахстанцев не читают книг. Этот печальный факт был
                        замечен нами в ходе подготовки учеников к стандартизированным тестам по языкам, когда для
                        правильного ответа требуется умение анализировать тексты. Поэтому мы решили открыть Книжный Клуб
                        для детей и взрослых, где членам клуба раздаются книги и во время встреч обсуждается
                        прочитанное. Мы знаем, как порой тяжело приобщить детей, да и самому привыкнуть к чтению, и
                        надеемся, что наш клуб сможет привить любовь к запаху книг (постараемся обеспечить чаем с
                        печеньками, но не обещаем).
                    </p>
                    <p class="mb-0"> Краткий список о пользе регулярного чтения, составленный нами (но научно нами недоказанный):</p>
                    <ul>
                        <li>поможет поступить в Назарбаев Университет (а именно при сдаче SAT Reading и IELTS)</li>
                        <li>поможет успешно сдать грамотность чтения на ЕНТ</li>
                        <li>поможет успешно сдать казахский, русский и английский языки при поступлении в НИШ</li>
                        <li>хорошо отразится на критическом мышлении (умении анализировать)</li>
                        <li>да и просто, с начитанными людьми всегда есть, о чем поговорить.</li>
                    </ul>
                    <p class="mb-0">
                        Встречи один раз в две недели по полтора часа.
                    </p>
                </b-card>
            </el-col>
            <el-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/readingClub.jpg">
                </b-card>
            </el-col>
        </el-row>
        <el-row class="course__costs">
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1000₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ГРУППА</h3>
                        <p> 3000-4500 в месяц.</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<style lang="scss" scoped>
    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #777;
    }

    a {
        color: $app-color-green1;
        outline: none;
    }
</style>