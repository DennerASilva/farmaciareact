import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'


interface CardCategoriasProps{
    categoria: Categoria
}

export default function CardCategorias({ categoria }: CardCategoriasProps){
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='flex justify-center py-2 px-6 bg-[#175d24] text-white font-bold text-2xl'>
                {categoria.nome}
            </header>
            <p className='p-8 text-xl bg-slate-200 h-full'>{categoria.descricao}</p>
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`} className='w-full text-slate-100 bg-[#91c49a] hover:bg-[##238835] flex items-center justify-center py-2'>
            	    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
	                <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}