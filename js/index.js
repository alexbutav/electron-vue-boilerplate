import Vue from 'vue';
import MainCompontent from '../components/Main.vue';
const sample_data = require('../sample/data');

var app = new Vue({
    el: '#app',
    data: {
        ...sample_data
    },
    components: {
        'main-component': MainCompontent
    }
});