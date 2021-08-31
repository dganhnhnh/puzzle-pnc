import Phaser from './lib/phaser.js'
import Preloader from './scenes/preloader.js'
import Game from './scenes/game.js'
import Level_0 from './scenes/level_0.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    dom:{
        createContainer:true
    },
    scene: [Preloader,Game,Level_0],
    physics:{
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
})