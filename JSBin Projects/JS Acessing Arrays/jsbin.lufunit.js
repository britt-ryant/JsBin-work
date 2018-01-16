// Write your code below this line

var contacts = [
  {
     firstName: "John",
     lastName: "Doe",
     phone: "(512) 355-0453",
     email: "johndoe@email.com",
},{
     firstName: "jane",
     lastName: "Doe",
     phone: "(312) 641-2203",
     email: "janedoe@email.com",
},{
     firstName: "Suzie",
     lastName: "Smith",
     phone: "(512) 355-0453",
     email: "suziesmith@email.com",
}
];

var listContacts = function () {
  for (i = 0; i < contacts.length; i++) {
    console.log(contacts[i].firstName + " " + contacts[i].lastName);
  }
}

listContacts();