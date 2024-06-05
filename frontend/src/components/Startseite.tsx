import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Books {
  title: string;
  price: number;
}

const Startseite = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/watering/books/")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
        console.log("Books: " + books);
      })
      .catch((err) => console.log(err.message));

    console.log("Test" + books);
  }, []);

  return (
    <>
      <div>
        <h1>STARTSEITE</h1>
        {books.map((book, index) => (
          <div key={index}>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
      <Link to={"http://localhost:5173/watering/submit"}>
        Neues Buch hinzufügen
      </Link>
    </>
  );
};

export default Startseite;
