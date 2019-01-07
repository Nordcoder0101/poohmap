let tigger = {
  character: "Tigger",
  greet: function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
  }  
}
let pooh = {character: "Winnie The Pooh",
  greet: function () {
    console.log("Oh brother")
  }  
}
let piglet = { character: "Piglet",
  greet: function () {
    console.log("Oh d-d-d-d-dear!  I wasn't expecting company!")
  }  
}
let bees = { character: "Bees",
  greet: function () {
    console.log("Bzzzzzz")
  }  
 }
let owl = { character: "Owl" ,
  greet: function () {
    console.log("hoot, hoot")
  }  
}
let christopherRobbin = { character: "Christopher Robbin",
  greet: function () {
    console.log("Well, hello!")
  }  
 }
let rabbit = { character: "Rabbit",
  greet: function () {
    console.log("Hoppity Hop!")
  }  
 }
let gopher = { character: "Gopher",
  greet: function () {
    console.log("Front or back 9")
  }  
}
let kango = { character: "Kango",
  greet: function () {
    console.log("Boingy boing")
  }  
 }
let eeyore = { character: "Eeyore",
  greet: function () {
    console.log("Eff my life!")
  }  
 }
let heffalumps = {character: "Heffalumps",
  greet: function () {
    console.log("greets")
  }  
 }
let player = {
  location: tigger
}

function north(){
  player.location = player.location.north
  console.log(`You are now at ${player.location.character}`)
  player.location.greet();
}

function south() {
  player.location = player.location.south
  console.log(`You are now at ${player.location.character}`)
  player.location.greet();
}

function east() {
  player.location = player.location.east
  console.log(`You are now at ${player.location.character}`)
  player.location.greet();
}

function west() {
  player.location = player.location.west
  console.log(`You are now at ${player.location.character}`)
  player.location.greet();
}


tigger.north = pooh
pooh.south = tigger
pooh.east = bees
bees.west = pooh
pooh.west = piglet
piglet.east = pooh
owl.south = pooh.west
christopherRobbin.south = pooh
pooh.north = christopherRobbin
pooh.north.east = rabbit
pooh.north.west = owl
pooh.north.north = kango
kango.north = eeyore
kango.south = pooh.north
eeyore.east = heffalumps
eeyore.south = kango
rabbit.east = gopher
rabbit.south = pooh.east

north()
north()
east()
