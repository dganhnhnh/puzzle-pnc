import Phaser from '../lib/phaser.js'

export class FlashLight extends Phaser.GameObjects.Image{
    constructor(scene,arr,x,y,texture,frame){
        super(scene,arr,x,y,texture,frame)
        scene.add.existing(this)
        //to display graphics of Pad
        
        this.toggle.on(
            'pointerdown', this.lightOn,this
        )
    }
    lightOn(){
        let bLight = true
        this.scene.lights.enable()
        this.scene.lights.setAmbientColor(0x555555)
        var light = this.lights.addLight(400,300,200).setIntensity(2)

        this.input.on('pointermove', function(pointer){
            light.x = pointer.x
            light.y =pointer.y
        })

        //logic not right yet
    }
    lightOff(){

    }
}