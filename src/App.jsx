import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  //const [loading, setLoading] = useState(false);
  const [showModal,setShowModal] = useState(false);
  
  function handleToggelModal(){
    setShowModal(!showModal);
  }
  
  /* in react the way we fetch data fromm ani is using the useEffect hook */
  /* the useeffect takes in the arrow fucntion as the input in addition to an array which is known to be an dependency array 
  meaning the hook will execute the arrow function whenever the content in the dependency array is satisfyied */
 useEffect(() => {
   async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY // we have added our api key in the .env file so that no one can see it
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
      // Cashing our deta in below code
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }
      localStorage.clear();


      try{
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      }catch(e){
        console.log(e.message);
      }
    }
    fetchAPIData(); // call the function so that it will execute the code you have written in it
  },[]) /* now useEffect listens to particular enents via dependency section, if we have a blank array it means to 
  run the function whenever we reload thepage, if we keep any useState variable in it it will execute the arrow function
  whenever the useState variable changes*/

  return (
    <>
      {data ? (<Main data = {data} />) : <div className="loadingState"><i className="fa-solid fa-gear"></i></div> }
      {showModal && (<Sidebar data = {data} handleToggelModal = {handleToggelModal}/>) }
      {data && (<Footer data = {data} handleToggelModal = {handleToggelModal}/>) }
    </>
  )
}

export default App
