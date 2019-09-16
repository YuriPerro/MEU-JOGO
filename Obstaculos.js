function Obstaculos(exemplo = {}){
    var {
        vetorObstaculo = [],
        vetorObstaculo2 = [],
        cores = ["black", "white", "#FF837A", 
        "#422220", "#994F49", "#42BEC2", "#2D8285", "#57F9FF", "#66FF7A"],
        tempoInsere = 0,
    } = exemplo;
        this.vetorObstaculo2 = vetorObstaculo2;
        this.vetorObstaculo = vetorObstaculo;
        this.cores = cores;
        this.tempoInsere = tempoInsere;
}
Obstaculos.prototype = new Obstaculos ({});
Obstaculos.constructor = Obstaculos;

Obstaculos.prototype.insere = function (){
    this.vetorObstaculo.push({
        x: LARGURA,
        largura: 60,
        altura: (100 * Math.random()) + Math.floor(100 * Math.random()),
        cor: this.cores[Math.floor(3 * Math.random())]
    });

    this.vetorObstaculo2.push({
        x: LARGURA,
        largura: 60,
        altura: (100 * Math.random()) + Math.floor(100 * Math.random()),
        cor: this.cores[Math.floor(3 * Math.random())]
    });

    this.tempoInsere = 35 + Math.floor(30 * Math.random());
}

Obstaculos.prototype.atualiza = function (bloco, chao){
    if (this.tempoInsere == 0) {
        this.insere();
    } else {
        this.tempoInsere--;

        for (var i = 0, tam = this.vetorObstaculo.length; i < tam; i++) {
            var obs = this.vetorObstaculo[i];
                obs.x -= velocidade;

                bloco.colidiuCom(obs, chao);
                    
             if (obs.x <= -obs.largura) {
                this.vetorObstaculo.splice(i, 1);
                tam--;
                i--;
            }
        }

        for (var i = 0, tam = this.vetorObstaculo2.length; i < tam; i++) {
            var obs = this.vetorObstaculo2[i];
                obs.x -= velocidade;
            
                bloco.colidiuCom(obs, chao);
                    
             if (obs.x <= -obs.largura) {
                this.vetorObstaculo2.splice(i, 1);
                tam--;
                i--;
            }
        }
    }
}

Obstaculos.prototype.limpa = function () {
    this.vetorObstaculo = [];
    this.vetorObstaculo2 = [];
}

Obstaculos.prototype.desenha = function (){
    for (var i = 0, tam = this.vetorObstaculo.length; i < tam; i++) {
        var obs = this.vetorObstaculo[i];
        ctx.fillStyle = obs.cor;
        ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura);
    }

    for (var i = 0, tam = this.vetorObstaculo2.length; i < tam; i++) {
        var obs = this.vetorObstaculo2[i];
  
        ctx.fillStyle = obs.cor;
        ctx.fillRect(obs.x, 0, obs.largura, obs.altura);
    }
}