function generatePass() {
  const nums = "0123456789";
  const lower = "abcdefghijklmnopqrstuvwxyz"; 
  const upper = lower.toUpperCase();
  const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/}";
  const allChecked = document.querySelector("#checkbox1");
  const upperChecked = document.querySelector("#checkbox2");
  const lowerChecked = document.querySelector("#checkbox3");
  const numChecked = document.querySelector("#checkbox4");
  const symbChecked = document.querySelector("#checkbox5");
  const passLength = Number(document.querySelector(".slide").value);
  const result = document.querySelector(".password").innerText;

  let allPass = "";

  let pass = [];

  if (upperChecked.checked) {
    allPass += upper;
  }
  if (lowerChecked.checked) {
    allPass += lower;
  }
  if (numChecked.checked) {
    allPass += nums;
  }
  if (symbChecked.checked) {
    allPass += symbols;
  }
  allPass = allPass.split('');
  allPass = arrayShuffle(allPass);
  
  for (let i = 0; i < passLength; i++) {
    let randNum = Math.floor(Math.random()*allPass.length);
    pass.push(allPass[randNum]);
  }

  pass = arrayShuffle(pass);
  pass = pass.join('');
  
  if (result !== "") {
    clearPass();
    generatePass();
  }
  else{
    document.querySelector(".password").innerText = pass;
  }

}
function clearPass() {
  document.querySelector(".password").innerText = "";
}
function copyClipboard() {
  const text = document.querySelector(".password").innerText;
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
  console.error('Async: Could not copy text: ', err);
}
);
}
//shuffle
function arrayShuffle(arr){
  let randIndex;
  for(let i = (arr.length - 1); i > 0; i--){
    randIndex = Math.floor(Math.random()*i);
    let temp = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = temp;
  }
  return arr;

}
