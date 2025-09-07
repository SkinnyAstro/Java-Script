const Student ={
    'firs-tName' :' Prasad',
    Lastname : 'Sartrape',
    Age : 89,
    SayHello : function(){
        return 'Hello my age is' + this.Age;
    }
}

Student.City = 'Mumbai';

let json = JSON.stringify(Student);
let Personnew = JSON.parse(json)

//console.log(json)
//console.log(Student.SayHello());
console.log(Personnew)


