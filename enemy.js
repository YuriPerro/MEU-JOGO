function enemy(exemplo = {}){
    var {
        x = 1300,
        y = 150,
        w = 40,
        h = 200,
        vx = 100,
        vy = 300,
        cont = 0,
        tirosVetor1 = [],
        color = "black",
        atirando = 0,
    } = exemplo;

    this.atirando = atirando;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.cont = cont;
    this.tirosVetor1 = tirosVetor1;
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
        if(this.y + this.h >= 420){
            this.vy = this.vy * (-1);
        }
    }
    //this.atirar();
        if( this.atirando > 0 ){
            this.atirando = this.atirando - dt;
        }
}

enemy.prototype.colidiu = function(tirosVetor){
    if(this.vx == 0){
    for (var i = 0; i < tirosVetor.length; i++) {     
        if( tirosVetor[i].x + tirosVetor[i].h >= this.x && tirosVetor[i].y <= this.y + this.h
            && tirosVetor[i].y + tirosVetor[i].h >= this.y ){
                this.h -= 50;
            } 
        }
    }
}

enemy.prototype.atualiza = function(estadoAtual, estados){
    if( estadoAtual == estados.perdeu){
        this.h = 100;
    }
}

enemy.prototype.atirar = function(){
    if( this.vx == 0 && this.atirando <= 0){
    var tiro = new tiros({
            x: (this.x+this.h)/2,
            y: this.y,
            w: 10,
            h: 10,
            vx: -700,
            color: "black",
        });
        this.atirando = 1/2;
        tirosVetor1.push(tiro);
    }
    for (var i = 0; i < tirosVetor1.length; i++) {
        if (tirosVetor1[i].x > canvas.width)
        tirosVetor1.splice(i, 1);
    }
}