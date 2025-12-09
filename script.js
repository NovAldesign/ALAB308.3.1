// Data Manipulation Starting Code

//Starting String
// let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// What do we know?
// // Use a loop

// During our string we can encounter ONLY one of the following:
// // comma - separate cells
// // `\n` - separate new row/line 
// // characters (char) - everything else (bottom)

// What can we infer?
// // 4 variables, 1 for each cell
// // console.log(cell1, cell2, cell3, cell4);
// //Looping over the string
// What is the input?
// // string

// What do they want (for output, datatype/format)?
// // print individual cells

//Starting String
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

//Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0;

// comma - separate cells
// // `\n` - separate new row/line 
// // characters (char) - everything else (bottom)

for (let i = 0; i < str.length; i++) {

    //Saving current char at the time the current index into a variable to make easier to use.
   let current = (str[i]);

  if (current == ",") {
    //move to the next cell
    commas++;
  } else if (current == "\n") {
    console.log(cell1, cell2, cell3, cell4);
    //Print all cells and rest/comma values for next line
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';
    let commas = 0;

    //For all other chars
        // Add data to a cell
     
  } else {
    if (commas == 0) {
        //If 0 commas add current char first cell
      cell1 += current;
    } else if (commas == 1) {
      cell2 += current;
    } else if (commas == 2) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }
        //Check if its the last index of loop
   if(i == str.length - 1) {
        console.log(cell1, cell2, cell3, cell4);
    } 
}