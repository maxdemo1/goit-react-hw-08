export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const isRefreshingSelector = state => state.auth.isRefreshing;
export const userTokenSelector = state => state.auth.token;
export const userNameSelector = state => state.auth.user.name;
