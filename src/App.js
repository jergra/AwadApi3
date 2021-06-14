import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

  
const fetchData = () => {
  return axios.get('https://randomuser.me/api/?results=12')
  .then((res) => {
      const {results} = res.data
      console.log("res.data.results: :", res.data.results)
      return results
  })
  .catch((err) => {
    console.error(err)
  })
}

export default function App() {
  
  const [people, setPeople] = useState([])
  const [stuff, setStuff] = useState([])

  useEffect(() => {
    fetchData().then(apiPeople => {
      setPeople(apiPeople)
    })
  }, [])

  console.log("people: ", people)

  const SortedPeople = () => {
    console.log("BUTTON CLICKED 1")
    console.log("people 1: ", people)
    let stuff = []
  
    for (var i=0;i<people.length;i++) {
      //if (people[i].location.country === 'Canada') {
      stuff.push([people[i].location.country,
                    people[i].name.first, 
                    people[i].name.last,
                    people[i].location.street.number, 
                    people[i].location.street.name,
                    people[i].location.city,
                    people[i].location.state,
                    people[i].picture.large])
      //}
    }
    console.log("stuff 1: ", stuff)
    setStuff(stuff)
    console.log("stuff 2: ", stuff)
  }

  const doThis = () => {
    console.log("BUTTON CLICKED 2")
    console.log("stuff 4: ", stuff)
    stuff.sort()
    console.log("stuff 5: ", stuff)
    setStuff([...stuff])
  }

  function refresh() {
    window.location.reload()
  }
  
  return (
    <div className="body">
      <button onClick={SortedPeople}>Get Data</button>
      <button onClick={doThis}>Sort by Country</button>
      <button onClick={refresh}>Clear</button>
    <div className="App">
    
      <div className="block">
        
        <div className="row6">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry6" key={personIdx}>
              <img src={person[7]} />
            </div>
          </div>
          )}
        </div>

        <div className="row1">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry2" key={personIdx}>
              {person[1]}&nbsp;{person[2]}
            </div>
          </div>
          )}
        </div>

        <div className="row2">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry3" key={personIdx}>{person[3]} &nbsp;{person[4]}</div>
          </div>
          )}
        </div>

        <div className="row3">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[5]}</div>
          </div>
          )}
        </div>

        <div className="row4">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[6]}</div>
          </div>
          )}
        </div>

        <div className="row5">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[0]}</div>
          </div>
          )}
        </div>
        
        <div className="row7"></div>
        
        <div className="row6">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry6" key={personIdx}>
              <img src={person[7]} />
            </div>
          </div>
          )}
        </div>

        <div className="row1">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry2" key={personIdx}>
              {person[1]}&nbsp;{person[2]}
            </div>
          </div>
          )}
        </div>

        <div className="row2">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry3" key={personIdx}>{person[3]} &nbsp;{person[4]}</div>
          </div>
          )}
        </div>

        <div className="row3">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[5]}</div>
          </div>
          )}
        </div>

        <div className="row4">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[6]}</div>
          </div>
          )}
        </div>

        <div className="row5">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div>
            <div className="entry" key={personIdx}>{person[0]}</div>
          </div>
          )}
        </div>
        
      </div> 
        
    </div>
  </div>
  );
}


