import { useEffect, useState } from 'react';
import { IArticle } from '../models/IArticle';
import { NewsArticle } from './NewsArticle';
import { getNews } from '../services/newsService';

export const News = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const getData = async () => {
      const news = await getNews();

      setArticles(news);
    };

    getData();
  }, []);

  const renderItems = (items: IArticle[]) => {
    return items.map((item) => <NewsArticle key={item.url} article={item} />);
  };

  return <ul>{renderItems(articles)}</ul>;
};
