// const characters = [abcdefghijklmnopqrstuvwxyz0123456789];

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function genKey(length) {
    let randomKey = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        randomKey += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randomKey;
}

console.log('Your new key is: ' + genKey(16));