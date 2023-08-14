import "../App.css";
import { Link } from 'react-router-dom'

function NewsCatalogue({ newsList }) {
  return (<div>
    <div >
        
      <div className="newsContainer">
        {newsList.map((news) => (
          <div className="catalogueContainer" key={news.title}>
            <Link to='newspage'>
            <img src={news.urlToImage} alt={news.urlToImage} className="catalogueImage" />
            <h2>{news.title}</h2>
            <p>{news.source.name}</p>
            </Link>
            <a href={news.url}>go to site</a>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
}

export default NewsCatalogue;
