import {useParams} from 'react-router-dom'

function NewsPage({newsList}) {

    const {title} = useParams();

    console.log('from newspage',newsList);
    const info = newsList.find((news)=> news.title === title)
    console.log('from newspage',info.content);

    return ( <div>
        <h2>Newspage</h2>
        <h2>{info.title}</h2>
        <img src={info.urlToImage} alt={info.title}/>
        <div>{info.description}</div>
        <p>{info.content}</p>

    </div> );
}

export default NewsPage;