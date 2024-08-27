// In an object method, this refers to the object.

let car={
    name:"suzuki",
    model:"xuv",
    color:"red",

    drive:function(){
      console.log(this.name)//suzuki
      console.log(this)//represent the current object
    }
}
car.drive()


// Alone, this refers to the global object.
// In a function, this refers to the global object.

function vehicle(){
    let name = "car"
    console.log(this.name)//undefined
    console.log(this)//represent global object
}

vehicle()