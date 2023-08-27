import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
  newCategoryModal: boolean;
}

const initialState: InitialState = {
  newCategoryModal: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    openNewCategoryModal: state => {
      state.newCategoryModal = true;
    },
    closeNewCategoryModal: state => {
      state.newCategoryModal = false;
    },
  },
});

export const {openNewCategoryModal, closeNewCategoryModal} =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
