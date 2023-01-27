function createCube(size) {
    let cubo = '';

   for (let index = 1; index <= size; index++) {
    const espacio = ' '.repeat(size - index)
    const figura = '/\\'.repeat(index)
    const figuraDos = '_\\'.repeat(size)
    
    cubo += `${espacio}${figura}${figuraDos}\n`
   }
   
   for (let index = 0; index < size; index++) {
    const espacio = ' '.repeat(index)
    const figura = '\\/'.repeat(size - index)
    const figuraDos = '_/'.repeat(size)
    
    cubo += `${espacio}${figura}${figuraDos}\n`
   }

    return cubo.slice(0, -1)
}

const cubeOfOne = createCube(4);
console.log(cubeOfOne)