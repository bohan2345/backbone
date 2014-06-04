function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push(location);
    
    var str = "Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.";
    str += "\nCurrent danger zones are:";
    
    for(var i=0;i<zones.length;i++){
    	str += "\n"+zones[i];
    }
    alert(str);
  };
}
