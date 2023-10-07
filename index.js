// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const hqStreet = 42;
  const distance = Math.abs(street - hqStreet);
  
  return distance;
}

function distanceFromHqInFeet(street) {
  const hqStreet = 42;
  const feetPerBlock = 264; 
  const distanceInFeet = Math.abs(street - hqStreet) * feetPerBlock;
  
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264; 
  const distanceInFeet = Math.abs(endBlock - startBlock) * feetPerBlock;

  return distanceInFeet;
}

function calculatesFarePrice(startBlock, destinationBlock) {
  const feetPerBlock = 264; 
  const distanceInFeet = Math.abs(destinationBlock - startBlock) * feetPerBlock;
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}