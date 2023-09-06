import React from 'react';

//Componente de tabla que muestra los porcentajes y kilogramos de varios apartados.
export const TableComp = ({ percentages, masses }) => {
  return (
    <div className='w-3/4 bg-blanco h-fit p-4 rounded-md'>
      <table className='table-auto w-full text-left items-center border-collapse border-y mb-2 bg-secondary'>
        <thead>
          <tr>
            <th className='border-2 px-2 py-2 text-xl font-bold'>Componente</th>
            <th className='border-2 px-2 py-2 text-xl font-bold'>Porcentaje</th>
            <th className='border-2 px-2 py-2 text-xl font-bold'>Kilogramos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2 font-bold'>Masa grasa</td>
            <td>{percentages.bodyFat.toFixed(2)} %</td>
            <td>{masses.bodyFat.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold'>Masa ósea</td>
            <td>{percentages.boneMass.toFixed(2)} %</td>
            <td>{masses.boneMass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold'>Masa residual</td>
            <td>{percentages.residualMass.toFixed(2)} %</td>
            <td>{masses.residualMass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='p-2 font-bold'>Masa muscular</td>
            <td>{percentages.muscularMass.toFixed(2)} %</td>
            <td>{masses.muscularMass.toFixed(2)} kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
