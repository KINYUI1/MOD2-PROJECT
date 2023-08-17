import "../App.css";
import { Link } from 'react-router-dom'

function NewsCatalogue({ newsList }) {
  return (<div>
    <div >
        
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
