import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const ArticleView = () => {
  const {id} = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [iso, setIso] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://www.teguharief.com/api/posts/${id}`);
        setArticle(response.data);
        setIso(new Date(response.data.publishedAt));
      } catch (error) {
        console.error("Error fetching the article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        article ? (
          <div className='article-container'>
            <h1>{article.title}</h1>
            <img className='article-image' src={'https://www.teguharief.com/uploads/'+article.imageUrl} alt={article.title} />
            <h4>
              Source: {article.newsSite} <br />
              Published On: {iso.toLocaleDateString()} at {iso.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true,  })} <br /> <br />
            </h4>
            <p>{article.summary}
            <br /> <br /> 
              <a href={'https://www.teguharief.com/blog/'+article.url}>Read full story on Publisher's Site</a>
              <br /> <br />
            </p>
          </div>
        ) : (
          <div>
            <p>Couldn't fetch data</p>
          </div>
        )
      )}
    </>
  );
};

export default ArticleView;