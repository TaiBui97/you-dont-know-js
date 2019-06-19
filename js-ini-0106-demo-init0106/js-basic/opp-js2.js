function Person(firtName, lastName){
    this.firtName = firtName;
    this.lastName = lastName;
    this.showName = function(){
        console.log(this.firtName + '--' +this.lastName )
    };
}
var personA =  new Person();
// console.log(personA)
personA.showName();