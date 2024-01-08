import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
    const AllBook = () => {
    //Creating new state
    const [ bookData, setBookData ] = useState([])

    //Creating useEffect
    useEffect(() => {
        getbook()
    },[])

    //getting all books
    const getbook = async()=> {
        axios.get('http://localhost:5000/api/viewbook').then(Response => {
            setBookData(Response.data)
        }).then(error => {
            console.log(error)
        })
    }

    //deleting all books
    const deletebook = async(id) => {
        axios.delete(`http://localhost:5000/api/deletebook/${id}`)
            getbook()
    }

  return (
    <div className='body'>
        <Link to={'addbooks'}>
            <button className='Addnewbook'>Create new book</button>
        </Link>
        
        <table>
            <tr className='tableheading'>
                <td>
                    Name
                </td>
                <td>
                    Author
                </td>
                <td>
                    Price
                </td>
                <td>
                    Status
                </td>   
                <td>
                    Action
                </td>   
            </tr>
            {
                bookData.map(books => (
                    <tr className='tabledata'>
                        <td>{books.book_name}</td>
                        <td>{books.book_author}</td>
                        <td>{books.book_price}</td>
                        <td>{books.book_status}</td>
                        <td className='actionbutton'>
                            <Link to={`viewbook/${books._id}`}>
                                <button className='viewbook'>View</button>
                            </Link>
                            <Link to={`updatebook/${books._id}`}>
                                <button className='editbook'>Edit</button>
                            </Link>
                                <button className='deletebook' onClick={() => deletebook(books._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default AllBook