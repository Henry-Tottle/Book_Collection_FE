
function CategoryFilter ({setSelected}) {
    const clickHandler = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div className='text-center bg-cyan-800'>
            <select onChange={clickHandler} className='text-center m-1 rounded-2xl text-2xl'>
                <option  value='books'>All Books</option>
                <option  value='fives'>Highest Rated Books</option>
            </select>
        </div>

    )
}

export default CategoryFilter