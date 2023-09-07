import React from 'react';

//Componente de tabla que muestra los porcentajes y kilogramos de varios apartados.
export const TableComp = ({ percentages, masses }) => {
  return (
    <div className='w-3/4 h-fit'>
      <table className=' w-full items-center mb-2 bg-secondary rounded-2xl'>
        <thead>
          <tr>
            <th className='text-white px-2 py-2 text-base font-bold'>Componente</th>
            <th className='text-white px-2 py-2 text-base font-bold'>Porcentaje</th>
            <th className='text-white px-2  py-2 text-base font-bold'>Kilogramos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2 font-bold text-tableComponents'>Masa grasa</td>
            <td>{percentages.bodyFat.toFixed(2)} %</td>
            <td>{masses.bodyFat.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold text-tableComponents'>Masa ósea</td>
            <td>{percentages.boneMass.toFixed(2)} %</td>
            <td>{masses.boneMass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold text-tableComponents'>Masa residual</td>
            <td>{percentages.residualMass.toFixed(2)} %</td>
            <td>{masses.residualMass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold text-tableComponents'>Masa muscular</td>
            <td>{percentages.muscularMass.toFixed(2)} %</td>
            <td>{masses.muscularMass.toFixed(2)} kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
