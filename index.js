function mapToNegativize(array) {
    let r = []
    for (let i = 0; i < array.length; i++){
        r.push(array[i] * -1)
    }
    return r
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let r = []
    for (let i = 0 ; i < array.length; i++){
        r.push(array[i] * 2)
    }
    return r
}

function mapToSquare(array){
    let r = []
    for (let i = 0 ; i < array.length; i++){
        r.push(array[i] * array[i])
    }
    return r
}

function reduceToTotal(array, startingPoint=0){
    let r = startingPoint
    for (let i = 0 ; i < array.length; i++){
        r += array[i]
    }
    return r
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === false){
            return false 
        }
    }
    return true 
}

const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i]){
            return true 
        }
    }
    return false 
}