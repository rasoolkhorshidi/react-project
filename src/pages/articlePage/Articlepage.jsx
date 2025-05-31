import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/pageLoading/PageLoading";

function ArticlePage() {
  let param = useParams();

  const [articlePass, setArticlePass] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${param.id}`)
      .then((result) => {
        setArticlePass(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container" style={{padding:'20px'}}>
    <Navbar />
    
      <div style={{display:"grid", gridTemplateColumns: 'repeat(4,1fr)' , padding: '50px' , border: '1px solid lightgray' , borderRadius: '25px' , marginTop: '50px'}}>
        

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <p>ID: {articlePass.id} </p>
            <p>Title: {articlePass.title} </p>
            <p>Time To Read: {articlePass.readingtime} Min</p>
            <div>
              <img src={`${articlePass.imageUrl}`} style={{borderRadius: '25%'}} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ArticlePage;
