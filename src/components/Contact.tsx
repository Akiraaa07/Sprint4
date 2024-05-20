export function Contact() {
    return (
        <div className='flex flex-col items-start gap-2'>
            {/* Link para a página de contato no Salesforce */}
            <a
                href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9"
                className='text-white underline hover:no-underline'
                target="_blank"  // Abre o link em uma nova aba
                rel="noopener noreferrer"  // Medida de segurança para evitar vulnerabilidades
            >
                Entre em contato
            </a>
            {/* Número de telefone */}
            <span className='text-white'>0800 891 1887</span>
        </div>
    )
}
