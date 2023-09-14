import { IArticle } from '../models/IArticle';

interface INewsArticleProps {
  article: IArticle;
}

export const NewsArticle = (props: INewsArticleProps) => {
  const { title } = props.article;

  return <li>{title}</li>;
};
