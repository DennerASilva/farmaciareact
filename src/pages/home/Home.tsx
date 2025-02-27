import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 min-h-[80vh]">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui nossas categorias de produtos!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black border-black border-solid border-2 py-2 px-4'>
                                <Link  to='/categorias' className='hover:underline'> Clique aqui </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home