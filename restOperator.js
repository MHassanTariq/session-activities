const person = {
    person_name: "James",
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
  
  // rest operator 
  const {department, ...person_info} = person;
  console.log(department);
  console.log(person_info);