import * as React from "react";

const welcome={
  title: "React",
  subTitle: "Vite",
  greetings: "Bonjour"
};

const name={
  nom:"Znaidi",
  prenom:"Ahmed"
};

function date(day){
  return day;
}
function App() {
  
  return(
    <>
      <h5>Aujourd'hui est un {date("Lundi")}</h5>
      <h1>Hello From {welcome.title} and {welcome.subTitle}.</h1>
      <p>{welcome.greetings} {name.nom+" "+name.prenom}</p>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
      <ul>
        <li>FrontEnd</li>
        <li>React + Vite</li>
        <li>javascript + html</li>
      </ul> 
    </>

  );
}

export default App;
