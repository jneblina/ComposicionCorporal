import Link from "next/link";

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio'
    },
    {
        ruta: '/about',
        nombre: 'Acerca de'
    },
    {
        ruta: '/composicion',
        nombre: 'Composicion Corporal'
    },

]

function Menu() {
    return(
        <div className="w-1/5 bg-secondary min-h-screen text-xl text-center p-4">
            <h1 className="font-bold mb-6 text-2xl">Menú</h1>
            <ol className="flex flex-col items-center">
                {
                    menuRoutes.map((menu,key) =>(
                        <li className="my-4" key={key}>
                            <Link className="transition hover:text-blanco hover:underline " href={menu.ruta}>{menu.nombre}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Menu;