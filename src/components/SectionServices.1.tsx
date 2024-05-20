'use client';

import Image from "next/image";
import { Container } from "./Container";
import { useState } from 'react';

import PhoneIcon from '@/assets/icon-phone.svg';
import SoluctionIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';
import ImagePhone from '@/assets/celular.png';

import '@/app/globals.css'; // Importe o arquivo CSS

const MAGNIFY_SIZE = 200;
const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 2;

export function SectionServices() {
    const [magnifyStyle, setMagnifyStyle] = useState({ display: 'none', backgroundImage: `url(${ImagePhone.src})` });

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
            backgroundImage: `url(${ImagePhone.src})`
        });
    };

    const handleMouseLeave = () => {
        setMagnifyStyle({ ...magnifyStyle, display: 'none' });
    };

    return (
        <section className="services">
            <Container>
                <div className="services-content">
                    <span className="services-title-secondary">
                        O que há de novo na Salesforce?
                    </span>
                    <h2 className="services-title-primary">
                        Saiba como o Salesforce <br /> ajuda você a trabalhar <br /> de maneira mais inteligente <br /> e a crescer com mais rapidez.
                    </h2>
                    <p className="services-description">
                        Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.
                    </p>
                    <ul className="services-list">
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={PhoneIcon} alt="Icon Phone" />
                            </div>
                            <p className="services-text">
                                Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.
                            </p>
                        </li>
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={SoluctionIcon} alt="Icon Solution" />
                            </div>
                            <p className="services-text">
                                Feche mais negócios e acelere o crescimento com o CRM nº1.
                            </p>
                        </li>
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={OptionsIcon} alt="Icon Options" />
                            </div>
                            <p className="services-text">
                                Gaste menos com serviços escaláveis que os clientes adoram.
                            </p>
                        </li>
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={CardIcon} alt="Icon Card" />
                            </div>
                            <p className="services-text">
                                Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="relative cursor-none border-2 border-white" onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
                <Image
                    src={ImagePhone}
                    alt="Phone"
                    draggable={false}
                />
                <div className="magnify" style={magnifyStyle}></div>
            </div>
        </section>
    );
}