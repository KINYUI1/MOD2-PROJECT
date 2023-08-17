import "../App.css";
import Nav from '../components/Nav';
import SearchPage from '../components/SearchPage';

function NewsCatalogue({ newsList,search,setSearch,handleSearch,setCountry,setUrl,catGeneral,catBusiness,catEntertainment,catHealth,catScience,catSports,catTechnology }) {
  return (<div>
    <div >
    <SearchPage search={search} setSearch={setSearch} handleSearch={handleSearch} setCountry={setCountry} setUrl={setUrl}/>
      <Nav catGeneral={catGeneral} catBusiness={catBusiness} catEntertainment={catEntertainment} catHealth={catHealth} catScience={catScience} catSports={catSports} catTechnology={catTechnology}/>
      <div className="newsContainer">
        {newsList ? newsList.map((news) => (
          <div className="catalogueContainer" key={news.title}>
            
            <a href={news.url} target="blank">
            <img src={news.urlToImage} alt={news.urlToImage} className="catalogueImage" />
            <h2>{news.title}</h2>
            <p>{news.source.name}</p>
            </a>
          </div>
        )): <h3>loading</h3>}
      </div>
      
    </div>
    </div>
  );
}

export default NewsCatalogue;
