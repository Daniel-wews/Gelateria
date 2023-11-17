import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import "./style.css"
function Sobre(){
    return(
        <section>
        <Topo />

        <main>

        <section className='sobre'>
            <div>
                <h1>A GELATERIA</h1>
            </div>
        </section>

        <section className='sobre-textos'>
            <div className='limita-secao'>
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos sorvete!</span>
            <p>
                Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matétias-primas para a produção final do sorvete. vendemos tanto para varejo como para atacado.
            </p>
            <p>
                Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residencia e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversario, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos prororcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa da cidade.  
            </p>
            </div>
        </section>

        <section className='sobre-img'>
            <img src="./assets/sobre-image.jpg" alt="amigos tomando sorvete." />
            <img src="./assets/sorveteria.jpg" alt="Imagem da sorveteria." />
        </section>


        </main>

        <Rodape/>
        </section>
    )
}
export default Sobre