import Vue from 'vue'

export default ({ app }) ->
    Vue.config.ignoredElements = [
        /ion-icon/
    ]