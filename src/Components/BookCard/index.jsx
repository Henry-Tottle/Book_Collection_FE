function BookCard ({book}) {
    return(
        <div>
            <img src={book.image} alt={book.title + 'cover'}/>
            <h3 className='text-2xl'>{book.title}</h3>
            <h4>by: {book.forename + ' ' + book.surname}</h4>
            <h5>{book.isbn}</h5>
            <div>
                <h5>{book.publisher}</h5>
                <h5>{book.publication_date}</h5>
            </div>
        </div>
    )
}

export default BookCard