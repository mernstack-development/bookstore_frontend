import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";

const UpdateBook = () => {
//Fetching parameter from all books page
const {bid} = useParams()

//redirect page after updating
const navigate = useNavigate();

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
  'book_weight':'',
  'book_status':''
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
                'book_isbn':response.data.book_isbn,
                'book_name':response.data.book_name,
                'book_author':response.data.book_author,
                'book_price':response.data.book_price,
                'book_binding':response.data.book_binding,
                'book_edition':response.data.book_edition,
                'book_genre':response.data.book_genre,
                'book_subgenre':response.data.book_subgenre,
                'book_publisher':response.data.book_publisher,
                'book_readingage':response.data.book_readingage,
                'book_countryOfOrigin':response.data.book_countryOfOrigin,
                'book_height':response.data.book_height,
                'book_width':response.data.book_width,
                'book_weight':response.data.book_weight,
                'book_status':response.data.book_status
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
        'book_weight':'',
        'book_status':''
      })
    navigate('/')
    }catch(error) {
      console.error(error)
    }
}


  return (
    <div className='body'>
    <fieldset>
      <legend>Update Book</legend>
      <tr>
          <td>Book ISBN</td>
          <td>
            <h5 onChange={handleInputChange}>{BookData.book_isbn}</h5>
            {/* <input type='text' name='book_isbn' value={BookData.book_isbn} onChange={handleInputChange} /> */}
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
          <td>Book weight (mm)</td>
          <td>
            <input type='text' name='book_weight' value={BookData.book_weight} onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Book status</td>
          <td>
            <input type='text' name='book_status' value={BookData.book_status} onChange={handleInputChange}/>
          </td>
        </tr>

      <div className='buttons'>
        <button className='savebook' name='Updatebook' onClick={handleFormSubmit} >Update book</button>
        <Link to={'/'}>
          <button className='showallbooks'>All books</button>
        </Link>
      </div>  
    </fieldset>
  </div>
  )
}

export default UpdateBook