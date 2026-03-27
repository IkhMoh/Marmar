import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  muted: boolean;
  isModalOpen: boolean;  
}

const initialState: VideoState = {
  muted: true,
  isModalOpen: false,  
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    toggleMute: (state) => {
      state.muted = !state.muted;
    },
    setMute: (state, action: PayloadAction<boolean>) => {
      state.muted = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { toggleMute, setMute, openModal, closeModal } = videoSlice.actions;
export default videoSlice.reducer;
