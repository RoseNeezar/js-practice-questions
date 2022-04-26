// check if contain duplicates

const Dup = (arr) => {
  const hash = new Set();

  for (let i of arr) {
    if (hash.has(i)) {
      return true;
    }
    hash.add(i);
  }
  return false;
};

module.exports = Dup;
