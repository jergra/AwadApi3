import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

const getColor = (colorInt, part) => {
  console.log("part:", part)
  console.log("colorInt:", colorInt)
  var color = ''
  if (colorInt === 10) {
    color = '#a' + part
    console.log("color:", color)
  }
  if (colorInt === 11) {
    color = '#b' + part
    console.log("color:", color)
  }
  if (colorInt < 10) {
    color = '#' + colorInt  + part
    console.log("color:", color)
  }
  return color
}
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
  const [part, setPart] = useState()


  useEffect(() => {
    fetchData().then(apiPeople => {
      setPeople(apiPeople)
      var randomPart = Math.floor(Math.random() * 9).toString() 
                      + Math.floor(Math.random() * 6).toString()
      for (var k=0;k<3;k++) {
        var randomNumber = Math.floor(Math.random() * 16)
        if (randomNumber < 10) randomPart = randomPart + randomNumber.toString()
        if (randomNumber === 10) randomPart = randomPart + 'a'
        if (randomNumber === 11) randomPart = randomPart + 'b'
        if (randomNumber === 12) randomPart = randomPart + 'c'
        if (randomNumber === 13) randomPart = randomPart + 'd'
        if (randomNumber === 14) randomPart = randomPart + 'e'
        if (randomNumber === 15) randomPart = randomPart + 'f'
      }
      console.log("randomPart:", randomPart)
      setPart(randomPart)
    })
  }, [])

  console.log("people: ", people)

  const SortedPeople = () => {
    console.log("BUTTON CLICKED 1")
    console.log("people 1: ", people)
    let stuff = []
    let countries = []

    for (var j=0;j<people.length;j++) {
      countries.push(people[j].location.country + people[j].name.first)
    }
    countries.sort()
    countries.reverse()
    console.log("countries:", countries)
  
    for (var i=0;i<people.length;i++) {
      var countryIndex = countries.indexOf(people[i].location.country + people[i].name.first);
      console.log("country:", people[i].location.country, "countryIndex:", countryIndex)
      //if (people[i].location.country === 'Canada') {
      stuff.push([people[i].location.country,
                    people[i].name.first, 
                    people[i].name.last,
                    people[i].location.street.number, 
                    people[i].location.street.name,
                    people[i].location.city,
                    people[i].location.state,
                    people[i].picture.large,
                    countryIndex
                  ])
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
    
      <div className="block1">
        
        <div className="row6">
          {stuff.slice(0,6).map((person, personIdx) => 
          <div className="individual" style={{backgroundColor: getColor(person[8], part)}}>
          {/* <div className="individual" style={{backgroundColor: '#9'}}> */}
            <div className="entry6" key={personIdx}>
              <img src={person[7]} />
            </div>
            <div className="entry2" key={personIdx}>
              {person[1]}&nbsp;{person[2]}
            </div>
            <div>
              <div className="entry3" key={personIdx}>{person[3]} &nbsp;{person[4]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[5]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[6]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[0]}</div>
            </div>
            <div>{getColor(person[8], part)}</div>
          </div>
          )}
        </div>
      </div>
      <div className="block2">
        <div className="row6">
          {stuff.slice(6,12).map((person, personIdx) => 
          <div className="individual" style={{backgroundColor: getColor(person[8], part)}}>
            <div className="entry6" key={personIdx}>
              <img src={person[7]} />
            </div>
            <div className="entry2" key={personIdx}>
              {person[1]}&nbsp;{person[2]}
            </div>
            <div>
              <div className="entry3" key={personIdx}>{person[3]} &nbsp;{person[4]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[5]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[6]}</div>
            </div>
            <div>
              <div className="entry" key={personIdx}>{person[0]}</div>
            </div>
            <div>{getColor(person[8], part)}</div>
          </div>
          )}
        </div>

        {/* <div className="row1">
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
         */}
      </div> 
        
    </div>
  </div>
  );
}


