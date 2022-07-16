const person = {
    person_name: "James",
    gender: "Male",
    age: 38,
    address: '15th Park Avenue',
    department: {
      department_name: 'Sales',
      department_address: {
        city: 'London',
        street: '7thh Residency Rd',
        zip: 560001
      }
    }
  }
  
  
  
  // destructing
  const {person_name,gender} = person;
  console.log("person_name: "+person_name + " gender: "+ gender);
  
  // destructing with default value 
  const {age = 60} = person;
  console.log("age: "+ age);
  
  // destructing with aliases - address is not a variable
  const {address: permenantAddress} = person;
  console.log("permenantAddress: "+permenantAddress);
  
  // destructing with nested objects 
  const {department: {department_address}} = person;
  console.log(department_address);
  
  // destructing in function params 
  const logUser = ({person_name, age}) => {
    console.log(`Person's name is: ${person_name} and age is: ${age}`);
  }
  logUser(person);