import { createSlice } from '@reduxjs/toolkit'


export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quoteValue: '',
        quoteAuthor: ''
    },
    reducers: {
        newQuote: (state, action) => {
            state.quoteValue = action.payload
        },
        newAuthor: (state, action) => {
            state.quoteAuthor = action.payload
        }

    }
})

export const { newQuote, newAuthor } = quoteSlice.actions

export const callNewquote = () => dispatch => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const randomNumber = Math.floor(Math.random() * 1643);
            // console.log(data)
            // console.log(randomNumber)
            // console.log(data[randomNumber].text)
            // console.log(data[randomNumber].author)
            dispatch(newQuote(data[randomNumber].text))
            dispatch(newAuthor(data[randomNumber].author))
        })
}


export default quoteSlice.reducer