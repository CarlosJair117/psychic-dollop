function wrapping(gifts) {

    const gif = gifts.map( (e) => {

        let asterisco = e.length
        let repetir = '*'.repeat(asterisco);

        return `${repetir}**\n*${e}*\n**${repetir}`
    })

    return gif
  }

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[1])


//hola mundo


