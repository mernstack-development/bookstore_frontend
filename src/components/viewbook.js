import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import moment from 'moment';

const Viewbook = () => {
    const {bid} = useParams()
    //Setting value for input fields
    const [ BookData, setBookData ] = useState([])

    let retrnable = '';
        if(BookData.book_returnable = 'N')
        {
            retrnable = 'No'
        }
        else{
            retrnable = 'Yes'
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
                'book_status':response.data.book_status,
                'book_publish_date':response.data.book_publish_date,
                'book_returnable':response.data.book_returnable,
            })
        })
        .then(error => {
            console.log(error)
        })
}, [])


  return (
    <div className='body bookdatagrid'>
        <div className='gridimage'>
            <img src="/img/white-book-cover.jpg"/>
        </div>
        <div className='bookdata'>
            <div className='header'>ISBN</div>
            <div className='data'>{BookData.book_isbn}</div>
            <div className='header' style={{marginTop:"20px"}}>Name</div>
            <div className='data' style={{marginTop:"20px"}}>{BookData.book_name}</div>
            <div className='header'>Author</div>
            <div className='data'>{BookData.book_author}</div>
            <div className='header'>Price</div>
            <div className='data'>{BookData.book_price} €</div>
            <div className='header'>Publish date</div>
            <div className='data'>{moment((BookData.book_publish_date)).format("MM-DD-YYYY")}</div>
            <div className='header'>Status</div>
            <div className='data'>{BookData.book_status}</div>
            <div className='header'>Binding</div>
            <div className='data'>{BookData.book_binding}</div>
            <div className='header'>Edition</div>
            <div className='data'>{BookData.book_edition}</div>
            <div className='header'>Genre</div>
            <div className='data'>{BookData.book_genre}</div>
            <div className='header'>Subgenre</div>
            <div className='data'>{BookData.book_subgenre}</div>
            <div className='header'>Publisher</div>
            <div className='data'>{BookData.book_publisher}</div>
            <div className='header'>Readingage</div>
            <div className='data'>{BookData.book_readingage}</div>
            <div className='header'>Language</div>
            <div className='data'>{BookData.book_countryOfOrigin}</div>
            <div className='header'>Returnable</div>
            <div className='data'>{retrnable}</div>
            <div className='header'>Height </div>
            <div className='data'>{BookData.book_height} mm</div>
            <div className='header'>Width </div>
            <div className='data'>{BookData.book_width} mm</div>
            <div className='header'>Weight </div>
            <div className='data'>{BookData.book_weight} g</div>
        </div>
         <div className='buttonGrid'>
            <Link to={'/'}>
                <button className='backtoallbooks'>Back to All books</button>
            </Link>
            <Link to={'/addbooks'}>
                <button className='Addnewbook'>Add new book</button>
            </Link>
            
        </div>
    </div>
    
  )
}

export default Viewbook