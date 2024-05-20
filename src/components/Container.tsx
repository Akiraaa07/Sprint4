import { ReactNode } from "react"

// Define o tipo das propriedades esperadas para o componente
type Props = {
    children: ReactNode  // ReactNode é um tipo do React que aceita qualquer elemento React como children
}

// Declaração do componente funcional Container
export function Container({ children }: Props) {
    return (
        <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    )
}
