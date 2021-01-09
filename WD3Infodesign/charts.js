// Global
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = '#429bcc';
Chart.defaults.global.defaultFontFamily = 'Oswald';
Chart.defaults.global.tooltips.backgroundColor = '#d3d3d3';
Chart.defaults.global.tooltips.titleFontColor = '#429bcc';
Chart.defaults.global.tooltips.bodyFontColor = '#429bcc';
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;

// Chart 1
var chartObject1 = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(chartObject1, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'IKT',
      'Finanzdienstleist.',
      'Untern.nahe Dienstl.',
      'Elektrot./Maschin.b.',
      'Fahrzeugbau',
      'Chemie/Ph., Gr.st.',
      'Ver-/Entsorg., Bg.b.',
      'Sonst. Verarb. Gew.',
      'Sonst. Dienstleist.',
      'Verkehr, Logistik',
      'Großhandel',
    ],
    datasets: [
      {
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1.0],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

// Chart 2
var chartObject1 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(chartObject1, {
     type: 'radar',

     data:{
       labels: ["Produkte, Dienstleistungen", 
                "Automatisierung von Prozessen", 
                "KI-Anwendung für Datenanalyse",
                "Kundenkommunikation/-interaktion",
                "andere Anwendungsgebiete"],
      datasets: [{
        label: "IKT-Branche",
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [66,54,35,9,11]
      }, {
        label: "Gesamtwirtschaft",
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [60,56,34,22,11]
      }

      ]
     },

     options: {
       scales : {
         angleLines:{
           display: false
         },
         ticks:{
           suggestedMin:0,
           suggestedMax: 100
         }
       }
     }
});

// Chart 3
var chartObject1 = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(chartObject1, {
     type: 'radar',

     data:{
       labels: ["Produktion, Dienstleistungserbringung", 
                "Administration", 
                "FuE, Innovation",
                "Informationstechnik",
                "Vertrieb, Marketing",
                "Einkauf/Logistik"],
      datasets: [{
        label: "IKT-Branche",
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [57,14,36,26,8,3]
      }, {
        label: "Gesamtwirtschaft",
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [52,37,21,20,5,3]
      }

      ]
     },

     options: {
       scales : {
         angleLines:{
           display: false
         },
         ticks:{
           suggestedMin:0,
           suggestedMax: 100
         }
       }
     }
});

// Chart 4
var chartObject1 = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(chartObject1, {
     type: 'radar',

     data:{
       labels: ["Maschinelles Lernen", 
                "Bild- oder Tonerkennung", 
                "Wissensbasierte Systeme",
                "Sprach- oder Textverstehen"],
      datasets: [{
        label: "IKT-Branche",
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [59,47,55,23]
      }, {
        label: "Gesamtwirtschaft",
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [60,56,34,22]
      }

      ]
     },

     options: {
       scales : {
         angleLines:{
           display: false
         },
         ticks:{
           suggestedMin:0,
           suggestedMax: 100
         }
       }
     }
});

// Chart 5
var chartObject1 = document.getElementById('chart5').getContext('2d');
var chart5 = new Chart(chartObject1, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'IKT',
      'Untern.nahe Dienstl.',
      'Finanzdienstleist.',
      'Elektrot./Maschin.b.',
      'Fahrzeugbau',
      'Chemie/Ph., Gr.st.',
      'Sonst. Verarb. Gew.',
      'Ver-/Entsorg., Bg.b.',
      'Sonst. Dienstleist.',
      'Verkehr, Logistik',
      'Großhandel',
    ],
    datasets: [
      {
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [14.7, 9.4, 7.8, 4.4, 3.1, 2.1, 2.1, 2.0, 1.2, 1.1, 0.8],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});