import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";


const fetchNews = async (
  category?: string,
  keywords?: string,
  isDynamic?: boolean) => {

  // GraphQL Query 
  const query = gql`
        query MyQuery ($access_key:String! $categories:String! $keywords:String)  {
          myQuery(access_key: $access_key categories: $categories countries: "in, us" sort:"published_desc" keywords:$keywords) {
            data {
              author
              category
              country
              description
              image
              language
              published_at
              source
              title
              url
            }
            pagination {
              count
              limit
              offset
              total
            }
          }
        }`;


  // Fetch Data
  const res = await fetch('https://rafaelcalzada.stepzen.net/api/foiled-guppy/__graphql', {
    method: 'POST',
    next: isDynamic ? { revalidate: 30 } : { revalidate: 180 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category ? category : "general",
        keywords: keywords
      }
    })
  })

  const newsResponse = await res.json();
  let news = newsResponse;
  if (newsResponse.data.myQuery !== null) {
    news = sortNewsByImage(newsResponse.data.myQuery)
  }

  // console.log("Sorted News =>\n", news)
  return news
}

export default fetchNews;