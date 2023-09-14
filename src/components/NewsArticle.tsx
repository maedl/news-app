import { IArticle } from '../models/IArticle';

interface INewsArticleProps {
  article: IArticle;
}

export const NewsArticle = (props: INewsArticleProps) => {
  const { author, title, urlToImage, source, url } = props.article;

  return (
    <div className="col s4">
      <div className="card medium">
        <div className="card-image">
          <img src={urlToImage} alt="" />
          <span className="card-title">{source.name}</span>
        </div>
        <div className="card-content">
          <p>{title}</p>
        </div>
        <div className="card-action">
          <a href={url}>{author}</a>
        </div>
      </div>
    </div>
  );
};
