// Global
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = '#429bcc';
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 14;
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

// Chart 2 Radar Anwendung 1
var chartObject1 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(chartObject1, {
  type: 'radar',

  data: {
    labels: [
      'Produkte, Dienstleistungen',
      'Automatisierung von Prozessen',
      'KI-Anwendung für Datenanalyse',
      'Kundenkommunikation/-interaktion',
      'andere Anwendungsgebiete',
    ],
    datasets: [
      {
        label: 'IKT-Branche',
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [66, 54, 35, 9, 11],
      },
      {
        label: 'Gesamtwirtschaft',
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [60, 56, 34, 22, 11],
      },
    ],
  },

  options: {
    scales: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});

// Chart 3 Radar Anwendung 2
var chartObject1 = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(chartObject1, {
  type: 'radar',

  data: {
    labels: [
      'Produktion, Dienstleistungserbringung',
      'Administration',
      'FuE, Innovation',
      'Informationstechnik',
      'Vertrieb, Marketing',
      'Einkauf/Logistik',
    ],
    datasets: [
      {
        label: 'IKT-Branche',
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [57, 14, 36, 26, 8, 3],
      },
      {
        label: 'Gesamtwirtschaft',
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [52, 37, 21, 20, 5, 3],
      },
    ],
  },

  options: {
    scales: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});

// Chart 4 Radar Anwendung 3
var chartObject1 = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(chartObject1, {
  type: 'radar',

  data: {
    labels: [
      'Maschinelles Lernen',
      'Bild- oder Tonerkennung',
      'Wissensbasierte Systeme',
      'Sprach- oder Textverstehen',
    ],
    datasets: [
      {
        label: 'IKT-Branche',
        backgroundColor: 'rgba(163, 196, 214, 0.4)',
        borderColor: 'rgba(163, 196, 214, 1)',
        data: [59, 47, 55, 23],
      },
      {
        label: 'Gesamtwirtschaft',
        backgroundColor: 'rgba(3, 196, 214, 0.4)',
        borderColor: 'rgba(3, 196, 214, 1)',
        data: [60, 56, 34, 22],
      },
    ],
  },

  options: {
    scales: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});

// Chart 5 Einsatz von KI in Produkten
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

// Chart 6 Zeitliche Entwicklung
var chartObject6 = document.getElementById('chart6').getContext('2d');
var chart6 = new Chart(chartObject6, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'Finanzdienstleistungen.',
      'Chemie/Ph., Gr.st.',
      'Elektrot./Maschin.b.',
      'IKT',
      'Großhandel',
      'Verkehr, Logistik',
      'Ver-/Entsorg., Bg.b.',
      'Sonst. Verarb. Gew.',
      'Untern.nahe Dienstl.',
      'Sonst. Dienstleist.',
      'Fahrzeugbau',
    ],
    datasets: [
      {
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [6, 11, 17, 9, 8, 20, 12, 35, 24, 43, 17],
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
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  },
});

function updatevor2010() {
  chart6.data.datasets[0].data = [6, 11, 17, 9, 8, 20, 12, 35, 24, 43, 17];
  chart6.update();
}

function update201015() {
  chart6.data.datasets[0].data = [25, 25, 32, 35, 38, 39, 43, 44, 44, 54, 56];
  chart6.update();
}

function update201617() {
  chart6.data.datasets[0].data = [63, 76, 73, 74, 79, 55, 74, 79, 73, 68, 82];
  chart6.update();
}

function update201819() {
  chart6.data.datasets[0].data = [
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
  ];
  chart6.update();
}

//Chart 7 Ausgaben Doppelseitige Balken
var chartObject7 = document.getElementById('chart7').getContext('2d');
var chart7 = new Chart(chartObject7, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    datasets: [
      {
        label: 'Ausgaben',
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [
          -0.24,
          -1.5,
          -0.26,
          -0.68,
          -0.65,
          -0.07,
          -0.07,
          -0.14,
          -0.84,
          -0.16,
          -0.19,
        ],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            suggestedMin: -2,
            suggestedMax: 0,
          },
        },
      ],
    },
  },
});

//Chart 8 Umsätze Doppelseitige Balken
var chartObject8 = document.getElementById('chart8').getContext('2d');
var chart8 = new Chart(chartObject8, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'Finanzdienstleistungen ',
      'IKT ',
      'Sonst. Verarb. Gewerbe ',
      'Elektrot./Maschin.b. ',
      'Unternehmensnahe Dienstleistungen ',
      'Ver- und Entsorgung, Bergbau ',
      'Großhandel ',
      'Chemie/Pharma ',
      'Fahrzeugbau ',
      'Verkehr, Logistik ',
      'Sonstige Dienstleistungen ',
    ],
    datasets: [
      {
        label: 'Umsätze',
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [17.3, 9.0, 6.0, 4.9, 4.8, 4.5, 4.3, 3.4, 3.3, 1.5, 0.8],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 20,
          },
        },
      ],
    },
  },
});

//Chart 9 Umsätze Doppelseitige Balken
var chartObject9 = document.getElementById('chart9').getContext('2d');
var chart9 = new Chart(chartObject9, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'Fahrzeugbau',
      'Elektrot./Maschin.b.',
      'IKT ',
      'Verkehr, Logistik ',
      'Finanzdienstleist.',
      'Chemie/Pharma, Gr. st.',
      'Ver- und Entsorg., Bg.b.',
      'Sonstige Dienstleist.',
      'Großhandel ',
      'Sonst. Verarb. Gewerbe ',
      'Unternehmensn. Dienstleist.',
    ],
    datasets: [
      {
        label: 'Umsätze',
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [7056, 718, 382, 321, 286, 282, 245, 210, 171, 130, 93],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 7100,
          },
        },
      ],
    },
  },
});
