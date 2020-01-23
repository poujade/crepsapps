import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  places: Place[];

  /**
   * TODO: A revoir dès que possible
   * Séparer les données pour les mettre dans un JSON
   */
  initData() {
    this.places = [];
    let placeIndex = 1;
    const dataKeys = [
      "id",
      "name",
      "type",
      "latitude",
      "longitude",
      "pictures",
      "surface",
      "equipments",
      "capacity",
      "description",
      "phone",
      "opening"
    ];
    for (const placesJsonDataIndex in PlacesJsonData) {
      //      if (PlacesJsonData.hasOwnProperty(key)) {
      const place = {} as Place;
      const placeData = PlacesJsonData[placesJsonDataIndex];
      place.id = placeIndex++;
      for (const dataKeyIndex in dataKeys) {
        const dataKey = dataKeys[dataKeyIndex];
        if (placeData.hasOwnProperty(dataKey)) {
          place[dataKey] = placeData[dataKey];
        }
      }
      this.places.push(place);
    }
  }

  /**
   * Obtenir l'ensemble des lieux
   *
   * @return [] Liste des lieux
   */
  getAll() {
    if (this.places === undefined) {
      this.initData();
    }
    return this.places;
  }

  /**
   * Obtenir la liste des lieux par type
   *
   * @param typeName Code du type
   *
   * @return [] Liste des lieux du type demandé
   */
  getByType(typeName: string) {
    return this.getAll().filter(place => place.type.indexOf(typeName) >= 0);
  }

  /**
   * Obtenir la liste des lieux filtrés
   *
   * @param typeName Code du type
   * @param filter Filtre (Le nom doit le contenir)
   *
   * @return [] Liste des lieux du type demandé filtré
   */
  getFilteredByType(typeName: string, filter: string) {
    const lowerFilter = filter.toLowerCase();
    return this.getAll().filter(
      place =>
        place.type.indexOf(typeName) >= 0 &&
        place.name.toLowerCase().indexOf(lowerFilter) >= 0
    );
  }

  /**
   * Obtenir les informations d'un lieu à partir de son identifiant
   *
   * @param id Identifiant
   */
  getById(id: number) {
    return this.getAll().find(place => place.id === id);
  }
}

/**
 * Interface définissant la structure de données d'un lieu
 */
export interface Place {
  id: number;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  pictures: string[];
  surface: number;
  equipments: string[];
  capacity: number;
  description: string;
  phone: string;
  opening: string;
}

/**
 * Données des lieux
 */
