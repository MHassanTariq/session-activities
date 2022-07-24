/*const isEven = (number) =>{
  if(number%2==0){
    return true;
  }
  else
    return false;
}*/

const isEven = (number) => {
  return number % 2 == 0 ? true : false;
};

console.log(isEven(5));

function getStudentIdentity(semester) {
  if (semester < 3) {
    student = "Freshie";
  } else if (semester === 4) {
    student = "Second year student";
  } else if (semester === 6) {
    student = "Third year student";
  } else {
    student = "Fourth year student";
  }
  return student;
}

function getStudentIdentity(semester) {
  return (student =
    semester < 3
      ? "Freshie"
      : semester === 4
      ? "Second year student"
      : semester === 6
      ? "Third year student"
      : "Fourth year student");
}

console.log(getStudentIdentity(6));
