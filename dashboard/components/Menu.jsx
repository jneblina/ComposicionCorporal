// Importa el componente 'Link' desde 'next/link'
import Link from "next/link";

// Define una matriz de rutas de menú con objetos que contienen 'route' y 'name'
const menuRoutes = [
    {
        route: '/',
        name: 'Inicio'
    },
    {
        route: '/about',
        name: 'Acerca de'
    },
    {
        route: '/composicion',
        name: 'Composición corporal'
    },
];

// Define el componente 'Menu'
function Menu() {
    return (
        <div className="w-1/5 bg-secondary min-h-screen text-xl text-center p-4">
            <h1 className="font-bold mb-6 text-2xl text-white">Menú</h1>
            <ol className="flex flex-col items-center">
                {
                    // Mapea las rutas del menú y renderiza enlaces usando 'Link'
                    menuRoutes.map((menu, key) => (
                        <li className="my-4" key={key}>
                            <Link className="transition hover:text-white hover:underline text-white" href={menu.route}>
                                {menu.name}
                            </Link>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Menu; 
