function getPuppy(id) {
  return new Promise((resolve, reject) => {
    const pup = fetch(`./media/pup${id}.jpg`).then(() => {
      if (pup) resolve(pup)
      else reject('errou');
    });
  });
};

function showPuppy(pup) {
  const img = document.createElement('img');
  img.src = pup.src;
};

const pup1 = getPuppy(1);
const pup2 = getPuppy(2);
const pup3 = getPuppy(3);

Promise.all([pup1, pup2, pup3]).then((puppies) => {
  console.log(puppies)
});