var request = new XMLHttpRequest();

request.open('GET', 'https://xsmilex007.github.io/JS-API-example/mydata.json', true);

request.send();

request.onload = function (result) {
    console.log(result.currentTarget.response);
    const obj = JSON.parse(result.currentTarget.response);

    let grad = obj.request.query;
    console.log("Isparsani grad: " + grad);

    let country = obj.location.country;
    let uv = obj.uv_index;

    console.log("Država: " + country);
    console.log("Brzina vjetra: " + uv);
};

