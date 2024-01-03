import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      state.push(action.payload);
    },

    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
