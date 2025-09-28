const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 28, isActive: true },
  { id: 4, name: "Diana", age: 22, isActive: false },
  { id: 5, name: "Ethan", age: 35, isActive: true }
]

const Personfound = users.find((user)=> user.name==='Bob');
console.log(Personfound);
if(Personfound){
    console.log(Personfound.age)
}


