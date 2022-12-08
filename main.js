document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".box");
  let arr = [];

  function creatPairsOfNumbers(arr) {
    for (let i = 1; i <= 4; i++) {
      arr.push(i);
      arr.push(i);
    }

    return arr;
  }

  function shuffleArray(arr) {
    arr.sort(() => (Math.random() > .5) ? 1 : -1);
  }

  function creatCards(box, arr) {
    for (let i = 0; i < 8; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let front = document.createElement("div");
      front.classList.add("front");
      let back = document.createElement("div");
      back.classList.add("back");
      front.textContent = arr[i];
      card.append(front);
      card.append(back);
      box.append(card);
    }
  }

  function guessCards() {
    let cards = document.querySelectorAll(".card");
    let firstCard = null;
    let secondCard = null;

    cards.forEach((card, index) =>
      card.addEventListener("click", function () {
        card.firstElementChild.classList.add("front_rotation");
        card.lastElementChild.classList.add("back_rotation");

        if (firstCard === null) {
          firstCard = index;
        } else {
          if (index !== firstCard) {
            secondCard = index;
          }
        }

        if (
          firstCard != null &&
          secondCard != null &&
          secondCard != firstCard
        ) {
          if (cards[firstCard].textContent === cards[secondCard].textContent) {
            setTimeout(() => {
              cards[firstCard].firstElementChild.classList.add("sucsessfuly");
              cards[firstCard].classList.add("sucsessfuly");

              cards[secondCard].firstElementChild.classList.add("sucsessfuly");
              cards[secondCard].classList.add("sucsessfuly");
              firstCard = null;
              secondCard = null;
            }, 500);
          } else {
            setTimeout(() => {
              cards[firstCard].firstElementChild.classList.remove(
                "front_rotation"
              );
              cards[firstCard].lastElementChild.classList.remove(
                "back_rotation"
              );
              cards[secondCard].firstElementChild.classList.remove(
                "front_rotation"
              );
              cards[secondCard].lastElementChild.classList.remove(
                "back_rotation"
              );
              firstCard = null;
              secondCard = null;
            }, 500);
          }
        }
      })
    );
  }

  function reload() {
    let footer = document.querySelector(".footer");
    footer.classList.add("footer");
    let button = document.createElement("button");
    button.classList.add("footer__button");
    button.textContent = "Перезапустить игру";
    footer.append(button);
    button.addEventListener("click", function () {
      window.location.reload();
    });
  }

  reload();

  function gameApp() {
    creatPairsOfNumbers(arr);
    shuffleArray(arr);
    creatCards(box, arr);
    guessCards();
  }
  gameApp();
});

