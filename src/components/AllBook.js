import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
        <table>
            <tr className='tableheading'>
                <td>
                    name
                </td>
                <td>
                    autor
                </td>
                <td>
                    price
                </td>
                <td>
                    Status
                </td>   
                <td>
                    Action
                </td>   
            </tr>
            <br/>
            {
                bookData.map(books => (
                    <tr className='tabledata'>
                        <td>{books.book_name}</td>
                        <td>{books.book_author}</td>
                        <td>{books.book_price}</td>
                        <td>{books.book_status}</td>
                        <td className='actionbutton'>
                            <a href={`updatebook/${books._id}`} className='edit'>Edit</a>
                        </td>
                        <td className='actionbutton'>
                            <a href='#' onClick={() => deletebook(books._id)} className='delete'>Delete</a>
                        </td>
                    </tr>
                ))
            }

        </table>
    </div>
  )
}

export default AllBook