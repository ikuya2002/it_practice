const imageTotalNumber = 4,
      mainImageElement = document.getElementById('mainImage'),
      imageListElement = document.getElementById('imagelist')

mainImageElement.setAttribute('src', 'img/img1.jpg')

for (let i = 0; i < imageTotalNumber; i++){
    const liElement = document.createElement('li')
    liElement.style.backgroundImage = `url(img/img${i + 1}.jpg)`

    liElement.addEventListener('click', () => {
        mainImageElement.setAttribute('src', `img/img${i + 1}.jpg`)
    })

    imageListElement.appendChild(liElement)
}
