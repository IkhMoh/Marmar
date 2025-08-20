import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  muted: boolean;
}

const initialState: VideoState = {
  muted: true,
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
  },
});

export const { toggleMute, setMute } = videoSlice.actions;
export default videoSlice.reducer;
