const persons = [
   {
       name: 'Jamie',
       email: 'jamie@example.com'
   },
   {
       name: 'Jake',
       email: 'jake@example.com'
   },
   {
       name: 'Mary',
       email: 'mary@example.com'
   }
];

const person2 = persons.map(persons=>persons.email);
console.log(person2);
