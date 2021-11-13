//Set of words 
// "gaijin" , "ape" , "crow" , "ching" ,"chong" , "chinky" , "brownie" , "dirty", "jew" , "russian" ,"pig" , "nigger", "shit", "shutup"

const fs = require("fs");
// Set of words of racial slurs
const words = [ "gaijin" , "ape" , "crow" , "ching" ,"chong" , "chinky" , "brownie" , "dirty", "jew" , "russian" ,"pig" , "nigger", "shit", "shutup"]

// Each word represent value 1 as a degree of profanity.
// As the number of words increases in the sentence as well as the degree of profanity.

fs.readFile("./file.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);

    for(let i = 0; i < data.users.length; i++){

        let sum = 0

        const sentence = data.users[i].comment.toLowerCase();
        
        for (let j = 0; j < words.length; j++) {
            if(sentence.includes(words[j])){
                sum += 1
            }
        }
        console.log(`Comment ${i+1} : ${data.users[i].comment} \n Degree of Profanity : ${sum}  \n `); 
    }
    

  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});