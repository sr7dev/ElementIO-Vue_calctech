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
            // MathJax.Ajax.config.path["mhchem"] =
            //     "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
            // MathJax.Hub.Config({
            //     TeX: {
            //         extensions: ["[mhchem]/mhchem.js"]
            //     }
            // });
            this.renderMathJax()
        },
        methods: {
            renderContent() {
                this.$refs.mathJaxEl.textContent = this.formula
            },

            renderMathJax() {
                this.renderContent()
                if (window.MathJax) {
                    console.log(MathJax);
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
