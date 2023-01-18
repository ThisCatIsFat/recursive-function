// this function uses recursion will search for the index of the given word (in this case, javascript) and return that index into the console

const theArray = ["Javascript", "React", "MongoDB", "mySQL"];

// i always want the count to start at 0, so i have given that as the default value
function searchIndex(array, word, count = 0) {
  let index = array.indexOf(word);
  if (count < theArray.length) {
    count++;
    // loop runs and if there are still elements left in the array, the function is called again, within itself until each element
    // has been checked. it then returns the index of that word, if it exists in the array, if it does not exist, it will return -1.
  } else searchIndex(array, word);
  return index;
}

console.log(searchIndex(theArray, "Javascript"));
