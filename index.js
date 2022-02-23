function distanceFromHqInBlocks(destination){
    const hQ = 42
    return Math.abs(destination - hQ);
}

function distanceFromHqInFeet(start) {
     return distanceFromHqInBlocks(start) * 264; 
 }
function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) *264;
}
function calculatesFarePrice(start,destination) {
    if (distanceTravelledInFeet (start, destination) <=400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet (start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && (distanceTravelledInFeet(start, destination) < 2500)){
        return (25)
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return ('cannot travel that far')
    }
}

console.log(distanceTravelledInFeet(10,20))