import {useEffect, useState} from "react";

function CategoryFilter ({setSelected}) {
    const [categories, setCategories] = useState([])
    const getCategories = async () => {
        let response = await fetch(`http://localhost:8080/categories`)
        let json = await response.json()
        setCategories(json.data)
        console.log(categories)
    }

    useEffect(() => {
        getCategories()
    }, []);
    const clickHandler = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div className='text-center bg-cyan-800'>
            <select onChange={clickHandler} className='text-center m-1 rounded-2xl text-2xl'>
                <option  value='books'>All Books</option>
                <option  value='fives'>Highest Rated Books</option>
                {categories.map((category, i) => {
                    return <option value={category.genre_1} key={i}>{category.genre_1}</option>
                })}
            </select>
        </div>

    )
}

export default CategoryFilter