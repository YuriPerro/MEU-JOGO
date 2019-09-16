function tiros(exemplo = {}){
    var {
        x = 100,
        y = 200,
        largura = 7,
        altura = 7,
        vx = 100,
        cd = 0,
        color = "black",
    } = exemplo;

    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.cd = cd;
    this.color = color;
}

tiros.prototype = new tiros({});
tiros.prototype.constructor = tiros;

tiros.prototype.atualiza = function(dt){
    this.desenha();
    this.mover(dt);
    this.colidiu();
}

tiros.prototype.desenha = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
}

tiros.prototype.mover = function(dt){
    this.x = this.x + this.vx * dt;
}

tiros.prototype.colidiu = function(){
}