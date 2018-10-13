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
]

function init() {
  let index = 0
  // create event listener
  document.body.addEventListener("keydown", (ele) => {
    const key = ele.key
    // assign key to be the element's index number, i.e. the key (The buttons pressed are the values)

    index = (key === codes[index]) ? ++index : 0                   
    // can't redeclare the index with let or const
    // ternary - if the right key is entered, index looks for next key,
    // else if wrong key is entered, index goes back to 0 
    // ++index - because we want the value of index after the increment

    if  (index === codes.length) {
      window.alert('CONGRATULATIONS GAMER!')
      index = 0   // reset this to zero 
    }
  })
}


