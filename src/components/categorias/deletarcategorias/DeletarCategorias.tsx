import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

export default function DeletarCategorias(){

    const navigate = useNavigate()
    
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`,setCategoria)
    }
    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {

        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
        } catch (error: any) {
            alert('Erro ao deletar a categoria.')
            }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='flex flex-row justify-center py-2 px-6 bg-[#1fad39]  text-white font-bold text-2xl'>
                    {categoria.nome}
                </header>
                <p className='p-8 text-xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 font-bold'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#91c49a] 
                                   hover:bg-[#78b75d] flex items-center justify-center font-bold'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}


