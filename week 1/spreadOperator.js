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
  
  // spread - clone object, you can also use Object.assign()
  const clone_person = {...person};
  console.log("cloned person: ")
  console.log(clone_person);
  
  // spread with addition properties 
  const addition_properties_person = {...person, salary: 12345};
  console.log("clone person with additional property: ")
  console.log(addition_properties_person);
  
  // spread with updated properties 
  const updated_person = {...person, age: 25};
  console.log("clone person with updated property: ")
  console.log(updated_person);
  
  
  // merging 2 objects through spread 
  //Note that this way of merging performs a shallow merge. 
  //This means that if there is a common property between both the objects, the property value of obj_2 will replace the property value of obj_1 in the merged object.
  const dept = {
    id: 1,
    shift: 'Morning',
    address: '11th Square Mall'
  }
  const merged_object = {...person, ...dept};
  console.log("merged object")
  console.log(merged_object); // notice address. It would be updated!