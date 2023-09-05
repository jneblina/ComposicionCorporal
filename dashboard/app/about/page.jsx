import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'], weight:["400"] });

export default About => {
    return (
        <div className="bg-primary h-screen w-full text-center p-4">
            <h1 className={`${josefin.className} text-white text-5xl text-center mt-4`}> About me </h1>
            <div className="flex flex-col items-center md:flex-row">
                <div className="w-full md:w-1/2 mt-8">
                    <img 
                    className='w-full h-auto border-4 border-white mx-auto md:w-1/2 md:h-1/2'
                    src="/images/Yo.jpg"
                    alt="" />
                </div>
                <div className="w-full md:w-1/2 text-center mt-8">
                    <h1 className='text-2xl text-center mb-4 font-bold'>Hola mi nombre es Jan Neblina... </h1>
                    <h1 className='text-lg font-bold'>Datos personales:</h1>
                    <h1><span className='font-semibold'>Edad:</span> 22 años</h1>
                    <h1><span className='font-semibold'>Escuela:</span> Instituto Tecnologico de Ensenada</h1>
                    <h1><span className='font-semibold'>Correo:</span> janneblina7@gmail.com</h1>
                    <h1><span className='font-semibold'>Telefono:</span> 6351134336</h1>
                    <h1><span className='font-semibold'>Direccion:</span> Isabel la catolica #126 Villas del Real IV</h1>
                </div>
            </div>
            <h1 className='mt-4 p-4 text-justify text-white'>Soy Jan Marlon Neblina Villegas, una persona que encuentra su pasión en una variedad de 
            actividades, desde jugar videojuegos hasta mantenerse activo con deportes. Actualmente, estudio Ingeniería en
            Sistemas Computacionales en el Instituto Tecnológico de Ensenada, y en mi tiempo libre, disfruto sumergirme 
            en películas como Bob Esponja y Nacho Libre, que me hacen reír y desconectar. Me inspira el luchador Rey Mysterio,
            cuya perseverancia y enfoque en hacer lo correcto me motivan a enfrentar los desafíos con determinación. Siempre
            busco seguir adelante, especialmente porque mi familia es una gran fuente de inspiración para mí. En el futuro,
            me encantaría aprender a tocar la guitarra o el bajo, y valoro la diversión, el liderazgo y la responsabilidad
            como cualidades esenciales en mi vida.</h1>
            <div className="mt-4 text-center">
                <h1 className="text-xl text-white mb-4 font-bold">Redes Sociales</h1>
                <div className="flex justify-center">
                    <a href="https://www.facebook.com/jan.neblina" target="_blank">
                        <img className="w-8 h-8 mx-2" src="/images/Facebook.jpg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/jan_neblina/" target="_blank">
                        <img className="w-8 h-8 mx-2" src="/images/Instagram.jpg" alt="Instagram" />
                     </a>
                    <a href="https://github.com/jneblina" target="_blank">
                        <img className="w-8 h-8 mx-2" src="/images/Github.jpg" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
};


