function Criptografar(msg, hash) {

    const d = Date.now();

    let frase = msg.split("");
            
    for (let i = 0; i < frase.length; i ++){

        frase[i] = (frase[i].charCodeAt(0) * d)

        frase[i] += hash;
    }

    frase.push(d);

    let res = "";

    for (let i = 0; i < frase.length; i++) {
        res += frase[i];
    }

    return res;
}

function descriptografar(cypher, hash) {

    let h = String(hash)

    const msg = cypher.split(h);

    const d = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    }

    let res = "";

    for (let i = 0; i < msg.length; i++) {
        res += msg[i];
    }

    return res;

}

let msg = "IGOR EU ODEIO CRIPTOGRAFIAAAAAAAA";


let senha = Criptografar(msg, "012345678901234567890123456789");

console.log(senha);

let descript = descriptografar(senha, "012345678901234567890123456789")

console.log(descript);