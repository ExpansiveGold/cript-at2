async function Criptografar(msg, hash) {

    let Msg = document.getElementById("Text");

    if(Msg = undefined || ''){
        document.getElementById("original").innerHTML = 'Digite algo';
        document.getElementById("criptografado").innerHTML = '';
        document.getElementById("chave").innerHTML = '';
    }
    else{

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

        let senha = await criptografar(msg, "012345678901234567890123456789");

        console.log(senha);

    }
}

async function descriptografar(cypher, hash) {

    // let msg = document.getElementById("TextCript").value;

    let h = String(hash)

    const msg = cypher.split(h);

    const d = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    }

    let res = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    let descript = await descriptografar(senha, "012345678901234567890123456789")

    console.log(descript);

}

