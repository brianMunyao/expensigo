import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
  newTransactionModal: boolean;
}

const initialState: InitialState = {
  newTransactionModal: false,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    openNewTransactionModal: state => {
      state.newTransactionModal = true;
    },
    closeNewTransactionModal: state => {
      state.newTransactionModal = false;
    },
  },
});

export const {openNewTransactionModal, closeNewTransactionModal} =
  accountsSlice.actions;
export default accountsSlice.reducer;
