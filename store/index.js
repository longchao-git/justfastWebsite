import config from '../config'

export const state = () => ({
    locales: ['en', 'fr', 'es', 'ar', 'zh', 'ja'],
    locale: 'zh'
})

export const getters = {

}

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },

}

export const actions = {

}
