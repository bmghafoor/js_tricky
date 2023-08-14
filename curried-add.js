function curriedAdd(total) {
  // if no inital input arg return 0
  if (total === undefined) return 0;
  return function addNext(num) {
    // if no input arg just return the total
    if (num === undefined) return total;
    // if an input arg we add that to total and do recursion
    total += num;
    return addNext;
  };
}

module.exports = { curriedAdd };
