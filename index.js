// Getting the News API
var fetchURL = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=a6bf07cf89964c5488d35e7ce32a9131'

fetch(fetchURL)
  .then( r => {
    return r.json();
  })
  .then( data => {
    let articles = data.articles;

    let newsArticleList = document.createElement('ol');
    let content = document.querySelector('#content');
    content.append(newsArticleList);

    articles.map( source => {
      let newsArticle = document.createElement('li');
      newsArticle.className = "newsList";
      newsArticle.innerHTML = '<a class="newsLink" target="_blank" href="' + source.url + '">' + source.title + '</a> ' + '<span class="url">(' + makeSmallerUrl(source.url) + ')</span>';
      newsArticleList.appendChild(newsArticle);
    });
  })
  .catch(e => {
    console.log('An error has occured: ${e}');
  });

function makeSmallerUrl(url)
{
  let smallUrl = url;

  smallUrl = smallUrl.split('/').slice(0,3).join('/');

  if(smallUrl.includes('https://'))
  {
    smallUrl = smallUrl.split('https://').slice(0,2);
    return smallUrl[1];
  }
  else if(smallUrl.includes('http://'))
  {
    smallUrl = smallUrl.split('http://').slice(0,2);
    return smallUrl[1];
  }
  else {
    return "Neither";
  }
}
