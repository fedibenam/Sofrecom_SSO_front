import { Component, AfterViewInit } from '@angular/core';

declare let L: any; // since we're using global Leaflet from CDN

@Component({
  selector: 'app-bus-stations',
  templateUrl: './bus-stations.component.html',
  styleUrls: ['./bus-stations.component.scss']
})
export class BusStationsComponent implements AfterViewInit {
  routes: any[] = []; // ✅ Declare routes (initialize to empty array or load from a service)
  route: any = null;

  ngAfterViewInit(): void {
    const map = L.map('map').setView([36.8, 10.2], 8); // Tunisia center


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add static markers (you can load these dynamically later)
    const stops = [
      { name: 'Bouargoub collège', lat: 36.54067274957689, lng: 10.545962312931461 },
      { name: 'Maamoura', lat: 36.46453058013492, lng: 10.804173782327828 },
      { name: 'Menzel Jemil', lat: 37.239318603789066, lng: 9.919699357225355 },
      { name: 'Beni Khiar', lat: 36.46215209783977, lng: 10.7955092373239 },
      { name: 'Mannouba : Khaireddine', lat: 36.81549278914272, lng: 10.057131258254913 }, 
      { name: 'Sidi Hssine: Magasin général', lat: 36.771257985873696 , lng: 10.11383893044755 },
      { name: 'Sidi Hssine: Station Transport Collectif', lat: 36.77606693708611,  lng: 10.115397739762933 },
      { name: 'Dar Chaabane', lat: 36.46215943242568,  lng: 10.765700384911211 },
      { name: 'Bizerte centre-ville', lat: 37.28346337429043,  lng: 9.864937523223638 },
      { name: 'ROND POINT CHELBY', lat: 37.289920648417784,  lng: 9.884505154924451 },
      { name: 'Mnihla (Oil Lybia)', lat: 36.88676593903091,  lng: 10.168432870947528 },
      { name: 'Mannouba: Devant Lycée Mannouba', lat: 36.818275838578735,  lng: 10.079969632257583 },
      { name: 'El Gharnouk', lat: 36.78862880117882,  lng: 10.111503526229548 },
      { name: 'Mosquée Mnihla', lat: 36.8582055994224,  lng: 10.116969238070618 },
      { name: 'NABEUL (Lahouech)', lat: 36.49364600954498,  lng: 10.743743371358976 },
      { name: 'Poste Police Intileka', lat: 36.84115520274711,  lng: 10.119898446543498 },
      { name: 'El Mourouj6 : Magasin générale', lat: 36.71271881232284,  lng: 10.215780455027218 },
      { name: 'Borj cedria : Station Agil', lat: 36.703175760845085,  lng: 10.39902165494834 },
      { name: 'ZARZOUNA', lat: 37.25911643134407,  lng: 9.882314873540915 },
      { name: 'Mornag centre', lat: 36.68599533629055,  lng: 10.310569571320906 },
      { name: 'El Mourouj4 : Centre Chalekh/Boutique Orange', lat: 36.715336608460454,  lng: 10.207696239743752 },
      { name: 'Zahrouni: BATAM', lat: 36.79356899073659,  lng: 10.108327999455142 },
      { name: 'Bir el bey: Le Pont', lat: 36.7139288842092,  lng: 10.375318170687864 },
      { name: 'Hammam chatt/ taher sfar', lat: 36.720421091510836,  lng: 10.356793849353233 },
      { name: 'Denden: Station magasin général', lat: 36.80350498985209,  lng: 10.108754535160442 },
      { name: 'Mornag: Devant le Terrain', lat: 36.705070235288886,  lng: 10.261761115702283 },
      { name: 'Omrane Sup: Pharmacie Snoussi', lat: 36.83760300090622,  lng: 10.128858056451737 },
      { name: 'El Mourouj3 : Monoprix', lat: 36.72353735177713,  lng: 10.214003137596926 },
      { name: 'Mannouba: telecom', lat: 36.81341579981561,  lng: 10.110750729194878 },
      { name: 'Mannouba: INEPS (Rond Point)', lat: 36.82165441810312,  lng: 10.080591498681827 },
      { name: 'El Mourouj1 : Hammadi Abid', lat: 36.73802452572834,  lng: 10.209061057230965 },
      { name: 'Kiosque Agil Raoued', lat: 36.877086523180175,  lng: 10.185574134070837 },
      { name: 'Mannouba : Cité El Amal', lat: 36.81056758718396,  lng: 10.114607226070836 },
      { name: 'ezzahra lycée', lat: 36.739183257529724,  lng: 10.31812993573193 },
      { name: 'Gammarth: La Mosquée', lat: 36.90828912217251,  lng: 10.299309468575137 },
      { name: 'El Mourouj2 : En face de la boulangerie Panera', lat: 36.74077170802694,  lng: 10.20591703666894 },
      { name: 'Mannouba: meuble Mezghani', lat: 36.82168583006963,  lng: 10.105440165412292 },
      { name: 'Gammarth: Café Journal', lat: 36.89279774043899,  lng: 10.317975083736496 },
      { name: 'El Mourouj2 : Près de la mosquée', lat: 36.74951072039665,  lng: 10.213589822071 },
      { name: 'Mornag: Rondpoint Boumhal Basatine (Sortie de l’autoroute)', lat: 36.72783498328386,  lng: 10.302558648759412 },
      { name: 'El Mourouj2 : Station  métro « ElMontazah »', lat: 36.74230271176674,  lng: 10.197750966998697 },
      { name: 'Marsa ville: Telecom', lat: 36.88070997325029,  lng: 10.327387404822334 },
      { name: 'Péage Utique', lat: 37.07496249532499,  lng: 10.0013368954669 },
      { name: 'Rondpoint Ariana Soghra', lat: 36.900797738394616,  lng: 10.186596485287517 },
      { name: 'rondpoint ezzahra pharmacie', lat: 36.74424257541505,  lng: 10.30367954473414 },
      { name: 'Agence ATB sidi salah', lat: 36.85497813765943,  lng: 10.258655013251078 },
      { name: 'Rondpoint Technopole / Protection Civile', lat: 36.85105025722174, lng: 10.277594305476594 },
      { name: 'Marsa ville: Stade', lat: 36.87635277063222,  lng: 10.321856036845872 },
      { name: 'Ibn Sina : Station  métro « Cité municipale»', lat: 36.754863868208375,  lng: 10.196786872928278 },
      { name: 'Nouvelle Medina rond-point Carrefour', lat: 36.742465416205484,  lng: 10.251712222050351 },
      { name: 'Manar II: Centre Elyssa', lat: 36.8352906929518,  lng: 10.149844182191172 },
      { name: 'Hammadi Abid Sokra', lat: 36.86733987792882,  lng: 10.224741597673544 },
      { name: 'EL Ghazala: Face Mosquée El Ghazela', lat: 36.89487074614471,  lng: 10.18747035165991 },
      { name: 'Rondpoint NOUR JAAFER  (Mazraa Salima)', lat: 36.911924739132786,  lng: 10.188392410092812 },
      { name: 'Ibn Sina : Station  métro « Elghazeli »', lat: 36.75445363783803,  lng: 10.193840712148116 },
      { name: 'Hammamet (Mosquée Ihsen)', lat: 36.410502858751954,  lng: 10.61106983444005 },
      { name: 'Cité Ettadhamen : Face Superette Aziza', lat: 36.83291780622154,  lng: 10.112040258748971 },
      { name: 'Ibn Sina : Station  métro « Taher el7aded »', lat: 36.76094534523229,  lng: 10.187673160344607 },
      { name: 'El yasminet : Devant pâtisserie la reine', lat: 36.74091458402816,  lng: 10.238549676368345 },
      { name: 'Carrefour Express Nour jaafer', lat: 36.90464375246146,  lng: 10.181204310390074 },
      { name: 'RADES en face Gamma auto', lat: 36.775080577483585,  lng: 10.288719155416572 },
      { name: 'El yasminet :Biat', lat: null, lng: null },
      { name: 'Elouardia: Magasin “Aziza”', lat: 36.772124521830484,  lng: 10.279583929936233 },
      { name: 'El Ghazal/Ennahli: Sous le Pont', lat: 36.882569951809714,  lng: 10.158044281231932 },
      { name: 'BARDO: Face Monoprix Bardo', lat: 36.81062103983404,  lng: 10.138513826887003 },
      { name: 'LC WAIKIKI', lat: 36.72616424673639,  lng: 10.211455878551089 },
      { name: 'Carrefour Marsa (sous la passerelle Piétons)', lat: 36.86591468235765,  lng: 10.299341242200986 },
      { name: 'Rondpoint Riadh Andalous Carrefour market', lat: 36.87914817544099,  lng: 10.180852114542164 },
      { name: 'Cité Intilaka: magasin général', lat: 36.83977546835805,  lng: 10.116894637842279 },
      { name: 'Ooredoo Bardo', lat: 36.81360266379155,  lng: 10.1470962967291 },
      { name: 'Rondpoint l’escale', lat: 36.87429055593891,  lng: 10.186703471994656 },
      { name: 'Arrêt de Bus Dar fadhal', lat: 36.872760705281635,  lng: 10.290359955894324 },
      { name: 'Elouardia : Près de Frigo Technique', lat: 36.800220254878134,  lng: 10.189971516918796 },
      { name: 'Direction 10 Décembre, via X2 puis route X', lat: 36.85117425003553,  lng: 10.196157225292342 },
      { name: 'Carrefour Nkhilet', lat: 36.88470224471362,  lng: 10.185745113598948 },
      { name: 'ben arous Devant maison mazda', lat: 36.74787692584169,  lng: 10.231028853689883 },
      { name: 'Ain Zaghouan: la mosquée', lat: 36.85658120636736,  lng: 10.284642104188553 },
      { name: 'Hedi Nouira Sous la passerelle piétons', lat: 36.861504014229844,  lng: 10.165397087583802 },
      { name: 'ben arous Devant Mosquée Chifaa', lat: 36.751541847460565,  lng: 10.227267258168636 },
      { name: 'Ras Ettabia: Centre de formation', lat: 36.81538207844534,  lng: 10.147719560678855 },
      { name: 'EL Mazraa NKHILET', lat: 36.88296839232363,  lng: 10.192706919344994 },
      { name: 'Hedi Nouira Sous le pont', lat: 36.86158905287501,  lng: 10.165374998258992 },
      { name: 'Manar: Sonede', lat: 36.83642809687608,  lng: 10.161634472712247 },
      { name: 'Omrane Sup: station face du metro.', lat: 36.83126814087323,  lng: 10.125617161791002 },
      { name: 'Rue Dar Fadhal en face poissonnier', lat: 36.86718764312614,  lng: 10.252540354084012 },
      { name: 'Rond-Point Cité Essalama', lat: 36.85710151403492,  lng: 10.273461582321351 },
      { name: 'ben arous devant BNA', lat: 36.757625102218455,  lng: 10.218736584661212 },
      { name: 'BorjLouzir: Face SHELL', lat: 36.86254536090885,  lng: 10.208573405561125 },
      { name: 'Ront point Turki (via N1)', lat: 36.57403050251754,  lng: 10.517820991242019 },
      { name: 'Hedi Nouira: Point de vente Voitures', lat: 36.861790266009685,  lng: 10.166456722886789 },
      { name: 'Cité ettahrir: station face du metro.', lat: 36.82316393385117,  lng: 10.141259365219417 },
      { name: 'Charguia 2: Station des bus Face Oil Libya', lat: 36.839849955846255,  lng: 10.206127197824037 },
      { name: 'Cité Ibn Khaldoun: (Agence ATB).', lat: 36.828436572615715,  lng: 10.1348798324676 },
      { name: 'Echemi', lat: 36.86093420508308,  lng: 10.171100379405656 },
      { name: 'DOWNTOWN', lat: 36.81998293097503,  lng: 10.161496606858059 },
      { name: 'Aéroport', lat: 36.84937934069543,  lng: 10.217684421362698 },
      { name: 'Megrine / Rond-point saida', lat: 36.7791998685206,  lng: 10.190048461239432 },
      { name: 'Diar Sokra', lat: 36.85993103427328,  lng: 10.269561382695677 },
      { name: 'Centre-Ville: TGM', lat: 36.883632057964064,  lng: 10.337957907351887 },
      { name: 'Rond-Point Ibn Khouldoun (X3)', lat: 36.83702395295274,  lng: 10.135018814861477 },
      { name: 'Centre-Ville : Sous le Pont de la république', lat: 45.89919656910664, lng:  6.125098908197221 },
      { name: 'Rond-Point Clinique Taoufik', lat: 36.83208780015495,  lng: 10.15704287870034 },
      { name: 'Menzah 4: 10 Décembre', lat: 36.84596688434766,  lng: 10.184969380241919 },
      { name: 'Cité EL Ouwahat', lat: 36.78805305125745,  lng: 10.236606342875884 },
      { name: 'Centre-Ville Central Park', lat: 36.80218346777299,  lng: 10.184179426203174 },
      { name: 'Rond-Point Eglise L’aouina', lat: 36.86175966462464,  lng: 10.256238906730832 },
      { name: 'Centre Urbain Nord Cité Olympique face Agil', lat: 36.84026280494833,  lng: 10.197328790298833 },
      { name: 'Centre-Ville (Rue Ghana)', lat: 36.807142966478736,  lng: 10.18709023223808 },
      { name: 'Charguia I', lat: 36.844520436908,  lng: 10.207824445848354 },
      { name: 'Cités des sciences', lat: 48.895914620214874,  lng: 2.3896064407792723 },
    ];

     this.routes = [
      {
        circuit: 'BIZERTE',
        stops: [
          'Bizerte centre-ville',
          'Menzel Jemil',
          'Péage Utique',
          'ZARZOUNA'
        ]
      },
      {
        circuit: 'Borj Cedria',
        stops: [
          'Bir el bey: Le Pont',
          'Borj cedria : Station Agil',
          'Centre-Ville : Sous le Pont de la république',
          'Centre-Ville: TGM',
          'ezzahra lycée',
          'Hammam chatt/ taher sfar',
          'RADES en face Gamma auto',
          'rondpoint ezzahra pharmacie',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Gammarth',
        stops: [
          'Ain Zaghouan: la mosquée',
          'Carrefour Marsa ( sous la passerelle Piétons)',
          'Cité EL Ouwahat',
          'Diar Sokra',
          'Gammarth: Café Journal',
          'Gammarth: La Mosquée',
          'Marsa ville: Stade',
          'Marsa ville: Telecom',
          'Rond-Point Cité Essalama',
          'Rond-Point Eglise L’aouina',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Mannouba /Ettadhamen',
        stops: [
          'Cité Ettadhamen : Face Superette Aziza',
          'Cité ettahrir: station face du metro.',
          'Cité Ibn Khaldoun: (Agence ATB).',
          'Cité Intilaka: magasin général',
          'Cités des sciences',
          'Mannouba : Khaireddine',
          'Mannouba: Devant Lycée Mannouba',
          'Mannouba: INEPS (Rond Point)',
          'Mannouba: meuble Mezghani',
          'Mannouba: telecom',
          'Omrane Sup: station face du metro.',
          'Rond-Point Clinique Taoufik',
          'Rond-Point Ibn Khouldoun (X3)',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Mnihla',
        stops: [
          'Centre Urbain Nord Cité Olympique face Agil',
          'Charguia I',
          'Direction 10 Décembre, via X2 puis route X',
          'Manar II: Centre Elyssa',
          'Menzah 4: 10 Décembre',
          'Mnihla (Oil Lybia)',
          'Mosquée Mnihla',
          'Omrane Sup: Pharmacie Snoussi',
          'Poste Police Intileka',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'MORNEG',
        stops: [
          'ben arous devant BNA',
          'ben arous Devant maison mazda',
          'ben arous Devant Mosquée Chifaa',
          'Centre-Ville (Rue Ghana)',
          'Centre-Ville Central Park',
          'El yasminet : Devant pâtisserie la reine',
          'El yasminet :Biat',
          'Megrine / Rond-point saida',
          'Mornag centre',
          'Mornag: Devant le Terrain',
          'Mornag: Rondpoint Boumhal Basatine (Sortie de l’autoroute)',
          'Nouvelle Medina rond-point Carrefour',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'NABEUL',
        stops: [
          'Beni Khiar',
          'Bouargoub collège',
          'Dar Chaabane',
          'Hammamet (Mosquée Ihsen)',
          'Maamoura',
          'NABEUL (Lahouech)',
          'ROND POINT CHELBY',
          'Ront point Turki (via N1)',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Nkhilet/Ghazala',
        stops: [
          'Aéroport',
          'BorjLouzir: Face SHELL',
          'Charguia 2: Station des bus Face Oil Libya',
          'El Ghazal/Ennahli: Sous le Pont',
          'EL Ghazala: Face Mosquée El Ghazela',
          'Hedi Nouira Sous la passerelle piétons',
          'Hedi Nouira Sous le pont',
          'Rondpoint Ariana Soghra',
          'Rondpoint Riadh Andalous Carrefour market',
          'Rondpoint Technopole / Protection Civile',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Nour Jaafer',
        stops: [
          'BorjLouzir: Face SHELL',
          'Carrefour Express Nour jaafer',
          'Carrefour Nkhilet',
          'EL Mazraa NKHILET',
          'Hedi Nouira: Point de vente Voitures',
          'Kiosque Agil Raoued',
          'Rondpoint l’escale',
          'Rondpoint NOUR JAAFER  (Mazraa Salima)',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Ouardia /Mourouj',
        stops: [
          'El Mourouj1 : Hammadi Abid',
          'El Mourouj2 : En face de la boulangerie Panera',
          'El Mourouj2 : Près de la mosquée',
          'El Mourouj2 : Station  métro « ElMontazah »',
          'El Mourouj3 : Monoprix',
          'El Mourouj4 : Centre Chalekh/Boutique Orange',
          'El Mourouj6 : Magasin générale',
          'Elouardia : Près de Frigo Technique',
          'Elouardia: Magasin “Aziza”',
          'Ibn Sina : Station  métro « Cité municipale»',
          'Ibn Sina : Station  métro « Elghazeli »',
          'Ibn Sina : Station  métro « Taher el7aded »',
          'SOFRECOM STERLING'
        ]
      },
      {
        circuit: 'Sidi Hssine',
        stops: [
          'BARDO: Face Monoprix Bardo',
          'Charguia I',
          'Denden: Station magasin général',
          'El Gharnouk',
          'Manar: Sonede',
          'Mannouba : Cité El Amal',
          'Ooredoo Bardo',
          'Ras Ettabia: Centre de formation',
          'Sidi Hssine: Magasin général',
          'Sidi Hssine: Station Transport Collectif',
          'SOFRECOM STERLING',
          'Zahrouni: BATAM'
        ]
      },
      {
        circuit: 'Sidi Salah',
        stops: [
          'Agence ATB sidi salah',
          'Arrêt de Bus Dar fadhal',
          'DOWNTOWN',
          'Echemi',
          'Hammadi Abid Sokra',
          'LC WAIKIKI',
          'Rond-point l’église l’Aouina',
          'Rue Dar Fadhal en face poissonnier',
          'SOFRECOM STERLING'
        ]
      }
    ];

    this.populateCircuitTable();

    // Add markers
    stops.forEach(stop => {
      if (stop.lat !== null && stop.lng !== null) { // Ensure lat and lng are not null
        const marker = L.marker([stop.lat, stop.lng]).addTo(map)
          .bindPopup(stop.name)
          .on('click', () => {
            this.showRoute(map, [36.8, 10.2], [stop.lat, stop.lng]);
          });
      } else {
        console.warn(`Invalid stop coordinates for: ${stop.name}`);
      }
    });
  }

  // Function to show a route between the user's location and the clicked bus station
  showRoute(map: any, startCoord: [number, number], endCoord: [number, number]): void {
    console.log('Start Coordinates:', startCoord);
    console.log('End Coordinates:', endCoord);
  
    // Clear any previous route
    if (this.route) {
      map.removeControl(this.route);
    }
  
    // Create a route using Leaflet Routing Machine
    this.route = L.Routing.control({
      waypoints: [
        L.latLng(startCoord),
        L.latLng(endCoord)
      ],
      routeWhileDragging: true
    }).addTo(map);
  }
  populateCircuitTable(): void {
    const tableBody = document.getElementById('circuitTableBody');
    if (!tableBody) return;

    this.routes.forEach((route: any) => {
      const tr = document.createElement('tr');

      // Circuit name
      const circuitCell = document.createElement('td');
      circuitCell.textContent = route.circuit;
      tr.appendChild(circuitCell);

      // Stops list
      const stopsCell = document.createElement('td');
      const stopList = document.createElement('ul');
      route.stops.forEach((stop: any) => {
        const li = document.createElement('li');
        li.textContent = stop;
        stopList.appendChild(li);
      });
      stopsCell.appendChild(stopList);
      tr.appendChild(stopsCell);

      tableBody.appendChild(tr);
    });
  }
}


