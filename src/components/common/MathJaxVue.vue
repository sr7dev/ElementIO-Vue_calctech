<template>
    <span ref="mathJaxEl">{{formula}}</span>
</template>

<script>
    export default {
        props: ['formula'],
        watch: {
            formula() {
                this.renderMathJax()
            }
        },
        mounted() {
            this.renderMathJax()
        },
        methods: {
            renderContent() {
                this.$refs.mathJaxEl.textContent = this.formula
            },

            renderMathJax() {
                this.renderContent()
                if (window.MathJax) {
                    window.MathJax.Hub.Queue([
                        'Typeset',
                        window.MathJax.Hub,
                        this.$refs.mathJaxEl
                    ])
                }
            }
        }
    }
</script>
