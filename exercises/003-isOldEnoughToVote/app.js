function isOldEnoughToVote(age) {
  if(age >= 18){
    return true;
  } else {
    return false;
  }
}

console.log(isOldEnoughToVote(22));