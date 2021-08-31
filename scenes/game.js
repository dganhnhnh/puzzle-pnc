import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene{
    //play level 0
    constructor(){
        super('game')
    }
    preload(){
        
    }
    create(){

        this.scene.run('level0')
        this.scene.run('level1')
    }
}