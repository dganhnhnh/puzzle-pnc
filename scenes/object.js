import Phaser from '../lib/phaser.js'
let currentFrame=0
export default class PuzzleObject extends Phaser.GameObjects.Image{
    
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)
        scene.add.existing(this)
        //to display graphics of Pad
        
    }
    preupdate(){
        this.setInteractive()
        
    }
    // these methods only needed for more complicated stuff

    setFr(){
        
        this.on(
            'pointerdown',function(){
                currentFrame++
                this.setFrame(currentFrame)
            }
        )
    }
    
}