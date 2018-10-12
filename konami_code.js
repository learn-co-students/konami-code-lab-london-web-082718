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


function init() {

  document.body.addEventListener('keydown', konami);
  // track current keystroke in the konami sequence
  let index = 0;  

  function konami(e) {
    // set current keystroke
    const key = e.key;
    // check if most recently entered key matches the next item in the array
    if (key === codes[index]) {
      console.log(key)
      index++;
    }else {
      console.log('Oops - try again!')
      // if wrong key is entered, go back to the beginning
      index= 0;
    }
   
      if (index === codes.length) {
        alert('Hurray! You have unlocked konami');
        index = 0;
      }
  }
  };
