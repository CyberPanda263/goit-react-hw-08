export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectToken = state => state.auth.toke
export const selectUser = state => state.auth.user
export const selectIsRefreshing = state => state.auth.isRefreshing
export const selectErrorMessage = state => state.auth.errorMessage
export const selectIsErrorAuth = state => state.auth.isError
export const selectIsLoginError = state => state.auth.isLoginError