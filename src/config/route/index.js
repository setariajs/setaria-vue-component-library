const {
  VUE_APP_SITE_ID,
  VUE_APP_CLIENT_BASE_URL,
} = process.env;

export default {
  mode: 'history',
  base: `/${VUE_APP_SITE_ID}/${VUE_APP_CLIENT_BASE_URL}`,
  routes: [],
};
