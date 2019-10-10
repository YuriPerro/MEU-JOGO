function enemy(exemplo = {}){
    var {
        x = 1300,
        y = 150,
        w = 50,
        h = 50,
        vx = 100,
        vy = 300,
        cont = 0,
        color = "black",
        atirando = 0,
        vetorTiros = [],
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
    this.vetorTiros = vetorTiros;
}

enemy.prototype = new enemy();
enemy.prototype.constructor = enemy;

enemy.prototype.desenha = function(ctx){
   
    ctx.drawImage(assetsMng.img("box"), this.x, this.y, 50, 50);

    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.w, this.h)
}
enemy.prototype.mover = function(dt){
    this.x = this.x - this.vx * dt;
    this.cont++;
    
    if( this.cont > 150){
        this.vx = 0;

        this.y = this.y - this.vy * dt;

        if( this.y <= 10){
            this.vy = -this.vy;
        }
        if(this.y + this.h >= 430){
            this.vy = this.vy * (-1);
        }
    }

    if(this.h > 0)
        //this.atirar();
        
        if( this.atirando > 0 ){
            this.atirando = this.atirando - dt;
        }
}

enemy.prototype.colidiu = function(tirosVetor){
    if(this.vx == 0){
    for (var i = 0; i < tirosVetor.length; i++) {     
        if( tirosVetor[i].x + tirosVetor[i].h >= this.x && tirosVetor[i].y <= this.y + this.h
            && tirosVetor[i].y + tirosVetor[i].h >= this.y && this.h > 0 ){
                this.h -= 25;
                explosaoVetor.push(new Explosion({ x: tirosVetor[i].x, y:tirosVetor[i].y }));
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
            x: this.x,
            y: this.y+this.h/2,
            w: 10,
            h: 10,
            vx: -1000,
            color: "black",
        });
        this.atirando = 1/3;
        this.vetorTiros.push(tiro);
    }
    for (var i = 0; i < this.vetorTiros.length; i++) {       
        this.vetorTiros[i].mover(dt);
    }
    for (var i = 0; i < this.vetorTiros.length; i++) {     
        this.vetorTiros[i].desenha(ctx);
    }
    for (var i = 0; i < this.vetorTiros.length; i++) {
        if (this.vetorTiros[i].x < 0 )
        this.vetorTiros.splice(i, 1);
    }
}