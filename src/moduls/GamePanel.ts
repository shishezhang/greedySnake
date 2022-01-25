class GamePanel{
    // 分数、等级
    score = 0
    level = 1
    // 升级分数界限
    bounds:number
    // 分数、等级的dom
    scoreElenet: HTMLElement
    levelElenet: HTMLElement

    // 构造函数
    constructor(bounds:number = 10) {
        this.levelElenet = document.getElementById("level")
        this.scoreElenet = document.getElementById("score")
        this.bounds = bounds
    }
    
    // 分数增加
    addScore(){
        this.score++
        this.scoreElenet.innerHTML = this.score+"";
        // 增加一级
        if(this.score % this.bounds == 0){
            this.addLevel()
        }
    }
    // 等价增加
    addLevel(){
        this.level++
        this.levelElenet.innerHTML = this.level+""
    }
}

export default GamePanel;