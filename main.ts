namespace SpriteKind {
    export const Fly = SpriteKind.create()
    export const Spider = SpriteKind.create()
    export const Grasshopper = SpriteKind.create()
    export const Wasp = SpriteKind.create()
    export const Robot = SpriteKind.create()
    export const Lil_Fly = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Bag = SpriteKind.create()
    export const Baby = SpriteKind.create()
    export const Spike = SpriteKind.create()
    export const Sharp = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spider, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Sine, 2391, 165, 255, 0, 331, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 . . . . . . . . . . . . . 1 
        1 1 1 . . . . . . . . . . . 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . . 1 1 1 . . . . . . . 1 1 1 . 
        . . . 1 1 . . . . . . . 1 1 . . 
        . . . 1 1 . . . . . . . 1 1 . . 
        . . . . 1 1 . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . 1 1 . . . . 
        . . 1 1 . . . . . . . 1 1 . . . 
        . . 1 1 . . . . . . . 1 1 . . . 
        . 1 1 1 . . . . . . . 1 1 1 . . 
        1 1 1 . . . . . . . . . 1 1 1 . 
        1 1 1 . . . . . . . . . 1 1 1 . 
        1 1 . . . . . . . . . . . 1 1 . 
        1 . . . . . . . . . . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 1 . 
        1 . . . . . . . . . . . 1 1 1 . 
        1 1 . . . . . . . . . 1 1 1 . . 
        1 1 . . . . . . . . . 1 1 1 . . 
        1 1 1 . . . . . . . 1 1 1 . . . 
        . 1 1 . . . . . . . 1 1 . . . . 
        . 1 1 . . . . . . . 1 1 . . . . 
        . . 1 1 . . . . . 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 . . . . . 1 1 . . . . . . 
        1 1 . . . . . . . 1 1 . . . . . 
        1 1 . . . . . . . 1 1 . . . . . 
        1 1 . . . . . . . 1 1 1 . . . . 
        1 . . . . . . . . . 1 1 1 . . . 
        1 . . . . . . . . . 1 1 1 . . . 
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . 1 1 . . . 
        1 . . . . . . . . . 1 1 1 . . . 
        1 . . . . . . . . . 1 1 1 . . . 
        1 1 . . . . . . . 1 1 1 . . . . 
        1 1 . . . . . . . 1 1 . . . . . 
        1 1 . . . . . . . 1 1 . . . . . 
        . 1 1 . . . . . 1 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeLifeBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Swatter.setKind(SpriteKind.Projectile)
    animation.runImageAnimation(
    Swatter,
    [img`
        8 8 8 8 8 8 8 8 8 8 8 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        `,img`
        8 8 8 8 8 8 8 8 8 8 8 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        . 8 . 8 . 8 . 8 . 8 8 . . 
        . . 8 8 8 8 8 8 8 8 . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . 
        . . . . . 2 2 2 2 . . . . 
        . 2 . . 2 2 2 2 2 . . . . 
        2 2 . 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 8 8 8 8 8 8 8 8 8 8 2 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 . . 5 . 
        . . 5 5 5 5 5 5 5 5 . 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 8 8 8 8 8 8 8 8 8 8 5 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . . . . . . . . . 
        `,img`
        . 8 8 8 8 8 8 8 8 8 8 . . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 8 8 . 
        8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        `,img`
        8 8 8 8 8 8 8 8 8 8 8 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        8 . 8 . 8 . 8 . 8 . 8 8 . 
        8 8 . 8 . 8 . 8 . 8 . 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 . . . . . 
        . . . . . 8 8 . . . . . . 
        . . . . . 8 8 . . . . . . 
        `],
    100,
    false
    )
    music.play(music.createSong(hex`0078000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000900080009000405060708`), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Baby, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Lil_Fly, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1976, 194, 111, 6, 283, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . f . . 
        . . f . . . . . . . . . . . f . . 
        9 . f f . . . . . . . . . f f . 9 
        f f . f . f f f f f f f . f . f f 
        f f 9 . f f f f f f f f f . 9 f f 
        9 9 f f f f f f f f f f f f f 9 9 
        . 9 9 9 f f 2 2 2 2 2 f f 9 9 9 . 
        . . 9 9 2 2 f f f f f 2 2 9 9 . . 
        . . . 2 2 f f f f f f f 2 . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . . . f b 2 b 2 b f . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        `],
    100,
    true
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bag, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 2985, 545, 195, 93, 303, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . f f . . . . . . . . . . . . . . 
        . . f f f . . . . . . . . . f . . 
        . . . f . 5 5 5 5 5 5 5 . f f f . 
        . . . . 5 5 5 5 5 5 5 5 5 . . f f 
        9 9 . . 5 5 5 5 5 5 5 5 5 . . 9 9 
        9 9 9 . 5 5 5 5 5 5 5 5 5 . 9 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 9 
        9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
        . 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 . 
        . . 9 9 9 5 4 f 4 f 4 5 9 9 9 . . 
        . . . . . 5 5 f 5 f 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . e e e . . . . . . . 
        . . . . . . e 5 5 5 e . . . . . . 
        . . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . f f . 
        . . f . . . . . . . . . f f f . . 
        . f f f . 5 5 5 5 5 5 5 . f . . . 
        f f . . 5 5 5 5 5 5 5 5 5 . . . . 
        9 9 . . 5 5 5 5 5 5 5 5 5 . . 9 9 
        9 9 9 . 5 5 5 5 5 5 5 5 5 . 9 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 9 
        9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
        . 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 . 
        . . 9 9 9 5 4 f 4 f 4 5 9 9 9 . . 
        . . . . . 5 5 f 5 f 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . e e e . . . . . . . 
        . . . . . . e 5 5 5 e . . . . . . 
        . . . . . . . e e e . . . . . . . 
        `],
    100,
    true
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    Bezzo = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, BagFly, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Bezzo,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        9 . . . . f f f f f f f . . . . 9 
        9 9 . . . f f 2 f 2 f f . . . 9 9 
        9 9 9 . . f f 2 f 2 f f . . 9 9 9 
        9 9 9 2 2 f f f f f f f 2 2 9 9 9 
        . 9 9 9 2 2 f f f f f 2 2 9 9 9 . 
        . . 9 9 f f 2 2 2 2 2 f f 9 9 . . 
        . . f f f f f f f f f f f f f . . 
        f f . . f f f f f f f f f . . f f 
        f f . f . f f f f f f f . f . f f 
        . . f f . . . . . . . . . f f . . 
        . . f . . . . . . . . . . . f . . 
        . . f . . . . . . . . . . . f . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . 2 2 f f f f f f f 2 . . . . 
        . . 9 9 2 2 f f f f f 2 2 9 9 . . 
        . 9 9 9 f f 2 2 2 2 2 f f 9 9 9 . 
        9 9 f f f f f f f f f f f f f 9 9 
        f f 9 . f f f f f f f f f . 9 f f 
        f f . f . f f f f f f f . f . f f 
        9 . f f . . . . . . . . . f f . 9 
        . . f . . . . . . . . . . . f . . 
        . . f . . . . . . . . . . . f . . 
        `],
    100,
    true
    )
    Bezzo.setKind(SpriteKind.Lil_Fly)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grasshopper, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Grasshopper, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 1319, 1, 255, 0, 354, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . 7 . . . . . . . 7 7 7 7 . . 
        . . . 7 . . 7 7 7 7 7 . 7 . . . . 
        . . . 7 7 7 1 1 1 1 1 7 . . . . . 
        . . . 7 . 7 f f f f f 7 . . . . . 
        . . . . . 7 1 1 1 1 1 7 . . . . . 
        . . . . 7 7 f f f f f 7 7 . . . . 
        . . . 7 . 7 1 1 1 1 1 7 . 7 . . . 
        . 5 5 . . . 7 f f f 7 . . . 5 5 . 
        . 5 5 . . 7 7 5 7 5 7 7 . . 5 5 . 
        . . . . . 7 5 f 5 f 5 7 . . . . . 
        . . . . . 6 5 f 5 f 5 6 . . . . . 
        . . . . . 7 5 f 5 f 5 7 . . . . . 
        . . . . . 7 7 5 7 5 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 6 . . . . . 6 . . . . . 
        . . 6 6 6 . . . . . . . 6 6 6 . . 
        `],
    100,
    false
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Fly, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 2847, 1, 255, 0, 247, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f . 
        . . f . . . . . . . . . f f f . . 
        . f f f . f f f f f f f . f . . . 
        f f . . f f f f f f f f f . . . . 
        9 9 . . f f f f f f f f f . . 9 9 
        9 9 9 . f f f f f f f f f . 9 9 9 
        9 9 . 9 f f f f f f f f f 9 . 9 9 
        . . . 9 9 f f f f f f f 9 9 . . 9 
        . . 9 9 9 f f 2 f 2 f f 9 9 9 . . 
        . . 9 9 9 f b 2 b 2 b f 9 9 9 . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . f f . . . . . . . . . . . . . . 
        . . f f f . . . . . . . . . f . . 
        . . . f . f f f f f f f . f f f . 
        . . . . f f f f f f f f f . . f f 
        9 9 . . f f f f f f f f f . . 9 9 
        9 9 9 . f f f f f f f f f . 9 9 9 
        9 9 . 9 f f f f f f f f f 9 . 9 9 
        9 . . 9 9 f f f f f f f 9 9 . . . 
        . . 9 9 9 f f 2 f 2 f f 9 9 9 . . 
        . . 9 9 9 f b 2 b 2 b f 9 9 9 . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        `],
    100,
    true
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bomb, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bomb, function (sprite, otherSprite) {
    if (true) {
        music.play(music.createSoundEffect(WaveShape.Square, 1519, 1, 203, 0, 407, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . b . . . . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f 1 f 1 f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . 4 . . . . . . . . 
            . . . . . . . . b . . . . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f 1 f 1 f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . . 
            . . . . . . . . b . . . . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f 1 f 1 f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        otherSprite.vy = -200
        otherSprite.ay = 500
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        info.changeScoreBy(1)
    } else {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        info.changeLifeBy(-2)
        music.play(music.createSong(hex`00c2010408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000c00000001000103040005000104`), music.PlaybackMode.InBackground)
    }
})
info.onScore(150, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Spider, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 3322, 3210, 255, 0, 482, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . f f . . . . . . . . . . . 
        . . . . . f f f . . . f f . . . . 
        . . . . . . f . . f f f . . . . . 
        . . . . f . f . . . f . f . . . . 
        . . . f f . f f f f f . f f . . . 
        . . f f . f f f f f f f . f f . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f c 5 c 5 c f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f . . . . 
        . . . . f f . . . f f f . . . . . 
        . . . . . f f f . . f . . . . . . 
        . . . . f . f . . . f . f . . . . 
        . . . f f . f f f f f . f f . . . 
        . . f f . f f f f f f f . f f . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f c 5 c 5 c f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spike, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Swatter.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Spike, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 4082, 1, 255, 0, 153, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        .........1........
        ........111.......
        ........111.......
        .....ffffbff......
        ....fffffbfff.....
        ...ffffffbffff....
        .11ffffffbffff....
        111bbbbbfbffff....
        .11fffffbfffff11..
        ...ffffbfbbbbb111.
        ...ffffbffffff11..
        ...ffffbffffff....
        ....fffbfffff.....
        .....ffbffff......
        ......111.........
        ......111.........
        .......1..........
        `],
    100,
    false
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fly, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Baby, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 4164, 2624, 218, 0, 378, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . b . . . 
        1 . . b . . 1 
        1 1 . b . 1 1 
        . 1 1 b 1 1 . 
        . . . b . . . 
        . . . b . . . 
        . f f . f f . 
        . f f . f f . 
        `],
    100,
    true
    )
    otherSprite.vy = -200
    otherSprite.ay = 500
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Robot, function (sprite, otherSprite) {
    if (true) {
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 905, 1, 220, 0, 518, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . 4 f 4 . . . . . . 
            . . . . . . 4 5 5 5 4 . . . . . 
            . . . . . . 4 5 5 5 4 . . . . . 
            . . . . . . 4 5 5 5 4 . . . . . 
            . . . . . 4 5 5 5 5 5 4 . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            1 1 1 . 4 5 5 5 5 5 5 4 . 1 1 1 
            1 1 1 1 4 1 5 5 5 5 5 4 1 1 1 1 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 5 5 5 5 5 5 4 . . . . 
            . . . . 4 4 f 4 4 f 4 4 . . . . 
            . 2 . . 4 5 5 5 5 5 5 4 . . 2 . 
            . . f f . 4 4 4 4 4 4 . f f . . 
            `],
        100,
        false
        )
        otherSprite.vy = -200
        otherSprite.ay = 500
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-2)
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lil_Fly, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wasp, function (sprite, otherSprite) {
    if (true) {
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 2483, 1, 118, 0, 272, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . 9 . . . . . f f f . . . . . 9 . 
            9 9 . . . . f f f f f . . . . 9 9 
            9 9 9 . . . f f f f f . . . 9 9 9 
            9 9 9 9 . . f f f f f . . 9 9 9 9 
            9 9 9 9 9 . 5 5 5 5 5 . 9 9 9 9 9 
            9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
            9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
            . 9 9 9 9 9 f f f f f 9 9 9 9 9 . 
            . . 9 9 9 . f f f f f . 9 9 9 . . 
            . . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . 5 f 5 f 5 . . . . . . 
            . . . . . . 4 f 4 f 4 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . . 
            `],
        100,
        false
        )
        otherSprite.vy = -200
        otherSprite.ay = 500
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-2)
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        music.play(music.createSoundEffect(WaveShape.Noise, 324, 5000, 255, 0, 202, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . f f 
            b b f . . . . . . . . . . . f b b 
            b b f f . . f f f f f . . f f b b 
            b f . b f f f f f f f f f b b . . 
            . . . f b f f 5 f 5 f f b f b . . 
            . . f b b f c 5 c 5 c f b b f . . 
            . . . . . f f 5 f 5 f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . f f f f f . . . . . . 
            . . . . . . . f . f . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        otherSprite.vy = -200
        Baton.ay = 500
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-2)
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeLifeBy(-1)
    music.pewPew.play()
})
let Hopper: Sprite = null
let Fly_Parent: Sprite = null
let projectile: Sprite = null
let Spiku: Sprite = null
let Ocho: Sprite = null
let FlyBomb: Sprite = null
let Heal: Sprite = null
let Zapper: Sprite = null
let Flyzer: Sprite = null
let Baton: Sprite = null
let BagFly: Sprite = null
let Bezzo: Sprite = null
let Swatter: Sprite = null
scene.setBackgroundImage(assets.image`background0`)
Swatter = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(Swatter, 200, 200)
Swatter.setStayInScreen(true)
info.setLife(6)
game.onUpdateInterval(5000, function () {
    Flyzer = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Flyzer,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        9 9 . . . . f f f f f . . . . 9 9 
        9 9 9 . . f f f f f f f . . 9 9 9 
        9 9 9 9 . f f 2 f 2 f f . 9 9 9 9 
        9 9 9 9 9 f f 2 f 2 f f 9 9 9 9 9 
        . 9 9 9 9 f f 2 f 2 f f 9 9 9 9 . 
        . . 9 9 9 f f f f f f f 9 9 9 . . 
        . . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . . 
        f f . . f f f f f f f f f . . f f 
        . f f f . f f f f f f f . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . 6 . . . . . . . . . . . . . 6 . 
        9 9 9 . . . f f f f f . . . 9 9 9 
        6 9 9 9 . f f f f f f f . 9 9 9 6 
        9 9 9 9 9 f f 2 f 2 f f 9 9 9 9 9 
        9 1 9 9 9 f f 2 f 2 f f 9 9 9 1 9 
        9 9 1 9 9 f f f f f f f 9 9 1 9 9 
        9 9 9 6 9 f f f f f f f 9 6 9 9 9 
        . 6 9 . f f f f f f f f f . 9 6 . 
        . . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . . 
        f f . . f f f f f f f f f . . f f 
        . f f f . f f f f f f f . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . 9 9 . . . . . . . 9 9 . . . 
        . . . . . . . . . . . . . . . . . 
        9 . . . . . f f f f f . . . . . 9 
        . . . . . f 2 f f f 2 f . . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . 9 9 9 f f f f f f f 9 9 9 . . 
        . 9 9 9 9 f f f f f f f 9 9 9 9 . 
        9 9 9 9 9 f f f f f f f 9 9 9 9 9 
        9 9 9 9 f f f f f f f f f 9 9 9 9 
        9 9 9 . f f f f f f f f f . 9 9 9 
        9 9 . . f f f f f f f f f . . 9 9 
        f f . . f f f f f f f f f . . f f 
        . f f f . f f f f f f f . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Flyzer.setKind(SpriteKind.Fly)
})
game.onUpdateInterval(15000, function () {
    Zapper = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Zapper,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . 9 . . . . . 5 5 5 . . . . . 9 . 
        9 9 . . . . f 5 5 5 f . . . . 9 9 
        9 9 9 . . . 5 f 5 f 5 . . . 9 9 9 
        9 9 9 9 . . 5 5 5 5 5 . . 9 9 9 9 
        9 9 9 9 9 . f f f f f . 9 9 9 9 9 
        9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 
        9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
        . 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 . 
        . . 9 9 9 . 5 5 5 5 5 . 9 9 9 . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . . f f f . . . . . . . 
        . . . . . . . . f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . . 
        . . . . . . f 5 5 5 f . . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . . 
        . . 9 9 9 . f f f f f . 9 9 9 . . 
        . 9 9 9 9 9 f f f f f 9 9 9 9 9 . 
        9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
        9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
        9 9 9 9 9 . 5 5 5 5 5 . 9 9 9 9 9 
        9 9 9 9 . . f f f f f . . 9 9 9 9 
        9 9 9 . . . f f f f f . . . 9 9 9 
        9 9 . . . . f f f f f . . . . 9 9 
        . 9 . . . . . f f f . . . . . 9 . 
        . . . . . . . . f . . . . . . . . 
        `],
    100,
    true
    )
    Zapper.ax = randint(-50, -100)
    Zapper.x = randint(10, 50)
    Zapper.setKind(SpriteKind.Wasp)
})
game.onUpdateInterval(25000, function () {
    Heal = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Heal,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 . . . . . . . . . . . . . 1 
        1 1 1 . . f f f . f f f . . 1 1 
        . 1 1 1 f 2 2 2 f 2 2 2 f 1 1 1 
        . 1 1 1 f 2 2 f 2 f 1 2 f 1 1 1 
        . . 1 1 f 2 2 f 2 f 2 2 f 1 1 . 
        . . . 1 1 f 2 4 4 4 2 f 1 1 . . 
        . . . 1 1 f f 4 4 4 f f 1 1 . . 
        . . . . 1 1 f f 4 f f 1 1 . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 2 2 2 f 2 2 2 f . . . 
        . . . . f 2 2 f 2 f 1 2 f . . . 
        . . . . f 2 2 f 2 f 2 2 f . . . 
        . . . 1 1 f 2 4 4 4 2 f 1 1 . . 
        . . 1 1 1 f f 4 4 4 f f 1 1 1 . 
        . 1 1 1 1 1 f f 4 f f 1 1 1 1 1 
        . 1 1 1 . . . f f f . . . 1 1 1 
        . 1 1 . . . . . . . . . . . 1 1 
        . 1 . . . . . . . . . . . . . 1 
        . 1 . . . . . . . . . . . . . 1 
        `],
    100,
    true
    )
    Heal.ax = randint(-50, -1000)
    Heal.x = randint(10, 50)
    Heal.setKind(SpriteKind.Food)
})
game.onUpdateInterval(25000, function () {
    BagFly = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    BagFly,
    [img`
        . . . . . . . e e e . . . . . . . 
        . . . . . . e 5 5 5 e . . . . . . 
        . . . . . . . e e e . . . . . . . 
        9 9 . . . . 5 5 5 5 5 . . . . 9 9 
        9 9 9 . . 5 5 5 5 5 5 5 . . 9 9 9 
        9 9 9 9 . 5 5 f 5 f 5 5 . 9 9 9 9 
        9 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 9 
        . 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 . 
        . . 9 9 9 5 5 5 5 5 5 5 9 9 9 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . . 
        f f . . 5 5 5 5 5 5 5 5 5 . . f f 
        . f f f . 5 5 5 5 5 5 5 . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . e e e . . . . . . . 
        . . . . . . e 5 5 5 e . . . . . . 
        . 6 . . . . . e e e . . . . . 6 . 
        9 9 9 . . . 5 5 5 5 5 . . . 9 9 9 
        6 9 9 9 . 5 5 5 5 5 5 5 . 9 9 9 6 
        9 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 9 
        9 1 9 9 9 5 5 f 5 f 5 5 9 9 9 1 9 
        9 9 1 9 9 5 5 f 5 f 5 5 9 9 1 9 9 
        9 9 9 6 9 5 5 5 5 5 5 5 9 6 9 9 9 
        . 6 9 . 5 5 5 5 5 5 5 5 5 . 9 6 . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . . 
        f f . . 5 5 5 5 5 5 5 5 5 . . f f 
        . f f f . 5 5 5 5 5 5 5 . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . e e e . . . . . . . 
        . . . . . . e 5 5 5 e . . . . . . 
        . . . . . . . e e e . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . . 
        . . 9 9 9 5 5 f 5 f 5 5 9 9 9 . . 
        . 9 9 9 9 5 5 f 5 f 5 5 9 9 9 9 . 
        9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 9 
        9 9 9 . 5 5 5 5 5 5 5 5 5 . 9 9 9 
        9 9 . . 5 5 5 5 5 5 5 5 5 . . 9 9 
        f f . . 5 5 5 5 5 5 5 5 5 . . f f 
        . f f f . 5 5 5 5 5 5 5 . f f f . 
        . . f . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    BagFly.ax = randint(-50, -100)
    BagFly.x = randint(10, 50)
    BagFly.setKind(SpriteKind.Bag)
})
game.onUpdateInterval(25000, function () {
    FlyBomb = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    FlyBomb,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . b . . . . . . 2 . . . . . . b . 
        b b b . . . . . b . . . . . b b b 
        b b b b . . f f f f f . . b b b b 
        b b b b b f f f f f f f b b b b b 
        b b b b b f f 1 f 1 f f b b b b b 
        b b b b b f f 1 f 1 f f b b b b b 
        . b b b b f f b f b f f b b b b . 
        . . . . . f f f f f f f . . . . . 
        . . . c c c f f f f f c c c . . . 
        . . c c . . . . . . . . . c c . . 
        . . c . . . . . . . . . . . c . . 
        . . c . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . . 
        . . . . . . . . b . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . b b b b f f f f f f f b b b b . 
        b b b b b f f 1 f 1 f f b b b b b 
        b b b b b f f 1 f 1 f f b b b b b 
        b b b b b f f b f b f f b b b b b 
        b b b b . f f f f f f f . b b b b 
        b b b c c c f f f f f c c c b b b 
        . b c c . . . . . . . . . c c b . 
        . . c . . . . . . . . . . . c . . 
        . . c . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    FlyBomb.ax = randint(-50, -100)
    FlyBomb.x = randint(10, 50)
    FlyBomb.setKind(SpriteKind.Bomb)
})
game.onUpdateInterval(6500, function () {
    Ocho = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Ocho,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . f f . f f f f f f f . f f . . 
        . . . f f . f f f f f . f f . . . 
        . . . . f . f . . . f . f . . . . 
        . . . . . f f f . f f f . . . . . 
        . . . . f f . . . . . f f . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Ocho.vy = randint(0, -400)
    Ocho.ay = 500
    Ocho.setKind(SpriteKind.Spider)
})
game.onUpdateInterval(7000, function () {
    Spiku = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Spiku,
    [img`
        ........1.........
        .......111........
        .......111........
        .....fffbfff......
        ....ffffbffff.....
        ...fffffbfffff....
        ...fffffbfffff....
        .11fffffbfffff11..
        111bbbbbbbbbbb111.
        .11fffffbfffff11..
        ...fffffbfffff....
        ...fffffbfffff....
        ....ffffbffff.....
        .....fffbfff......
        .......111........
        .......111........
        ........1.........
        `,img`
        .......1..........
        ......111.........
        ......111.........
        .....ffbffff......
        ....fffbfffff.....
        ...ffffbffffff....
        ...ffffbffffff11..
        ...ffffbfbbbbb111.
        .11fffffbfffff11..
        111bbbbbfbffff....
        .11ffffffbffff....
        ...ffffffbffff....
        ....fffffbfff.....
        .....ffffbff......
        ........111.......
        ........111.......
        .........1........
        `,img`
        ..................
        .1.............1..
        ..11.........11...
        ..111fffffff111...
        ...1bfffffffb1....
        ...ffbfffffbff....
        ...fffbfffbfff....
        ...ffffbfbffff....
        ...fffffbfffff....
        ...ffffbfbffff....
        ...fffbfffbfff....
        ...ffbfffffbff....
        ...1bfffffffb1....
        ..111fffffff111...
        ..11.........11...
        .1.............1..
        ..................
        `,img`
        .........1........
        ........111.......
        ........111.......
        .....ffffbff......
        ....fffffbfff.....
        ...ffffffbffff....
        .11ffffffbffff....
        111bbbbbfbffff....
        .11fffffbfffff11..
        ...ffffbfbbbbb111.
        ...ffffbffffff11..
        ...ffffbffffff....
        ....fffbfffff.....
        .....ffbffff......
        ......111.........
        ......111.........
        .......1..........
        `],
    100,
    true
    )
    Spiku.vy = randint(0, -300)
    Spiku.ay = 500
    Spiku.setKind(SpriteKind.Spike)
})
game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Fly_Parent, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    projectile,
    [img`
        . f f . f f . 
        . f f . f f . 
        1 . . b . . 1 
        1 1 . b . 1 1 
        . 1 1 b 1 1 . 
        . . . b . . . 
        . . . b . . . 
        . . . b . . . 
        `,img`
        . f f . f f . 
        . f f . f f . 
        . . . b . . . 
        . . . b . . . 
        1 1 1 b 1 1 1 
        1 1 . b . 1 1 
        . . . b . . . 
        . . . b . . . 
        `,img`
        . f f . f f . 
        . f f . f f . 
        . . . b . . . 
        . . . b . . . 
        . 1 1 b 1 1 . 
        1 1 . b . 1 1 
        1 . . b . . 1 
        . . . b . . . 
        `,img`
        . f f . f f . 
        . f f . f f . 
        . . . b . . . 
        . . . b . . . 
        1 1 1 b 1 1 1 
        1 1 . b . 1 1 
        . . . b . . . 
        . . . b . . . 
        `],
    100,
    true
    )
    projectile.setKind(SpriteKind.Baby)
})
game.onUpdateInterval(3000, function () {
    Hopper = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Hopper,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . 6 6 6 . . . . . . . 6 6 6 . . 
        . . . . . 6 . . . . . 6 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 5 7 5 7 7 . . . . . 
        . . . . . 7 5 f 5 f 5 7 . . . . . 
        . . . . . 7 5 f 5 f 5 7 . . . . . 
        . . . . . 7 5 f 5 f 5 7 . . . . . 
        . 5 5 . . 7 7 5 7 5 7 7 . . 5 5 . 
        . 5 5 . . . 7 7 f 7 7 . . . 5 5 . 
        . . . 7 . 7 1 1 1 1 1 7 . 7 . . . 
        . . . . 7 7 f f f f f 7 7 . . . . 
        . . . . . 7 1 1 1 1 1 7 . . . . . 
        . . . . 7 7 f f f f f 7 . . . . . 
        . . . 7 . 7 1 1 1 1 1 7 . . . . . 
        . 7 7 7 7 . 7 7 7 7 7 . 7 . . . . 
        . . . . . . . . . . . 7 7 7 7 . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . 6 6 6 . . . . . . . 6 6 6 . . . 
        . . . . 6 . . . . . 6 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . . 
        . . . . 7 7 5 7 5 7 7 . . . . . . 
        . . . . 7 5 f 5 f 5 7 . . . . . . 
        . . . . 7 5 f 5 f 5 7 . . . . . . 
        . . . . 7 5 f 5 f 5 7 . . . . . . 
        5 5 . . 7 7 5 7 5 7 7 . . 5 5 . . 
        5 5 . . . 7 7 f 7 7 . . . 5 5 . . 
        . . 7 . 7 1 1 1 1 1 7 . 7 . . . . 
        . . . 7 7 f f f f f 7 7 . . . . . 
        . . . . 7 1 1 1 1 1 7 . . . . . . 
        . . . . 7 f f f f f 7 7 . . . . . 
        . . . . 7 1 1 1 1 1 7 . 7 . . . . 
        . . . 7 . 7 7 7 7 7 . 7 7 7 7 . . 
        . 7 7 7 7 . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Hopper.vy = randint(0, -300)
    Hopper.ay = 500
    Hopper.setKind(SpriteKind.Grasshopper)
})
game.onUpdateInterval(20000, function () {
	
})
game.onUpdateInterval(20000, function () {
    Fly_Parent = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Fly_Parent,
    [img`
        . . f f . 4 4 4 4 4 4 . f f . . 
        . 2 . . 4 5 5 5 5 5 5 4 . . 2 . 
        . . . . 4 5 f 5 5 f 5 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        1 1 1 1 4 1 5 5 5 5 5 4 1 1 1 1 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 5 5 5 5 5 4 . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . f 4 4 4 . . . . . . . 
        `,img`
        . . f f . 4 4 4 4 4 4 . f f . . 
        . 2 . . 4 5 5 5 5 5 5 4 . . 2 . 
        . . . . 4 5 2 5 5 2 5 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        1 1 1 1 4 1 5 5 5 5 5 4 1 1 1 1 
        1 1 1 1 4 5 5 5 5 5 5 4 1 1 1 1 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        . . . . . 4 5 5 5 5 5 4 . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . f 4 4 4 . . . . . . . 
        `,img`
        . . f f . 4 4 4 4 4 4 . f f . . 
        . 2 . . 4 5 5 5 5 5 5 4 . . 2 . 
        . . . . 4 5 f 5 5 f 5 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 1 5 5 5 5 5 4 . . . . 
        1 1 1 1 4 5 5 5 5 5 5 4 1 1 1 1 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        . . . . . 4 5 5 5 5 5 4 . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . f 4 4 4 . . . . . . . 
        `,img`
        . . f f . 4 4 4 4 4 4 . f f . . 
        . 2 . . 4 5 5 5 5 5 5 4 . . 2 . 
        . . . . 4 5 2 5 5 2 5 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        1 1 1 1 4 1 5 5 5 5 5 4 1 1 1 1 
        1 1 1 1 4 5 5 5 5 5 5 4 1 1 1 1 
        1 1 1 . . 4 4 4 4 4 4 . . 1 1 1 
        . . . . . 4 5 5 5 5 5 4 . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . f 4 4 4 . . . . . . . 
        `],
    100,
    true
    )
    Fly_Parent.setKind(SpriteKind.Robot)
})
game.onUpdateInterval(599, function () {
    Bezzo = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, BagFly, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Bezzo,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        9 . . . . f f f f f f f . . . . 9 
        9 9 . . . f f 2 f 2 f f . . . 9 9 
        9 9 9 . . f f 2 f 2 f f . . 9 9 9 
        9 9 9 2 2 f f f f f f f 2 . 9 9 9 
        . 9 9 9 2 2 f f f f f 2 2 9 9 9 . 
        . . 9 9 f f 2 2 2 2 2 f f 9 9 . . 
        . . f f f f f f f f f f f f f . . 
        f f . . f f f f f f f f f . . f f 
        f f . f . f f f f f f f . f . f f 
        . . f f . . . . . . . . . f f . . 
        . . f . . . . . . . . . . . f . . 
        . . f . . . . . . . . . . . f . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . . . f f 2 f 2 f f . . . . . 
        . . . 2 2 f f f f f f f 2 . . . . 
        . . 9 9 2 2 f f f f f 2 2 9 9 . . 
        . 9 9 9 f f 2 2 2 2 2 f f 9 9 9 . 
        9 9 f f f f f f f f f f f f f 9 9 
        f f 9 . f f f f f f f f f . 9 f f 
        f f . f . f f f f f f f . f . f f 
        9 . f f . . . . . . . . . f f . 9 
        . . f . . . . . . . . . . . f . . 
        . . f . . . . . . . . . . . f . . 
        `],
    100,
    true
    )
    Bezzo.setKind(SpriteKind.Lil_Fly)
})
game.onUpdateInterval(10000, function () {
    Baton = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    animation.runImageAnimation(
    Baton,
    [img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . f . f . . . . . . . 
        f f . . . . f f f f f . . . . f f 
        b b f . . f f f f f f f . . f b b 
        b b f f . f f 5 f 5 f f . f f b b 
        b f b b f f f 5 f 5 f f f b b f b 
        . b b f b f f 5 f 5 f f b f b b . 
        . . f b b f f f f f f f b b f . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . c . . . . . f . f . . . . . c . 
        b b b . . . f f f f f . . . b b b 
        c b b b . f f f f f f f . b b b c 
        b b b b b f f 5 f 5 f f b b b b b 
        b 1 b b b f f 5 f 5 f f b b b 1 b 
        b b 1 b b f f 5 f 5 f f b b 1 b b 
        b b b c b f f f f f f f b c b b b 
        . c b . . . f f f f f . . . b c . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . f . f . . . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . . 
        . . f b b f f 5 f 5 f f b b f . . 
        . b b f b f f 5 f 5 f f b f b b . 
        b f b b f f f f f f f f f b b f b 
        b b f f . . f f f f f . . f f b b 
        b b f . . . . . . . . . . . f b b 
        f f . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Baton.setKind(SpriteKind.Enemy)
})
