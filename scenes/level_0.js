import Phaser from '../lib/phaser.js';
import PuzzleObject from './object.js';
import  Button  from './button.js';
import { Inventory } from './inventory.js';
import { FlashLight } from './flashlight.js';

let arr=[];let inventory;        let openClose=0;

export default class Level_0 extends Phaser.Scene{
    // /**@type {Phaser.GameObjects.Image} */
    // inventory

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
        
        
        // let light = new FlashLight(this,200,200)
        let toggle = this.add.image(500,500,'mask').setTint('0x00ff00')
        // toggle.on(
        //     'pointerdown',function(){
        //         this.scene.lights.disable()
        //     },this
        // )

        //the light toggle affect also the inventory 

        const object0 = new PuzzleObject(this,200,200,'obj0',0)
        object0.setFr()
        object0.capture(arr)
        // object0.hidden()
        //this worked! but is bad :(
        const object2 = new PuzzleObject(this,200,400,'obj2',0)
        object2.setFr()
        object2.capture(arr)
        // console.log(object2.frameTotal)     //does this work??
    
        const object1 = this.make.sprite({      //what is make?
            x:400,y:200,key:'obj1_0'
        },true)
        
        // const mask = this.add.rectangle(100,100,128,128,0xffffff,1)
        const mask= this.make.image({
            x:100,y:100,key:'mask'
        },false)
        object1.mask= new Phaser.Display.Masks.BitmapMask(this,mask)

        this.input.on('pointermove',function(pointer){
            mask.x=pointer.x
            mask.y=pointer.y
        })

        inventory = new Inventory(this,arr,500,400,'mask')
        // inventory.attachObjects(arr)
        const butt = new Button(this, 400,500,'mask', 0)
        butt.on(
            'pointerdown',function(){
                if(openClose === 0 && arr !== []){
                    inventory.attachObjects(arr); openClose =1
                }
                else {inventory.toggle(arr);openClose=0}
            }
        )
        
    }
    update(){
        if(openClose===1){
            inventory.attachObjects(arr)
        }
    }
}