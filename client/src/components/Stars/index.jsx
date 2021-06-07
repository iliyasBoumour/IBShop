import React from 'react'
import Rating from '@material-ui/lab/Rating';

const index = ({children, rating}) => {
    return (
        <div className="d-flex align-items-center">
              
        <Rating name="half-rating-read" precision={0.5} value={rating} readOnly />
              {children}
            </div>
    )
}

export default index
