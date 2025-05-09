import { Injectable } from '@angular/core';
import { Route } from '../models/route';
import { Stop } from '../models/stop';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private stops: Stop[] = 
    [
      { name: 'Menzel Jemil', lat: 37.2502, lng: 9.8644, time: '06H55' },
      { name: 'Bizerte centre-ville', lat: 37.2749, lng: 9.8645, time: '07H10' },
      { name: 'ZARZOUNA', lat: 37.2607, lng: 9.8733, time: '07H25' },
      { name: 'El ALIA', lat: 37.1552, lng: 10.0142, time: '07H47' },
      { name: 'Péage Utique', lat: 37.0749, lng: 10.0013, time: '08H00' },
    
      { name: 'Borj cedria : Station Agil', lat: 36.7045, lng: 10.3912, time: '07H15' },
      { name: 'Bir el bey: Le Pont', lat: 36.7115, lng: 10.3794, time: '07H17' },
      { name: 'Hammam chatt/ taher sfar', lat: 36.7171, lng: 10.3624, time: '07H20' },
      { name: 'ezzahra lycée', lat: 36.7391, lng: 10.3181, time: '07H25' },
      { name: 'rondpoint ezzahra pharmacie', lat: 36.7442, lng: 10.3037, time: '07H30' },
      { name: 'RADES en face Gamma auto', lat: 36.7751, lng: 10.2887, time: '07H40' },
      { name: 'Centre-Ville: TGM', lat: 36.801012, lng: 10.192063, time: '08H00' },
      { name: 'Centre-Ville : Sous le Pont de la république', lat: 36.8037, lng: 10.1797, time: '08H02' },
    
      { name: 'Gammarth: La Mosquée', lat: 36.9083, lng: 10.2993, time: '07H25' },
      { name: 'Gammarth: Café Journal', lat: 36.8928, lng: 10.3180, time: '07H28' },
      { name: 'Marsa ville: Telecom', lat: 36.8807, lng: 10.3274, time: '07H30' },
      { name: 'Marsa ville: Stade', lat: 36.8764, lng: 10.3219, time: '07H33' },
      { name: 'Carrefour Marsa ( sous la passerelle Piétons)', lat: 36.8659, lng: 10.2993, time: '07H40' },
      { name: 'Ain Zaghouan: la mosquée', lat: 36.8566, lng: 10.2846, time: '07H45' },
      { name: 'Rond-Point Cité Essalama', lat: 36.8571, lng: 10.2735, time: '07H50' },
      { name: 'Diar Sokra', lat: 36.859157, lng: 10.270556, time: '08H00' },
      { name: 'Cité EL Ouwahat', lat: 36.857421, lng: 10.266243 , time: '08H05' },
      { name: 'Rond-Point Eglise L’aouina', lat: 36.853067, lng: 10.257688, time: '08H07' },
    
      { name: 'Cité Ettadhamen : Face Superette Aziza', lat: 36.8329, lng: 10.1120, time: '07H37' },
      { name: 'Cité Intilaka: magasin général', lat: 36.8398, lng: 10.1169, time: '07H42' },
      { name: 'Omrane Sup: station face du metro.', lat: 36.8313, lng: 10.1256, time: '07H50' },
      { name: 'Cité ettahrir: station face du metro.', lat: 36.8232, lng: 10.1413, time: '07H52' },
      { name: 'Cité Ibn Khaldoun: (Agence ATB)', lat: 36.8284, lng: 10.1349, time: '07H54' },
      { name: 'Rond-Point Ibn Khouldoun (X3)', lat: 36.8370, lng: 10.1350, time: '08H00' },
      { name: 'Shell X3', lat: 36.8385, lng: 10.1377, time: '08H04' },
    
      { name: 'El yasminet : Devant pâtisserie la reine', lat: 36.7409, lng: 10.2385, time: '07H37' },
      { name: 'El yasminet :Biat', lat: 36.7435, lng: 10.2320, time: '07H40' },
      { name: 'ben arous Devant maison mazda', lat: 36.7479, lng: 10.2310, time: '07H45' },
      { name: 'ben arous Devant Mosquée Chifaa', lat: 36.7515, lng: 10.2273, time: '07H46' },
      { name: 'ben arous devant BNA', lat: 36.7576, lng: 10.2187, time: '07H50' },
      { name: 'Megrine / Rond-point saida', lat: 36.7792, lng: 10.1900, time: '08H00' },
    
      { name: 'Maamoura', lat: 36.4645, lng: 10.8042, time: '06H50' },
      { name: 'Beni Khiar', lat: 36.4622, lng: 10.7955, time: '06H00' },
      { name: 'Dar Chaabane', lat: 36.4622, lng: 10.7657, time: '07H07' },
      { name: 'ROND POINT CHELBY', lat: 37.2899, lng: 9.8845, time: '07H10' },
      { name: 'NABEUL (Lahouech)', lat: 36.4936, lng: 10.7437, time: '07H12' },
      { name: 'Hammamet (Mosquée Ihsen)', lat: 36.4105, lng: 10.6111, time: '07H35' },
      { name: 'Bouargoub collège', lat: 36.5407, lng: 10.5460, time: '07H45' },
      { name: 'Ront point Turki (via N1)', lat: 36.5740, lng: 10.5178, time: '07H50' },
    
      { name: 'Rondpoint Ariana Soghra', lat: 36.9008, lng: 10.1866, time: '07H30' },
      { name: 'Rondpoint Technopole / Protection Civile', lat: 36.8511, lng: 10.2776, time: '07H32' },
      { name: 'EL Ghazala: Face Mosquée El Ghazela', lat: 36.8949, lng: 10.1875, time: '07H35' },
      { name: 'El Ghazal/Ennahli: Sous le Pont', lat: 36.8826, lng: 10.1580, time: '07H40' },
      { name: 'Rondpoint Riadh Andalous Carrefour market', lat: 36.8791, lng: 10.1809, time: '07H42' },
      { name: 'Hedi Nouira Sous la passerelle piétons', lat: 36.8615, lng: 10.1654, time: '07H46' },
      { name: 'Hedi Nouira Sous le pont', lat: 36.8616, lng: 10.1654, time: '07H48' },
    
      { name: 'Kiosque Agil Raoued', lat: 36.8771, lng: 10.1856, time: '07H25' },
      { name: 'Rondpoint NOUR JAAFER (Mazraa Salima)', lat: 36.9119, lng: 10.1884, time: '07H35' },
      { name: 'Carrefour Express Nour jaafer', lat: 36.9046, lng: 10.1812, time: '07H38' },
      { name: 'Carrefour Nkhilet', lat: 36.8847, lng: 10.1857, time: '07H45' },
      { name: 'EL Mazraa NKHILET', lat: 36.8830, lng: 10.1927, time: '07H47' },
      { name: 'Rondpoint l’escale', lat: 36.8743, lng: 10.1867, time: '07H44' },
      { name: 'Hedi Nouira: Point de vente Voitures', lat: 36.8618, lng: 10.1665, time: '07H52' },
      { name: 'BorjLouzir: Face SHELL', lat: 36.8625, lng: 10.2086, time: '07H55' } ,
      { name: 'Mannouba : SIDI OMOR', lat: 36.8090, lng: 10.0970, time: '07H00' },
      { name: 'Mannouba : Khaireddine', lat: 36.8135, lng: 10.1012, time: '07H05' },
      { name: 'Mannouba: Devant Lycée Mannouba', lat: 36.8160, lng: 10.1035, time: '07H12' },
      { name: 'Mannouba: telecom', lat: 36.8180, lng: 10.1050, time: '07H21' },
      { name: 'Mannouba: INEPS (Rond Point)', lat: 36.8200, lng: 10.1065, time: '07H24' },
      { name: 'Mannouba: meuble Mezghani', lat: 36.8220, lng: 10.1080, time: '07H27' },
      { name: 'El Bassatine', lat: 36.8500, lng: 10.1200, time: '07H00' },
      { name: 'Mnihla (Oil Lybia)', lat: 36.8550, lng: 10.1250, time: '07H10' },
      { name: 'Mosquée Mnihla', lat: 36.8570, lng: 10.1270, time: '07H12' },
      { name: 'Omrane Sup: Pharmacie Snoussi', lat: 36.8600, lng: 10.1300, time: '07H20' },
      { name: 'Manar II: Centre Elyssa', lat: 36.8650, lng: 10.1350, time: '07H35' },
      { name: 'Direction 10 Décembre, via X2 puis route X', lat: 36.8700, lng: 10.1400, time: '07H45' },
      { name: 'Menzah 4: 10 Décembre', lat: 36.8750, lng: 10.1450, time: '08H05' },
      { name: 'Centre Urbain Nord Cité Olympique face Agil', lat: 36.8800, lng: 10.1500, time: '08H10' },
      { name: 'Charguia I', lat: 36.8850, lng: 10.1550, time: '08H15' },
      { name: 'ERRESSALA', lat: 36.7000, lng: 10.2000, time: '07H00' },
      { name: 'Mornag centre', lat: 36.7050, lng: 10.2050, time: '07H15' },
      { name: 'Mornag: Devant le Terrain', lat: 36.7070, lng: 10.2070, time: '07H20' },
      { name: 'Mornag: Rondpoint Boumhal Basatine (Sortie de l’autoroute)', lat: 36.7100, lng: 10.2100, time: '07H30' },
      { name: 'Nouvelle Medina rond-point Carrefour', lat: 36.7150, lng: 10.2150, time: '07H34' },
      { name: 'Rondpoint Mosqué Alkhayr Ariana SOGHRA', lat: 36.8500, lng: 10.2000, time: '07H20' },
      { name: 'El Mourouj6 : Magasin générale', lat: 36.7500, lng: 10.3000, time: '07H15' },
      { name: 'El Mourouj4 : Centre Chalekh/Boutique Orange', lat: 36.7520, lng: 10.3020, time: '07H16' },
      { name: 'El Mourouj3 : Monoprix', lat: 36.7550, lng: 10.3050, time: '07H20' },
      { name: 'ElMourouj1 : Station métro « l\'environnement »', lat: 36.7580, lng: 10.3080, time: '07H23' },
      { name: 'El Mourouj1 : Hammadi Abid', lat: 36.7600, lng: 10.3100, time: '07H24' },
      { name: 'El Mourouj2 : En face de la boulangerie Panera', lat: 36.7620, lng: 10.3120, time: '07H26' },
      { name: 'El Mourouj2 : Près de la mosquée', lat: 36.7640, lng: 10.3140, time: '07H28' },
      { name: 'El Mourouj2 : Station métro « ElMontazah »', lat: 36.7660, lng: 10.3160, time: '07H30' },
      { name: 'Centre-Ville Central Park', lat: 36.8000, lng: 10.2000, time: '08H05' },
      { name: 'Centre-Ville (Rue Ghana)', lat: 36.8020, lng: 10.2020, time: '08H10' },
      { name: 'Route X20 Rond-point ennasr 1', lat: 36.8500, lng: 10.2500, time: '07H20' },
      { name: 'Rondpoint Hôpital Mahmoud Matri', lat: 36.8520, lng: 10.2520, time: '07H25' },
      { name: 'Hedi Nouira Rond-point carrefour market', lat: 36.8540, lng: 10.2540, time: '07H30' },
      { name: 'Hedi Nouira Sous le pont', lat: 36.8560, lng: 10.2560, time: '07H34' },
      { name: 'BorjLouzir: Face SHELL', lat: 36.8580, lng: 10.2580, time: '07H40' },
      { name: 'Charguia 2: Station des bus Face Oil Libya', lat: 36.8600, lng: 10.2600, time: '07H46' },
      { name: 'Salle de fete chourouk Zahrouni', lat: 36.8000, lng: 10.1000, time: '07H20' },
      { name: 'Rondpoint magasin générale Ezzouhour 4', lat: 36.8020, lng: 10.1020, time: '07H30' },
      { name: 'bayrem tounsi', lat: 36.8040, lng: 10.1040, time: '07H38' },
      { name: 'BARDO: Face Monoprix Bardo', lat: 36.8060, lng: 10.1060, time: '07H49' },
      { name: 'Ooredoo Bardo', lat: 36.8080, lng: 10.1080, time: '07H53' },
      { name: 'Ras Ettabia: Centre de formation', lat: 36.8100, lng: 10.1100, time: '08H07' },
      { name: 'Manar: Sonede', lat: 36.8120, lng: 10.1120, time: '08H15' },
      { name: 'ROND POINT ALAIN SAVARY SOUS LE PONT', lat: 36.8140, lng: 10.1140, time: '08H18' },
      { name: 'MAISON DE PEUGEOT SOUS LE PONT', lat: 36.8160, lng: 10.1160, time: '08H21' },
      { name: 'SOFRECOM STERLING', lat: 36.831685, lng: 10.232824, time: '08H30' },
      { name: 'Sidi Hssine: Magasin général', lat: 36.8200, lng: 10.1200, time: '07H05' },
      { name: 'Sidi Hssine: Station Transport Collectif', lat: 36.8220, lng: 10.1220, time: '07H07' },
      { name: 'El Gharnouk', lat: 36.8240, lng: 10.1240, time: '07H12' },
      { name: 'Zahrouni: BATAM', lat: 36.8260, lng: 10.1260, time: '07H16' },
      { name: 'Denden: Station magasin général', lat: 36.8280, lng: 10.1280, time: '07H20' },
      { name: 'Mannouba : Cité El Amal', lat: 36.8300, lng: 10.1300, time: '07H25' },
      { name: 'Manouba Centre : Station grand mosqué', lat: 36.8320, lng: 10.1320, time: '07H30' },
      { name: 'route x devant shell', lat: 36.8340, lng: 10.1340, time: '07H45' },
      { name: 'Rond-Point Clinique Taoufik', lat: 36.8360, lng: 10.1360, time: '08H05' },
      { name: 'Cités des sciences', lat: 36.8380, lng: 10.1380, time: '08H15' },
      { name: 'Agence ATB sidi salah', lat: 36.8400, lng: 10.1400, time: '07H25' },
      { name: 'patisserie charlotte', lat: 36.8420, lng: 10.1420, time: '07H30' },
      { name: 'Hammadi Abid Sokra', lat: 36.8790, lng: 10.2700, time: '07H00' },
      { name: 'LC WAIKIKI', lat: 36.8746, lng: 10.2451, time: '07H05' },
      { name: 'Arrêt de Bus Dar Fadhal', lat: 36.8700, lng: 10.2500, time: '07H10' },
      { name: 'Rue Dar Fadhal en face poissonnier', lat: 36.8705, lng: 10.2505, time: '07H12' },
      { name: 'Echemi', lat: 36.8124, lng: 10.1447, time: '07H15' },
      { name: 'DOWNTOWN', lat: 36.8100, lng: 10.1400, time: '07H20' },
      { name: 'Rond-point l’église l’Aouina', lat: 36.8181, lng: 10.3050, time: '07H25' },
      { name: 'Mhamdia : Magasin Générale', lat: 36.7000, lng: 10.2000, time: '07H30' },
      { name: 'Fouchana : Rond point Fouchana', lat: 36.7005, lng: 10.1685, time: '07H35' },
      { name: 'Meghira : Rond point GARTEX', lat: 36.7100, lng: 10.1800, time: '07H40' },
      { name: 'Ibn Sina : Station métro « Cité municipale»', lat: 36.7800, lng: 10.1800, time: '07H45' },
      { name: 'Ibn Sina : Station métro « Elghazeli »', lat: 36.7820, lng: 10.1820, time: '07H47' },
      { name: 'Ibn Sina : Station métro « Taher el7aded »', lat: 36.7840, lng: 10.1840, time: '07H49' },
      { name: 'Elouardia: Magasin “Aziza”', lat: 36.8000, lng: 10.2000, time: '07H50' },
      { name: 'Elouardia : En face de l’UIB', lat: 36.8020, lng: 10.2020, time: '07H52' },
      { name: 'Elouardia : Près de Frigo Technique', lat: 36.8040, lng: 10.2040, time: '07H54' },
      { name: 'BEB ALIOUA', lat: 36.8060, lng: 10.2060, time: '07H56' }        
  ];

  private routes: Route[] = [
      {
        circuit: 'BIZERTE',
        description: 'Cliquez ici pour le groupe WhatsApp de BIZERTE.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Menzel Jemil',
          'Bizerte centre-ville',
          'ZARZOUNA',
          'Péage Utique',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Borj Cedria',
        description: 'Cliquez ici pour le groupe WhatsApp de Borj Cedria.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Borj cedria : Station Agil',
          'Bir el bey: Le Pont',
          'Hammam chatt/ taher sfar',
          'ezzahra lycée',
          'rondpoint ezzahra pharmacie',
          'RADES en face Gamma auto',
          'Centre-Ville: TGM',
          'Centre-Ville : Sous le Pont de la république',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Gammarth',
        description: 'Cliquez ici pour le groupe WhatsApp de Gammarth.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Gammarth: La Mosquée',
          'Gammarth: Café Journal',
          'Marsa ville: Telecom',
          'Marsa ville: Stade',
          'Carrefour Marsa ( sous la passerelle Piétons)',
          'Ain Zaghouan: la mosquée',
          'Rond-Point Cité Essalama',
          'Diar Sokra',
          'Cité EL Ouwahat',
          'Rond-Point Eglise L’aouina',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Mannouba /Ettadhamen',
        description: 'Cliquez ici pour le groupe WhatsApp de Mannouba /Ettadhamen.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Mannouba : SIDI OMOR',
          'Mannouba : Khaireddine',
          'Mannouba: Devant Lycée Mannouba',
          'Mannouba: telecom',
          'Mannouba: INEPS (Rond Point)',
          'Mannouba: meuble Mezghani',
          'Cité Ettadhamen : Face Superette Aziza',
          'Cité Intilaka: magasin général',
          'Omrane Sup: station face du metro.',
          'Cité ettahrir: station face du metro.',
          'Cité Ibn Khaldoun: (Agence ATB)',
          'Rond-Point Ibn Khouldoun (X3)',
          'Shell X3',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Mnihla',
        description: 'Cliquez ici pour le groupe WhatsApp de Mnihla.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'El Bassatine',
          'Mnihla (Oil Lybia)',
          'Mosquée Mnihla',
          'Omrane Sup: Pharmacie Snoussi',
          'Manar II: Centre Elyssa',
          'Direction 10 Décembre, via X2 puis route X',
          'Menzah 4: 10 Décembre',
          'Centre Urbain Nord Cité Olympique face Agil',
          'Charguia I',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'MORNEG',
        description: 'Cliquez ici pour le groupe WhatsApp de MORNEG.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'ERRESSALA',
          'Mornag centre',
          'Mornag: Devant le Terrain',
          'Mornag: Rondpoint Boumhal Basatine (Sortie de l’autoroute)',
          'Nouvelle Medina rond-point Carrefour',
          'El yasminet : Devant pâtisserie la reine',
          'El yasminet :Biat',
          'ben arous Devant maison mazda',
          'ben arous Devant Mosquée Chifaa',
          'ben arous devant BNA',
          'Megrine / Rond-point saida',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'NABEUL',
        description: 'Cliquez ici pour le groupe WhatsApp de NABEUL.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Maamoura',
          'Beni Khiar',
          'Dar Chaabane',
          'ROND POINT CHELBY',
          'NABEUL (Lahouech)',
          'Hammamet (Mosquée Ihsen)',
          'Bouargoub collège',
          'Ront point Turki (via N1)',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Nkhilet/Ghazala',
        description: 'Cliquez ici pour le groupe WhatsApp de Nkhilet/Ghazala.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Rondpoint Mosqué Alkhayr Ariana SOGHRA',
          'Rondpoint Ariana Soghra',
          'Rondpoint Technopole / Protection Civile',
          'EL Ghazala: Face Mosquée El Ghazela',
          'El Ghazala/Ennahli: Sous le Pont',
          'Rondpoint Riadh Andalous Carrefour market',
          'Hedi Nouira Sous la passerelle piétons',
          'Hedi Nouira Sous le pont',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Nour Jaafer',
        description: 'Cliquez ici pour le groupe WhatsApp de Nour Jaafer.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Kiosque Agil Raoued',
          'Rondpoint NOUR JAAFER (Mazraa Salima)',
          'Carrefour Express Nour jaafer',
          'DEVANT STATION LAVAGE ( FATHI )',
          'Carrefour Nkhilet',
          'EL Mazraa NKHILET',
          'Rondpoint l’escale',
          'Hedi Nouira: Point de vente Voitures',
          'BorjLouzir: Face SHELL',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Ouardia /Mourouj',
        description: 'Cliquez ici pour le groupe WhatsApp de Ouardia /Mourouj.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'El Mourouj6 : Magasin générale',
          'El Mourouj4 : Centre Chalekh/Boutique Orange',
          'El Mourouj3 : Monoprix',
          'ElMourouj1 : Station métro « l\'environnement »',
          'El Mourouj1 : Hammadi Abid',
          'El Mourouj2 : En face de la boulangerie Panera',
          'El Mourouj2 : Près de la mosquée',
          'El Mourouj2 : Station métro « ElMontazah »',
          'Centre-Ville Central Park',
          'Centre-Ville (Rue Ghana)',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Ariana/Ennasr',
        description: 'Cliquez ici pour le groupe WhatsApp de Ariana/Ennasr.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Route X20 Rond-point ennasr 1',
          'Rondpoint Hôpital Mahmoud Matri',
          'Hedi Nouira Rond-point carrefour market',
          'Hedi Nouira Sous le pont',
          'BorjLouzir: Face SHELL',
          'Charguia 2: Station des bus Face Oil Libya',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Zahrouni',
        description: 'Cliquez ici pour le groupe WhatsApp de Zahrouni.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Salle de fete chourouk Zahrouni',
          'Rondpoint magasin générale Ezzouhour 4',
          'bayrem tounsi',
          'BARDO: Face Monoprix Bardo',
          'Ooredoo Bardo',
          'Ras Ettabia: Centre de formation',
          'Manar: Sonede',
          'ROND POINT ALAIN SAVARY SOUS LE PONT',
          'MAISON DE PEUGEOT SOUS LE PONT',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Sidi Hssine',
        description: 'Cliquez ici pour le groupe WhatsApp de Sidi Hssine.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Sidi Hssine: Magasin général',
          'Sidi Hssine: Station Transport Collectif',
          'El Gharnouk',
          'Zahrouni: BATAM',
          'Denden: Station magasin général',
          'Mannouba : Cité El Amal',
          'Manouba Centre : Station grand mosqué',
          'route x devant shell',
          'Rond-Point Clinique Taoufik',
          'Cités des sciences',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Sidi Salah',
        description: 'Cliquez ici pour le groupe WhatsApp de Sidi Salah.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Agence ATB sidi salah',
          'patisserie charlotte',
          'Hammadi Abid Sokra',
          'LC WAIKIKI',
          'Arrêt de Bus Dar fadhal',
          'Rue Dar Fadhal en face poissonnier',
          'Echemi',
          'DOWNTOWN',
          'Rond-point l’église l’Aouina',
          'SOFRECOM STERLING'
        ])
      },
      {
        circuit: 'Mhamdia/Mourouj',
        description: 'Cliquez ici pour le groupe WhatsApp de Mhamdia/Mourouj.',
        qrCodeUrl: 'assets/QR.png',
        stops: this.getStops([
          'Mhamdia : Magasin Générale',
          'Fouchana : Rond point Fouchana',
          'Meghira : Rond point GARTEX',
          'Ibn Sina : Station métro « Cité municipale»',
          'Ibn Sina : Station métro « Elghazeli »',
          'Ibn Sina : Station métro « Taher el7aded »',
          'Elouardia: Magasin “Aziza”',
          'Elouardia : En face de l’UIB',
          'Elouardia : Près de Frigo Technique',
          'BEB ALIOUA',
          'SOFRECOM STERLING'
        ])
      }
    ];
    
  

  getRoutes(): Route[] {
    return this.routes;
  }

  getStops(names: string[]): Stop[] {
    return this.stops.filter(stop => names.includes(stop.name));
  }
}
