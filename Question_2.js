function belongsFibonacciSequence(num) {//Rececebe um número e retorna true se fizer parte da sequência de fibonacci
    let result = false;
    const fibonacci = [0, 1];
    let i = 2;

    if(num === 0 || num === 1){
        return true;
    }

    while (fibonacci[i - 1] < num) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if(fibonacci[i] === num){
            result = true;
        };
        i++;
    }

    return result;
}