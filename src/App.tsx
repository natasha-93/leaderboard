import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    "Bob",
    "Fred",
    "Hazel",
    "Ash",
    "Ben",
    "Lewis",
  ]);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {people.map((person, index) => {
          return (
            <li key={index}>
              <button
                disabled={index === 0}
                onClick={(e) => {
                  const newPeople = [
                    person,
                    ...people.slice(0, index),
                    ...people.slice(index + 1),
                  ];
                  setPeople(newPeople);
                }}
              >
                ⬆⬆
              </button>
              <button
                disabled={index === 0}
                onClick={(e) => {
                  const newPeople = [
                    ...people.slice(0, index - 1),
                    person,
                    people[index - 1],
                    ...people.slice(index + 1),
                  ];
                  setPeople(newPeople);
                }}
              >
                ⬆
              </button>
              <button
                disabled={index === people.length - 1}
                onClick={(e) => {
                  const newPeople = [
                    ...people.slice(0, index),
                    people[index + 1],
                    person,
                    ...people.slice(index + 2),
                  ];
                  setPeople(newPeople);
                }}
              >
                ⬇
              </button>
              <button
                disabled={index === people.length - 1}
                onClick={(e) => {
                  const newPeople = [
                    ...people.slice(0, index),
                    ...people.slice(index + 1),
                    person,
                  ];
                  setPeople(newPeople);
                }}
              >
                ⬇⬇
              </button>
              {person}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
