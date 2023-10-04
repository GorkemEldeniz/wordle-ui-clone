import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Modals from '@utils/modal-list'

type ModalsNameType = 'hamburger' | 'settings' | 'info' | 'stats'

export interface ModalType {
  currentModal: boolean | (typeof Modals)[0]
}

const initialState: ModalType = {
  currentModal: Modals[0],
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalsNameType>) => {
      state.currentModal = Modals.find(
        (el) => el.name === action.payload
      ) as (typeof Modals)[0]
    },
    destroyModal: (state) => {
      state.currentModal = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal, destroyModal } = modalSlice.actions

export default modalSlice.reducer
