import BookCard from "../BookCard/index.jsx";

function BookDisplayArea({books}) {
    return (
        <div className='grid grid-cols-4 gap-4 mt-5 ml-10'>
            {books.map((book, i) => {
               return <BookCard key={i} book={book}/>
            })}
        </div>
    )
}

export default BookDisplayArea