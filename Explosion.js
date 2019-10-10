function Explosion(params ={}) {
    exemplo = {
        x: 0,
        y: 0,
        frame: 0,
        w: 64,
        h: 64,
        props: {
            tipo: "boom"
        },
    }
    Object.assign(this, exemplo, params);
}

Explosion.prototype.mover = function(dt){
    this.frame += 21*dt;
    if(Math.floor(this.frame) > 16){
        //this.frame = 0;
        this.morto = true;
    }
}

Explosion.prototype.desenhar = function(assetsMng){
    ctx.save();
    ctx.translate(this.x, this.y);
    var F = Math.floor(this.frame);
    ctx.drawImage(
        assetsMng.img("explosion"),
        (F%4)*128,
        Math.floor(F/4)*128,
        128,
        128,
        -this.w/2,
        -this.h/2,
        this.w,
        this.h 
    );
    ctx.restore();
}

Explosion.prototype.comportar = function(){

}

Explosion.prototype.colidiuCom = function(){
    return false;
}