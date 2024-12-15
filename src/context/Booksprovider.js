import { useEffect, useState } from "react"
import { BooksContext } from "./Bookscontext";

export const Booksprovider = ({ children }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/books.json').then(response => response.json()).then(data => setBooks(data)).catch(err => console.error(err));
    }, [])
    return <BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>

}