import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import data from "../../models/mydata";
import { Restores } from "../../types/Restore";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Restores = {
  data: data,
  selected: [],
};

export const restoreSlice = createSlice({
  name: "star",
  initialState,
  reducers: {
    addtolist: (state, action: PayloadAction<number>) => {
      state.selected.push(state.data[action.payload]);
    },
    removefromlist: (state, action: PayloadAction<number>) => {
      // state.value.remove(action.payload) ;
      console.log(action.payload);
      state.selected.filter((item) => item.id == action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtolist, removefromlist } = restoreSlice.actions;
export const selectRestore = (state: Restores) => state.data;

export default restoreSlice.reducer;

//-------------------
