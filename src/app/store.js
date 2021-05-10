import { configureStore } from "@reduxjs/toolkit"
import quoteSlice from '../features/quoteSlice'

export default configureStore({
    reducer: {
        quote: quoteSlice
    }
})