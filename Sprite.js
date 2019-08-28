function Sprite(exemplo = {}){
    var {
        x = 250,
        y = 20,
        largura = 50,
        altura = 18,
        vx = 0,
        vy = 0,
        color = "#F9483B",
        atirando = 0,
        gravidade = 1.5,
        velocidade = 0,
        forcaDoPulo = 7,
    } = exemplo;

    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.atirando = atirando;
    this.gravidade = gravidade;
    this.velocidade = velocidade;
    this.forcaDoPulo = forcaDoPulo;
}

Sprite.prototype = new Sprite({});
Sprite.constructor = Sprite;

Sprite.prototype.desenha = function(ctx){
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
    ctx.strokeRect(this.x, this.y, this.largura, this.altura);
}

Sprite.prototype.pula = function(){
    this.velocidade = -this.forcaDoPulo;
}

Sprite.prototype.atualiza = function(chao){
    this.velocidade += this.gravidade;
    this.y += this.velocidade;

        if(this.y > chao.y - this.altura){
            this.y = chao.y - this.altura;
            this.velocidade = 0;
        }
        if( this.y <= 0)
            estadoAtual = estados.perdeu;
}
