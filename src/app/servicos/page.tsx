import Image from "next/image";

// Importação das imagens dos clientes
import SumupImg from '@/assets/sumup.webp';
import GympassImg from '@/assets/gympass.webp';
import VipalImg from '@/assets/vipal.webp';
import TigreImg from '@/assets/tigre.webp';

export default function ServicosPage(){
    return (
        <section id="Servicos" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-blue-900 text-center text-3xl py-6">Serviços</h1> {/* Título da página */}
                <h2 className="text-blue-900 text-center text-3xl py-5"><span>O que há de novo na Salesforce?</span></h2> {/* Subtítulo da página */}
                
                {/* Início da seção de Serviços */}
                <div className="flex flex-wrap justify-center -mx-4">
                    {/* Item 1 - Salesforce Starter */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="border border-gray-300 rounded-lg p-6">
                            <p className="text-center py-4">Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</p>
                            <a href="https://www.salesforce.com/br/products/salesforce-starter/" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Conheça Agora</a>
                        </div>
                    </div>
                    {/* Item 2 - Solução de IA Customer 360 */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="border border-gray-300 rounded-lg p-6">
                            <p className="text-center py-4">Encontre uma solução de IA adaptada às suas necessidades de negócios.</p>
                            <a href="https://salesforcecustomer360.herokuapp.com/?_ga=2.146264439.2134737465.1711922826-306636531.1710218923" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Crie Seu Próprio Customer 360</a>
                        </div>
                    </div>
                    {/* Item 3 - CRM para pequenas empresas */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="border border-gray-300 rounded-lg p-6">
                            <p className="text-center py-4">Expanda sua pequena empresa com um CRM projetado para você.</p>
                            <a href="https://www.salesforce.com/br/solutions/small-business-solutions/overview/" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Explore a Solução</a>
                        </div>
                    </div>
                </div>
                {/* Fim da seção de Serviços */}

                <div className="mt-12"> {/* Início da seção de Histórias de Sucesso */}
                    <h2 className="text-blue-900 text-center text-3xl py-5"><span>Veja como os clientes da Salesforce se tornam empresas clientes:</span></h2>

                    {/* Grid de Histórias de Sucesso */}
                    <div className="flex flex-wrap justify-center -mx-4">
                        {/* História 1 - Sumup */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <div className="border border-gray-300 rounded-lg">
                                <div className="relative h-60">
                                    <Image src={SumupImg} alt="Sumup" layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                                <div className="p-4">
                                    <p className="text-center py-2 text-lg font-semibold">Sumup</p>
                                    <p className="text-center">Indústria</p>
                                    <p className="text-center">Serviços Financeiros</p>
                                    <a href="https://www.salesforce.com/br/customer-success-stories/sumup/" target="_blank" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4">Veja a História</a>
                                </div>
                            </div>
                        </div>
                        {/* História 2 - Gympass */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <div className="border border-gray-300 rounded-lg">
                                <div className="relative h-60">
                                    <Image src={GympassImg} alt="Gympass" layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                                <div className="p-4">
                                    <p className="text-center py-2 text-lg font-semibold">Gympass</p>
                                    <p className="text-center">Indústria</p>
                                    <p className="text-center">Saúde</p>
                                    <a href="https://www.salesforce.com/br/customer-success-stories/gympass/" target="_blank" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4">Veja a História</a>
                                </div>
                            </div>
                        </div>
                        {/* História 3 - Vipal Borrachas */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <div className="border border-gray-300 rounded-lg">
                                <div className="relative h-60">
                                    <Image src={VipalImg} alt="Vipal Borrachas" layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                                <div className="p-4">
                                    <p className="text-center py-2 text-lg font-semibold">Vipal Borrachas</p>
                                    <p className="text-center">Indústria</p>
                                    <p className="text-center">Manufatura</p>
                                    <a href="https://www.salesforce.com/br/customer-success-stories/vipal-borrachas/" target="_blank" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4">Veja a História</a>
                                </div>
                            </div>
                        </div>
                        {/* História 4 - Grupo Tigre */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <div className="border border-gray-300 rounded-lg">
                                <div className="relative h-60">
                                    <Image src={TigreImg} alt="Grupo Tigre" layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                                <div className="p-4">
                                    <p className="text-center py-2 text-lg font-semibold">Grupo Tigre</p>
                                    <p className="text-center">Indústria</p>
                                    <p className="text-center">Construção Civil</p>
                                    <a href="https://www.salesforce.com/br/customer-success-stories/grupo-tigre/" target="_blank" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4">Veja a História</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fim da seção de Histórias de Sucesso */}
                </div>
            </div>
        </section>
    );
}
