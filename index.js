const {textQuestion, listQuestion, binaryQuestion} = require('./cli-input');

let score = 0;

console.log('Kya aap mujhe acche se jaante hai? Aaiye khelenge, kaun jaanta hai Gaurav ko.\n\n');

if(textQuestion('Phela prashna, 1 cookie  🍪  ke liye.\nMera surname kya hai?', 'Agarwal')) {
  console.log('Bilkul sahi jawab. Aap jeete hai 1 cookie.\n');
  score++;
} else console.log('Uff, galat jawab. Koi baat nai. Agla prashna prastoot kariye computer ji.\n')

if(textQuestion('Dusra prashna, 2 cookies  🍪  ke liye.\nMeri best friend (female) ka naam kya hai?', 'Abhibha')){
  console.log('Bilkul sahi jawab. Aap jeete hai aur 2 cookies.\n');
  score = score + 2;
} else console.log('Uff, galat jawab. Koi baat nai. Agla prashna prastoot kariye computer ji.\n');

if(listQuestion(['Ashutosh', 'Prateek', 'Ankit', 'Mehul'],'Teesra prashna, 4 cookies  🍪  ke liye.\nMere roommate ka naam kya tha?', 1)){
  console.log('Bilkul sahi jawab. Aap jeete hai aur 4 cookies.\n');
  score = score + 4;
} else console.log('Uff, galat jawab. Koi baat nai. Agla prashna prastoot kariye computer ji.\n');

if(binaryQuestion('Chautha prashna, 10 cookies  🍪  ke liye.\Kya mai Neogcamp level 1 tak pahunch paayunga?', true)){
  console.log('Bilkul sahi jawab. Aap jeete hai aur 10 cookies.\n');
  score = score + 10;
} else console.log('Uff, galat jawab. Koi baat nai.\n');

console.log("\nAapke aaj pure " + score + " Cookies. Kya karenge aap itni cookies ka. Mujhe screenshot bhej ke bataiye.\n")

console.log('High scores\n');
console.log('Ashutosh : 12  🍪  ');
console.log('Prateek : 10  🍪  ');
console.log('Biba : 6  🍪  ');