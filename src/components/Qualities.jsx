import React from 'react';
import apiData from '../restApi.json';

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {apiData.data[0].ourQualities.map((element) => {

          const cleanImagePath = element.image.startsWith('.') 
            ? element.image.substring(1) 
            : element.image;

          return (
            <div className="card" key={element.id}>
              <img src={cleanImagePath} alt={element.title} />
              <p className="title">{element.title}</p>
              <p className="description">{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Qualities;