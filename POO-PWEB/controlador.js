let inputEmail = document.getElementById('iptEmail');
let inputNome = document.getElementById('iptNome');
let inputSenha = document.getElementById('iptSenha');

let inputFoto = document.getElementById('iptFoto');
let inputDescricao = document.getElementById('iptDescricao');
let inputValor = document.getElementById('iptValor');
let inputCards = document.getElementById('containerCards')

let buttonCadastrar1 = document.getElementById('btnCadastrar1');
let buttonCadastrar2 = document.getElementById('btnCadastrar2');

let cCadastro = document.getElementById('formCadastro');
let cPerfume = document.getElementById('formPerfume');

let nome = document.getElementById('nomeUsuario');

let cesta = new CarrinhoDePerfume();
let usuario;


function quandoClicarNoBotaoCadastrar1(){

    usuario = new Usuario(
        inputNome.value,
        inputEmail.value,
        inputSenha.value
    );

        cCadastro.classList.remove('formulario');
        cCadastro.classList.add('oculto');
        cPerfume.classList.remove('oculto');
        cPerfume.classList.add('formulario');

        nome.innerHTML = usuario.nome;
}

buttonCadastrar1.addEventListener('click', quandoClicarNoBotaoCadastrar1);


function quandoClicarNoBotaoCadastrar2(){

    let perfume1 = new Produto(
        inputFoto.value, 
        inputDescricao.value, 
        inputValor.value
    );

        cesta.adicionarProduto(perfume1);

        console.log(cesta);

        desenharCarrinhoDePerfumes(cesta, inputCards); 

}

buttonCadastrar2.addEventListener('click', quandoClicarNoBotaoCadastrar2);