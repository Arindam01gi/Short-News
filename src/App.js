
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { useEffect , useState} from 'react';


function App() {

   const [body,setBody]= useState([])
  
   
useEffect(()=>{
  fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  .then((res) =>res.json())
  .then((articles) =>{
    console.log(articles);
    setBody(articles.articles)
  })
  .catch((err)=>console.log(err))
},[])

  return (
    <>
      <Header />

      <div>
        {body.map(body =>(
          <Body key={body.publishedAt} body={body} />
        ))}
      </div>
      
  
    </>
    );
   
}

export default App;
