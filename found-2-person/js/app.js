const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

// person1
console.log()


let cardSection = document.getElementById("cardSection");
cardSection.innerHTML = `
<div class="card w-50">
<div class="card-header">
  Person Name : ${person.result[0].name.common}
</div>
<div class="card-body">
  <h5 class="card-title">age : ${person.result[0].age}</h5>
  <p class="card-text">street : ${person.result[0].address.street}, House No : ${person.result[0].address.house}</p>
</div>
</div>
<div class="card w-50">
<div class="card-header">
  Person Name : ${person.result[1].name.common}
</div>
<div class="card-body">
  <h5 class="card-title">age : ${person.result[1].age}</h5>
  <p class="card-text">street : ${person.result[1].address.street}, House No : ${person.result[1].address.house}</p>
</div>
</div>
`;