import React from 'react';

function Ecomm(){
    
    const productsArrayObj = [
        {
            productname:"laptop 3",
            price:9120,
            rating:4.5,
            discount:880,
            availability: "out-of stock"
        },{
            productname:"laptop 11",
            price:4920,
            rating:3.5,
            discount:880,
            availability: "yes"
        },
        {
            productname:"laptop 30",
            price:3793,
            rating:4.5,
            discount:579,
            availability: "out-of stock"
        },
        {
            productname:"laptop 34",
            price:2692,
            rating:4.5,
            discount:958,
            availability: "yes"
        },
        {
            productname:"laptop 39",
            price:9693,
            rating:4.5,
            discount:372,
            availability: "out-of stock"
        },
        {
            productname:"laptop 37",
            price:3543,
            rating:4.9,
            discount:746,
            availability: "out-of stock"
        }
    ]
    
    return(
        <>
            {productsArrayObj.map(
        function(data) {
            return (
                <>
                    <div className='wrappere'>
                        <div className='childwrappere'>Company name:  {data.productname}</div>
                        <div className='childwrappere'>Owner name:  {data.price}</div>
                        <div className='childwrappere'>Roll No:  {data.rating}</div>
                        <div className='childwrappere'>Owner Email:  {data.discount}</div>
                        <div className='childwrappere'>AccessCode:  {data.availability}</div>
                    </div>
                </>
            )
        }
    )
    }
        </>
    )
}

export default Ecomm