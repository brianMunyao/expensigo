import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Account} from '../../config/schemas';
// import {Account} from '../../config/interfaces';

export interface AccountsState {
  newAccountModal: boolean;
  accounts: Account[];
  // openAccount
}

const initialState: AccountsState = {
  newAccountModal: false,
  accounts: [],
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    openNewAccountModal: state => {
      state.newAccountModal = true;
    },
    closeNewAccountModal: state => {
      state.newAccountModal = false;
    },
    setAccounts: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload;
    },
  },
});

export const {openNewAccountModal, closeNewAccountModal, setAccounts} =
  accountsSlice.actions;
export default accountsSlice.reducer;
