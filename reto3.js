function distributeGifts(packOfGifts, reindeers) {

    let pesoTotal = 0;
    let renoTotal = 0;

    packOfGifts.forEach(element => {
        const pesoRegalo = element.length
        pesoTotal += pesoRegalo
    });

    reindeers.forEach(element => {
        let pesoReno = element.length
        renoTotal += (pesoReno * 2)
    });
    
    const total = renoTotal / pesoTotal;

    return Math.floor(total);
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2