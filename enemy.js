function enemy(exemplo = {}){
    var {
        x = 1300,
        y = 150,
        w = 40,
        h = 100,
        vx = 100,
        vy = 300,
        cont = 0,
        color = "black",
    } = exemplo;

    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.cont = cont;
}

enemy.prototype = new enemy();
enemy.prototype.constructor = enemy;

enemy.prototype.desenha = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

enemy.prototype.mover = function(dt){
    this.x = this.x - this.vx * dt;
    this.cont++;
    
    if( this.cont > 100){
        this.vx = 0;

        this.y = this.y - this.vy * dt;

        if( this.y <= 10){
            this.vy = -this.vy;
        }
        if(this.y + this.h >= 450){
            this.vy = this.vy * (-1);
        }
    }
}

enemy.prototype.colidiu = function(tirosVetor){
    for (var i = 0; i < tirosVetor.length; i++) {     
        if( tirosVetor[i].x + tirosVetor[i].h >= this.x && tirosVetor[i].y <= this.y + this.h
            && tirosVetor[i].y + tirosVetor[i].h >= this.y ){
                this.h -= 10;
        } 
    }
}