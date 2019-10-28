// Basic Algorithm Scripting: Confirm Ending
//Free Code Camp exercise

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
