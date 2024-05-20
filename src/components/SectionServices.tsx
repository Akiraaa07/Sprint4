import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from '@/assets/icon-phone.svg';
import SoluctionIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';

import ImagePhone from '@/assets/celular.png';

import '@/app/globals.css'; // Importe o arquivo CSS

export function SectionServices() {
    return (
        <section className="services">
            {/* Container centralizado */}
            <Container>
                {/* Conteúdo principal */}
                <div className="services-content">
                    {/* Título secundário */}
                    <span className="services-title-secondary">
                        O que há de novo na Salesforce?
                    </span>
                    {/* Título principal */}
                    <h2 className="services-title-primary">
                        Saiba como o Salesforce <br /> ajuda você a trabalhar <br /> de maneira mais inteligente <br /> e a crescer com mais rapidez.
                    </h2>
                    {/* Descrição */}
                    <p className="services-description">
                        Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.
                    </p>
                    {/* Lista de benefícios */}
                    <ul className="services-list">
                        {/* Item 1: Venda de forma mais inteligente */}
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={PhoneIcon} alt="Icon Phone" />
                            </div>
                            <p className="services-text">
                                Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.
                            </p>
                        </li>
                        {/* Item 2: Feche mais negócios com o CRM nº1 */}
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={SoluctionIcon} alt="Icon Solution" />
                            </div>
                            <p className="services-text">
                                Feche mais negócios e acelere o crescimento com o CRM nº1.
                            </p>
                        </li>
                        {/* Item 3: Gaste menos com serviços escaláveis */}
                        <li className="services-item">
                            <div className="services-icon">
                                <Image src={OptionsIcon} alt="Icon Options" />
                            </div>
                            <p className="services-text">
                                Gaste menos com serviços escaláveis que os clientes adoram.
                            </p>
                        </li>
                        {/* Item 4: Ofertas do Customer 360 */}
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
            {/* Imagem do telefone à direita */}
            <div className="services-image">
                <Image src={ImagePhone} alt="Phone" />
            </div>
        </section>
    );
}