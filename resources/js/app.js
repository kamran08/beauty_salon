require('./bootstrap');

window.Vue = require('vue');
import router from './routes'
import store from './store'

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
	router,
	store,
    el: '#app'
});
