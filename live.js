function gradeCalculator(num) {
  if (isNaN(num)) {
    console.log("This is Not a Number between 0 to 100");
  } else {
    let text;
    switch (true) {
      case num > 0 && num < 59:
        text = "F";
        break;
      case num > 59 && num < 69:
        text = "D";
        break;
      case num > 79 && num < 79:
        text = "C";
        break;
      case num > 79 && num < 89:
        text = "B";
        break;
      case num > 89 && num < 100:
        text = "A";
        break;
      default:
        text = "Invalid Number";
    }
    console.log(text);
  }
}
// gradeCalculator(60);
gradeCalculator(0);
