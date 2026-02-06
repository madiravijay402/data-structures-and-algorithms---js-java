let symbol = "*";   // user symbol
let choice = 1;    // 1 = square, 2 = triangle
let rows = 4;

switch (choice) {
  case 1:
    // Square pattern
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 1; j <= rows; j++) {
        line += symbol + " ";
      }
      console.log(line);
    }
    break;

  case 2:
    // Right triangle pattern
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += symbol + " ";
      }
      console.log(line);
    }
    break;

  default:
    console.log("Invalid choice");
}
