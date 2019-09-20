function Sprite(exemplo = {}){
    var {
        x = 250,
        y = 215,
        largura = 50,
        altura = 40,
        vx = 0,
        vy = 0,
        color = "#F9483B",
        gravidade = 1.5,
        velocidade = 0,
        forcaDoPulo = 7,
        atirando = 0,
    } = exemplo;

    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.gravidade = gravidade;
    this.velocidade = velocidade;
    this.forcaDoPulo = forcaDoPulo;
    this.atirando = atirando;
}

Sprite.prototype = new Sprite({});
Sprite.constructor = Sprite;

Sprite.prototype.desenha = function(ctx){
    //ctx.fillStyle = this.color;
    //ctx.strokeStyle = "black";
    //ctx.fillRect(this.x, this.y, this.largura, this.altura);
    //ctx.strokeRect(this.x, this.y, this.largura, this.altura);
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
}

Sprite.prototype.mover = function(dt){

    if( this.atirando > 0 ){
        this.atirando = this.atirando - dt;
    }
}

Sprite.prototype.colidiuCom = function(obs){
    if( obs.x <= -obs.largura)
        pontos += 1;

    if( this.y <= 0){
            estadoAtual = estados.perdeu;
        }

    if (this.x < obs.x + obs.largura && this.x + this.largura >= obs.x
        && this.y + this.altura >= chao.y - obs.altura){
            recorde = pontos;
            pontos = 0;
            estadoAtual = estados.perdeu;
        }
}

Sprite.prototype.colidiuCom2 = function(obs){

    if ( this.x < obs.x + obs.largura && this.x + this.largura >= obs.x
        && this.y <= obs.altura ){
            recorde = pontos;
            pontos = 0;
            estadoAtual = estados.perdeu;
    }
}