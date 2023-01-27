function countHours(year, holidays) {

    let dias = 0;
    let horas = 0;
    
    holidays.forEach( e => {
  
      const date = new Date(`${year}/${e}`)
      const day =  date.getDay()
  
      console.log(day);
      if (day > 0 && day < 6) {
        dias += 1;
        horas += 2;
      }
    })
  
    return `${dias} dias -> ${horas} horas extra en el año`
  
  }
  
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25']
  
  const hours = countHours(year, holidays)
  console.log(hours);