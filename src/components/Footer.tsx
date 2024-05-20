export default function Footer() {
  return (
      <footer className="bg-blue-600 text-white py-4 mt-8">
          {/* Container do rodapé */}
          <div className="container mx-auto text-center">
              {/* Texto de direitos autorais */}
              <p>&copy; {new Date().getFullYear()} Salesforce. Todos os direitos reservados</p>
          </div>
      </footer>
  )
}
