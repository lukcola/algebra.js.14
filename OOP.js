class Dog{
    constructor(godine){
        this.godine = godine;
    }
    imePsa = "Rex";
    vrsta = "Seoski pas";
    godine = 1;
}

class GoldenRetriever extends Dog {
    constructor(godine, vrsta){
        super(godine);
        this.godine = godine;
        this.vrsta = vrsta;
    }
}

const dog1 = new Dog(1);
const dog2 = new GoldenRetriever(10, "ajmo");
