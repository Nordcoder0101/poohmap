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

console.log(eeyore.south)