import { useState } from 'react';
import { IArticle } from '../models/IArticle';
import { NewsArticle } from './NewsArticle';

export const News = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const renderItems = (items: IArticle[]) => {
    return items.map((item) => <NewsArticle key={item.url} article={item} />);
  };

  return <ul>{renderItems(articles)}</ul>;
};
