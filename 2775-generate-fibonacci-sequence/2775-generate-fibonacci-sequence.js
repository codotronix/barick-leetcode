/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0   // 1st number
    yield a
    let b = 1   // 2nd number
    yield b
    let c   // 3rd numebr onwards
    while(true) {
        c = a+b
        yield c
        a = b
        b = c
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */