'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Container } from "./Container";

import Arrow from '@/assets/arrow-explorer.svg';
import FogueteImage from '@/assets/hometec.jpeg';

const MAGNIFY_SIZE = 200;
const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 2;

export function SectionHero() {
    const [magnifyStyle, setMagnifyStyle] = useState({ display: 'none', backgroundImage: `url(${FogueteImage.src})` });

    const handleMouseMove = (e) => {
        const { nativeEvent } = e;
        const { offsetX, offsetY, target } = nativeEvent;
        const { offsetWidth, offsetHeight } = target;

        const xPercentage = (offsetX / offsetWidth) * 100;
        const yPercentage = (offsetY / offsetHeight) * 100;

        setMagnifyStyle({
            display: 'block',
            top: `${offsetY - MAGNIFY_SIZE_HALF}px`,
            left: `${offsetX - MAGNIFY_SIZE_HALF}px`,
            backgroundPosition: `${xPercentage}% ${yPercentage}%`,
            backgroundImage: `url(${FogueteImage.src})`
        });
    };

    const handleMouseLeave = () => {
        setMagnifyStyle({ ...magnifyStyle, display: 'none' });
    };

    return (
        <section className="w-full h-[704px] bg-img_bg_blue bg-no-repeat bg-center bg-cover">
            {/* Container centralizado */}
            <Container>
                <div className="flex-1 max-w-[497px]">
                    {/* Título principal */}
                    <h1 className="text-white text-6xl font-bold mb-4">Experimente o Salesforce Starter Suite gratuitamente.</h1>
                    {/* Descrição */}
                    <p className="text-white text-xl max-w-[408px] mb-8">
                        Reúna marketing, vendas e atendimento em um único aplicativo. 
                        Experimente o Salesforce Starter Suite hoje mesmo. 
                        Não há nada para instalar. Não é necessário cartão de crédito.
                    </p>
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
                <div className="relative cursor-none border-2 border-white" onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
                    <Image src={FogueteImage} alt="FogueteImage" className="w-[400px] h-[400px] object-cover" />
                    <div className="magnify" style={magnifyStyle}></div>
                </div>
            </Container>
        </section>
    );
}