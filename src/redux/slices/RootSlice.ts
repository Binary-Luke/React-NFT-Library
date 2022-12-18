import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'Title',
        author: 'Author',
        ISBN: 'ISBN',
        edition: 'Edition'
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseISBN: (state, action) => { state.ISBN = action.payload },
        chooseEdition: (state, action) => { state.edition = action.payload }
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseISBN, chooseEdition } = rootSlice.actions;