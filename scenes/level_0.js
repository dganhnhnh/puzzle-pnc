import Phaser from '../lib/phaser.js';
import PuzzleObject from './object.js';

export default class Level_0 extends Phaser.Scene{
    constructor(){
        super('level0')
    }
    preload(){
    }
    create(){
        this.add.image(400,300,'bg').setPipeline('Light2D').setAlpha(0.6)

//the light thingy
        this.lights.enable()
        this.lights.setAmbientColor(0x555555)
        var light = this.lights.addLight(400,300,200).setIntensity(2)

        this.input.on('pointermove', function(pointer){
            light.x = pointer.x
            light.y =pointer.y
        })

        const object0 = new PuzzleObject(this,200,200,'obj0',0)
        object0.preupdate()
        object0.setFr()
        //this worked! but is bad :(
        const object2 = new PuzzleObject(this,200,400,'obj2',0)
        object2.preupdate()
        object2.setFr()
        console.log(object2.frameTotal)     //does this work??
    
        const object1 = this.make.sprite({      //what is make?
            x:400,y:200,key:'obj1_0'
        },true)
        const mask= this.make.image({
            x:100,y:100,key:'mask'
        },false)
        // const mask = this.add.rectangle(100,100,128,128,0xffffff,1)
        object1.mask= new Phaser.Display.Masks.BitmapMask(this,mask)

        this.input.on('pointermove',function(pointer){
            mask.x=pointer.x
            mask.y=pointer.y
        })
    }
    update(){

    }
}