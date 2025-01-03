// ~/middleware/auth.js
export default function ({ store }) {
  if (process.browser) {
    if (localStorage.getItem('userInfo')) {
      store.commit('SET_USERINFO', JSON.parse(localStorage.getItem('userInfo')))
    }
    if (localStorage.getItem('locale')) {
      store.commit('SET_LANG', localStorage.getItem('locale'))
    }
    if (localStorage.getItem('city_id')) {
      store.commit('SET_cityId', localStorage.getItem('city_id'))
    }
  }
}
