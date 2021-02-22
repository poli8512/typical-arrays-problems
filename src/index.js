
exports.min = function min (array) {
    if(Array.isArray(array)){
        console.log(JSON.stringify(array).length>3)
        if(JSON.stringify(array).length>2){
            return Math.min(...array)
        }else{
            return 0
        }
    }
    else{return 0}


}

exports.max = function max (array) {
    if(Array.isArray(array)){
        console.log(JSON.stringify(array).length>3)
        if(JSON.stringify(array).length>2){
            return Math.max(...array)
        }else{
            return 0
        }
    }
    else{return 0}
}

exports.avg = function avg (array) {

    if(Array.isArray(array)){
        console.log(JSON.stringify(array).length>3)
        if(JSON.stringify(array).length>2){
            return array.reduce((c,acc)=> acc+c)/array.length
        }else{
            return 0
        }
    }
    else{return 0}
}
