import Header from "./Components/Header/index.jsx";
import SubHeader from "./Components/SubHeader/index.jsx";
import BookDisplayArea from "./Components/BookDisplayArea/index.jsx";
import {useEffect, useState} from "react";
import CategoryFilter from "./Components/CategoryFilter/index.jsx";

function App() {

    const [books, setBooks] = useState([])
    const [selected, setSelected] = useState('books')
    useEffect(() => {
        console.log(selected)
    }, [selected]);
    const getBooks = async () => {
    let response = await fetch(`http://localhost:8080/${selected}`);
    let json = await response.json();
     setBooks(json.data);
}

    useEffect(() => {
       getBooks();
    }, [selected]);

  return (
      <div className='font-sans'>
          <Header/>
          <div>
              <CategoryFilter setSelected={setSelected}/>
              <SubHeader text='Your whole library: '/>
          </div>
          <div>
              <BookDisplayArea books={books}/>
          </div>
          <div>
              <SubHeader text='Highest rated'/>
          </div>

      </div>
  )
}

export default App
