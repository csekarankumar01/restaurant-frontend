import React, { useState } from 'react'
import { data } from '../restApi.json'

const Menu = () => {
  const allDishes = data[0].dishes;
  const categories = ["All", ...new Set(allDishes.map(d => d.category))];
  const [activeTab, setActiveTab] = useState("All");

  const filteredDishes = activeTab === "All" 
    ? allDishes 
    : allDishes.filter(dish => dish.category === activeTab);

  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">DISCOVER OUR MENU</h1>
                <p>Taste the perfection in every bite. Our varied menu offers an optimistic, fresh selection of flavors designed to satisfy every craving.</p>
            </div>
            
            <div className="menu-tabs">
                {categories.map((cat, index) => (
                    <button 
                        key={index}
                        className={`menu-tab ${activeTab === cat ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="dishes_container">
                {
                    filteredDishes.map(element => (
                        <div className="card glass-card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </section>
  )
}

export default Menu
