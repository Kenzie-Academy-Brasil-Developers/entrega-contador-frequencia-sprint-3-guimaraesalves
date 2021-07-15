

const button = document.getElementById("countButton");
button.addEventListener("click", 
function () {  

     
 

typedText = document.getElementById("textInput").value;


    
typedText = typedText.toLowerCase();
typedText = typedText.split(' ').join('');

typedText = typedText.replace(/[^a-z'\s]+/g, ''); 



const letterCounts = {};


for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];    
      
    
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
     //letterCounts[typedText[i]] = 0; 
    
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





 