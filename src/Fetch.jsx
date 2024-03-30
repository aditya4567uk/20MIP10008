import React from 'react';

//Array Object (Static) simulated
const apiRegStatic = [
    {
        companyname: "goMart",
        ownername: "Rahul",
        rollno: 1,
        owneremail: "rahul@abc.edu",
        accesscode: "FKDLjg"
    },
    {
        companyname: "helloMart",
        ownername: "hello",
        rollno: 1,
        owneremail: "hello@abc.edu",
        accesscode: "X3S"
    },
]

function Fetch() {
  return (
    <>
    {/*RenderingList using map*/}
    {apiRegStatic.map(
        function(data) {
            return (
                <>
                    <div className='wrapper'>
                        <div className='childwrapper'>Company name:  {data.companyname}</div>
                        <div className='childwrapper'>Owner name:  {data.ownername}</div>
                        <div className='childwrapper'>Roll No:  {data.rollno}</div>
                        <div className='childwrapper'>Owner Email:  {data.owneremail}</div>
                        <div className='childwrapper'>AccessCode:  {data.accesscode}</div>
                    </div>
                </>
            )
        }
    )
    }
    </>

  )
}
export default Fetch;