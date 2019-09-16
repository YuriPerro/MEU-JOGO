function tiros(exemplo = {}){
    var {
        x = 100,
        y = 200,
        w = 7,
        h = 7,
        vx = 100,
        cd = 0,
        color = "black",
    } = exemplo;

    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.cd = cd;
    this.color = color;
}

tiros.prototype = new tiros({});
tiros.prototype.constructor = tiros;

tiros.prototype.desenha = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

tiros.prototype.mover = function(dt){
    this.x = this.x + this.vx * dt;
    
}

tiros.prototype.colidiu = function(){

}