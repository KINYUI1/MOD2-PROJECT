import {useState,useEffect}  from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NewsCatalogue from './pages/NewsCatalogue'

import Portfolio from './pages/Portfolio';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [country,setCountry] = useState('us');
  const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
  const [url,setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
  const [search,setSearch] = useState('')
  const date = new Date();
  console.log(country);
  // funtion in charge of handling search
  const handleSearch = (e)=>{
    e.preventDefault();
    const url = `https://newsapi.org/v2/everything?q=${search}&from=${date}&to=2023-08-13&sortBy=popularity&apiKey=${API_KEY}`
    setUrl(url)
    setSearch('')
  }
// change the category to general news when general is ckicked
  const catGeneral =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to business news when business is ckicked
  const catBusiness =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to entertainment news when entertainment is ckicked
  const catEntertainment =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to health news when health is ckicked
  const catHealth =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to science news when science is ckicked
  const catScience =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to sports news when sports is ckicked
  const catSports =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${API_KEY}`
    setUrl(url)
  }
  // change the category to technology news when technoloy is ckicked
  const catTechnology =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${API_KEY}`
    setUrl(url)
  }

  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
// fetch data 
  useEffect(()=>{
    const fetchNews = async ()=>{
      try {
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        setNewsList(data.articles
          )
          console.log(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  },[country,url])
  // console.log(newsList);
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/newscatalogue' element={<NewsCatalogue newsList={newsList} className="catalogueContainer" search={search} setSearch={setSearch} handleSearch={handleSearch} setCountry={setCountry} setUrl={setUrl} catGeneral={catGeneral} catBusiness={catBusiness} catEntertainment={catEntertainment} catHealth={catHealth} catScience={catScience} catSports={catSports} catTechnology={catTechnology} />}/>
      </Routes>
      
    </div>
  );
}

export default App;
