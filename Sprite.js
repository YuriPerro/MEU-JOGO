function Sprite(exemplo = {}){
    var {
        x = 250,
        y = 215,
        largura = 50,
        altura = 40,
        vx = 0,
        vy = 0,
        color = "#F9483B",
        gravidade = 0.5,
        velocidade = 0,
        forcaDoPulo = 7,
        atirando = 0,
        img = 0,
    } = exemplo;

    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.img = img;

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

Sprite.prototype.desenha = function(ctx, x){

    if (this.img == 0)
        ctx.drawImage(assetsMng.img("player2"), bloco.x-11, bloco.y-8, 70, 70); 
    else 
        ctx.drawImage(assetsMng.img("player"), bloco.x-11, bloco.y-8, 70, 70); 

    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.largura, this.altura);
}

Sprite.prototype.pula = function(){
    this.velocidade = -this.forcaDoPulo;
}

Sprite.prototype.atualiza = function(chao){
    this.velocidade += this.gravidade;
    this.y += this.velocidade;

    if(this.y > chao.y - this.altura){
        this.y = chao.y - this.altura;
        explosaoVetor.push(new Explosion({ x:this.x+30, y:this.y+25 }));
        this.x = -100;
        estadoAtual = estados.perdeu;
    }
}

Sprite.prototype.mover = function(dt){

    if( this.atirando > 0 ){
        this.atirando = this.atirando - dt;
    }
    if( pontos > recorde){
        recorde = pontos;
    }
}

Sprite.prototype.colidiuCom = function(obs, explosaoVetor){
    if( obs.x <= -obs.largura)
        pontos += 1;

    if( this.y <= 0){
            point = pontos;
            pontos = 0;
            estadoAtual = estados.perdeu;
        }    

    if (this.x < obs.x + obs.largura && this.x + this.largura >= obs.x
        && this.y + this.altura >= chao.y - obs.altura){
            explosaoVetor.push(new Explosion({ x:this.x+30, y:this.y+25 }));
            this.x = -100;
            point = pontos;
            pontos = 0;
            estadoAtual = estados.perdeu;
        }
    
}

Sprite.prototype.colidiuCom2 = function(obs, explosaoVetor){

    if ( this.x < obs.x + obs.largura && this.x + this.largura >= obs.x
        && this.y <= obs.altura ){
            explosaoVetor.push(new Explosion({ x:this.x+30, y:this.y+25 }));
            this.x = -100;
            point = pontos;
            pontos = 0;
            estadoAtual = estados.perdeu;
    }
}

Sprite.prototype.desenhaChao = function(assetsMng, x){
        ctx.drawImage(assetsMng.img("chao"), x, 430, 1360, 80 );
}