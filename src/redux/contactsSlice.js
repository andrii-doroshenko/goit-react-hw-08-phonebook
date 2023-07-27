import { createSlice } from '@reduxjs/toolkit';
import {
  // fetchContacts,
  // addContact,
  // deleteContact,
  register,
  login,
  logOut,
} from 'services/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      //logout
      .addCase(logOut.pending, (state, _) => {
        state.isLoading = true;
        return state;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      //login
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //registration
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
    // // addContacts
    // .addCase(addContact.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // state.user.push(action.payload);
    //   state.user = action.payload.user;
    // })
    // .addCase(addContact.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
    // .addCase(deleteContact.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = state.user.filter(
    //     contact => contact.id !== action.payload
    //   );
    // })
    // .addCase(deleteContact.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

// export { fetchContacts, addContact, deleteContact };

//Selectors
export const getContactsValue = state => state.contacts.user;
export const getLoadingValue = state => state.contacts.isLoading;
export const selectIsLoggedIn = state => state.contacts.isLoggedIn;
