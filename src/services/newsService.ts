import { IArticle } from '../models/IArticle';

export const getNews = async (): Promise<IArticle[]> => {
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return data.articles;
};
