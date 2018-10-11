const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


// const konami = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65']

function init() {
  // your code here

  let index = 0;

  document.body.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === codes[index]) {
      index++

      if (index === codes.length) {
        alert("You've unlocked the powers on Konami! Congratulations!!");
        index = 0;
      }
    } else {
      index = 0;
    }

  });

}



