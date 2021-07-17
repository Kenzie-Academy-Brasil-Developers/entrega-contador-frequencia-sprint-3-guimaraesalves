

const button = document.getElementById("countButton");
button.addEventListener("click", 
function () {  

     
 

typedText = document.getElementById("textInput").value;


    
typedText = typedText.toLowerCase();
typedText = typedText.replace(/[^a-z'\s]+/g, ''); 




words = typedText.split(/\s/);  
for (let j = 0; j < words.length; j++) {
     currentWords = words[j] 
   
   if (words[currentWords] === undefined) {
      words[currentWords] = 1; 
    } else { 
      words[currentWords]++; 
    }
    
   
}
for (let palavra in words) { 
   const span = document.createElement("span"); 
   const palavraContent = `"${palavra}": ${words[palavra]}, `;
   span.innerText = palavraContent; 
   const palav = document.getElementById("wordsDiv");
   palav.appendChild(span); 
}



const letterCounts = {};
typedText = typedText.split(' ').join('');
for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];    
      
    
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
     
    
}

for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }



 console.log(typedText)
 console.log(letterCounts)
 console.log(button)
});





 