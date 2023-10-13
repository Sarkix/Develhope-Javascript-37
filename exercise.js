const number = 15;

const checkNumer = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("El número es mayor que 10");
  } else {
    reject("El número es menor o igual a 10");
  }
});

checkNumer
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
