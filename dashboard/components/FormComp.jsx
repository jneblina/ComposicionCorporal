import React, { useState } from 'react'

export const FormComp = ({calcularDensidad, setDensidad}) => {
    
    const [inputValues, setInputValues] = useState({
        genero: '',
        peso: '',
        altura: '',
        edad: '',
        bicep: '',
        tricep: '',
        subscapular: '',
        supraileaco: '',
        bistiloideo: '',
        femur: '',
      })

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
    
        let parsedValue = value;
    
        if (type === 'number' && value !== '') {
        parsedValue = parseFloat(value);
        }
    
        setInputValues((prevValues) => ({
        ...prevValues,
        [name]: parsedValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        calcularDensidad( inputValues )
    }

    const limpiar = () => {
        setInputValues({
            genero: '',
            peso: '',
            altura: '',
            edad: '',
            bicep: '',
            tricep: '',
            subscapular: '',
            supraileaco: '',
            bistiloideo: '',
            femur: '',
          });
        setDensidad(null);
    }


  return (
    <div className="flex flex-col md:flex-row gap-20 w-full">
        <form 
            onSubmit={handleSubmit} 
            onReset={limpiar}
            className="bg-secondary shadow-2xl px-8 rounded-2xl text-center">
                <h1 className='font-bold text-xl mb-2'>Ingresa tus datos</h1>
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <h1>Género</h1>
                    <select className='text-black border-black border rounded-lg pl-2 py-1.5 bg-gray-100 w-full'
                    name='genero'
                    title='genero'
                    value={inputValues.genero}
                    required onChange={handleInputChange}
                    >
                        <option value="">Selecciona tu género</option>
                        <option value="hombre">Masculino</option>
                        <option value="mujer">Femenino</option>
                        </select>
                </div>
                <div>
                  <h1>Edad</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='edad' 
                  type="number" 
                  max="100" 
                  placeholder='Escribe tu edad'
                  value={inputValues.edad} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Altura</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100' 
                  name='altura' 
                  type="number" 
                  placeholder='Escribe tu altura (m)'
                  value={inputValues.altura}
                  required onChange={handleInputChange} />
                </div>
                <div>
                  <h1>Peso</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100' 
                  name='peso' 
                  type="number" 
                  placeholder='Escribe tu peso (kg)'
                  value={inputValues.peso} 
                  required onChange={handleInputChange}/>
                </div>   
                <div>
                  <h1>Biciptal</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100' 
                  name='bicep' 
                  type="number" 
                  placeholder='Tamaño bicipital (mm)'
                  value={inputValues.bicep} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Tricipital</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='tricep' 
                  type="number" 
                  placeholder='Tamaño tricipital (mm)'
                  value={inputValues.tricep} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Subscapular</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='subscapular' 
                  type="number" 
                  placeholder='Tamaño subscapular (mm)'
                  value={inputValues.subscapular} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Supraileaco</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='supraileaco' 
                  type="number" 
                  placeholder='Tamaño supraileaco (mm)'
                  value={inputValues.supraileaco} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Biestiloideo</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='bistiloideo' 
                  type="number" 
                  placeholder='Tamaño biestiloideo (cm)'
                  value={inputValues.bistiloideo} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1>Fémur</h1>
                  <input className='text-black border-black border rounded-lg pl-2 py-1 bg-gray-100'
                  name='femur' 
                  type="number" 
                  placeholder='Tamaño fémur (cm)'
                  value={inputValues.femur} 
                  required onChange={handleInputChange}/>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4 mb-4">
              <button className='p-2 bg-confirmar text-black rounded-md' type='submit'>Calcular</button>
                <button className='p-2 bg-limpiar text-black rounded-md' type='reset' onClick={limpiar}>Limpiar</button>
              </div>
            </form>
    </div>
  )
}
