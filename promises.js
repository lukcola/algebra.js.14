/*function getX(){
    return Math.random() >= 0.5;
}*/

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise((resolve, reject) => {
    console.log("pozvan promise object");
    let x = getX();

    if (x == true) {
        return resolve;
    }

    return reject;
})
    .then((vrijednost) => console.log("Neka vrijednost!"))
    .catch(() => console.log("Oh no!"));

