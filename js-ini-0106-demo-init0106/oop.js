class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Line{
    constructor(pointA,pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getDistance(){
        let dx = this.pointA.x - this.pointB.x;
        let dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
class Triangle {
    constructor(line1, line2, line3){
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }
    getPerimeter(){
        let disLine1 = line1.getDistance();
        let disLine2 = line2.getDistance();
        let disLine3 = line3.getDistance();
        return disLine1 + disLine2 + disLine3;
        
    }
}
let poin1 = new Point(1,1);
let poin2 = new Point(2,2);
let poin3 = new Point(3,3);

let line1 = new Line(poin1, poin3);
let line2 = new Line(poin1, poin2);
let line3 = new Line(poin2, poin3);
console.log(line1.getDistance())
let triangle = new Triangle(line1, line2, line3)
console.log(triangle.getPerimeter())
