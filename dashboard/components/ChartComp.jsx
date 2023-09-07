import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';



export const ChartComp = ({ percentages }) => {
  // Ref para el elemento de la gráfica
  const chartRef = useRef();

    useEffect(() => {
      const {bodyFat, boneMass, residualMass, muscularMass} = percentages
    
    // Obtener el contexto del elemento de la gráfica
    const ctx = document.getElementById('chartComp');

    // Destruye la gráfica anterior si existe para evitar duplicados
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
    // Crea una nueva instancia de Chart.js para la gráfica de pastel
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masa ósea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: 'Porcentaje respecto al peso',
          data: [bodyFat, boneMass, residualMass, muscularMass],
          borderWidth: 1,
          backgroundColor: ['#132C53', '#1A3D74', '#224E96', '#2A60B7'],
          borderColor: ['#132C53', '#1A3D74', '#224E96', '#2A60B7'],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Actualiza la referencia del elemento de la gráfica con la nueva instancia
    chartRef.current = newChart;
    }, [percentages])
    
    
  return (
    <div className=' rounded-md flex flex-col px-4'>
      <h1 className='text-center font-bold'>Gráfica de porcentajes</h1>
      {/* El elemento canvas donde se renderizará la gráfica */}
      <canvas id='chartComp'></canvas>
    </div>
  )
}