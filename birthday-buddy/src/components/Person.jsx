import React from 'react'

function Person() {
  return (
    <div>Person</div>
  )
}

// Fix!!!
{/* <h2>
{people.map((person) => {
  return (
    <div key={person.id}>
      <img src={person.image}></img>
      <div>{person.name}</div>
      <div>{person.age}</div>
    </div>
  );
})}
</h2> */}

export default Person