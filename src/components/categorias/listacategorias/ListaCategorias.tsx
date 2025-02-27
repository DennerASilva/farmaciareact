import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";

export default function ListaCategorias() {

    const [categorias,setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        await buscar('/categorias',setCategorias)
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])

    return (
        <>
         {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categoria) => ( // map(): para cada item no array, o map() passa os dados para o card
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


}

