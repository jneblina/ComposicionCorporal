import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';



export const ChartComp = ({ porcentajes }) => {
  const chartRef = useRef();

    useEffect(() => {
      const {masa_grasa, masa_osea, masa_residual, masa_muscular} = porcentajes
    
    const ctx = document.getElementById('chartComp');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masas ósea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: 'Porcentaje respecto al peso',
          data: [masa_grasa, masa_osea, masa_residual, masa_muscular],
          borderWidth: 2
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

    chartRef.current = newChart;
    }, [porcentajes])
    
    
  return (
    <div className=' rounded-md bg-blanco flex flex-col px-4'>
    <h1 className='text-xl font-bold mb-2'>Gráfica de pastel</h1>
    
      <canvas id='chartComp' width='200' height='200'></canvas>
    </div>
  )
}