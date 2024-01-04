import axios from 'axios'
import React, { useState } from 'react'

const CreateBook = () => {

  //Setting value for input fields
  const [ BookData, setBookData ] = useState({
    'book_name':'',
    'book_author': '',
    'book_price':''
  })

  //Handling Input field data
  const handleInputChange = (e) => {
    const {name,value} = e.target
    setBookData({
      ...BookData,
      [name]:value
    })
  }

  //Handling form submit
  const handleFormSubmit = async(e) => {
    e.preventDefault()

    try{
      //Posting data to back throw below API path
      const response = await axios.post('http://localhost:5000/api/addbook', BookData)
      console.log(response.data)
      setBookData({
        'book_name':'',
        'book_author': '',
        'book_price':''
      })
    }catch(error) {
      console.error(error)
    }
  }

  return (
    <div className='body'>
      <fieldset>
        <legend>Create new Book</legend>
        <tr>
          <td>Book name</td>
          <td>
            <input type='text' name='book_name' value={BookData.book_name} onChange={handleInputChange} />
          </td>
        </tr>
        <tr>
          <td>Book author(s)</td>
          <td>
            <input type='text' name='book_author' value={BookData.book_author} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book Price</td>
          <td>
            <input type='text' name='book_price' value={BookData.book_price} onChange={handleInputChange}/>
          </td>
        </tr>
          {/* <button type='submit' name='Addbook' onClick={handleFormSubmit}>Add new book</button> */}
          <input className='button' type='submit' value={"Add Book"} name='AddBook' onClick={handleFormSubmit} />
      </fieldset>
    </div>
  )
}

export default CreateBook