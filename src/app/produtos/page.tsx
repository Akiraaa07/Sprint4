import Image from "next/image";

// Importação das imagens dos produtos
import Vendas from '@/assets/vendas.webp';
import PequenasEmpresas from '@/assets/servicos.webp';
import Marketing from '@/assets/marketing.jpg';
import Commerce from '@/assets/commerce.png';
import AtendimentoCliente from '@/assets/atendimento.jpg';
import DataCloud from '@/assets/DataCloud.jpg';
import Slack from '@/assets/slack.jpg';
import PrecoProdutos from '@/assets/vejatodos.webp';

// Array de objetos com informações dos produtos
const produtos = [
    { nome: 'Vendas', imagem: Vendas, link: 'https://www.salesforce.com/br/sales/', alt: 'Vendas' },
    { nome: 'Pequenas Empresas', imagem: PequenasEmpresas, link: 'https://www.salesforce.com/small-business/', alt: 'Pequenas Empresas' },
    { nome: 'Marketing', imagem: Marketing, link: 'https://www.salesforce.com/br/marketing/', alt: 'Marketing' },
    { nome: 'Commerce', imagem: Commerce, link: 'https://www.salesforce.com/br/commerce/', alt: 'Commerce' },
    { nome: 'Atendimento ao Cliente', imagem: AtendimentoCliente, link: 'https://www.salesforce.com/br/service/', alt: 'Atendimento ao Cliente' },
    { nome: 'Data Cloud', imagem: DataCloud, link: 'https://www.salesforce.com/br/data/', alt: 'Data Cloud' },
    { nome: 'Slack', imagem: Slack, link: 'https://www.salesforce.com/br/slack/', alt: 'Slack' },
    { nome: 'Preços de produtos Salesforce', imagem: PrecoProdutos, link: 'https://www.salesforce.com/br/editions-pricing/overview/', alt: 'Preços de produtos Salesforce' },
];

const ProdutosPage = () => {
    return (
        <section id="Produtos" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className='text-blue-900 text-center text-3xl font-bold mb-8'>Produtos Salesforce</h1> {/* Título da página */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Grid responsivo com 1, 2, 3 ou 4 colunas */}
                    {produtos.map((produto, index) => ( // Mapeia os produtos para renderização
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"> {/* Container de cada produto */}
                            <div className="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden"> {/* Div para a imagem do produto */}
                                <Image src={produto.imagem} alt={produto.alt} layout="fill" objectFit="cover" className="rounded-t-lg" /> {/* Imagem do produto com altura responsiva */}
                            </div>
                            <div className="p-4"> {/* Conteúdo informativo do produto */}
                                <h2 className="text-lg font-semibold mb-2">{produto.nome}</h2> {/* Nome do produto */}
                                <a href={produto.link} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-center transition duration-300">
                                    Veja a História
                                </a> {/* Botão para ver mais informações sobre o produto */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProdutosPage;
