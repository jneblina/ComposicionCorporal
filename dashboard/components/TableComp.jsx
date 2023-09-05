import React, { useEffect } from 'react'

export const TableComp = ({ porcentajes, masas, densidad }) => {
  
  return (
    
      <div className='w-3/4 bg-white h-fit p-4 rounded-md'>   
          <table className='table-auto w-full text-left items-center border-collapse border-y mb-2 bg-secondary'>
            <thead>
              <tr>
                <th className='border-2 px-2 py-2 text-xl font-bold'>Componente</th>
                <th className='border-2 px-2 py-2 text-xl font-bold'>Porcentaje</th>
                <th className='border-2 px-2 py-2 text-xl font-bold'>Kilogramos</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-y'>
                <td className='p-2 font-bold'>
                  Masa grasa
                </td>
                <td>
                  { porcentajes.masa_grasa.toFixed(2) } %
                </td>
                <td>
                  { masas.masa_grasa.toFixed(2) } kg
                </td>
              </tr>
              <tr className='border-y'>
                <td className='p-2 font-bold'>
                  Masa ósea
                </td>
                <td>
                  { porcentajes.masa_osea.toFixed(2) } %
                </td>
                <td>
                  { masas.masa_osea.toFixed(2) } kg
                </td>
              </tr>
              <tr className='border-y'>
                <td className='p-2 font-bold'>
                  Masa residual
                </td>
                <td>
                  { porcentajes.masa_residual.toFixed(2) } %
                </td>
                <td>
                  { masas.masa_residual.toFixed(2) } kg
                </td>
              </tr>
              <tr className='border-y'>
                <td className='p-2 font-bold'>
                  Masa muscular
                </td>
                <td>
                  { porcentajes.masa_muscular.toFixed(2) } %
                </td>
                <td>
                  { masas.masa_muscular.toFixed(2) } kg
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    
  )
}