const PlacesJsonData = [
  {
    name: "Acacias",
    type: "accommodations",
    latitude: 48.766149,
    longitude: 2.273054,
    pictures: ["Acacias.jpg"]
  },
  {
    name: "Accueil",
    type: "departments",
    latitude: 48.766621,
    longitude: 2.278807,
    pictures: ["Entree.jpg"],
    phone: "+33 1 41 87 20 30"
  },
  {
    name: "Auditorium",
    type: "rooms,installations",
    latitude: 48.765548,
    longitude: 2.274028,
    pictures: ["Auditorium.jpg"],
    surface: 175,
    equipments: ["video", "sono"],
    capacity: 115
  },
  {
    name: "Bain froid",
    type: "installations",
    latitude: 48.764497,
    longitude: 2.272886,
    pictures: ["Bain-froid.jpg"]
  },
  {
    name: "Beach-Volley",
    type: "installations",
    latitude: 48.765979,
    longitude: 2.276327,
    pictures: [],
    surface: 520,
    capacity: 20
  },
  {
    name: "Cèdres",
    type: "accommodations",
    latitude: 48.766594,
    longitude: 2.273457,
    pictures: ["Cedres.jpg"]
  },
  {
    name: "C4",
    type: "rooms",
    latitude: 48.766248,
    longitude: 2.274697,
    pictures: ["ClubHouse1.jpg"],
    surface: 25,
    equipments: ["video", "sono"],
    capacity: 12
  },
  {
    name: "C5",
    type: "rooms",
    latitude: 48.766248,
    longitude: 2.274697,
    pictures: ["CB1-4.jpg"],
    surface: 25,
    equipments: ["video", "sono"],
    capacity: 12
  },
  {
    name: "CB1",
    type: "rooms",
    latitude: 48.766121,
    longitude: 2.27419,
    pictures: ["CB1-CB2.jpg"],
    surface: 120,
    equipments: ["video", "sono"],
    capacity: 70
  },
  {
    name: "CB2",
    type: "rooms",
    latitude: 48.76616,
    longitude: 2.274378,
    pictures: ["CB1-CB2.jpg", "CB2.jpg"],
    surface: 50,
    equipments: ["video"],
    capacity: 16
  },
  {
    name: "CB3",
    type: "rooms",
    latitude: 48.766218,
    longitude: 2.274642,
    pictures: ["CB1-4.jpg"],
    surface: 40,
    equipments: ["video"],
    capacity: 18
  },
  {
    name: "CB4",
    type: "rooms",
    latitude: 48.766218,
    longitude: 2.274642,
    pictures: ["CB1-4.jpg"],
    surface: 40,
    equipments: ["video"],
    capacity: 15
  },
  {
    name: "CDI",
    type: "rooms",
    latitude: 48.766384,
    longitude: 2.274874,
    pictures: ["R1-1.jpg", "Cdi.jpg"],
    surface: 60,
    equipments: ["video"],
    capacity: 25
  },
  {
    name: "Centre de santé",
    type: "conveniences",
    latitude: 48.764882,
    longitude: 2.274523,
    pictures: ["Centre-de-sante1.jpg", "Centre-de-sante2.jpg"],
    phone: "+33 1 48 87 18 18"
  },
  {
    name: "Club-House",
    type: "rooms",
    latitude: 48.765643,
    longitude: 2.274017,
    pictures: ["ClubHouse1.jpg", "ClubHouse2.jpg"],
    surface: 260,
    equipments: ["video", "sono"]
  },
  {
    name: "Golf",
    type: "installations",
    latitude: 48.766321,
    longitude: 2.277423,
    pictures: ["Golf.jpg"],
    surface: 18000
  },
  {
    name: "GTS",
    type: "installations",
    latitude: 48.764706,
    longitude: 2.272873,
    pictures: ["GTS2.jpg", "GTS1.jpg"]
  },
  {
    name: "Gymnase parquet",
    type: "installations",
    latitude: 48.764706,
    longitude: 2.272873,
    pictures: ["Gymnase-parquet.jpg"],
    surface: 1500
  },
  {
    name: "Gymnase taraflex",
    type: "installations",
    latitude: 48.764382,
    longitude: 2.272712,
    pictures: ["Teraflex.jpg"],
    surface: 800
  },
  {
    name: "Les Lauriers",
    type: "rooms",
    latitude: 48.764778,
    longitude: 2.27373,
    pictures: ["LesLauriers.jpg"],
    surface: 100,
    equipments: ["video"],
    capacity: 20
  },
  {
    name: "Les Lilas",
    type: "rooms",
    latitude: 48.765453,
    longitude: 2.272997,
    pictures: ["Lilas.jpg"],
    capacity: 18
  },
  {
    name: "Lewis Caroll (salle informatique)",
    type: "rooms",
    latitude: 48.765769,
    longitude: 2.273794,
    pictures: ["Salle-informatique.jpg"],
    surface: 85,
    equipments: ["video", "sono"],
    capacity: 18
  },
  {
    name: "Lingerie",
    type: "conveniences",
    latitude: 12,
    longitude: 13,
    pictures: ["Acacias.jpg"]
  },
  {
    name: "Orangerie",
    type: "rooms,installations",
    latitude: 48.764912,
    longitude: 2.27605,
    pictures: ["Orangerie.jpg"],
    surface: 45,
    capacity: 25
  },
  {
    name: "Espace Colette Besson",
    type: "rooms,installations",
    latitude: 48.766464,
    longitude: 2.274849,
    pictures: ["R1-1.jpg", "R1-2.jpg"],
    surface: 262,
    equipments: ["video", "sono"],
    capacity: 150
  },
  {
    name: "R3",
    type: "rooms,installations",
    latitude: 48.766464,
    longitude: 2.274849,
    pictures: ["CB1-4.jpg"],
    surface: 45,
    equipments: ["video"],
    capacity: 25
  },
  {
    name: "R4",
    type: "rooms,installations",
    latitude: 48.766464,
    longitude: 2.274849,
    pictures: ["CB1-4.jpg"],
    surface: 45,
    equipments: ["video"],
    capacity: 19
  },
  {
    name: "R6",
    type: "rooms,installations",
    latitude: 48.766277,
    longitude: 2.274444,
    pictures: ["CB1-4.jpg"],
    surface: 45,
    equipments: ["video"],
    capacity: 20
  },
  {
    name: "R7",
    type: "rooms,installations",
    latitude: 48.766277,
    longitude: 2.274444,
    pictures: ["CB1-4.jpg"],
    surface: 45,
    equipments: ["video"],
    capacity: 25
  },
  {
    name: "Restaurant",
    type: "conveniences",
    latitude: 48.765463,
    longitude: 2.278375,
    pictures: ["Restaurant.jpg", "Restaurant-vip.jpg"],
    opening: "opening-restaurant"
  },
  {
    name: "Salle Athènes",
    type: "rooms",
    latitude: 48.764691,
    longitude: 2.272817,
    pictures: [],
    surface: 37,
    equipments: ["video"],
    capacity: 20
  },
  {
    name: "Salle Barcelone",
    type: "rooms",
    latitude: 48.764569,
    longitude: 2.272591,
    pictures: [],
    surface: 190
  },
  {
    name: "Salle de tennis de table",
    type: "installations",
    latitude: 48.765105,
    longitude: 2.273895,
    pictures: ["SalleTennisTable1.jpg", "SalleTennisTable2.jpg"],
    surface: 300,
    capacity: 50
  },
  {
    name: "Salle des actes",
    type: "rooms",
    latitude: 48.766642,
    longitude: 2.278845,
    pictures: ["Salle-des-actes.jpg"],
    surface: 75,
    equipments: ["video"],
    capacity: 25
  },
  {
    name: "Salle du parc",
    type: "rooms",
    latitude: 48.765696,
    longitude: 2.278586,
    pictures: ["SalleDuParc.jpg"],
    surface: 45,
    equipments: ["video"],
    capacity: 25
  },
  {
    name: "Salle image",
    type: "rooms",
    latitude: 48.765744,
    longitude: 2.273616,
    pictures: ["SalleImage.jpg"],
    surface: 70,
    equipments: ["video", "sono"],
    capacity: 30
  },
  {
    name: "Salle Londres",
    type: "rooms",
    latitude: 48.764284,
    longitude: 2.273064,
    pictures: [],
    surface: 45,
    equipments: ["video"],
    capacity: 20
  },
  {
    name: "Salle Los Angeles (musculation)",
    type: "rooms",
    latitude: 48.764573,
    longitude: 2.272843,
    pictures: ["LosAngeles1.jpg", "LosAngeles2.jpg"],
    surface: 290
  },
  {
    name: "Salle musique",
    type: "rooms",
    latitude: 48.766226,
    longitude: 2.274104,
    pictures: ["SalleMusique.jpg"],
    surface: 110,
    equipments: ["video", "sono"],
    capacity: 40
  },
  {
    name: "Salle Séoul (escrime)",
    type: "rooms",
    latitude: 48.764367,
    longitude: 2.272524,
    pictures: ["Salle-escrime.jpg"]
  },
  {
    name: "Salle Sydney (musculation)",
    type: "installations",
    latitude: 48.764546,
    longitude: 2.272605,
    pictures: ["Salle-Sidney.jpg"],
    surface: 190
  },
  {
    name: "Sauna",
    type: "installations",
    latitude: 48.764497,
    longitude: 2.272886,
    pictures: ["Sauna.jpg"]
  },
  {
    name: "Service communication",
    type: "departments",
    latitude: 48.766361,
    longitude: 2.278809,
    pictures: ["Roseraie.jpg"]
  },
  {
    name: "Service économique et financier",
    type: "departments",
    latitude: 48.765617,
    longitude: 2.278521,
    pictures: ["BatimentAdm.jpg"]
  },
  {
    name: "Salle de karaté",
    type: "installations",
    latitude: 48.76455,
    longitude: 2.275534,
    pictures: ["Salle-karate.jpg"],
    surface: 440
  },
  {
    name: "Service formation",
    type: "departments",
    latitude: 48.766478,
    longitude: 2.278827,
    pictures: ["Roseraie.jpg"]
  },
  {
    name: "Service haut-niveau",
    type: "departments",
    latitude: 48.765799,
    longitude: 2.273786,
    pictures: ["MultimediaExt.jpg"]
  },
  {
    name: "Service informatique",
    type: "departments",
    latitude: 48.765726,
    longitude: 2.273821,
    pictures: ["MultimediaExt.jpg"]
  },
  {
    name: "Service des ressources humaines",
    type: "departments",
    latitude: 48.765733,
    longitude: 2.278622,
    pictures: ["BatimentAdm.jpg"]
  },
  {
    name: "Terrain de Hockey sur gazon",
    type: "installations",
    latitude: 48.765321,
    longitude: 2.274914,
    pictures: ["HockeySurGazon.jpg"],
    surface: 6800
  },
  {
    name: "Tilleuls",
    type: "accommodations",
    latitude: 48.766522,
    longitude: 2.272783,
    pictures: ["Tilleuls.jpg"]
  },
  {
    name: "Tir à l'arc",
    type: "installations",
    latitude: 48.76455,
    longitude: 2.275534,
    pictures: ["TirALArc1.jpg", "TirALArc2.jpg"],
    surface: 2700,
    capacity: 20
  },
  {
    name: "Coiffeur",
    type: "near",
    latitude: 48.766186,
    longitude: 2.279605,
    pictures: ["Coiffeur.JPG"]
  },
  {
    name: "Commissariat de police",
    type: "near",
    latitude: 48.76,
    longitude: 0.0,
    pictures: ["CommissariatPolice1.JPG"],
    phone: "+33 1 40 91 25 00"
  },
  {
    name: "Distributeur",
    type: "near",
    latitude: 48.766697,
    longitude: 2.279509,
    pictures: ["CIC.JPG"]
  },
  {
    name: "Hôtel de Ville",
    type: "near",
    latitude: 48.767256,
    longitude: 2.277595,
    pictures: ["HoteldeVille.JPG"],
    phone: "+33 1 46 83 46 83"
  },
  {
    name: "Médiathèque",
    type: "near",
    latitude: 48.764481,
    longitude: 2.280325,
    pictures: ["Mediatheque.JPG"],
    phone: "+33 1 41 87 69 80"
  },
  {
    name: "Parking centre ville",
    type: "near",
    latitude: 48.768992,
    longitude: 2.279236
  },
  {
    name: "Pharmacie",
    type: "near",
    latitude: 48.767091,
    longitude: 2.277528,
    pictures: ["Pharmacie.JPG"],
    phone: "+33 1 41 13 88 85"
  },
  {
    name: "Poste",
    type: "near",
    latitude: 48.763406,
    longitude: 2.276884,
    pictures: ["Poste.JPG"],
    opening: "opening-poste"
  },
  {
    name: "Supermarché (Casino)",
    type: "near",
    latitude: 48.768689,
    longitude: 2.279843,
    pictures: ["Casino.JPG"],

    opening: "opening-supermarche"
  },
  {
    name: "Tabac",
    type: "near",
    latitude: 48.766214,
    longitude: 2.279342,
    pictures: ["Tabac.JPG"],
    phone: "+33 1 46 61 04 59",
    opening: "opening-tabac"
  }
];
