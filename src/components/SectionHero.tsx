import Image from 'next/image'
import Link from 'next/link';

import { Container } from "./Container";

import Arrow from '@/assets/arrow-explorer.svg'
import FogueteImage from '@/assets/hometec.jpeg'

export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img_bg_blue bg-no-repeat bg-center bg-cover">
            {/* Container centralizado */}
            <Container>
                <div className="flex-1 max-w-[497px]">
                    {/* Título principal */}
                    <h1 className="text-white text-6xl font-bold mb-4">Experimente o Salesforce Starter Suite gratuitamente.</h1>
                    {/* Descrição */}
                    <p className="text-white text-xl max-w-[408px] mb-8">Reúna marketing, vendas e atendimento em um único aplicativo. 
                    Experimente o Salesforce Starter Suite hoje mesmo. 
                    Não há nada para instalar. Não é necessário cartão de crédito.</p>
                    {/* Botões de ação */}
                    <div className="flex gap-4 mb-24">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            <a href="https://www.salesforce.com/br/form/signup/salesforce-starter/" target="_blank">Inicie o Teste Gratuito</a>
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            <a href="https://www.salesforce.com/br/form/starter/overview-demo/" target="_blank">Assista a demo</a>
                        </button>
                    </div>
                    {/* Botão de continuar explorando */}
                    <button className='flex items-center gap-3'>
                        <Image src={Arrow} alt="Arrow Down" />
                        <span className='text-white text-sm font-bold'>Continue Explorando</span>
                    </button>
                </div>
                {/* Imagem do foguete */}
                <Image src={FogueteImage} alt="FogueteImage" className="w-[400px] h-[400px] object-cover" />
            </Container>
        </section>
    )
}
