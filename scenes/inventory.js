import Phaser from '../lib/phaser.js'

export class Inventory extends Phaser.GameObjects.Image{
    
    constructor(scene,arr,x,y,texture,frame){
        super(scene,arr,x,y,texture,frame)
        scene.add.existing(this)
        //to display graphics of Pad
        this.inventoryArr= []
    }
    attachObjects(arr){
        for (let i=0; i<arr.length;i++){
            this.inventoryArr[i] = this.scene.add.sprite(500,100*(i+1),arr[i].texture)
            .setScale(0.5)
            //attach to scene only. todo: make real inventory and attach to it
            console.log(this.inventoryArr[i])
        }
    }
    toggle(){
        for (let i=0; i<this.inventoryArr.length;i++){
            this.inventoryArr[i].setVisible(false)
        }
    }
    takeOut(){
        
    }
}