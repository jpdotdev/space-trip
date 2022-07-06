
document.querySelector('#go').addEventListener('click', getNasaPic)

function getNasaPic() {
  let dateOne = document.querySelector('#dateOne').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=goRQ327Cr2jaBGFflCkIgKH2ifDZLi8r6mYTwbVM&date=${dateOne}`)
    .then(res => res.json()) //parse response as json
    .then(data => {
      document.querySelector('#imgOne').src = data.hdurl
      document.querySelector('#h1One').innerText = data.title
      document.querySelector('#pOne').innerText = data.explanation
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${error}`)
    });
  let dateTwo = document.querySelector('#dateTwo').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=goRQ327Cr2jaBGFflCkIgKH2ifDZLi8r6mYTwbVM&date=${dateTwo}`)
      .then(res => res.json()) //parse response as json
      .then(data => {
        document.querySelector('#imgTwo').src = data.hdurl
        document.querySelector('#h1Two').innerText = data.title
        document.querySelector('#pTwo').innerText = data.explanation
        console.log(data)
      })
      .catch(err => {
        console.log(`error ${error}`)
      });
    let dateThree = document.querySelector('#dateThree').value
      fetch(`https://api.nasa.gov/planetary/apod?api_key=goRQ327Cr2jaBGFflCkIgKH2ifDZLi8r6mYTwbVM&date=${dateThree}`)
        .then(res => res.json()) //parse response as json
        .then(data => {
          document.querySelector('#imgThree').src = data.hdurl
          document.querySelector('#h1Three').innerText = data.title
          document.querySelector('#pThree').innerText = data.explanation
          console.log(data)
        })
        .catch(err => {
          console.log(`error ${error}`)
      });
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
});
