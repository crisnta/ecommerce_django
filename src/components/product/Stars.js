import React, { Fragment } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import '../../styles/rating_stars.css';

const Stars = ({ rating }) => {
    const getStars = () => {
        if (rating) {
            return (
                <div>
                    {
                        rating >= 1 || rating >= 1.0 ? (
                            <StarIcon
                                className='rating_stars'
                            />
                        ) : (
                            rating === 0.5 ? (
                                <StarHalfIcon
                                    className='rating_stars'
                                />
                            ) : (
                                <StarBorderIcon
                                    className='rating_stars'
                                />
                            )
                        )
                    }

                    {
                        rating >= 2 || rating >= 2.0 ? (
                            <StarIcon
                                className='rating_stars'
                            />
                        ) : (
                            rating === 1.5 ? (
                                <StarHalfIcon
                                    className='rating_stars'
                                />
                            ) : (
                                <StarBorderIcon
                                    className='rating_stars'
                                />
                            )
                        )
                    }

                    {
                        rating >= 3 || rating >= 3.0 ? (
                            <StarIcon
                                className='rating_stars'
                            />
                        ) : (
                            rating === 2.5 ? (
                                <StarHalfIcon
                                    className='rating_stars'
                                />
                            ) : (
                                <StarBorderIcon
                                    className='rating_stars'
                                />
                            )
                        )
                    }

                    {
                        rating >= 4 || rating >= 4.0 ? (
                            <StarIcon
                                className='rating_stars'
                            />
                        ) : (
                            rating === 3.5 ? (
                                <StarHalfIcon
                                    className='rating_stars'
                                />
                            ) : (
                                <StarBorderIcon
                                    className='rating_stars'
                                />
                            )
                        )
                    }

                    {
                        rating >= 5 || rating >= 5.0 ? (
                            <StarIcon
                                className='rating_stars'
                            />
                        ) : (
                            rating === 4.5 ? (
                                <StarHalfIcon
                                    className='rating_stars'
                                />
                            ) : (
                                <StarBorderIcon
                                    className='rating_stars'
                                />
                            )
                        )
                    }
                </div>
            )
        }
    }

    return (
        <Fragment>
            {getStars()}
        </Fragment>
    )
}

export default Stars