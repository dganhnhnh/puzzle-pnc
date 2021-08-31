import Phaser from '../lib/phaser.js';

export default class Preloader extends Phaser.Scene{
    constructor(){
        super('preloader')
    }
    preload(){
        this.load.image('bg','assets/level0/bg.png')
        this.load.spritesheet('obj0','assets/level0/obj0.png',{frameWidth:124,frameHeight:141})
        this.load.spritesheet('obj1','assets/level0/obj1.png',{frameWidth:60,frameHeight:59})
        this.load.spritesheet('obj2','assets/level0/obj2.png',{frameWidth:128,frameHeight:128})
        this.load.image('mask', 'assets/level0/mask.png')
        this.load.image('obj1_0', 'assets/level0/obj1_0.png')
    }
    create(){
        this.scene.run('game')
    }
}