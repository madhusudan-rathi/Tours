import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {

  return (
      <React.Fragment>
          <section>
              <div className="title">
                  <h2>Our Tours</h2>
                  <div className="underline"></div>
              </div>
              <div>
                  {
                      tours.map((tour) => {
                          const {id} = tour;
                          return <Tour key={id} {...tour} removeTour={removeTour} />;
                      })
                  }
              </div>
          </section>
      </React.Fragment>
  );
};

export default Tours;
