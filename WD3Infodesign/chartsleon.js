// Global
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = '#429bcc';
Chart.defaults.global.defaultFontFamily = 'Oswald';
Chart.defaults.global.tooltips.backgroundColor = '#d3d3d3';
Chart.defaults.global.tooltips.titleFontColor = '#429bcc';
Chart.defaults.global.tooltips.bodyFontColor = '#429bcc';
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;


//Chart 2
var chartObject2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(chartObject2, {
  // The type of chart we want to create
  type: 'radar',

  // The data for our dataset
  data: {
    labels: [
      'Produkte, Dienstleistungen',
      'Automatisierung von Prozessen',
      'KI-Anwendung für Datenanalyse',
      'Kundenkommuniktaion/-interaktion',
      'andere Anwendungsgebiete',
    ],
    datasets: [
      {
        label: 'IKT-Branche',
        backgroundColor: rgba(163, 196, 214, 0.4),
        hoverBackgroundColor: rgba(163, 196, 214, 1),
        borderwidth: 1,
        data: [66, 54, 35, 9, 11],
      },{
        label: 'Gesamtwirtschaft',
        backgroundColor: rgba(163, 196, 214, 0.4),
        hoverBackgroundColor: rgba(163, 196, 214, 1),
        borderwidth: 1,
        data: [60, 56, 34, 22, 11],
      }
    ],
  },

  // Configuration options go here
  options = {
    scale: {
        angleLines: {
            display: true
        },
        ticks: {
            min: 0,
            max: 100
        }
    }
},
});