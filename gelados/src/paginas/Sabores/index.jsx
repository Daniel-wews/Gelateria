import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import "./style.css"
function Sabores() {
    return (
        <section>

            <Topo />

            <main>
                <section className='secao-01'>
                    <div>
                    <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className='limita-secao sabores-sorvete'>

                    <h2>SABORES DE SORVETE</h2>
                    <div className='secao-02'>
                        <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sabor-oreo.png" alt="sorvete Oreo" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete de Oreo</h3>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </figcaption>
                        </div>
                        <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sabor-pistache.png" alt="sorvete pistache" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </figcaption>
                        </div>
                        <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sabor-cookies-avela.png" alt="sorvete avela" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </figcaption>
                        </div>
                    </div>

                    <div className='secao-02'>
                    <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sorbet-kiwi.png" alt="sorvete kiwi" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </figcaption>
                        </div>

                        <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sorbet-morango.png" alt="sorvete de morango" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango Gourmet. Tradicional e saboroso.</p>
                            </figcaption>
                        </div>
                        
                        <div className='sorvetes'>
                            <figure>
                            <img src="./assets/sorbet-limao.png" alt="sorvete de limao" />
                            </figure>
                            <figcaption>
                                <h3>Sorvete de limão Siciliano</h3>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </figcaption>
                        </div>
                    </div>

                    

                </section>
            </main>

            <Rodape/>
        </section>
    )
}
export default Sabores