
function exword(arr, word)
{
    if(arr.includes(word)){
        console.log(`${word} is included`);
        return true;
    }
    else{
        console.log(`${word} is not included`);
        return false;
    }
}

const str = `this sentence includes some words, hopes and dreams`;
exword(str, `dreams`);
exword(str, `fate`);