var sideA = prompt('podaj bok a '),
    heightH = prompt('podaj wysokośc h ');
console.log('podane warości ' + sideA + ' i ' + heightH);

function sprawdzDane(sideA,heightH){
  if ((sideA > 0) && (heightH > 0)){
    console.log('parametry poprawne');
    alert(sideA*heightH/2);
    return sideA * heightH/2; 
  }
  else{
    console.log('parametry niepoprawne do wykonania obliczeń');
  }
}
sprawdzDane(sideA,heightH);