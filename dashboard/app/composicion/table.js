import Chart from 'chart.js/auto'
    
const ctx1 = document.getElementById('barChart');
                                
                                new Chart(ctx1, {
                                  type: 'bar',
                                  data: {
                                    labels: ['Manzanas', 'Naranjas', 'Limones', 'Mangos', 'Uvas', 'Peras'],
                                    datasets: [{
                                      label: '# de votos',
                                      data: [20, 40, 14, 31, 27, 39],
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