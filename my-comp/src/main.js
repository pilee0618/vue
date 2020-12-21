import App from "./App.js"

new Vue({
    components: {
        App,
    },
    render:(h) => h(App),
    // render(h) {
    //     return h(App);
    // }
    // template: `<App />`,
}).$mount("#app");