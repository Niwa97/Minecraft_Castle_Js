player.onChat("castle", function () {
    doBase()
    for (let index = 0; index < 2; index++) {
        builder.shift(4, 1, 0)
        doWindows()
    }
    doCeling()
    doGate()
    doFoundations()
    addTop()
    doFloor()
    doMoat()
    doBridge()
})
function doFloor () {
    builder.teleportToOrigin()
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 7)
    builder.shift(0, -1, 1)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 9; index++) {
        builder.move(FORWARD, 6)
        builder.tracePath(PLANKS_ACACIA)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 6)
        builder.tracePath(PLANKS_ACACIA)
        builder.turn(RIGHT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(RIGHT_TURN)
    }
    builder.move(FORWARD, 6)
    builder.tracePath(PLANKS_ACACIA)
}
function doWindows () {
    for (let index = 0; index < 2; index++) {
        builder.mark()
        builder.move(FORWARD, 3)
        builder.tracePath(OBSIDIAN)
        builder.mark()
        builder.move(FORWARD, 2)
        builder.tracePath(GLASS)
        builder.mark()
        builder.move(FORWARD, 3)
        builder.tracePath(OBSIDIAN)
        builder.turn(LEFT_TURN)
    }
    builder.mark()
    builder.move(FORWARD, 7)
    builder.tracePath(OBSIDIAN)
    builder.mark()
    builder.move(FORWARD, 6)
    builder.tracePath(GLASS)
    builder.mark()
    builder.move(FORWARD, 7)
    builder.tracePath(OBSIDIAN)
    builder.turn(LEFT_TURN)
    for (let index = 0; index < 2; index++) {
        builder.mark()
        builder.move(FORWARD, 3)
        builder.tracePath(OBSIDIAN)
        builder.mark()
        builder.move(FORWARD, 2)
        builder.tracePath(GLASS)
        builder.mark()
        builder.move(FORWARD, 3)
        builder.tracePath(OBSIDIAN)
        builder.turn(LEFT_TURN)
    }
    builder.turn(RIGHT_TURN)
}
function doCeling () {
    builder.shift(0, 1, 0)
    builder.mark()
    builder.move(FORWARD, 12)
    builder.tracePath(SHROOMLIGHT)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(SHROOMLIGHT)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 20)
    builder.tracePath(SHROOMLIGHT)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(SHROOMLIGHT)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(SHROOMLIGHT)
    for (let index = 0; index < 2; index++) {
        builder.shift(0, 1, 0)
        builder.mark()
        builder.move(FORWARD, 12)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 8)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 20)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 8)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 8)
        builder.tracePath(CHISELED_STONE_BRICKS)
    }
    builder.shift(11, 0, 1)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 9; index++) {
        builder.move(FORWARD, 6)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 6)
        builder.tracePath(CHISELED_STONE_BRICKS)
        builder.turn(RIGHT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(RIGHT_TURN)
    }
    builder.move(FORWARD, 6)
    builder.tracePath(CHISELED_STONE_BRICKS)
}
function doGate () {
    builder.teleportToOrigin()
    for (let index = 0; index < 3; index++) {
        builder.place(NETHER_BRICK)
        builder.shift(0, 1, 0)
    }
    builder.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        builder.place(NETHER_BRICK)
        builder.shift(1, 0, 0)
    }
    for (let index = 0; index < 4; index++) {
        builder.place(NETHER_BRICK)
        builder.shift(0, -1, 0)
    }
}
function doFoundations () {
    builder.teleportToOrigin()
    for (let index = 0; index < 2; index++) {
        builder.turn(RIGHT_TURN)
    }
    builder.move(FORWARD, 8)
    builder.shift(0, -2, 0)
    builder.mark()
    putBricks()
    builder.shift(0, 1, 0)
    putBricks()
}
function putBricks () {
    for (let index = 0; index < 2; index++) {
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 8)
        builder.tracePath(CRIMSON_PLANKS)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 20)
        builder.tracePath(CRIMSON_PLANKS)
    }
}
function doBridge() {
    builder.teleportToOrigin()
    builder.shift(0, -1, 0)
    for (let index = 0; index < 2; index++) {
        builder.turn(RIGHT_TURN)
    }
    builder.mark()
    builder.move(FORWARD, 3)
    builder.tracePath(COBBLESTONE)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 3)
    builder.tracePath(COBBLESTONE)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 2)
    builder.tracePath(COBBLESTONE)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 3)
    builder.tracePath(COBBLESTONE)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 1)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.tracePath(COBBLESTONE)
    builder.teleportToOrigin()
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.tracePath(BLACKSTONE_WALL)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 3)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.tracePath(BLACKSTONE_WALL)
}
function doMoat () {
    builder.teleportToOrigin()
    builder.turn(RIGHT_TURN)
    builder.shift(0, -2, -3)
    builder.move(FORWARD, 11)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 14)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 26)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
    }
    builder.shift(1, 0, 1)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 12)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 24)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
    }
    builder.shift(1, 0, 1)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 10)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 22)
        builder.tracePath(WATER)
        builder.turn(LEFT_TURN)
    }
    builder.teleportToOrigin()
    builder.turn(RIGHT_TURN)
    builder.shift(0, -1, -3)
    builder.move(FORWARD, 11)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 14)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 26)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
    }
    builder.shift(1, 0, 1)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 12)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 24)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
    }
    builder.shift(1, 0, 1)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 10)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 22)
        builder.tracePath(AIR)
        builder.turn(LEFT_TURN)
    }
}
function addTop () {
    builder.teleportToOrigin()
    builder.move(FORWARD, 8)
    builder.shift(0, 6, 0)
    builder.turn(LEFT_TURN)
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 8)
        builder.tracePath(BLACKSTONE_WALL)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 20)
        builder.tracePath(BLACKSTONE_WALL)
        builder.turn(LEFT_TURN)
    }
}
function doBase () {
    builder.teleportTo(player.position())
    builder.shift(15, 0, 2)
    builder.setOrigin()
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 8)
    builder.tracePath(OBSIDIAN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(OBSIDIAN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 20)
    builder.tracePath(OBSIDIAN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(OBSIDIAN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 8)
    builder.tracePath(OBSIDIAN)
}