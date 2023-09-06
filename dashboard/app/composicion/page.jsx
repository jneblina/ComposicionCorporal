'use client'

import React, { useState, useEffect } from 'react'
import { ChartComp } from '@/components/ChartComp'
import { FormComp } from '@/components/FormComp'
import { TableComp } from '@/components/TableComp'

export default function Composicion() {

    const [densidad, setDensidad] = useState(null)

    const [porcentajes, setPorcentajes] = useState({
        boneMass: '',
        bodyFat: '',
        residualMass: '',
        muscularMass:'',
    })

    const [masas, setMasas] = useState({
      masa_osea: '',
      bodyFat: '',
      residualMass: '',
      muscularMass: ''
    })
    

        const calcularDensidad = (inputValues) => {
          const { gender, bicep, tricep, subscapular, supraileak, femur, bistyloid, height, weight } = inputValues;
        
          const sumFolds = tricep + bicep + subscapular + supraileak;
        
          const calcularMasaOsea = () => {
            return Math.pow(Math.pow(height, 2) * (femur / 100) * (bistyloid / 100) * 400, 0.712) * 3.02;
          };

        const calcularDensidadYResidual = () => {
          const densidadCorporal = gender === 'hombre'
            ? 1.1765 - (0.0744 * Math.log10(sumFolds))
            : 1.1567 - (0.0717 * Math.log10(sumFolds));
            
          const residual = gender === 'hombre' ? weight * 0.24 : weight * 0.21;
        
          return { densidadCorporal, residual };
        };

        const densidadYMasas = () => {
          const { densidadCorporal, residual } = calcularDensidadYResidual();
          setDensidad(densidadCorporal);
          
          //Porcentajes
          const grasa = (495 / densidadCorporal) - 450;
          const porcentajeMasaOsea = calcularMasaOsea() * 100 / weight;
          const porcentajeMasaResidual = residual * 100 / weight;
          const porcentajeMasaMuscular = 100 - (grasa + porcentajeMasaOsea + porcentajeMasaResidual);
          
    
          //Masas
          const masaGrasaKilos = weight * (grasa / 100);
          const masaMuscularKilos = weight - (masaGrasaKilos + calcularMasaOsea() + residual);
      
          setMasas((prevValues) => ({
            ...prevValues,
            boneMass: calcularMasaOsea(),
            masa_grasa: masaGrasaKilos,
            muscularMass: masaMuscularKilos,
            residualMass: residual,
          }));
      
          setPorcentajes((prevValues) => ({
            ...prevValues,
            boneMass: porcentajeMasaOsea,
            bodyFat: grasa,
            muscularMass: porcentajeMasaMuscular,
            residualMass: porcentajeMasaResidual,
          }));
        };
      
        densidadYMasas();
      };

      return (
        <div className='bg-primary w-screen'>
          <h1 className='text-5xl text-center mt-4'>Composición Corporal</h1>
          <div className='grid grid-cols-2 justify-center p-8 h-1/2'>
            <FormComp calcularDensidad={calcularDensidad} setDensidad={setDensidad}/>
            { densidad &&
              <div className='flex flex-col items-center justify-center'>
                <TableComp porcentajes={porcentajes} masas={masas} densidad={densidad}/>
                <ChartComp porcentajes={porcentajes}/>
              </div>
            }
          </div>
        </div>
      );  
};


