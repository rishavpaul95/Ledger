new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),
})