import axios from 'axios';

const Card = (article) => {
  const cDiv = document.createElement('div')
  cDiv.classList.add('card')

  const cardHead = document.createElement('div')
  cardHead.textContent = `${article.headline}`
  cardHead.classList.add('headline')
  cDiv.appendChild(cardHead)

  const Author = document.createElement('div')
  Author.classList.add('author')
  cDiv.appendChild(Author)

  const cardImgContainer = document.createElement('div')
  cardImgContainer.classList.add('img-container')
  cDiv.appendChild(cardImgContainer)

  const Img = document.createElement('img')
  Img.src = `${article.authorPhoto}`
  cardImgContainer.appendChild(Img)

  const ImgSpan = document.createElement('span')
  ImgSpan.textContent = `By ${article.authorName}`
  cardImgContainer.appendChild(Img)

  cDiv.addEventListener('click', (event) => {
    console.log(`${article.headline}`)
  })

  return cDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
