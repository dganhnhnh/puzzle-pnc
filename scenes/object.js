import Phaser from '../lib/phaser.js'

export default class PuzzleObject extends Phaser.GameObjects.Image{
    
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)
        scene.add.existing(this)
        //to display graphics of Pad
        this.currentFrame=0
        this.setInteractive()
    }
    
    // these methods only needed for more complicated stuff

    setFr(){
        this.on(
            'pointerdown',function(){
                this.currentFrame++
                this.setFrame(this.currentFrame)
            }
        )
    }
    capture(arr){
        this.on(
            'pointerdown',function(){
                //if this not exists in arr yet,
                for(let i=0; i<arr.length;i++){
                    if(arr[i] === this){return}
                }
                arr.push(this)
                console.log(arr)
            }
        )
    }
}