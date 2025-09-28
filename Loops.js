let numbers = [2,4,5,6,18,49];


for(let i=0; i< numbers.length; i++){
    console.log(numbers[i]);

}

for(let i=numbers.length-1; i>0;  i--){
    console.log(numbers[i]);
}

//We can also reverse the array using the reverse function which can be written like this

numbers.reverse();
console.log(numbers);

let peoples=[
    {
        name: 'prasad',
        email: 'sartapeprasad@gmail.com'
    },
    {
        name: 'John',
        email: 'test@gmail.com'
    }
];

for (let i=0 ; i< peoples.length; i++){
    console.log(peoples[i].email)
}