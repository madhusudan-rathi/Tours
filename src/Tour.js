import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    const toggleReadMore = () => {
        setReadMore(!readMore);
    }
    return (
        <React.Fragment>
            <article className="single-tour">
                <img src={image} alt={name} />
                <footer>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">
                            {price}
                        </h4>
                    </div>
                    <p>
                        {readMore ? info : `${info.substring(0, 200)} ...`}
                        <button onClick={toggleReadMore}>{readMore ? 'Show Less' : 'Read More'}</button>
                    </p>
                    <button className="delete-btn" type="button" onClick={() => {removeTour(id)}}>Not Interested</button>
                </footer>
            </article>
        </React.Fragment>
    );
};

export default Tour;
