let tigger = {
  character: "Tigger",
  greet: function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
  }  
}
let pooh = {
  character: "Winnie The Pooh",
  isMission: false,
  greet: function () {
    console.log("Oh brother")
  }  
}
let piglet = { 
  character: "Piglet",
  isMission: false,
  greet: function () {
    console.log("Oh d-d-d-d-dear!  I wasn't expecting company!")
  }  
}
let bees = { 
  character: "Bees",
  hasHoney: true,
  greet: function () {
    console.log("Bzzzzzz")
  }  
 }
let owl = { 
  character: "Owl" ,
  isMission: false,
  greet: function () {
    console.log("hoot, hoot")
  }  
}
let christopherRobbin = { 
  character: "Christopher Robbin",
  isMission: false,
  greet: function () {
    console.log("Well, hello!")
  }  
 }
let rabbit = { 
  character: "Rabbit",
  isMission: false,
  greet: function () {
    console.log("Hoppity Hop!")
  }  
 }
let gopher = { 
  character: "Gopher",
  isMission: false,
  greet: function () {
    console.log("Front or back 9")
  }  
}
let kango = { 
  character: "Kango",
  isMission: false,
  greet: function () {
    console.log("Boingy boing")
  }  
 }
let eeyore = { 
  character: "Eeyore",
  isMission: false,
  greet: function () {
    console.log("Eff my life!")
  }  
 }
let heffalumps = {
  character: "Heffalumps",
  isMission: false,
  greet: function () {
    console.log("greets")
  }  
 }
 
let missionTargets = [tigger, pooh, piglet, owl, christopherRobbin, rabbit, gopher, kango, eeyore, heffalumps]

let player = {
  location: tigger,
  controlsHoney: false
}

function mission(){
  missionTarget = missionTargets[Math.floor((Math.random() * missionTargets.length) + 1)]
  missionTarget.isMission = true
  console.log(`${missionTarget.character} needs honey, go to Bees and get honey to bring to ${missionTarget.character}!`)
}

function pickup() {
  if (player.location.hasHoney){
    player.location.hasHoney = true
    player.controlsHoney = true
    console.log("Congrats, you picked up the honey, now go find who needs it!")

  } else {
    console.log("No honey at this location, try somewhere else.")
  }
}

function drop(){
  if (player.location.isMission == false){
    console.log("This is the wrong location for the honey.")
  } else {
    console.log(`Congratulations, you delivered the honey to ${player.location.character}!`)
    player.controlsHoney = false
  }
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



