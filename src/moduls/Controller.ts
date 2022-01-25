import Food from "./Food";
import GamePanel from "./GamePanel";
import Sanke from "./Sanke";

// 游戏总控制器
class Controller{
    // 食物类
    food: Food
    // 计分板类
    gamePanel: GamePanel
    // 蛇类
    sanke: Sanke
    // 蛇移动方向
    direction: string = ""
    // 蛇是否存活
    isTrue:boolean = true
    // 构造函数
    constructor() {
        this.food = new Food()
        this.gamePanel = new GamePanel(2)
        this.sanke = new Sanke()
    }
    /**
     * 游戏实例化
     * 实例化之后游戏需要监听点击
     */
    init(){
        document.addEventListener("keydown",this.keyDownHandle.bind(this))
        this.sankeRun()
        console.log("游戏初始化完毕。。");
    }
    // 键盘按下事件
    keyDownHandle(event: KeyboardEvent){
        this.direction = event.key
    }
    // 蛇移动事件
    sankeRun(){
        let X = this.sanke.X
        let Y = this.sanke.Y
        // 根据移动方向设置不同的值，默认初始是没值，所以不移动            
        switch (this.direction) {
            case "ArrowUp":
                Y -=10
                break;
            case "ArrowRight":
                X +=10
                break;
            case "ArrowDown":
                Y +=10
                break;
            case "ArrowLeft":
                X -=10
                break;
            default:
                break;
        }

        // 检测是否吃到食物
        this.checkEat(X,Y)

        // 设置值，并捕获蛇撞墙的异常
        try {
            this.sanke.X = X
            this.sanke.Y = Y
        } catch (error) {
            alert(error.message)
            this.isTrue = false
        }

        // 定时器循环 ,每级提升30速度
        let time = 300 - (this.gamePanel.level*30)
        this.isTrue && setTimeout(this.sankeRun.bind(this), time < 60 ? 60 : time );
    }

    // 食物碰撞检测
    checkEat(X:number, Y:number){
        // 吃到食物，移动食物，增加分数，增加蛇身
        if(X === this.food.X && Y === this.food.Y){
            this.food.change()
            this.gamePanel.addScore()
            this.sanke.addBody()
        }
    }
}

export default Controller