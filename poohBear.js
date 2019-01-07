let tigger = {character: "Tigger"}
let pooh = {character: "Winnie The Pooh"}
let piglet = { character: "Piglet"}
let bees = { character: "Bees" }
let owl = { character: "Owl" }
let christopherRobbin = { character: "Christopher Robbin" }
let rabbit = { character: "Rabbit" }
let gopher = { character: "Gopher"}
let kango = { character: "Kango" }
let eeyore = { character: "Eeyore" }
let heffalumps = {character: "Heffalumps" }
let player = {
  location: tigger
}

function north(){
  player.location = player.location.north
  console.log(`You are now at ${player.location.character}`)
}

function south() {
  player.location = player.location.south
  console.log(`You are now at ${player.location.character}`)
}

function east() {
  player.location = player.location.east
  console.log(`You are now at ${player.location.character}`)
}

function west() {
  player.location = player.location.west
  console.log(`You are now at ${player.location.character}`)
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