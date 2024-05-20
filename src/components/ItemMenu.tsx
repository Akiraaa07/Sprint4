type Props = {
    name: string  // Tipo da propriedade 'name', que é uma string
}

// Componente funcional ItemMenu
export function ItemMenu({ name }: Props){
    return(
        <button className="flex items-center gap-3">
            {/* Texto do item do menu */}
            <span className="text-white font-bold">{name}</span>
        </button>
    )
}
