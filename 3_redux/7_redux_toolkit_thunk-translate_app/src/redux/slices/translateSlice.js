import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: { value: "tr", label: "Turkish" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
  isLoading: false,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },

    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },

    changeLangs: (state) => {
      const currSource = state.sourceLang;
      const currTarget = state.targetLang;
      const currText = state.textToTranslate;
      const currTranslated = state.translatedText;

      state.sourceLang = currTarget;
      state.targetLang = currSource;
      state.textToTranslate = currTranslated;
      state.translatedText = currText;
    },

    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.translatedText = "";
      state.isLoading = true;
    });

    builder.addCase(translateText.rejected, (state, action) => {
      state.isLoading = false;
      alert("Bir sorun oluştu");
      alert(action.error.message);
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.translatedText = action.payload;
    });
  },
});

export const { setSource, setTarget, changeLangs, setText } =
  translateSlice.actions;

export default translateSlice.reducer;
