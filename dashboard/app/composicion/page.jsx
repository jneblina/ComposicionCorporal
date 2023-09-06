'use client'

import React, { useState, useEffect } from 'react'
import { ChartComp } from '@/components/ChartComp'
import { FormComp } from '@/components/FormComp'
import { TableComp } from '@/components/TableComp'

export default function Composicion() {

    // Estado para almacenar la densidad calculada
    const [density, setDensity] = useState(null)

    // Estado para almacenar los porcentajes
    const [percentages, setPercentages] = useState({
        boneMass: '',
        bodyFat: '',
        residualMass: '',
        muscularMass:'',
    })

    // Estado para almacenar las masas
    const [masses, setMasses] = useState({
      boneMass: '',
      bodyFat: '',
      residualMass: '',
      muscularMass: ''
    })

    // Función para calcular la densidad y otras métricas
    const calculateDensity = (inputValues) => {
      const { gender, bicep, tricep, subscapular, supraileak, femur, bistyloid, height, weight } = inputValues;
      const sumFolds = tricep + bicep + subscapular + supraileak;

      // Función para calcular la masa ósea
      const calculateBoneMass = () => {
        return Math.pow(Math.pow(height, 2) * (femur / 100) * (bistyloid / 100) * 400, 0.712) * 3.02;
      };

      // Función para calcular la densidad corporal y la masa residual
      const genderCalculation = () => {
        const bodyDensity = gender === 'hombre'
          ? 1.1765 - (0.0744 * Math.log10(sumFolds))
          : 1.1567 - (0.0717 * Math.log10(sumFolds));
          
        const residual = gender === 'hombre' ? weight * 0.24 : weight * 0.21;
        
        return { bodyDensity, residual };
      };

      // Función para calcular la composición corporal y actualizar los estados
      const bodyCalculus = () => {
        const { bodyDensity, residual } = genderCalculation();
        setDensity(bodyDensity);
        
        const fat = (495 / bodyDensity) - 450;
        const percentageBoneMass = calculateBoneMass() * 100 / weight;
        const percentageResidualMass = residual * 100 / weight;
        const percentageMuscularMass = 100 - (fat + percentageBoneMass + percentageResidualMass);
        
        const bodyFatKilos = weight * (fat / 100);
        const muscularMassKilos = weight - (bodyFatKilos + calculateBoneMass() + residual);

        // Actualiza los estados con las métricas calculadas
        setMasses((prevValues) => ({
          ...prevValues,
          boneMass: calculateBoneMass(),
          bodyFat: bodyFatKilos,
          muscularMass: muscularMassKilos,
          residualMass: residual,
        }));

        setPercentages((prevValues) => ({
          ...prevValues,
          boneMass: percentageBoneMass,
          bodyFat: fat,
          muscularMass: percentageMuscularMass,
          residualMass: percentageResidualMass,
        }));
      };

      // Llama a la función de cálculo cuando se envía el formulario
      bodyCalculus();
    };

    return (
      <div className='bg-primary w-screen'>
        <h1 className='text-5xl text-center mt-4'>Composición Corporal</h1>
        <div className='grid grid-cols-2 justify-center p-8'>
          {/* Componente Formulario para ingresar datos */}
          <FormComp calculateDensity={calculateDensity} setDensity={setDensity}/>
          
          {/* Comprueba si se ha calculado la densidad antes de mostrar los otros componentes */}
          { density &&
            <div className='flex flex-col items-center justify-center gap-8'>
              {/* Componente Tabla para mostrar métricas */}
              <TableComp percentages={percentages} masses={masses} density={density}/>
              
              {/* Componente Gráfico para visualizar métricas */}
              <ChartComp percentages={percentages}/>
            </div>
          }
        </div>
      </div>
    );  
};