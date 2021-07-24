let enemy: Sprite = null
let Player = sprites.create(img`
    .........88c.......d....
    .........69cccccc.dd....
    ......88..cccdcccddd....
    ......69ccccdddddddd....
    ......ccbccdddddddddc...
    ...88..bccdddff6ddddcc..
    ...69cbcccddddffdd3dcc..
    ....ccbccddddddddddddc..
    .....bccddddcdcdcdcddc..
    ..88.bcddddddcdcdcdbbc..
    ..69cdddddddddddddcccc..
    ...ccddddbddddbbdcccc...
    ....bdddbcccdbbbbccc....
    ..88cdddbccccbbbbbbc....
    ..69cddddbccccbbbbbbc...
    ....cdddddbccccbbbbbc...
    ...ccddddddbcccbbbbbcc..
    ..ccbdddddccbcbbbbbbcc..
    ccdddddddcccccbbbbbbc...
    cdddddddbddcccbbbbbc....
    .ccddddbbbddcccbbccc....
    ...cccbbcbddddccdddcc...
    ......cccddcccdcccccc...
    ........cccccccc........
`, SpriteKind.Player)
controller.moveSprite(Player)
game.onUpdateInterval(2000, function () {
    enemy = sprites.create(img`
        . . . . . . . c c c a c . . . .
        . . c c b b b a c a a a c . . .
        . c c a b a c b a a a b c c . .
        . c a b c f f f b a b b b a . .
        . c a c f 6 f 8 a b b b b b a .
        . c a 8 6 f 8 c a b b b b b a .
        c c c a c c c c a b c 6 a b c c
        c c a a a c c c a c f f c b b a
        c c a b 6 a c c a 9 f c c b b a
        c a b c 8 6 c c a a a b b c b c
        c a c 9 f a c c a f a c c c b .
        c a 8 f c c b a 8 9 c b c c c .
        . c b c c c c b f c a b b a c .
        . . a b b b b b b b b b b b c .
        . . . c c c c b b b b b c c . .
        . . . . . . . . c b b c . . . .
    `, SpriteKind.Enemy)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
    enemy.setPosition(160, randint(0,120))
    enemy.setVelocity(-70, 0)
})
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(Player: Sprite, otherSprite: Sprite) {
   enemy.destroy() 
    info.changeLifeBy(-1)
})