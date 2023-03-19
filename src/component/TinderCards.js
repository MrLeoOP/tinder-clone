import React from 'react'
import '../css/TinderCard.css'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Lionel Messi",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    },
    {
      name: "kylie Jenner",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Kylie_Jenner_in_2021.jpg",
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: "+ nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {
        people.map((person)=>(
        
          <TinderCard
          className='swipe'
          key = {person.name}
          preventSwipe={("up", "down")}
          onSwipe={(dir)=> swiped(dir, person.name)}
          onCardLeftScreen={()=>outOfFrame(person.name)}
          >
            <div style ={{backgroundImage: `url(${person.url})`}} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
