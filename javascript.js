// What do I know? 
// 1. Count through all the numbers from 1 - 100 
// Create a for loop through a variable that goes from 1-100

// 2. If the number can be divided by 3, (1-100) log "Fizz"
// 3. If the number can be divided by 5, (1-100) log "Buzz"
// 4. If the number can be divided by both 3 and 5 (1-100) log "Fizz Buzz"
// 5. The the number cannot be divided by either 3 or 5, log the number. 



for (let i = 1; i <= 100; i++) {
  // console.log(i);

   if (i % 3===0 && i % 5===0) {
    console.log("Fizz Buzz");
  }

  else if (i % 3 === 0) {
    console.log("Fizz");
  }

  else if (i % 5 === 0) {
    console.log("Buzz");
  }


  else {
    console.log(i);
  }
}



// // All strings (and arrays) have access to the length property

// //  Starting CSV code
// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// // Variables - we using the empty string so that we can concatenate
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";

// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//   let current = str[i];

//   if (current == ",") {
//     commas++;
//   } else if (current == "\n") {
//     console.log(cell1, cell2, cell3, cell4);
//     cell1 = '';
//     cell2 = '';
//     cell3 = '';
//     cell4 = '';

//     commas = 0;
//   } else {
//     if (commas == 0) {
//       cell1 += current;
//     } else if (commas == 1) {
//       cell2 += current;
//     } else if (commas == 2) {
//       cell3 += current;
//     } else {
//       cell4 += current;
//     }
//   }

//   if(i + 1 == str.length){
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }









// // // Starting CSV code
// //ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// // // What do we know?
// // // 4 variables for cells, start with an empty string
// // // Cells are separated by commas
// // // Rows are separated by new lines

// // // Categories
// // // commas <- very specific <-- New cell  
// // // newline escape sequence <- very specific <- New Row
// // // EVERYTHING else all other chars - populate a cell    



// let str = "ID,Name,Occupation,Age"; 

// let someone = str[0] + str[1];
//   console.log(someone);




// // Create variables to hold each word separeted by comma in the cell
