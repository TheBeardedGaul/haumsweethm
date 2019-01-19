import Vue from "vue";
require('babel-register');
// require the rest of the app that needs to be transpiled after the hook
const app = require('./app');

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>`,
    data: {
        name: "World"
    }
});