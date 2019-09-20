function AssetsManager(){
    this.aCarregar = 0;
    this.carregadas = 0;
    this.assets = {};
}

AssetsManager.prototype.loadImage = function(key, url){
    this.aCarregar++;
    var imagem = new Image();
    
    //O que esta entre ${} ele imprime o valor da variavel
    console.log('imagem ${key}: ${url} carregada.');          //Um novo tipo de concatenaçao
    
    imagem.src = url;
    this.assets[key] = imagem;

    imagem.addEventListener("load", function(){
        this.carregadas++;
    })
}

AssetsManager.prototype.img = function(key){
    return this.assets[key];
}