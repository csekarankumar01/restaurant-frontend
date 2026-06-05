import React from 'react';
import apiData from '../restApi.json';

const WhoAreWE = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {apiData.data[0].who_we_are.map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1>{element.number}</h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
        <div className="image_banner">
         
          <img src="/whoweare.png" alt="who we are banner" />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWE;