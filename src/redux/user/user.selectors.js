import { createSelector } from 'reselect';

const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

// other way
// export const selectCurrentUser = createSelector(
//     selectUser,
//     selectCart,
//     (user, cart) => user.currentUser
// );