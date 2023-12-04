import { useState,useEffect } from 'react'

import './App.css'
//Rightclick a function and refactor it to move it to another file
import { SuperheroDetail } from './SuperheroDetail'


const superheroes = [{"name":"Flash",
"power":"Speed",
"homeCity":"Central City",
"alterEgo":"Barry Allen",
"color":"yellow"},
{"name":"Spider-man",
"power":"Web-slinging",
"homeCity":"New York City",
"alterEgo": "Peter Parker",
"color":"red"},
{"name":"Superman",
"power":"Super Strength",
"homeCity":"Metropolis",
"alterEgo":"Clark Kent",
"color":"blue"}]

// Note: semicolons are optional
function App() {
  const [superheroesList, setSuperheroesList] = useState();//This is a hook; if you are retrieving from a server, initialize it as nothing
  console.log('superheroesList', superheroesList)//Type "CLO", tab, will quick make this line

  useEffect(()=>{
    setSuperheroesList(superheroes)
  },[])//Run this function only when the array of variables in the second half change; checks on page reload; typically used to grab items from an array; when empty, it will only run once
  
  //You can have multiple useEffects going at once
  useEffect(()=>{
    console.log("Test: useEffect 00")
  },[])

  useEffect(()=>{
    console.log("Test: UseEffect superheroesList")

  },[superheroesList]) 
  
  
  return (
    <div>
      <h1>Superhero Registry</h1>
      {/* Turnery: used like an if statement instead of an actual if statement 
        If superHhroes list is not undefined, do the first portion else: show "Now Loading; superheroList is currently empty" */}
      {superheroesList != undefined ? superheroesList.map((superhero)=>{
        return <SuperheroDetail key={superhero.name} superhero={superhero} testingFakePropOther={5} color={"red"}/>
      }):<p>Now Loading; superheroList is currently empty</p>}
      {/* keys are valuable to have something that it can refer to it */}
      {/* Use curly brackets when using js code; if you didn't want to send a prop it is just <SuperheroDetail /> */} 
    </div>
  );
}

export default App;


//Map example
/*

[1,2,3].map((number)=>{
  return number * 2;
});

The above would return:
[2,4,6];

*/