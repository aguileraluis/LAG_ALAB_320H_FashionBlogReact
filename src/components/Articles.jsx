import React from 'react'; 
import { articles } from '../data'; 

const Articles = () => {

  const articleItems = articles.map(article =>
    <article key={article.id}>
      <li className="nav-item">
        <h2 className="nav-link" id="heading-bottom">{article.date}</h2>
      </li>
      <li className="nav-item">
        <h1 className="nav-link lead" id="subheading-bottom" href="#">{article.title}</h1>
      </li>
      <img src={article.image} className="img-fluid blogImg" alt={article.alt} />
      <div className="textContent">
        <p id="textSection">{article.text}</p>
      </div>
      <p id="continues">Continues ...</p>
      <br/>
      <hr/>
    </article>
  )
  return (
    <ul>
      {articleItems}
    </ul>
  )
}

export default Articles; 