import React from "react";

const Student = () => {
  return (
    <>
      <div className="heading">
        <h1>Student Details</h1>
        <button>Add New Student</button>
      </div>
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th>Batch </th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Shailesh</td>
              <td>24</td>
              <td>MERN</td>
              <td>January</td>
              <td>Edit</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>24</td>
              <td>MERN</td>
              <td>January</td>
              <td>Edit</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>24</td>
              <td>MERN</td>
              <td>January</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
