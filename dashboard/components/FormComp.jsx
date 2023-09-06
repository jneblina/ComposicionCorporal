import React, { useState, useRef } from 'react';

export const FormComp = ({ calculateDensity, setDensity }) => {
  // Estado para almacenar los valores de entrada
  const [inputValues, setInputValues] = useState({
    gender: '',
    weight: '',
    height: '',
    age: '',
    bicep: '',
    tricep: '',
    subscapular: '',
    supraileak: '',
    bistyloid: '',
    femur: '',
  });

  // Hacer foco en el campo de entrada cuando se hace clic en el título
  const handleTitleClick = (inputRef) => {
    inputRef.current.focus();
  };

  // Refs para los campos de entrada
  const genderInputRef = useRef();
  const ageInputRef = useRef();
  const heightInputRef = useRef();
  const weightInputRef = useRef();
  const bicepInputRef = useRef();
  const tricepInputRef = useRef();
  const subscapularInputRef = useRef();
  const supraileakInputRef = useRef();
  const bistyloidInputRef = useRef();
  const femurInputRef = useRef();

  // Función para manejar cambios en los campos de entrada
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

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    calculateDensity(inputValues);
  };

  // Función para limpiar los campos del formulario
  const clean = () => {
    setInputValues({
      gender: '',
      weight: '',
      height: '',
      age: '',
      bicep: '',
      tricep: '',
      subscapular: '',
      supraileak: '',
      bistyloid: '',
      femur: '',
    });
    setDensity();
  };


  return (
    <div className="flex flex-col md:flex-row">
      {/*Formulario que debe llenarse con los datos necesarios para los cálculos */}
        <form 
            onSubmit={handleSubmit} 
            onReset={clean}
            className="bg-secondary shadow-2xl px-8 rounded-2xl text-center">
                <h1 className='font-bold text-xl mb-2'>Ingresa tus datos</h1>
                <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1 onClick={() => handleTitleClick(genderInputRef)}>Género</h1>
                    <select className='text-negro border-negro border rounded-lg pl-2 py-1.5 bg-gris w-full'
                    ref={genderInputRef}
                    name='gender'
                    title='gender'
                    value={inputValues.gender}
                    required onChange={handleInputChange}
                    >
                        <option value="">Selecciona tu género</option>
                        <option value="hombre">Masculino</option>
                        <option value="mujer">Femenino</option>
                        </select>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(ageInputRef)}>Edad</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={ageInputRef}
                  name='age' 
                  type="number" 
                  max="100" 
                  placeholder='Escribe tu edad'
                  value={inputValues.age} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(heightInputRef)}>Altura</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris' 
                  ref={heightInputRef}
                  name='height' 
                  type="number" 
                  placeholder='Escribe tu altura (m)'
                  value={inputValues.height}
                  required onChange={handleInputChange} />
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(weightInputRef)}>Peso</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={weightInputRef} 
                  name='weight' 
                  type="number" 
                  placeholder='Escribe tu peso (kg)'
                  value={inputValues.weight} 
                  required onChange={handleInputChange}/>
                </div>   
                <div>
                  <h1 onClick={() => handleTitleClick(bicepInputRef)}>Biciptal</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris' 
                  ref={bicepInputRef}
                  name='bicep' 
                  type="number" 
                  placeholder='Tamaño bicipital (mm)'
                  value={inputValues.bicep} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(tricepInputRef)}>Tricipital</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={tricepInputRef}
                  name='tricep' 
                  type="number" 
                  placeholder='Tamaño tricipital (mm)'
                  value={inputValues.tricep} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(subscapularInputRef)}>Subscapular</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={subscapularInputRef}
                  name='subscapular' 
                  type="number" 
                  placeholder='Tamaño subscapular (mm)'
                  value={inputValues.subscapular} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(supraileakInputRef)}>Suprailíaco</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={supraileakInputRef}
                  name='supraileak' 
                  type="number" 
                  placeholder='Tamaño suprailíaco (mm)'
                  value={inputValues.supraileak} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(bistyloidInputRef)}>Biestiloideo</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={bistyloidInputRef}
                  name='bistyloid' 
                  type="number" 
                  placeholder='Tamaño biestiloideo (cm)'
                  value={inputValues.bistyloid} 
                  required onChange={handleInputChange}/>
                </div>
                <div>
                  <h1 onClick={() => handleTitleClick(femurInputRef)}>Fémur</h1>
                  <input className='text-negro border-negro border rounded-lg pl-2 py-1 bg-gris'
                  ref={femurInputRef}
                  name='femur' 
                  type="number" 
                  placeholder='Tamaño fémur (cm)'
                  value={inputValues.femur} 
                  required onChange={handleInputChange}/>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-11 mb-10">
              <button className='p-2 bg-confirmar text-negro rounded-md font-bold' type='submit'>Calcular</button>
                <button className='p-2 bg-limpiar text-negro rounded-md font-bold' type='reset' onClick={clean}>Limpiar</button>
              </div>
            </form>
    </div>
  )
}
