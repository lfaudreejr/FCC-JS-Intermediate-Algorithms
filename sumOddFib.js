function sumFibs(num) {

    var fibs = [1, 1];
    var sum = 0;

    for (var i = 1; i < num; i++) {
        fibs.push(fibs[i] + fibs[i - 1]);
    }
    for (var j = 0; j < fibs.length; j++) {
        var fib = fibs[j];
        if (fib % 2 !== 0 && fib <= num) {
            sum += fib;
        }
    }

    return sum;

}

sumFibs(4);