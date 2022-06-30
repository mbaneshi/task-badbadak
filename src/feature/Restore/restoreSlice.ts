import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface RestoreState {
  value: number[];
}

const initialState: RestoreState = {
  value: [],
} as RestoreState;

export const restoreSlice = createSlice({
  name: "restore",
  initialState,
  reducers: {
    addtolist: (state, action: PayloadAction<number>) => {
      if (action.payload in state.value) {
        return state;
      }
      state.value.push(action.payload);
    },
    removefromlist: (state, action: PayloadAction<number>) => {
      state.value.filter((item) => item !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtolist, removefromlist } = restoreSlice.actions;
export const selecRestore = (state: RestoreState) => state.value;

export default restoreSlice.reducer;

//-------------------
