import {useState,useEffect}  from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NewsCatalogue from './pages/NewsCatalogue'
import NewsPage from './pages/NewsPage'
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [country,setCountry] = useState('us');
  const API_KEY = `f2ed20b73bed4bff995872e5c0c5f061`
  const [url,setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
  const [search,setSearch] = useState('')
  console.log(country);
  // console.log(search);
  // funtion in charge of handling search
  const handlesearch = (e)=>{
    e.preventDefault();
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2023-08-13&to=2023-08-13&sortBy=popularity&apiKey=${API_KEY}`
    setUrl(url)
    setSearch('')
  }

  const catGeneral =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catBusiness =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catEntertainment =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catHealth =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catScience =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catSports =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${API_KEY}`
    setUrl(url)
  }
  const catTechnology =(e)=>{
    e.preventDefault()
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${API_KEY}`
    setUrl(url)
  }

  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

  useEffect(()=>{
    const fetchNews = async ()=>{
      try {
        const res = await fetch(url);
        const data = await res.json();
        setNewsList(data.articles
          )
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  },[url,country])
  console.log(newsList);
  return (
    <div className="App">
      <SearchPage search={search} setSearch={setSearch} handlesearch={handlesearch} setCountry={setCountry}/>
      <Nav catGeneral={catGeneral} catBusiness={catBusiness} catEntertainment={catEntertainment} catHealth={catHealth} catScience={catScience} catSports={catSports} catTechnology={catTechnology}/>
      
      <Routes>
        <Route path='/' element={<NewsCatalogue newsList={newsList} className="catalogueContainer" />}/>
        <Route path='/newspage' element={<NewsPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
