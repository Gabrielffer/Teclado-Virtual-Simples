
const campo          = document.getElementById('visualizacao_entrada');
const teclas         = document.getElementsByClassName('tecla');
const capsLockStatus = document.getElementById('caps_lock_status');
let capsLock         = true;

campo.addEventListener('keydown', function(){
    event.preventDefault();
})

for(tecla of teclas){
    tecla.addEventListener('mousedown', function(){
        if(event.target.id !== 'tecla_caps_lock'){
            setTimeout(() => campo.focus(), 0);
        }
        if(event.target.id === 'tecla_espaco'){
            campo.value += ' ';
        }else{
            elemFilhos = this.children;
            for(elemento of elemFilhos){
                if(elemento.classList.contains('tecla_caractere')){
                    if(capsLock){
                        entrada = elemento.innerHTML.toUpperCase();
                    }else{
                        entrada = elemento.innerHTML.toLowerCase();
                    }
                    campo.value += entrada;
                }
            }
        }
    })
}

document.getElementById('tecla_retrocesso').addEventListener('click', function(){
    campo.value = campo.value.substring(0, campo.value.length - 1);
})

document.getElementById('tecla_caps_lock').addEventListener('click', function(e){
    if(capsLock){
        capsLock = false;
        tamanhoCaractere('lowercase', 'transparent');
    }else{
        capsLock = true;
        tamanhoCaractere('uppercase', '#4CAF50');
    }
})

document.getElementById('tecla_entrada').addEventListener('click', function(){
    if(campo.value.length > 0){
        urlPesquisa = 'https://www.google.com/search?q=' + encodeURIComponent(campo.value);
        window.open(urlPesquisa, '_blank');   
    }
})

function tamanhoCaractere(tamanho, corFundo){
    capsLockStatus.style.backgroundColor = corFundo;
    const arrTeclas = document.getElementsByClassName('tecla_caractere');
    const ttlTeclas = arrTeclas.length;
    for(let i = 0; i < ttlTeclas; i++){
        arrTeclas[i].style.textTransform = tamanho;
    }
}
