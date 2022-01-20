//variable that will contains all the words
let words = [];

words[0] = "Yannick";
words[1] = "Romain";
words[2] = "Gregory T";
words[3] = "Stephanie";
words[4] = "Quentin";
words[5] = "Thomas B";
words[6] = "Gregory D";
words[7] = "Steve";
words[8] = "Thomas A";
words[9] = "Julie";
words[10] = "Allan";
words[11] = "Moana";
words[12] = "Stephane";

console.log(words);

//function that will get the user input and store it in the words variable
function addUserInfo() {
  let userAdd = document.getElementById("userInput").value;
  //check if the input field is empty then do nothing
  if (userAdd != "") {
    words.push(userAdd);
    showUserInfo();
  }
}

//function that will show the values contained in the word variable

function showUserInfo() {
  let showInfo = "";
  let index = 0;
  words.forEach((word) => {
    showInfo += `
        <li >
        ${word}<span><button value="${index}" onClick="removeName(this)">X</button>
        </li>
        `;
    index++;
  });
  document.getElementById("display").innerHTML = showInfo;
  document.getElementById("userInput").value = null;
}

//function that get the delete button value to delete the array index.
function removeName(e) {
  words.splice(parseInt(e.value), 1);
  showUserInfo();
}
console.log(words);

// Fonction diviser nombre de personnes par nombre de groupe
function div() {
  let nbr = words.length;
  var NbrGr = document.getElementById("NbrGr").value;
  const result = nbr / NbrGr;
  console.log("nbr", nbr);
  console.log("NbrGr", NbrGr);
  console.log("result", result);
  //  document.getElementById("Nbrpgp").innerHTML=result;
}

console.log(words.length);

function cmp() {
  alert("Hé Hé ! Ca ne fonctionne pas !!!");
}
