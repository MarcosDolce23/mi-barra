export function initializeFavorites() {

   let tragos = [
      {
         "name": "Acapulco de Noche",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Azúcar",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Verter en una coctelera 60ml Tequila.",
            "Agregar 60ml Ron Blanco.",
            "Agregar 60ml de Jugo de Naranja y trozos de Hielo.",
            "Agitar fuerte.",
            "Pasar la Naranja por el borde de la copa y colocarla boca abajo en un plato con azúcar, para realizar un escarchado.",
            "Vertir la mezcla de la coctelera en la copa."
         ],
         "imagen": "url(imgs/tragos-icons/AcapulcoDeNoche.png)",
         "headerImage": "imgs/tragos/Acapulcodenoche.svg",
         "favorite": false
      },
      {
         "name": "Agua de Valencia",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jugo de Naranja",
            "Ginebra",
            "Vodka",
            "Champagne",
            "Hielo"
         ],
         "preparacion": [
            "Verter el 33% de una jarra con Jugo de Naranja natural.",
            "Agregar un 16% de Ginebra.",
            "Agregar otro 16% de Vodka.",
            "Incorporar un 33% de Champagne",
            "Revolver suavemente.",
            "Trasladar a la nevera donde la dejamos enfriar por un espacio de una hora antes de servir."
         ],
         "imagen": "url(imgs/tragos-icons/AguadeValencia.png)",
         "headerImage": "imgs/tragos/AguadeValencia.svg",
         "favorite": false
      },
      {
         "name": "Aldea Margarita",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Tequila Blanco",
            "Rubia Lager",
            "Limón",
            "Ají Molido",
            "Hielo"
         ],
         "preparacion": [
            "Humedecer el borde de un vaso tipo pinta americana con el Limón.",
            "Recubrirlo con el ají molido.",
            "Verter 60ml de Tequila.",
            "Agregar 150ml de cerveza Rubia Lager.",
            "Revolver suavemente."
         ],
         "imagen": "url(imgs/tragos-icons/AldeaMargarita.png)",
         "headerImage": "imgs/tragos/AldeaMargarita.svg",
         "favorite": false
      },
      {
         "name": "Algonquin",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Whisky",
            "Jugo de Ananá",
            "Vermouth Seco",
            "Hielo"
         ],
         "preparacion": [
            "En una coctelera agregar Hielo.",
            "Agregar 1 parte de Whisky.",
            "Agregar 1/2 parte de Jugo de Ananá.",
            "Agregar 1/2 parte de Vermouth Seco.",
            "Agitar durante unos segundos.",
            "Servir en un vaso utilizando el mismo Hielo de la coctelera."
         ],
         "imagen": "url(imgs/tragos-icons/Algonquin.png)",
         "headerImage": "imgs/tragos/Algonquin.svg",
         "favorite": false
      },
      {
         "name": "Amanecer moscovita",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Menta",
            "Curaçao Rojo",
            "Hielo"
         ],
         "preparacion": [
            "Dentro de una copa verter Hielo.",
            "Agregar 12,5ml de Curaçao Rojo.",
            "Agregar 15ml de Menta.",
            "Agregar 100ml Vodka.",
            "Revolver muy bien.",
            "Decorar con una Guinda y hojas de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/amanecerMoscovita.png)",
         "headerImage": "imgs/tragos/amanecermoscovita.svg",
         "favorite": false
      },
      {
         "name": "Americanino Gancia",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Spritz Gancia",
            "Soda",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en un vaso de trago largo Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1 parte de Spritz Gancia.",
            "Completar con Soda.",
            "Decorar con una piel de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/AmericanoGancia.png)",
         "headerImage": "imgs/tragos/Americano(gancia).svg",
         "favorite": false
      },
      {
         "name": "Americanino Campari",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Campari",
            "Vermouth Rojo",
            "Soda",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en un vaso 3 hielos.",
            "Agregar 1 parte de Campari.",
            "Agregar 1 parte de Vermouth Rojo.",
            "Completar con un golpe de Soda.",
            "Decorar con una rodaja de Naranja o piel de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/AmericanoCampari.png)",
         "headerImage": "imgs/tragos/Americano(campari).svg",
         "favorite": false
      },
      {
         "name": "Apple Gancia",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Americano Gancia",
            "Vodka",
            "Jugo de Manzana",
            "Manzana",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Agregar 2 partes de Jugo de Manzana.",
            "Agregar 6 partes de Vodka.",
            "Decorar con una rodaja de Manzana Verde."
         ],
         "imagen": "url(imgs/tragos-icons/AppleGancia.png)",
         "headerImage": "imgs/tragos/AppleGancia.svg",
         "favorite": false
      },
      {
         "name": "Ártico",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Jugo de Aceituna",
            "Aceituna",
            "Lima",
            "Agua Tónica",
            "Hielo"
         ],
         "preparacion": [
            "Enfríar una copa estilo margarita.",
            "Agregar 60ml de Tequila.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 5ml de Jugo de Aceituna.",
            "Agregar 3 Aceitunas.",
            "Completar con la Tónica.",
            "Remover todo sin agitar.",
            "Decorar con una rodaja de Lima."
         ],
         "imagen": "url(imgs/tragos-icons/Artico.png)",
         "headerImage": "imgs/tragos/Artico.svg",
         "favorite": false
      },
      {
         "name": "Bacardí",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Lima",
            "Granadina",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en una coctelera abundante Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 20ml de Jugo de Lima.",
            "Agregar 10ml de Granadina.",
            "Agitar la coctelera.",
            "Se puede poner una cucharada pequeña de azúcar si se encuentra muy fuerte.",
            "Enfriar el contenido.",
            "Servir en una copa de Martini sin Hielo previamente enfriada.",
            "Adornar la copa con una rodajita de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Bacardi.png)",
         "headerImage": "imgs/tragos/Bacardi.svg",
         "favorite": false
      },
      {
         "name": "Bed Of Roses",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Jugo de Limón",
            "Granadina",
            "Jugo de Limón",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en una coctelera Hielo.",
            "Agregar 45ml de Jägermeister.",
            "Agregar 60ml de Jugo de Limón.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 30ml de Granadina.",
            "Agitar bien.",
            "Servir en un vaso de margarita, previamente enfriado.",
            "Adornar con media rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/BedOfRoses.png)",
         "headerImage": "imgs/tragos/Bedofroses.svg",
         "favorite": false
      },
      {
         "name": "Beer Mimosa",
         "clasificacion": "refrescante",
         "ingredientes": [
            "American IPA",
            "Jugo de Pomelo",
            "Pomelo"
         ],
         "preparacion": [
            "Verter en un vaso tipo pinta americana 1/3 de la cerveza.",
            "Completar con en Jugo de Pomelo.",
            "Revolver suavemente.",
            "Decorar con la piel del Pomelo."
         ],
         "imagen": "url(imgs/tragos-icons/BeerMimosa.png)",
         "headerImage": "imgs/tragos/BeerMimosa.svg",
         "favorite": false
      },
      {
         "name": "Between The Sheets",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Brandy",
            "Triple Sec",
            "Jugo de Limón",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en una coctelera Hielo.",
            "Agregar 30ml de Ron Blanco.",
            "Agregar 30ml coñac o Brandy.",
            "Agregar 30ml de Triple Sec y Jugo de Limón.",
            "Agitar fuertemente.",
            "Servir en una copa de Martini, o en una copa de Champagne, enfriada previamente pasando por un colador.",
            "Decorar el borde de la copa con la piel de un Limón o una Lima."
         ],
         "imagen": "url(imgs/tragos-icons/BetweenTheSheets.png)",
         "headerImage": "imgs/tragos/Betweenthesheets.svg",
         "favorite": false
      },
      {
         "name": "Black Blood",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermesiter",
            "Gaseosa Lima Limón",
            "Curaçao Azul",
            "Hielo"
         ],
         "preparacion": [
            "Verter en una coctelera 2/4 partes de Curaçao Azul.",
            "Agregar 1/4 parte de licor Jägermesiter.",
            "Agregar 1/4 parte de gaseosa sabor Limón.",
            "Introducir varios cubos de Hielo.",
            "Agitar durante unos segundos.",
            "Servir el contenido en una elegante copa de Martini."
         ],
         "imagen": "url(imgs/tragos-icons/BlackBlood.png)",
         "headerImage": "imgs/tragos/BLACKBLOOD.svg",
         "favorite": false
      },
      {
         "name": "Black Orchid",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Vodka",
            "Jugo de Limón",
            "Licor Creme de Violette"
         ],
         "preparacion": [
            "Colocar dentro de una coctelera 50ml de Vodka.",
            "Agregar 25ml de Jugo de Limón.",
            "Agregar 50ml de Licor Creme de Violette.",
            "Mezclar todo por un par de minutos.",
            "Luego servir en una copa llena de Hielo.",
            "Decorar el trago con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/blackOrchid.png)",
         "headerImage": "imgs/tragos/blackorchid.svg",
         "favorite": false
      },
      {
         "name": "Black Velvet",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Stout",
            "Champagne"
         ],
         "preparacion": [
            "LLenar una copa para Champagne con la mitad de Champagne.",
            "Llenar la otra mitad con cerveza Stout.",
            "Decorar con una cereza, dejándola caer hasta el fondo."
         ],
         "imagen": "url(imgs/tragos-icons/BlackVelvet.png)",
         "headerImage": "imgs/tragos/BlackVelvet.svg",
         "favorite": false
      },
      {
         "name": "Blackjack cocktail",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Whisky",
            "Jugo de Limón",
            "Licor de Café",
            "Triple Sec",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 45ml de Whisky.",
            "Agregar 30ml de Licor de Café.",
            "Agregar 22ml de Triple Sec.",
            "Agregar 22ml dejugo de Limón.",
            "Agitar fuertemente.",
            "Servir en una copa con Hielo.",
            "Decorar con una tira de Naranja o Limón."
         ],
         "imagen": "url(imgs/tragos-icons/BlackjackCocktail.png)",
         "headerImage": "imgs/tragos/Blackjackcocktail.svg",
         "favorite": false
      },
      {
         "name": "Bloody Mary",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Jugo de Tomate",
            "Jugo de Limón",
            "Salsa Tabasco",
            "Sal",
            "Pimienta",
            "Apio",
            "Hielo"
         ],
         "preparacion": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 30ml de Vodka.",
            "Agregar 60ml de Jugo de Tomate.",
            "Agregar 10ml de Jugo de Limón.",
            "Agregar 5 gotas de salsa tabasco, 1 pizca de sal y 1 pizca de pimienta.",
            "Mezclar con una rama de Apio.",
            "Servir en un vaso con Hielo."
         ],
         "imagen": "url(imgs/tragos-icons/bloodyMary.png)",
         "headerImage": "imgs/tragos/bloodymary.svg",
         "favorite": false
      },
      {
         "name": "Blue Margarita",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Curaçao Azul",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 30ml de Curaçao Azul.",
            "Agitar hasta que esté bien frío.",
            "Servir en una copa margarita previamente escarchada con sal (los hielos no deben caer en la copa)."
         ],
         "imagen": "url(imgs/tragos-icons/BlueMargarita.png)",
         "headerImage": "imgs/tragos/Bluemargarita.svg",
         "favorite": false
      },
      {
         "name": "Boulevardier",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Campari",
            "Vermouth Rojo",
            "Whisky"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 2 partes de Campari.",
            "Agregar 2 partes de Vermouth Rojo.",
            "Agregar 3 partes de Whisky.",
            "Agitar durante unos segundos.",
            "Servir en un vaso de coctel previamente enfirado.",
            "Decorar con un twist de Limón"
         ],
         "imagen": "url(imgs/tragos-icons/Boulevardier.png)",
         "headerImage": "imgs/tragos/Boulevardier.svg",
         "favorite": false
      },
      {
         "name": "Brave Bull",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Tequila Blanco",
            "Licor de Café",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso de Whisky Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 30ml de Licór de Café.",
            "Revolver con una cucharita."
         ],
         "imagen": "url(imgs/tragos-icons/BraveBull.png)",
         "headerImage": "imgs/tragos/BraveBull.svg",
         "favorite": false
      },
      {
         "name": "Bull",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Limón",
            "Jarabe",
            "Stout",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en un vaso largo, o en una copa fantasía, 45ml de Ron.",
            "Agregar 30ml Jugo de Limón.",
            "Agregar 30ml de Jarabe.",
            "Mezclar con una cuchara.",
            "Llenar el vaso con Hielo.",
            "LLenar a tope con la cerveza Stout.",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/tragos-icons/Bull.png)",
         "headerImage": "imgs/tragos/Bull.svg",
         "favorite": false
      },
      {
         "name": "Butterfly",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Chardonnay",
            "Jarabe de Ananá",
            "Jugo de Pomelo",
            "Miel",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Chardonnay.",
            "Agregar 30ml de Jarabe de Ananá.",
            "Agregar 30ml de Jugo de Pomelo y miel a gusto.",
            "Agitar fuertemente.",
            "Servir la preparación colada.",
            "Decorar con flores."
         ],
         "imagen": "url(imgs/tragos-icons/Butterfly.png)",
         "headerImage": "imgs/tragos/Butterfly.svg",
         "favorite": false
      },
      {
         "name": "Caipiroska",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Azúcar",
            "Lima",
            "Hielo"
         ],
         "preparacion": [
            "Verter en un vaso 25g azúcar y media Lima rebanada en trozos.",
            "Triturar ambos ingredientes con un mortero.",
            "Agregar al vaso varios hielos (enteros o picados).",
            "Agregar 50ml de Vodka.",
            "Utilizar una cuchara para subir las limas.",
            "Añadir más Hielo hasta cubrir el borde."
         ],
         "imagen": "url(imgs/tragos-icons/caipiroska.png)",
         "headerImage": "imgs/tragos/caipiroska.svg",
         "favorite": false
      },
      {
         "name": "Caipiroska de fresa",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Frutilla",
            "Lima",
            "Azúcar Moreno",
            "Gaseosa Lima Limón",
            "Hielo"
         ],
         "preparacion": [
            "Agregar en un vaso 25g de azúcar y media Lima rebanada en trozos.",
            "Triturar ambos ingredientes con un mortero.",
            "Agregar 5 futillas y triturar nuevamente.",
            "Colocar en un vaso varios hielos (enteros o picados).",
            "Agregar 50ml de Vodka.",
            "Utilizar una cuchara para subir las limas.",
            "Añadir más Hielo hasta cubrir el borde."
         ],
         "imagen": "url(imgs/tragos-icons/caipiroskaDeFresa.png)",
         "headerImage": "imgs/tragos/caipiroskadefresa.svg",
         "favorite": false
      },
      {
         "name": "Campari Orange",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Campari",
            "Jugo de Naranja"
         ],
         "preparacion": [
            "Añadir en un vaso alto Hielo.",
            "Agregar 30ml de Campari.",
            "Agregar 90ml de Jugo de Naranja.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/CampariOrange.png)",
         "headerImage": "imgs/tragos/CampariOrange.svg",
         "favorite": false
      },
      {
         "name": "Campari Spritz",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Campari",
            "Soda",
            "Champagne"
         ],
         "preparacion": [
            "Agregar en un vaso de vino 2 partes de Campari.",
            "Agregar 3 partes de Champagne.",
            "Agregar 1 parte de Soda.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/CampariSpritz.png)",
         "headerImage": "imgs/tragos/CampariSpritz.svg",
         "favorite": false
      },
      {
         "name": "Campari Tonic",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Campari",
            "Agua Tónica",
            "Limón",
            "Hielos"
         ],
         "preparacion": [
            "Añadir en una copa balón Hielo.",
            "Agregar 1 parte de Campari.",
            "Agregar 3 o 4 partes de Tónica.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/CampariTonic.png)",
         "headerImage": "imgs/tragos/CAMPARITONIC.svg",
         "favorite": false
      },
      {
         "name": "Cerveza Especiada",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Stout",
            "Miel",
            "Jengibre",
            "Pimienta",
            "Clavos de olor",
            "Canela"
         ],
         "preparacion": [
            "Añadir en una olla 1 litro de cerveza Stout.",
            "Agregar 2 cucharadas de miel.",
            "Agregar 1 trozo de 1cm de jegibre.",
            "Agregar una pisca de pimienta.",
            "Agregar 3 o 4 clavos de olor y un poco de canela.",
            "Calentar hasta que hierva.",
            "Dejar reposar hasta que se enfrie y colar."
         ],
         "imagen": "url(imgs/tragos-icons/CervezaEspeciada.png)",
         "headerImage": "imgs/tragos/Cervezaespeciada.svg",
         "favorite": false
      },
      {
         "name": "Cerveza Matadora",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Golden",
            "Tequila Reposado",
            "Jugo de Limón",
            "Jarabe",
            "Fresas",
            "Albahaca",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera 2 o 4 hojas de Albahaca.",
            "Agregar 15ml de Jarabe.",
            "Aplastar suavemente con un mortero.",
            "Añadir 30ml de Jugo de Limón y 60ml Tequila.",
            "Llenar la coctelera con hielos y agitar unos 12 segundos.",
            "Filtrar la mezcla y pasarla a la coctelera.",
            "Completar el resto de la coctelera con la cerveza fría."
         ],
         "imagen": "url(imgs/tragos-icons/CervezaMatadora.png)",
         "headerImage": "imgs/tragos/CervezaMatadora.svg",
         "favorite": false
      },
      {
         "name": "Chemical Brothers",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Jugo de Uva",
            "Jugo de Limón",
            "Soda",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera 3 partes de Gancia.",
            "Agregar 7 partes de Jugo de Uva y jugo de 1 Limón.",
            "Batir 30 segundos.",
            "Incorporar todo el contenido de la coctelera en un vaso de trago largo con 3/4 partes de Hielo.",
            "Completar con Soda.",
            "Decorar con un trozo de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/ChemicalBrothers.png)",
         "headerImage": "imgs/tragos/ChemicalBrothers.svg",
         "favorite": false
      },
      {
         "name": "Cinco Herradura",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Ananá",
            "Jugo de Arándano",
            "Gaseosa Lima Limón",
            "Jugo de Limón",
            "Azúcar"
         ],
         "preparacion": [
            "Añadir en un vaso alto tipo tubo hielos.",
            "Agregar  28ml de Tequila.",
            "Agregar 112ml de Jugo de Ananá.",
            "Agregar 112ml de Jugo de Arándano y un toque de Gaseosa Lima Limón.",
            "Revolver para mezclar.",
            "Agregar el toque de Limón y mezclar otra vez.",
            "Puedes agrear azucar (opcional).",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/CincoHerradura.png)",
         "headerImage": "imgs/tragos/CincoHerradura.svg",
         "favorite": false
      },
      {
         "name": "Clericó",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Champagne",
            "Melocotón",
            "Ciruela",
            "Limón",
            "Crema de Cassis",
            "Hielo"
         ],
         "preparacion": [
            "Cortar en trocitos 1 melocotón y 2 ciruelas.",
            "Agregar unas gotas de Jugo de Limón y la crema de Cassis.",
            "Revolver y agregar Hielo.",
            "Verter poco a poco 330ml de Champagne.",
            "Revolver todo el contenido con cuidado.",
            "Servir en copas de tipo flautas o en vasos cortos tipo old fashion."
         ],
         "imagen": "url(imgs/tragos-icons/Clerico.png)",
         "headerImage": "imgs/tragos/Clerico.svg",
         "favorite": false
      },
      {
         "name": "Clover Club",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Dry Gin",
            "Jarabe de Frambuesa",
            "Vermouth Seco",
            "Jugo de Limón",
            "Huevo",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Dry Gin.",
            "Agregar 20ml de Jarabe de Frambuesa.",
            "Agregar 20ml de Vermouth Seco.",
            "Agregar 20ml de Jugo de Limón y 1 clara de Huevo.",
            "Agitar fuertemente unos 15 segundos.",
            "Colar en una copa flaut.",
            "Adornar con unas frambuesas."
         ],
         "imagen": "url(imgs/tragos-icons/cloverClub.png)",
         "headerImage": "imgs/tragos/cloverclub.svg",
         "favorite": false
      },
      {
         "name": "Cóctel Mónaco",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Agua",
            "Rubia Lager",
            "Granadina",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso alto Hielo.",
            "Agregar 15ml de Granadina.",
            "Agregar 150ml de Cerveza Rubia Lager.",
            "Completar con 150ml de Agua."
         ],
         "imagen": "url(imgs/tragos-icons/CoctelMonaco.png)",
         "headerImage": "imgs/tragos/CóctelMónaco.svg",
         "favorite": false
      },
      {
         "name": "Colt 45",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Gin",
            "Energizante",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso Hielo.",
            "Agregar 30ml de Gin.",
            "Agregar 60ml de Jägermeister.",
            "Completar con 150ml de Energizante.",
            "Mezclar con una cuchara."
         ],
         "imagen": "url(imgs/tragos-icons/Colt45.png)",
         "headerImage": "imgs/tragos/Colt45.svg",
         "favorite": false
      },
      {
         "name": "Cool Cucumber Saison",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Rubia Ale",
            "Jugo de Limón",
            "Pepino",
            "Menta",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 2 rodajas de Pepino.",
            "Agregar 3 hojas de Menta.",
            "Agitar durante unos segundos.",
            "Servir solo el Jugo de Limón en un vaso de media pinta o una copa Tulipa.",
            "Suavemente verter la cerveza.",
            "Remover ligeramente.",
            "Decorar con una rodaja de Limón y una hoja de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/CoolCucumberSaison.png)",
         "headerImage": "imgs/tragos/CoolCucumberSaison.svg",
         "favorite": false
      },
      {
         "name": "Cosmopolitan",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Granadina",
            "Triple Sec",
            "Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 105ml de Vodka.",
            "Agitar durante unos segundos.",
            "Añador 75ml de licor de Naranja y jugo de 1 Limón.",
            "Agitar de nuevamente.",
            "Por último incorporar 100ml de jugo de Arándanos.",
            "Mezclar y servir en una copa grande."
         ],
         "imagen": "url(imgs/tragos-icons/cosmopolitan.png)",
         "headerImage": "imgs/tragos/cosmopolitan.svg",
         "favorite": false
      },
      {
         "name": "Cuba libre",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Gaseosa Cola",
            "Jugo de Lima",
            "Hielo",
            "Lima"
         ],
         "preparacion": [
            "Añadir en un vaso 3 cubos de Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Completar con 90ml de Gaseosa Cola.",
            "Exprimir el jugo de una rodaja de Lima.",
            "Mezclar.",
            "Decorar con media rodaja de Lima."
         ],
         "imagen": "url(imgs/tragos-icons/CubaLibre.png)",
         "headerImage": "imgs/tragos/Cubalibre.svg",
         "favorite": false
      },
      {
         "name": "Daiquiri",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Lima",
            "Jarabe",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 25ml de Jugo de Lima.",
            "Agregar 15ml de Jarabe (fruta a elección).",
            "Agitar bien para mezclar los ingredientes y que el Hielo se escarche.",
            "Servir en una copa de tipo Martini, enfriada previamente.",
            "Utilizar un colador al verter el líquido.",
            "Posteriormente escarchar el borde de la copa con azúcar y se decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Daiquiri.png)",
         "headerImage": "imgs/tragos/Daiquiri.svg",
         "favorite": false
      },
      {
         "name": "Dama blanca",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe",
            "Huevo",
            "Limón"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 50ml de Gin.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 25ml de Jarabe y 1 clara de huevo.",
            "Agitar fuertemente por unos 15-20 segundos.",
            "Colar el líquido en un vaso frío.",
            "Decorar con la ralladura de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/damaBlanca.png)",
         "headerImage": "imgs/tragos/damablanca.svg",
         "favorite": false
      },
      {
         "name": "Deer & Beer",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Rubia Lager"
         ],
         "preparacion": [
            "Servir el Jägermeister helado en un vaso de chupito.",
            "Servir la cerveza fría en un vaso de cerveza.",
            "Tomar el Jägermeister y después disfrutar la cerveza."
         ],
         "imagen": "url(imgs/tragos-icons/DEERBEER.png)",
         "headerImage": "imgs/tragos/DEER_BEER.svg",
         "favorite": false
      },
      {
         "name": "Délice & pepino",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Champagne",
            "Pepino",
            "Albahaca",
            "Pomelo",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un copón abundante Hielo.",
            "Agregar la piel del Pepino.",
            "Completar con el Champagne.",
            "Revolver.",
            "Decorar con una rodaja de Pomelo y hojas de Albahaca."
         ],
         "imagen": "url(imgs/tragos-icons/DelicePepino.png)",
         "headerImage": "imgs/tragos/Delice_pepino.svg",
         "favorite": false
      },
      {
         "name": "Destornillador",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Jugo de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Llenar un vaso con Hielo.",
            "Agregar 50ml de Vodka.",
            "Llenar el vaso de Juego de Naranja.",
            "Mezclar.",
            "Adornar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/Destornillador.png)",
         "headerImage": "imgs/tragos/Destornillador.svg",
         "favorite": false
      },
      {
         "name": "Disparo Caliente",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermeister",
            "Tequila Blanco",
            "Salsa Tabasco"
         ],
         "preparacion": [
            "Añadir en un chupito 2 partes de Jägermeister.",
            "Agregar 2 partes de Tequila.",
            "Agregar 1/2 parte de salsa tabasco.",
            "Revolver con una cuchara."
         ],
         "imagen": "url(imgs/tragos-icons/DisparoCaliente.png)",
         "headerImage": "imgs/tragos/Disparocaliente.svg",
         "favorite": false
      },
      {
         "name": "Dolce Vita",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Americano Gancia",
            "Champagne",
            "Bitter Aromático",
            "Piel de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1 parte y media de Champagne.",
            "Terminar con unas gotas de Bitter Aromático.",
            "Decorar con una piel de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/DolceVita.png)",
         "headerImage": "imgs/tragos/DolceVita.svg",
         "favorite": false
      },
      {
         "name": "El monstruo del lago Ness",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermeister",
            "Baileys",
            "Licor de Melón",
            "Hielo"
         ],
         "preparacion": [
            "Verter en una copa de tipo cordial 2 partes de Baileys.",
            "Añadir lentamente, con mucho cuidado, 2 partes de Licor de Melón, dejándolo caer suavemente por el borde de la copa para que estos no se mezclen.",
            "Incorporar 2 partes de Jägermeister utilizando el mismo procedimiento que con el Licor de Melón."
         ],
         "imagen": "url(imgs/tragos-icons/ElMonstruoDelLagoNess.png)",
         "headerImage": "imgs/tragos/ElmonstruodellagoNess.svg",
         "favorite": false
      },
      {
         "name": "Energizante Jäger",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Energizante",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso de tipo Highball Hielo.",
            "Agregar 1 parte de Jägermeister.",
            "Completar con Energizante.",
            "Decorar con un trozo de cáscara de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/EnergizanteJager.png)",
         "headerImage": "imgs/tragos/EnergizanteJäger.svg",
         "favorite": false
      },
      {
         "name": "Espuma Dorada",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Rubia Lager",
            "Champagne",
            "Licor de Melón"
         ],
         "preparacion": [
            "Añadir en una jarra, o copa balón, 500ml de cerveza Rubia Lager.",
            "Agregar 500ml de Champagne.",
            "Agregar 1 chupito de Licor de Melón."
         ],
         "imagen": "url(imgs/tragos-icons/EspumaDorada.png)",
         "headerImage": "imgs/tragos/Espumadorada.svg",
         "favorite": false
      },
      {
         "name": "Fernet Cola",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Fernet",
            "Gaseosa Cola",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso Hielo.",
            "Agregar un 30% de Fernet.",
            "Completar con un 70% de Gaseosa Cola."
         ],
         "imagen": "url(imgs/tragos-icons/FernetCola.png)",
         "headerImage": "imgs/tragos/FernetCola.svg",
         "favorite": false
      },
      {
         "name": "French 75",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Jugo de Limón",
            "Azúcar Impalpable",
            "Champagne",
            "Hielo",
            "Limón"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 90ml de Gin.",
            "Agregar 90ml de Jugo de Limón y 4 cdtas de azúcar impalpable.",
            "Agitar fuertemente durante unos 20 segundos.",
            "Servir en dos copas flauta (previamente enfriadas).",
            "Rellenar con el Champagne.",
            "Adornar con una cáscara de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/french75.png)",
         "headerImage": "imgs/tragos/french75.svg",
         "favorite": false
      },
      {
         "name": "Fright Night In The Groove",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Jägermeister",
            "Tequila Blanco",
            "Jarabe",
            "Jugo de Pomelo",
            "Pomelo",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Jägermeister.",
            "Agregar 15ml de Tequila.",
            "Agregar 15ml de Jarabe.",
            "Completar con 30ml de Jugo de Pomelo.",
            "Agitar fuertemente.",
            "Verter el líquido en un vaso chico de Whisky.",
            "Decorar con una rodaja de Pomelo."
         ],
         "imagen": "url(imgs/tragos-icons/FrightNightInTheGroove.png)",
         "headerImage": "imgs/tragos/FrightNightInTheGroove.svg",
         "favorite": false
      },
      {
         "name": "Gancia Coloradito",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Jugo de Naranja",
            "Campari",
            "Azúcar Impalpable",
            "Hielo",
            "Menta"
         ],
         "preparacion": [
            "Añadir en una coctelera 6 partes de Americano Gancia.",
            "Agregar 2 partes de Jugo de Naranja.",
            "Agregar 2 partes de Campari y 1/2 cucharada de azucar impalpable.",
            "Agitar durante unos segundos.",
            "Servir en vaso de trago corto con Hielo.",
            "Decorar con unas hojas de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/GanciaColoradito.png)",
         "headerImage": "imgs/tragos/Ganciacoloradito.svg",
         "favorite": false
      },
      {
         "name": "Gancia con Pomelo",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Americano Gancia",
            "Gaseosa Pomelo",
            "Pomelo",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Completar con Gaseosa Pomelo.",
            "Decorar con media rodaja de Pomelo."
         ],
         "imagen": "url(imgs/tragos-icons/GanciaConPomelo.png)",
         "headerImage": "imgs/tragos/Ganciaconpomelo.svg",
         "favorite": false
      },
      {
         "name": "Gancia Frozen de Frutilla",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Azúcar",
            "Pulpa de Frutilla",
            "Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 1 medida de Americano Gancia y 1 cucharada de azucar.",
            "Agitar durante unos segundos.",
            "Servir en un vaso largo.",
            "Completar con Pulpa de Frutilla y el jugo de de un gajo de Limón.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/GanciaFrozenDeFrutilla.png)",
         "headerImage": "imgs/tragos/Ganciafrozendefrutilla.svg",
         "favorite": false
      },
      {
         "name": "Gancia Tangerine",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Americano Gancia",
            "Mandarina",
            "Soda",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Agregar 4 partes de Vodka.",
            "Agregar 2 partes de jugo de Mandarina.",
            "Completar con Soda.",
            "Decorar con tres gajos de Mandarina."
         ],
         "imagen": "url(imgs/tragos-icons/GanciaTangerine.png)",
         "headerImage": "imgs/tragos/GanciaTangerine.svg",
         "favorite": false
      },
      {
         "name": "Gin Fizz",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Jugo de Limón",
            "Jarabe",
            "Soda",
            "Hielo",
            "Limón"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Gin.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 20ml Jarabe.",
            "Agitar vigorosamente hasta obtener un líquido espumoso.",
            "Servir en un vaso con cubitos de Hielo.",
            "Añadir Soda para rellenar.",
            "Decorar con una cáscara de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/ginFizz.png)",
         "headerImage": "imgs/tragos/ginfizz.svg",
         "favorite": false
      },
      {
         "name": "Gin Tonic",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Agua Tónica",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso Hielo.",
            "Agregar 30% de Gin.",
            "Completar con Agua Tónica.",
            "Mezclar todo."
         ],
         "imagen": "url(imgs/tragos-icons/ginTonic.png)",
         "headerImage": "imgs/tragos/gintonic.svg",
         "favorite": false
      },
      {
         "name": "Golden Peach",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Duraznos en Lata",
            "Jugo de Naranja",
            "Durazno",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en la licuadora 2/3 de lata de conserva de duraznos.",
            "Agregar 120ml Jugo de Naranja.",
            "Agregar 120ml de Ron Blanco y Hielo.",
            "Licuar durante un minuto o hasta que la mezcla quede uniforme.",
            "Servir en vasos altos.",
            "Decorar el trago con una rodaja de Durazno."
         ],
         "imagen": "url(imgs/tragos-icons/goldenPeach.png)",
         "headerImage": "imgs/tragos/goldenpeach.svg",
         "favorite": false
      },
      {
         "name": "Hemingway Special",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Pomelo",
            "Marrasquino",
            "Jugo de Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Ron Blanco.",
            "Agregar 40ml de Jugo de Pomelo.",
            "Agregar 15ml de Marrasquino.",
            "Completar con 15ml de Jugo de Limón.",
            "Agitar para mezclarlos bien.",
            "Servir en una copa clásica de cóctel enfriada previamente.",
            "Normalmente no se decora, pero puede admitir una rodajita de Limón o de Ananá en el borde."
         ],
         "imagen": "url(imgs/tragos-icons/HemingwaySpecial.png)",
         "headerImage": "imgs/tragos/HemingwaySpecial.svg",
         "favorite": false
      },
      {
         "name": "Hop Collins",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ginebra Seca",
            "Jugo de Limón",
            "Jarabe",
            "American IPA",
            "Frambuesa",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Ginebra Seca.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 30ml de Jarabe.",
            "Agitar con fuerza.",
            "Servir en un vaso alto tubular tipo Collins con un par de hielos.",
            "Añadir suavemente la cerveza American IPA hasta llenar el vaso.",
            "Decorar con frambuesas"
         ],
         "imagen": "url(imgs/tragos-icons/HopCollins.png)",
         "headerImage": "imgs/tragos/HopCollins.svg",
         "favorite": false
      },
      {
         "name": "Horno Bull",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso largo Hielo.",
            "Agregar 50ml de Tequila.",
            "Completar con Jugo de Naranja.",
            "Mezclar."
         ],
         "imagen": "url(imgs/tragos-icons/HornoBull.png)",
         "headerImage": "imgs/tragos/HornoBull.svg",
         "favorite": false
      },
      {
         "name": "Jäger Tonic",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Agua Tónica",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una copa alargada 90ml de Jägermeister.",
            "Completar con Tónica.",
            "Añadir dos cubitos de Hielo y una rodaja de Naranja.",
            "Decorar la copa con una rodaja de Naranja en el borde."
         ],
         "imagen": "url(imgs/tragos-icons/JagerTonic.png)",
         "headerImage": "imgs/tragos/JÄGERTONIC.svg",
         "favorite": false
      },
      {
         "name": "Jägermeister Tea",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Té",
            "Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir 60ml de Jägermeister en una jarra de cerveza con Hielo.",
            "Completar con Té.",
            "Revolver.",
            "Adornar con un trocito de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/JaggerTea.png)",
         "headerImage": "imgs/tragos/JaggerTea.svg",
         "favorite": false
      },
      {
         "name": "Juan Collins",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Azúcar",
            "Soda",
            "Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso tipo tubo Hielo.",
            "Añadir 4,5 partes de Tequila.",
            "Añadir 1,5 parte de Jugo de Limón.",
            "Añadir 1 cdta. de Azúcar.",
            "Completar con 9 partes Soda.",
            "Decorar con la cuña de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/JuanCollins.png)",
         "headerImage": "imgs/tragos/JuanCollins.svg",
         "favorite": false
      },
      {
         "name": "Kaffee",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermeister",
            "Café Cold Brew",
            "Café Molido",
            "Hielo"
         ],
         "preparacion": [
            "Preparar Café Cold Brew con anticipación.",
            "Añadir en la coctelera 1 parte de Jägermeister.",
            "Completar 1 parte de Café Cold Brew.",
            "Agitar bien.",
            "Servir cuidadosamente en una taza de espresso transparente.",
            "Espolvorear un poco de Café molido sobre la taza."
         ],
         "imagen": "url(imgs/tragos-icons/KAFFEE.png)",
         "headerImage": "imgs/tragos/KAFFEE.svg",
         "favorite": false
      },
      {
         "name": "Limone",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Gaseosa Lima Limón",
            "Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Completar con Gaseosa Lima Limón.",
            "Decorar con un gajo de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Limone.png)",
         "headerImage": "imgs/tragos/Limone.svg",
         "favorite": false
      },
      {
         "name": "Long Island Iced Tea",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Vodka",
            "Ron Blanco",
            "Gin",
            "Triple Sec",
            "Jarabe",
            "Jugo de Limón",
            "Gaseosa Cola",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso alto unos 4 cubos de Hielo.",
            "Agregar 30ml Vodka.",
            "Agregar 30ml Tequila.",
            "Agregar 30ml Ron.",
            "Agregar 30ml Gin.",
            "Agregar 15ml Triple Sec.",
            "Completar con 30ml Jugo de Limón y 20ml de Jarabe.",
            "Mezclar todos los ingredientes.",
            "Por último vertir lentamente el Gaseosa Cola hasta completar.",
            "Decorar con un trozo de Limón o Lima y añadir una bombilla."
         ],
         "imagen": "url(imgs/tragos-icons/LongIslandIcedTea.png)",
         "headerImage": "imgs/tragos/longislandicedtea.svg",
         "favorite": false
      },
      {
         "name": "Long Island Iced Tea (Ron)",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Tequila Blanco",
            "Vodka",
            "Ron Blanco",
            "Tripe sec",
            "Ginebra",
            "Jugo de Limón",
            "Jarabe",
            "Gaseosa Cola",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso largo (Highball o vaso Collins) Hielo.",
            "Agregar 15ml de Tequila.",
            "Agregar 15ml de Vodka.",
            "Agregar 15ml de Ron Blanco.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 15ml de Ginebra.",
            "Agregar 25ml de Jugo de Limón.",
            "Complitar con 30ml de Jarabe y un toque de Gaseosa Cola.",
            "Mezclar bien.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/LongIslandIcedTea.png)",
         "headerImage": "imgs/tragos/longislandicedtea.svg",
         "favorite": false
      },
      {
         "name": "Mai Tai",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Ron Blanco",
            "Ron Oscuro",
            "Curaçao de Naranja",
            "Jarabe de Almendra",
            "Jugo de Lima",
            "Granadina",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 40ml de Ron Blanco.",
            "Agregar 20ml de Ron Oscuro.",
            "Agregar 15ml de Curaçao de Naranja.",
            "Agregar 15ml de Jarabe de Almendra.",
            "Agregar 10ml de Jugo de Limón.",
            "Completar con 10ml de Granadina.",
            "Mezclar bien.",
            "Servir el liquido colado en un vaso o copa llena de Hielo.",
            "Rellenar con Soda.",
            "Decorar con una rodaja de Lima, o de Ananá, y con una sombrilla."
         ],
         "imagen": "url(imgs/tragos-icons/MaiTai.png)",
         "headerImage": "imgs/tragos/MaiTai.svg",
         "favorite": false
      },
      {
         "name": "Manhattan",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Vermouth Dulce",
            "Whisky",
            "Angostura",
            "Naranja",
            "Cereza",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 7ml de Angostura.",
            "Agregar 90ml de Whisky.",
            "Completar con 22ml de Vermouth Dulce.",
            "Revolver con una varilla.",
            "Introducir las cerezas para darle ese color especial.",
            "Decorar con la Cereza y una cáscara de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/Manhattan.png)",
         "headerImage": "imgs/tragos/Manhattan.svg",
         "favorite": false
      },
      {
         "name": "Margachela o Margarita Miami",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Triple Sec",
            "Jugo de Limón",
            "Pale Lager",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una licuadora 45ml de Tequila",
            "Agregar 30ml de licor Triple Sec.",
            "Agregar 30ml de Jugo de Limón y el Hielo.",
            "Prender la licuadora hasta que quede como una nieve.",
            "Servir en una copa escarchada con sal.",
            "Para finalizar, destapar las cervezas y colocarlas boca abajo en el trago."
         ],
         "imagen": "url(imgs/tragos-icons/Margachela.png)",
         "headerImage": "imgs/tragos/MargachelaPNG.png",
         "favorite": false
      },
      {
         "name": "Margarita de Pepino",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Pepino",
            "Jugo de Limón",
            "Jarabe",
            "Hielo",
            "Pepino"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 60ml de Jugo de Pepino.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 30ml de Jarabe.",
            "Agitar fuerte.",
            "Servir en una copa con Hielo.",
            "Decorar con unas tiritas de Pepino."
         ],
         "imagen": "url(imgs/tragos-icons/MargaritaDePepino.png)",
         "headerImage": "imgs/tragos/MargaritaDePepino.svg",
         "favorite": false
      },
      {
         "name": "Margarita de Sandía",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Sandía",
            "Sal",
            "Jugo de Limón",
            "Licor de flor de Saúco",
            "Tequila Blanco",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una licuadora 680g de Sandía en trozos.",
            "Agregar 177ml de Jugo de Limón.",
            "Agregar 1/4 de cucharadita de Sal.",
            "Agregar 44ml de Licor de flor de Saúco.",
            "Licuar hasta que se formé un puré.",
            "Tamizar el puré suave usando un paño fino o un colador, presionando con una cuchara.",
            "Luego guardar en la nevera.",
            "Servir en vasos con hielos."
         ],
         "imagen": "url(imgs/tragos-icons/MargaritaDeSandia.png)",
         "headerImage": "imgs/tragos/Margaritadesandia.svg",
         "favorite": false
      },
      {
         "name": "Margarita Shandy",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jugo de Limón",
            "Tequila Reposado",
            "Agua",
            "Limón",
            "Golden",
            "Sal",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una jarra grande 320ml de Jugo de Limón.",
            "Agregar 236ml de Tequila.",
            "Completar con 350ml agua.",
            "Revolver.",
            "Añadir una pizca de sal.",
            "Enfriar durante 6 horas.",
            "Antes de servir llenar la jarra con Hielo, rodajas de Limón y añadir la cerveza Golden muy fría."
         ],
         "imagen": "url(imgs/tragos-icons/margaritaShandy.png)",
         "headerImage": "imgs/tragos/Margaritashandy.svg",
         "favorite": false
      },
      {
         "name": "Martini Coctel",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Gin",
            "Vermouth",
            "Aceituna",
            "Limón",
            "Agua",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 75ml de Gin.",
            "Agregar 30ml de Vermouth.",
            "Revolver lentamente por un minuto.",
            "Servir en una copa Martini previamente enfriada sin dejar caer los hielos.",
            "Exprimir la cáscara de limón en la superficie.",
            "Para decorar poner 1-3 aceitunas en un palillo y agregar al Martini."
         ],
         "imagen": "url(imgs/tragos-icons/martiniCoctel.png)",
         "headerImage": "imgs/tragos/martinicoctel.svg",
         "favorite": false
      },
      {
         "name": "Mary Pickford",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Marrasquino",
            "Jugo de Ananá",
            "Granadina",
            "Cereza",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Ron Blanco.",
            "Agregar 10ml de Marrasquino.",
            "Agregar 60ml de Jugo de Ananá natural.",
            "Completar con 10ml de Granadina.",
            "Agitar la coctelera y se deja reposar durante un breve tiempo.",
            "Servir en una copa de cóctel fría.",
            "Decorar el vaso con una Cereza de cóctel."
         ],
         "imagen": "url(imgs/tragos-icons/MaryPickford.png)",
         "headerImage": "imgs/tragos/Marypickford.svg",
         "favorite": false
      },
      {
         "name": "Mexican Mule",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Lima",
            "Jarabe",
            "Gaseosa Ginger Beer",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso alto Hielo picado hasta la mitad aproximadamente.",
            "Exprimir media Lima",
            "Agregar 8ml de Jarabe.",
            "Completar con 45ml Tequila.",
            "Mezclar todo.",
            "Añadir más Hielo picado hasta arriba y rellenar con la Gaseosa de Ginger Beer.",
            "Decorar con Lima."
         ],
         "imagen": "url(imgs/tragos-icons/MexicanMule.png)",
         "headerImage": "imgs/tragos/Mexicanmule.svg",
         "favorite": false
      },
      {
         "name": "Mojito",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Lima",
            "Menta",
            "Azúcar",
            "Soda",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso dos cucharadas de azúcar.",
            "Agregar 6 ramas de Menta.",
            "Agregar 30ml de Lima.",
            "Machacar todo conjuntamente mezclando bien los ingredientes.",
            "Agregar un chorrito de Soda y rellenar el vaso con Hielo picado.",
            "Finalmente añadir 40ml de Ron y terminar de llenar el vaso con Soda.",
            "Decorar con hojas de Menta y una rodaja de Lima o de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Mojito.png)",
         "headerImage": "imgs/tragos/Mojito.svg",
         "favorite": false
      },
      {
         "name": "Mojito Con Cerveza",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Limón",
            "Azúcar",
            "Menta",
            "Rubia Lager",
            "Hielo"
         ],
         "preparacion": [
            "Cortar 1/2 Limón en cuartos e incorpóralos en un vaso.",
            "Colocar 2 o 3 cucharadas de azúcar y machacar suavemente para extraer el jugo.",
            "Agregar las hojas de menta y presionar un poco más hasta que toda se mezcle bien.",
            "Vertir 45ml de Ron Blanco y revolver con una cucharita.",
            "Llenar el vaso añadiéndole media taza de Hielo triturado.",
            "Revolver y completar con la cerveza Rubia Lager.",
            "Decorar con una ramita de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/MojitoConCerveza.png)",
         "headerImage": "imgs/tragos/Mojitoconcerveza.svg",
         "favorite": false
      },
      {
         "name": "Negroni",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Gin",
            "Campari",
            "Vermouth Rosso",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso old fashion 3 cubos de Hielo.",
            "Agregar 30ml Gin.",
            "Agregar 30ml Campari.",
            "Completar con 30ml Vermouth Rosso.",
            "Revolver por 30 segundos.",
            "Decorar con una cáscara de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/negroni.png)",
         "headerImage": "imgs/tragos/negroni.svg",
         "favorite": false
      },
      {
         "name": "Nieblas del Caribe",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Reposado",
            "Jugo de Ananá",
            "Jugo de Naranja",
            "Curaçao Azul"
         ],
         "preparacion": [
            "Añadir en un vaso alto 2 hielos.",
            "Agregar 30ml de Tequila Reposado.",
            "Agregar 125ml de Jugo de Ananá.",
            "Agregar 125ml de Jugo de Naranja.",
            "Rellenar con 15ml Curaçao Azul.",
            "Decorar con un trozo de Ananá."
         ],
         "imagen": "url(imgs/tragos-icons/NieblasDelCaribe.png)",
         "headerImage": "imgs/tragos/NieblasdelCaribe.svg",
         "favorite": false
      },
      {
         "name": "Paloma",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Gaseosa de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso highball escarchado con sal 3 cubos de Hielo.",
            "Agregar 100ml de Tequila Blanco.",
            "Agregar 50ml de Jugo de Limón.",
            "Luego añadir 100ml de Gaseosa de Naranja.",
            "Mezclar suavemente.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Paloma.png)",
         "headerImage": "imgs/tragos/Paloma.svg",
         "favorite": false
      },
      {
         "name": "Pimps Up",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Martini Bitter",
            "Jarabe de Jengibre",
            "Gaseosa Lima Limón",
            "Limón",
            "Lima",
            "Pomelo",
            "Naranja",
            "Pepino",
            "Arándano",
            "Frutilla",
            "Menta",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una jarra Hielo.",
            "Agregar 1 limón, 3 limas, 1 pomelo, 1 naranja, 1/2 pepino, 1 puñado de arándanos y un puñado de frutillas, todos cortados.",
            "Incorporar 177ml de Gin.",
            "Agregar un dash de Bitter.",
            "Agregar 59ml de Jarabe.",
            "Completar con 1 lata de Gaseosa de Lima Limón.",
            "Mezclar bien.",
            "Servir en vasos con Hielo.",
            "Decorar con Pepino y Menta."
         ],
         "imagen": "url(imgs/tragos-icons/PimpsUp.png)",
         "headerImage": "imgs/tragos/PimpsUp.svg",
         "favorite": false
      },
      {
         "name": "Pink Ponch",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Plan B Rose",
            "Jugo de Manzana",
            "Jarabe de Frutos Rojos",
            "Jugo Lima",
            "Frutos Rojos",
            "Menta",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una jarra abundante Hielo.",
            "Agregar 500ml de Plan B Rose.",
            "Agregar 90ml de Jugo de Lima.",
            "Agregar 250ml de Jarabe de Frutos Rojos.",
            "Completar con 500ml de Jugo de Manzana.",
            "Mixear 100g frutos rojos y luego agregarlos a la jarra.",
            "Mezclar.",
            "Terminar con Menta fresca."
         ],
         "imagen": "url(imgs/tragos-icons/PinkPonch.png)",
         "headerImage": "imgs/tragos/PinkPonch.svg",
         "favorite": false
      },
      {
         "name": "Piña Colada",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Jugo de Ananá",
            "Leche de Coco",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 30ml de Ron.",
            "Agregar 90ml de Jugo de Ananá.",
            "Completar con 30ml de Leche de Coco.",
            "Agitar fuertemente.",
            "Servir en un vaso Hurricane.",
            "Decorar con una rodajita de Ananá."
         ],
         "imagen": "url(imgs/tragos-icons/PinaColada.png)",
         "headerImage": "imgs/tragos/Piñacolada.svg",
         "favorite": false
      },
      {
         "name": "Planter’s Punch",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Oscuro",
            "Jugo de Naranja",
            "Jugo de Ananá",
            "Jugo de Limón",
            "Granadina",
            "Jarabe",
            "Amargo de Angostura",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 45ml de Ron Oscuro.",
            "Agregar 35ml de Jugo de Naranja.",
            "Agregar 35ml de Jugo Ananá.",
            "Agregar 20ml de Jugo de Limón.",
            "Agregar 10ml de Granadina.",
            "Completar 10ml de Jarabe.",
            "Agitar bien.",
            "Servir en un vaso largo o Hurricane con 2 o 3 hielos.",
            "Rellenar el vaso con 3 o 4 toques de Amargo de Angostura.",
            "Decorar con una Guinda de cóctel y también con una rodajita de Ananá en el borde."
         ],
         "imagen": "url(imgs/tragos-icons/PlantersPunch.png)",
         "headerImage": "imgs/tragos/PlantersPunch.svg",
         "favorite": false
      },
      {
         "name": "Pomelo Sour",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Jugo de Pomelo",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe",
            "Huevo",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 45ml de Gin.",
            "Agregar 75ml de Jugo de Pomelo.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 10ml de Jarabe.",
            "Completar con 1 clara de Huevo.",
            "Agitar fuertemente durante 30 segundos.",
            "Servir en un vaso (sin Hielo) y adornar a gusto"
         ],
         "imagen": "url(imgs/tragos-icons/pomeloSour.png)",
         "headerImage": "imgs/tragos/pomelosour.svg",
         "favorite": false
      },
      {
         "name": "Purple Stag",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Té de Frutos",
            "Azúcar Impalpable",
            "Jägermeister",
            "Jugo de Limón",
            "Mermelada de Mora",
            "Mora",
            "Hielo"
         ],
         "preparacion": [
            "Añadir las moras en una coctelera.",
            "Agregar 10ml de la mermelada y agitar suavemente.",
            "Agregar 25ml de Té de Frutos.",
            "Agregar 50ml de Jägermeister.",
            "Completar con 25ml de Jugo de Limón y agitar.",
            "Colar y servir en un vaso con Hielo.",
            "Echar la Azúcar Impalpable por encima."
         ],
         "imagen": "url(imgs/tragos-icons/PurpleStag.png)",
         "headerImage": "imgs/tragos/PURPLESTAG.svg",
         "favorite": false
      },
      {
         "name": "Red Headed Chick",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermeister",
            "Caña de Durazno",
            "Jugo de Arándano",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un cocterlera 30ml de Jägermeister.",
            "Agregar 30ml de Caña de Durazno.",
            "Agregar 60ml de Jugo de Arándano.",
            "Completar con Hielo.",
            "Agitar fuertemente.",
            "Servir en un vaso mediano tipo Vodka sour."
         ],
         "imagen": "url(imgs/tragos-icons/RedHeadedChick.png)",
         "headerImage": "imgs/tragos/RedHeadedChick.svg",
         "favorite": false
      },
      {
         "name": "Reservoir Dog",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Jägermeister",
            "Baileys",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso con cubitos de Hielo",
            "Agregar 50% de Baileys.",
            "Agregar 50% de Jägermeister.",
            "Dejar reposar la bebida durante unos minutos.",
            "Retirar los hielos y servir en un vaso ancho de Whisky."
         ],
         "imagen": "url(imgs/tragos-icons/ReservoirDog.png)",
         "headerImage": "imgs/tragos/RESERVOIRDOG.svg",
         "favorite": false
      },
      {
         "name": "Rob Roy",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Whisky",
            "Vermouth Rosso",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Whisky.",
            "Agregar 30ml de Vermouth Rosso.",
            "Revolver durante 25 segundos con la ayuda de una cuchara larga.",
            "Servir en una copa estilo Martini previamente helada, pero sin colocarle Hielo.",
            "Decorar con piel de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/RobRoy.png)",
         "headerImage": "imgs/tragos/RobRoy.svg",
         "favorite": false
      },
      {
         "name": "Rum Lemonade",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Ron Blanco",
            "Limonada",
            "Menta",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un recipiente 240ml de Ron Blanco.",
            "Agregar varias hojas de Menta.",
            "Tritúrar levemente.",
            "Añadir 720ml de limonada.",
            "Servir en vasos cortos con Hielo."
         ],
         "imagen": "url(imgs/tragos-icons/RumLemonade.png)",
         "headerImage": "imgs/tragos/Rumlemonade.svg",
         "favorite": false
      },
      {
         "name": "Ruso Negro",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Vodka",
            "Licor de Café",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso varios hielos.",
            "Agregar 100ml Vodka.",
            "Agregar 50ml de Licor de Café.",
            "Por último mezclar todo."
         ],
         "imagen": "url(imgs/tragos-icons/rusoNegro.png)",
         "headerImage": "imgs/tragos/rusonegro.svg",
         "favorite": false
      },
      {
         "name": "Salty Chihuahua con Limón",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Limonada",
            "Jugo de Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso Hielo.",
            "Agregar 1,5 medida de Tequila.",
            "Agregar 5 medidas de limonada.",
            "Agregar 1 toque de Jugo de Limón.",
            "Revolver."
         ],
         "imagen": "url(imgs/tragos-icons/SaltyChihuahuaConLimon.png)",
         "headerImage": "imgs/tragos/SaltyChihuahuaconlimón.svg",
         "favorite": false
      },
      {
         "name": "Sandía con Vodka",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Gaseosa Lima Limón",
            "Limón",
            "Sandía",
            "Jugo de Frutilla"
         ],
         "preparacion": [
            "Cortar y calar una Sandía.",
            "Triturar parte de la pulpa y colocalar dentro de la Sandía.",
            "Verter 300ml de Vodka.",
            "Agregar Jugo de un Limón.",
            "Completar con Gaseosa Lima Limón.",
            "Puedes agregar Jugo de Frutilla a gusto."
         ],
         "imagen": "url(imgs/tragos-icons/sandiaConVodka.png)",
         "headerImage": "imgs/tragos/sandiaconvodka.svg",
         "favorite": false
      },
      {
         "name": "Sangre y Arena",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Whisky",
            "Vermouth Rosso",
            "Brandy",
            "Jugo de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 22ml de Whisky.",
            "Agregar 22ml de Vermouth Rosso.",
            "Agregar 22ml de Brandy.",
            "Agregar 22ml de Jugo de Naranja.",
            "Agitar fuertemente.",
            "Colar y servir en vasos de cóctel bien fríos.",
            "Adornar con piel de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/SangreyArena.png)",
         "headerImage": "imgs/tragos/SangreyArena.svg",
         "favorite": false
      },
      {
         "name": "Sangría con Cerveza",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe de Durazno",
            "Hielo",
            "Duraznos en Jarabe",
            "Rubia Lager",
            "Hielo"
         ],
         "preparacion": [
            "Verter en un vaso largo 45ml de Tequila.",
            "Agregar 30ml de licor Triple Sec.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 30ml de Jarabe de Durazno.",
            "Mezclar con una cuchara y colocar Hielo hasta el tope.",
            "Finalmente rellenar con cerveza Rubia Lager.",
            "Decorar con los trozos de Durazno."
         ],
         "imagen": "url(imgs/tragos-icons/SangriaConCerveza.png)",
         "headerImage": "imgs/tragos/SangriaConCerveza.svg",
         "favorite": false
      },
      {
         "name": "Sangrita",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jugo de Naranja",
            "Jugo de Tomate",
            "Jugo de Lima",
            "Salsa Picante Mexicana",
            "Pico de Gallo",
            "Tequila Blanco",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 125ml Jugo de Naranja.",
            "Agregar 125ml de Jugo de Tomate.",
            "Agregar 22,5ml de Jugo de Limón.",
            "Agregar 2,5ml de salsa picante.",
            "Agregar una cucharada de Pico de Gallo.",
            "Agitar bien.",
            "Servir y acompañar con un chupito de Tequila."
         ],
         "imagen": "url(imgs/tragos-icons/Sangrita.png)",
         "headerImage": "imgs/tragos/Sangrita.svg",
         "favorite": false
      },
      {
         "name": "Santo Limento",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Champagne",
            "Pepino",
            "Lima",
            "Menta",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar un gajo de Lima exprimido.",
            "Completar con Champagne.",
            "Decorar con láminas de Pepino y una rama de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/SantoLimento.png)",
         "headerImage": "imgs/tragos/SantoLimento.svg",
         "favorite": false
      },
      {
         "name": "Submarino",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Rubia Lager"
         ],
         "preparacion": [
            "En un tarro de cerveza voltear un chupito de Tequila.",
            "Llenar con cerveza Rubia Lager."
         ],
         "imagen": "url(imgs/tragos-icons/Submarino.png)",
         "headerImage": "imgs/tragos/Submarino.svg",
         "favorite": false
      },
      {
         "name": "Surfer On Acid",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Malibu",
            "Jägermeister",
            "Jugo de Ananá",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera 30ml de Malibu.",
            "Agregar 30ml de Jägermeister.",
            "Agregar 30ml de Jugo de Ananá.",
            "Agitar fuerte y vertir en un vaso old fashioned con Hielo.",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/tragos-icons/SurferOnAcid.png)",
         "headerImage": "imgs/tragos/SurferOnAcid.svg",
         "favorite": false
      },
      {
         "name": "Tequila Oasis",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Oro",
            "Triple Sec",
            "jugo de Arándano",
            "Jugo de Naranja",
            "Limón"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Tequila.",
            "Agregar 15ml Triple Sec.",
            "Agregar 60ml de Jugo de Arándano.",
            "Completar con 30ml de Jugo de Naranja.",
            "Agitar bien.",
            "Colar en una copa tipo Martini.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/TequilaOasis.png)",
         "headerImage": "imgs/tragos/Tequilaoasis.svg",
         "favorite": false
      },
      {
         "name": "Tequila Sunrise",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Granadina",
            "Limón",
            "Guinda",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 50ml de Tequila.",
            "Agregar 100ml de Jugo de Naranja.",
            "Agitar fuertemente.",
            "Colar sobre un vaso alto y añadir cubitos de Hielo hasta llenar el vaso casi por completo.",
            "Verter rápidamente los 25ml de Granadina, para que caiga al fondo del vaso y vaya subiendo lentamente (así conseguirá un efecto de amanecer).",
            "Adornar con la rodaja de Limón, la Guinda y un sorbete."
         ],
         "imagen": "url(imgs/tragos-icons/tequilaSunrise.png)",
         "headerImage": "imgs/tragos/tequilasunrise.svg",
         "favorite": false
      },
      {
         "name": "Tequini",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Vermouth Seco",
            "Salsa Tabasco"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 50ml de Tequila.",
            "Agregar 20ml de Vermouth Seco.",
            "Completar con 2 gotas de Salsa Tabasco.",
            "Agitar energéticamente.",
            "Colar sobre una copa de estilo martini.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/Tequini.png)",
         "headerImage": "imgs/tragos/Tequini.svg",
         "favorite": false
      },
      {
         "name": "The Sweet Deer",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Jägermeister",
            "Gaseosa Cola",
            "Helado de Vainilla",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso hielo.",
            "Agregar 30ml Jägermeister.",
            "Completar con Gaseosa Cola.",
            "Una vez lleno colocar una cucharada grande de Helado de Vainilla",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/tragos-icons/TheSweetDeer.png)",
         "headerImage": "imgs/tragos/TheSweetDeer.svg",
         "favorite": false
      },
      {
         "name": "Tictoc Del Reloj",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Jarabe de Jengibre",
            "Amargo de Angostura",
            "Hielo",
            "Menta"
         ],
         "preparacion": [
            "Añadir en una coctelera 45ml Tequila.",
            "Agregar 30ml Jugo de Limón.",
            "Agregar 30ml Jarabe de Jengibre.",
            "Complegar con 8ml Amargo de Angostura.",
            "Agitar fuertemente durante unos segundos.",
            "Colar en un vaso lleno de cubos de Hielo.",
            "Decorar con unas ramita de Menta."
         ],
         "imagen": "url(imgs/tragos-icons/TictocDelReloj.png)",
         "headerImage": "imgs/tragos/TictocDelReloj.svg",
         "favorite": false
      },
      {
         "name": "Tom collins",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Gin",
            "Jugo de Limón",
            "Azúcar",
            "Soda",
            "Limón"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Gin.",
            "Agregar 30ml Jugo de Limón y 1 cdta. de Azúcar.",
            "Agitar vigorosamente por unos 30 segundos.",
            "Vertir la mezcla en un vaso alto con Hielo.",
            "Rellenar con Soda.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/tomCollins.png)",
         "headerImage": "imgs/tragos/tomcollins.svg",
         "favorite": false
      },
      {
         "name": "Vendetta",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Americano Gancia",
            "Champagne",
            "Licor de Cassis",
            "Frutos Rojos",
            "Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1,5 partes de Champagne.",
            "Completar con 0,5 partes de Licor de Cassis.",
            "Decorar con Frutos Rojos y una piel de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/Vendetta.png)",
         "headerImage": "imgs/tragos/Vendetta.svg",
         "favorite": false
      },
      {
         "name": "Vodka con Frutilla",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Ron Blanco",
            "Licor de Frutilla",
            "Jugo de Limón",
            "Granadina",
            "Frutilla"
         ],
         "preparacion": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 45ml de Vodka.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 45ml de Licor de Frutilla.",
            "Agregar 15ml de Jugo de Limón.",
            "Completar con 1/2 cdta. de Granadina.",
            "Agitar durante unos segundos.",
            "Colar y servir en la copa de cóctel.",
            "Usar una Frutilla para adornar."
         ],
         "imagen": "url(imgs/tragos-icons/VodkaConFrutilla.png)",
         "headerImage": "imgs/tragos/Vodkaconfrutilla.svg",
         "favorite": false
      },
      {
         "name": "Vodka con Sprite",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Gaseosa Lima Limón",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso hielos.",
            "Agregar 40% de  Vodka.",
            "Completar con Gaseosa Lima Limón y mezclar."
         ],
         "imagen": "url(imgs/tragos-icons/VodkaConSprite.png)",
         "headerImage": "imgs/tragos/Vodkaconsprite.svg",
         "favorite": false
      },
      {
         "name": "Vodka jelly: Gelatina de Frutilla y Vodka",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Gelatina sabor Frutilla",
            "Agua"
         ],
         "preparacion": [
            "Disolver la gelatina en 225ml de agua hirviendo.",
            "Una vez que se enfríe verter 50ml De Vodka.",
            "Seguidamente agregar 225ml de agua fría.",
            "Revolver y dejar que se solidifique."
         ],
         "imagen": "url(imgs/tragos-icons/VodkaJelly.png)",
         "headerImage": "imgs/tragos/Vodkajelly.svg",
         "favorite": false
      },
      {
         "name": "Vodka y Café con Frutas",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Frutilla",
            "Naranja",
            "Café",
            "Vino Blanco",
            "Kiwi"
         ],
         "preparacion": [
            "En una fuenta agregar 225g de frutas (Frutillas, Naranjas, kiwis).",
            "Agregar 400ml de Vodka.",
            "Completar con 300ml de Café.",
            "Dejar reposar 2 horas en la nevera.",
            "Luego, agregar 2 botellas de Vino Blanco muy frío.",
            "Finalmente, decorar con kiwis.",
            "Servir en copas largas."
         ],
         "imagen": "url(imgs/tragos-icons/vodkaYCafe.png)",
         "headerImage": "imgs/tragos/vodkaycafe.svg",
         "favorite": false
      },
      {
         "name": "Vodka y Melón",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Ron Blanco",
            "Licor de Melón",
            "Limonada"
         ],
         "preparacion": [
            "Añadir dentro de una coctelera Hielo picado.",
            "Agregar 50ml Vodka.",
            "Agregar 50ml de Licor de Melón.",
            "Agitar varias veces.",
            "Colar la mezcla sobre una copa de cóctel con Hielo.",
            "Completar con la Limonada fría."
         ],
         "imagen": "url(imgs/tragos-icons/vodkaYMelon.png)",
         "headerImage": "imgs/tragos/vodkaymelon.svg",
         "favorite": false
      },
      {
         "name": "Vodka, Limón y Menta",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Limón",
            "Menta",
            "Agua",
            "Azúcar Moreno",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una licuadora o coctelera Hielo.",
            "Agregar 4 limones pelados.",
            "Agregar 500ml de agua.",
            "Agregar 150g zúcar, o miel, y unas hojas de Menta.",
            "Licuar todo.",
            "Colocar la mezcla en una jarra.",
            "Agregar 1,5l de Agua y 450ml de Vodka.",
            "Mezclar bien.",
            "Servir en copas.",
            "Adornar con hojas de Menta y rodajas de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/VodkaLimonYMenta.png)",
         "headerImage": "imgs/tragos/Vodkalimonymenta.svg",
         "favorite": false
      },
      {
         "name": "Vodka Maracuya",
         "clasificacion": "refrescante",
         "ingredientes": [
            "Vodka",
            "Maracuyá",
            "Limón",
            "Azúcar Moreno",
            "Hielo",
            "Pulpa de Maracuyá"
         ],
         "preparacion": [
            "Añadir en una coctelera jugo de 4 maracuyás.",
            "Agregar 300ml Vodka.",
            "Agitar durante un minuto.",
            "Incorporar 150g de azúcar y jugo de 1 Limón.",
            "Agitar de nuevo la mezcla.",
            "Servir en vasos llenos de Hielo.",
            "Decorar con 1 cdta. de pulpa de maracuyá y una rodaja de Limón."
         ],
         "imagen": "url(imgs/tragos-icons/VodkaMaracuya.png)",
         "headerImage": "imgs/tragos/VodkaMaracuya.svg",
         "favorite": false
      },
      {
         "name": "Widow Maker",
         "clasificacion": "aperitivo",
         "ingredientes": [
            "Jägermeister",
            "Vodka",
            "Licor de Café",
            "Granadina",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Jägermeister.",
            "Agregar 30ml de Vodka.",
            "Agregar 30ml de Licor de Café.",
            "Completar con 3 gotas de Granadina.",
            "Agitar unos 20 segundos.",
            "Servir en un vaso."
         ],
         "imagen": "url(imgs/tragos-icons/WidowMaker.png)",
         "headerImage": "imgs/tragos/Widowmaker.svg",
         "favorite": false
      },
      {
         "name": "Godmother",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Vodka",
            "Amaretto",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un vaso old fashion Hielo.",
            "Agregar 30ml de Vodka.",
            "Completar con 30ml de Amaretto.",
            "Mezclar todo."
         ],
         "imagen": "url(imgs/tragos-icons/Godmother.png)",
         "headerImage": "imgs/tragos/Godmother.svg",
         "favorite": false
      },
      {
         "name": "María L´Orange",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Tía María",
            "Triple Sec",
            "Jugo de Naranja",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Tía María.",
            "Agregar 30ml de Triple Sec.",
            "Agregar 60ml de Jugo de Naranja.",
            "Agitar durante unos segundos.",
            "Servir en una copa Martini.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/tragos-icons/MariaLOrange.png)",
         "headerImage": "imgs/tragos/MariaLOrange.svg",
         "favorite": false
      },
      {
         "name": "Chocolate Martini",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Vodka",
            "Crema de Cacao",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Vodka.",
            "Completar con 45ml de crema de cacao.",
            "Agitar durante unos segundos.",
            "Tomar una copa Martini y vertir un poco de salsa de chocolate en el borde interior (en forma de espiral).",
            "Finalmente, colar en contenido de la coctelera en la copa."
         ],
         "imagen": "url(imgs/tragos-icons/ChocolateMartini.png)",
         "headerImage": "imgs/tragos/ChocolateMartini.svg",
         "favorite": false
      },
      {
         "name": "French Connection",
         "clasificacion": "digestivo",
         "ingredientes": [
            "Brandy",
            "Amaretto",
            "Hielo"
         ],
         "preparacion": [
            "Añadir en un Vaso Old fashion Hielo.",
            "Agregar 30ml de Brandy.",
            "Completar con 30ml de Amaretto."
         ],
         "imagen": "url(imgs/tragos-icons/FrenchConnection.png)",
         "headerImage": "imgs/tragos/FrenchConnection.svg",
         "favorite": false
      }
   ];
   let storage = window.localStorage;

   for (let i in tragos) {
      let value = storage.getItem(tragos[i].name);
      if (value) {
         tragos[i].favorite = true;
      }
   }

   return tragos;
}