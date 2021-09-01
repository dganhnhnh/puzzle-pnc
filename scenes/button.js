import Phaser from '../lib/phaser.js'

export default class Button extends Phaser.GameObjects.Image{
    
    constructor(scene,x,y,texture,frame,callback){
        super(scene,x,y,texture,frame,callback)
        this.setInteractive()
        this.myCallback =  callback
        this.on('pointerdown', this.openPopup, this)

        scene.add.existing(this)
    }
    pointerDown(pointer){
        this.x -= 20
    }

    openPopup(popup,pointer){
        // this.popup = this.scene.add.sprite(300,100,'mask')
        // this.popup.input.enableDrag()
        // this.popup=inventory
        // this.popup.addChild(closeButton)
    }
}