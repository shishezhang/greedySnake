/**
 * 定义食物类
 * 该类主要是用于修改布局中食物的位置和获取xy轴
 */
 class Food{
    element:HTMLElement
    constructor() {
        this.element = document.getElementById("food");
    }
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    /**
     * 修改食物位置
     * 注意：蛇每次移动是10，所以食物必须是 10 的整数
     * 注意：食物只能在舞台内活动，所以 XY轴 >= 0，XY轴 <= 290 (舞台宽高300，需要减去食物大小)
     */
    change(){
        // Math.round(Math.random() * 29) 随机0-29的整数
        let X = Math.round(Math.random() * 29) * 10
        let Y = Math.round(Math.random() * 29) * 10
        this.element.style.left = X+"px"
        this.element.style.top = Y+"px"
    }

}
// 导出
export default Food;

// new Food().change(); 