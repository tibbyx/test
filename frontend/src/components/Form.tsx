import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const data = { title, price };

    axios
      .post("http://127.0.0.1:8000/watering/books/", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.Message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='title' className='form'>
          Title
        </label>
        <input
          id='title'
          type='text'
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor='title' className='form'>
          Price
        </label>
        <input
          id='title'
          type='number'
          className='form-control'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
