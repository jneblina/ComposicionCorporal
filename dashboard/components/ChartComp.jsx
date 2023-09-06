import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export const ChartComp = ({ percentages }) => {
  // Ref para el elemento de la gráfica
  const chartRef = useRef();

  useEffect(() => {
    const { bodyFat, boneMass, residualMass, muscularMass } = percentages;

    // Obtener el contexto del elemento de la gráfica
    const ctx = chartRef.current.getContext('chartComp');

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

    // Actualiza la referencia del elemento de la gráfica con la nueva instancia
    chartRef.current = newChart;
  }, [percentages]);

  return (
    <div className='rounded-md bg-blanco flex flex-col px-4'>
      <h1 className='text-center font-bold'>Gráfica de porcentajes</h1>
      {/* El elemento canvas donde se renderizará la gráfica */}
      <canvas ref={chartRef} id='chartComp' height='200' width='200'></canvas>
    </div>
  );
};
