import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Books() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => setBook(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Books</th>
              <th>Author</th>
              <th>Collection</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              book.map((data, i) => {
                return (
                <>
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.Name_book}</td>
                  <td>{data.Autor}</td>
                  <td>{data.Edition_house}</td>
                  <td>
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </td>
                </tr>
                </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Books;