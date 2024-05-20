import Image from "next/image";
import Link from 'next/link';

import { ItemMenu } from "./ItemMenu";
import { Contact } from "./Contact";

import Logo from '@/assets/Logo.png'
import IconUser from '@/assets/icon-user.svg'
import { Container } from "./Container";

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-blue-700">
            {/* Elemento para o efeito visual */}
            <div className="absolute top-0 right-0 bg-green-500 w-[19%] h-full z-0"></div>
            {/* Container centralizado */}
            <Container>
                {/* Conteúdo do cabeçalho */}
                <div className="flex flex-1 items-center justify-between">
                    {/* Bloco do logo e menu */}
                    <div className="flex items-center gap-14">
                        <div className="w-20 h-auto">
                            {/* Componente de imagem otimizada do Next.js */}
                            <Image src={Logo} alt="Logo" />
                        </div>
                        {/* Lista de itens do menu */}
                        <ul className="flex items-center gap-12 text-gray-900">
                            <li>
                                {/* Item de menu Home */}
                                <Link href="/">
                                    <ItemMenu name="Home" />
                                </Link>
                            </li>
                            <li>
                                {/* Item de menu Serviços */}
                                <Link href="/servicos">
                                    <ItemMenu name="Serviços" />
                                </Link>
                            </li>
                            <li>
                                {/* Item de menu Produtos */}
                                <Link href="/produtos">
                                    <ItemMenu name="Produtos" />
                                </Link>
                            </li>
                            <li>
                                {/* Item de menu Equipe */}
                                <Link href="/equipe">
                                    <ItemMenu name="Equipe" />
                                </Link>
                            </li>
                            <li>
                                {/* Item de menu Exibir Usuários */}
                                <Link href="/exibir">
                                    <ItemMenu name="Exibir Usuários" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Bloco de contato */}
                    <Contact />
                    {/* Bloco de botão de login */}
                    <button className="flex items-center gap-4 bg-green-500 h-20 pl-10 z-10">
                        {/* Ícone de usuário */}
                        <Image src={IconUser} alt="Icon user" />
                        {/* Link para a página de cadastro */}
                        <Link href="/cadastro">
                            <span className="text-white font-bold">Faça Login</span>
                        </Link>
                    </button>
                </div>
            </Container>
        </header>
    )
}