function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
  }
  
  let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
  
  colorScheme = colorChange(colorScheme, 2, '#332327');
  // we have removed '#bb7e8c' and added '#332327' in its place
  // colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']