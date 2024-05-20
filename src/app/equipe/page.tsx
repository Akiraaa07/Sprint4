export default function SobrePage() {
    return (
        <section id="Sobre" className="py-12 bg-gray-100"> {/* Define a seção Sobre com padding e cor de fundo cinza */}
            <div className="container mx-auto px-4"> {/* Container centralizado com padding horizontal */}
                <main>
                    <aside className="max-w-3xl mx-auto"> {/* Container lateral máximo de 3xl (extra large) centralizado */}
                        <h1 className="text-blue-900 text-center text-3xl font-bold py-16">Equipe</h1> {/* Título da equipe centralizado */}
                        <div className="text-center space-y-6"> {/* Container de texto centralizado com espaçamento entre os elementos */}
                            <p className="text-gray-900">Igor Akira Bortolini Tateishi RM: 554227</p> {/* Nome e RM do primeiro membro da equipe */}
                            <p className="text-gray-900">Nicola Monte Cravo Garofalo RM: 553991</p> {/* Nome e RM do segundo membro da equipe */}
                            <p className="text-gray-900">Willyam Santos Sousa RM: 554244</p> {/* Nome e RM do terceiro membro da equipe */}
                        </div>
                        <p className="text-center py-8 text-gray-900"> {/* Parágrafo centralizado com padding top e cor de texto cinza */}
                            Link do repositório GitHub: {/* Texto de link para o repositório no GitHub */}
                            <a 
                                href="https://github.com/Akiraaa07/Sprint-3-FrontEnd"
                                target="_blank"  
                                rel="noopener noreferrer"  
                                className="text-blue-500 hover:underline"  
                            >
                                https://github.com/Akiraaa07/Sprint4 {/* URL do repositório */}
                            </a>
                        </p>
                    </aside>
                </main>
            </div>
        </section>
    );
}
