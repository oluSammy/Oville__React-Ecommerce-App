const { createSelector } = require("reselect");

const selectUser = state => state.user;

export const selectUserSlice = createSelector(
    [selectUser],
    user => user.currentUser
);