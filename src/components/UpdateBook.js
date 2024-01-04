import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateBook = () => {
//Fetching parameter from all books page
const {bid} = useParams()

//redirect page after updating
const navigate = useNavigate();

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

//Displaying data by ID
useEffect(() => {
    axios.get(`http://localhost:5000/api/viewbook/${bid}`)
        .then(response => {
            setBookData({
                ...BookData,
                'book_name':response.data.book_name,
                'book_author':response.data.book_author,
                'book_price':response.data.book_price,
            })
        })
        .then(error => {
            console.log(error)
        })
}, [])

//Updating data
const handleFormSubmit = async(e) => {
    e.preventDefault()

    try{
      //Posting data to back throw below API path
      const response = await axios.put(`http://localhost:5000/api/updatebook/${bid}`, BookData)
      console.log(response.data)
      setBookData({
        'book_name':'',
        'book_author': '',
        'book_price':''
      })
    navigate('/books')
    }catch(error) {
      console.error(error)
    }
}


  return (
    <div className='body'>
    <fieldset>
      <legend>Update Book</legend>
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
        <input className='button' type='submit' value={"Update Book"} name='Updatebook' onClick={handleFormSubmit} />
    </fieldset>
  </div>
  )
}

export default UpdateBook