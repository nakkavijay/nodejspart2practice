let eligibleToVote = (age) => {
  let result = age > 18 ? "Yes" : "No";
  return result;
};
console.log(eligibleToVote(20));
