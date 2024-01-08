import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

const CreateBook = () => {

  //Setting value for input fields
  const [ BookData, setBookData ] = useState({
    'book_isbn':'',
    'book_name':'',
    'book_author': '',
    'book_price':'',
    'book_binding':'',
    'book_edition':'',
    'book_genre':'',
    'book_subgenre':'',
    'book_publisher':'',
    'book_readingage':'',
    'book_countryOfOrigin':'',
    'book_height':'',
    'book_width':'',
    'book_weight':''
  })

//redirect page after updating
const navigate = useNavigate();

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
        'book_isbn':'',
        'book_name':'',
        'book_author': '',
        'book_price':'',
        'book_binding':'',
        'book_edition':'',
        'book_genre':'',
        'book_subgenre':'',
        'book_publisher':'',
        'book_readingage':'',
        'book_countryOfOrigin':'',
        'book_height':'',
        'book_width':'',
        'book_weight':''
      })
      navigate('/')
    }catch(error) {
      console.error(error)
    }
  }

  return (
    <div className='body'>
      <fieldset>
        <legend>Create new Book</legend>
        <tr>
          <td>Book ISBN</td>
          <td>
            <input type='text' name='book_isbn' value={BookData.book_isbn} onChange={handleInputChange} />
          </td>
        </tr>
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
          <td>Book price (€)</td>
          <td>
            <input type='text' name='book_price' value={BookData.book_price} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book binding</td>
          <td>
            <input type='text' name='book_binding' value={BookData.book_binding} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book edition</td>
          <td>
            <input type='text' name='book_edition' value={BookData.book_edition} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book genre</td>
          <td>
            <input type='text' name='book_genre' value={BookData.book_genre} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book subgenre</td>
          <td>
            <input type='text' name='book_subgenre' value={BookData.book_subgenre} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book publisher</td>
          <td>
            <input type='text' name='book_publisher' value={BookData.book_publisher} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book reading age</td>
          <td>
            <input type='text' name='book_readingage' value={BookData.book_readingage} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book country</td>
          <td>
            <input type='text' name='book_countryOfOrigin' value={BookData.book_countryOfOrigin} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book height (mm)</td>
          <td>
            <input type='text' name='book_height' value={BookData.book_height} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book width (mm)</td>
          <td>
            <input type='text' name='book_width' value={BookData.book_width} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book weight (g)</td>
          <td>
            <input type='text' name='book_weight' value={BookData.book_weight} onChange={handleInputChange}/>
          </td>
        </tr>
      <div className='buttons'>
        <button className='savebook' name='AddBook' onClick={handleFormSubmit} >Save book</button>
        <Link to={'/'}>
          <button className='showallbooks'>All books</button>
        </Link>
      </div>    
      </fieldset>
    </div>
  )
}

export default CreateBook