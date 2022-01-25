// 蛇类
class Sanke{
    // 蛇容器
    element: HTMLElement
    // 蛇头
    head: HTMLElement
    // 蛇身
    bodys: HTMLCollection
    constructor() {
        this.element = document.getElementById("snake")
        this.head = this.element.querySelector("div")
        this.bodys = this.element.getElementsByTagName("div")
    }

    // 蛇头坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value:number){
        // 当前值和要移动的值相同时，直接返回，避免出现执行两次 movebody 
        if(value === this.X){
            return 
        }
        // 设置值时判断撞墙
        if(value < 0 || value > 290){
            throw new Error("撞墙了！");
        }
        // 处理走回头路
        if(this.bodys[1] && value ===  (this.bodys[1] as HTMLElement).offsetLeft){
            // 禁止往左走
            if(this.X > value){
                value = this.X+10
            }else{ //禁止往右走
                value = this.X-10
            }
        }
        // 移动身体
        this.movebody()
        // 移动头部
        this.head.style.left = value+"px"  
        // 检测是否撞身体
        this.cheackbody()
    }
    set Y(value:number){
        // 当前值和要移动的值相同时，直接返回，避免出现执行两次 movebody 
        if(value === this.Y){
            return 
        }
        // 设置值时判断撞墙
        if(value < 0 || value > 290){
            throw new Error("撞墙了！");
        }
        // 处理走回头路
        if(this.bodys[1] && value ===  (this.bodys[1] as HTMLElement).offsetTop){
            // 禁止往左走
            if(this.Y > value){
                value = this.Y+10
            }else{ //禁止往右走
                value = this.Y-10
            }
        }
        // 移动身体
        this.movebody()
        // 移动头部
        this.head.style.top = value+"px"     
        // 检测是否撞身体
        this.cheackbody()
    }

    // 增加长度
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 蛇身移动，思路：把后一个身体格子设置成前一个身体格子的坐标
    movebody(){
        /**
         * 这里要从后往前循环，先移动最后一个格子，再移动前一个格子，
         * 否则先移动前面的格子的化，再移动后面的格子就没办法取到前一格子正确的位置，因为已经呗移动过了
         */ 

        for(let i=this.bodys.length-1; i>0; i--){
            // 获取前边身体的位置
            let X = (this.bodys[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodys[i-1]as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodys[i] as HTMLElement).style.left = X + 'px';
            (this.bodys[i] as HTMLElement).style.top = Y + 'px';

        }
    }
    // 检测是否身体相撞
    cheackbody(){
        // 循环判断身体是否与头部重合
        for(let i = 1; i<this.bodys.length; i++){
            let bd = (this.bodys[i] as HTMLElement)
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error("吃身体了！");                
            }
        }
    }


}

export default Sanke