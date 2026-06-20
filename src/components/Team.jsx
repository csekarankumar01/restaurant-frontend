import React from 'react';
import apiData from '../restApi.json';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">MEET THE TEAM</h1>
          <p>Meet the passionate individuals who bring magic to your plate every single day. Their dedication is the secret ingredient!</p>
        </div>
        <div className="team_container">
          {apiData.data[0].team.map((element) => {
            return (
              <div className="card glass-card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;