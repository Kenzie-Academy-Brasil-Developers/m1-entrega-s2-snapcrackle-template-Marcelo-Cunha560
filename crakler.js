function snapCrackle(maxValue){
    let newString = ""
   
    for(i = 1; i <= maxValue; i++){
        // i == 5
        if(i % 2 != 0 && i % 5 == 0){
            newString += "SnapCrackle"
        }else if(i % 5 == 0) {
            newString += "Crackle"
        }else if(i % 2 != 0) {
            newString += "Snap"
        }else{
            newString += i.toString()
        }
        if(i < maxValue){
            newString += ", "
        }
    }
    return newString

}

console.log(snapCrackle(12))