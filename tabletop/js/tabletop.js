console.clear();

//Глобальные переменные
course = 58;
options_k = 1.3;
tabletop_k = 1.3;
k = 1;
var current_wallpanel_price = '';
var current_tabletop_price = '';
var action_tabletop_price = '' ;
var current_border_name = '';
var price_for_one_wall_border_meth = '';
var summary_pay_nosale = '';
var pay_for_wash = '';
var pay_for_wash_nosale = '';
var pay_for_wallborder_nosale = '';
var pay_for_border_nosale = '';
var pay_for_tabletop_sale = '';

/*
 * Цвета брендов
 */
var brands = [];

k = 1;

brands['Tristone'] = {
    'serias' : [
        {
            'name' : 'Modern',
            'colors' : ['А-102'],
            'price' : 345 * k,
            'panel-price': 320 * k,
            'washes': []
        }
    ]
};

brands['Corian'] = {
    'serias' : [
        {
            'name' : 'A',
            'colors' : ['Arrowroot','Aztec Gold','Clam Shell','Evening Prima','Glacier White','Hazelnut','Limestone Prima','Tumbleweed','White Onyx'],
            'price' : 440 * k,
            'panel-price': 420 * k,
            'washes': [
                {
                    '500' : 360 * k,
                    '413' : 360 * k,
                    '422' : 360 * k,
                    '388' : 360 * k,
                    '362' : 360 * k,

                    '304' : 270 * k,
                    '390' : 360 * k
                }
            ]
        },
        {
            'name' : 'B',
            'colors' : ['Bisque','Bone','Cameo White','Designer White','Elegant Gray','Glacier Ice','Light Ash','Lime Ice','Mint Ice','Pearl Gray','Sea Grass','Silver Gray','Vanilla'],
            'price' : 460 * k,
            'panel-price': 440 * k,
            'washes': [
                {
                    '500' : 375 * k,
                    '413' : 375 * k,
                    '422' : 375 * k,
                    '388' : 375 * k,
                    '362' : 375 * k,

                    '304' : 285 * k,
                    '390' : 375 * k
                }
            ]
        },
        {
            'name' : 'C',
            'colors' : ['Aqua','Aurora','Blomming Green','Citrus Orange','Clay','Deepsable','Dove','Dusk','Eclipse','Grape Green','Hot','Linen','Midnight','Nocturne','Raffia','Royal_Red','Sand','Sandstone','Shale','Sienna Brown','Silt','Warm Gray','White Jasmine'],
            'price' : 550 * k,
            'panel-price': 530 * k,
            'washes': [
                {
                    '500' : 420 * k,
                    '413' : 420 * k,
                    '422' : 420 * k,
                    '388' : 420 * k,
                    '362' : 420 * k,

                    '304' : 330 * k,
                    '390' : 420 * k
                }
            ]
        },
        {
            'name' : 'D',
            'colors' : ['Deepcaviar','Deepcloud','Deepespresso','Deepmink','Deeptitanium','Diamond Blue','Imperial Yellow','Sparkling White'],
            'price' : 585 * k,
            'panel-price': 565 * k,
            'washes': [
                {
                    '500' : 450 * k,
                    '413' : 450 * k,
                    '422' : 450 * k,
                    '388' : 450 * k,
                    '362' : 450 * k,

                    '304' : 370 * k,
                    '390' : 450 * k
                }
            ]
        },
        {
            'name' : 'E',
            'colors' : ['Abalone','Anthracite','Canyon','Deepanthracite','Deepnightsky','Everest','Matterhorn','Night Sky','Weathered Concrete','Willow'],
            'price' : 626 * k,
            'panel-price': 605 * k,
            'washes': [
                {
                    '500' : 475 * k,
                    '413' : 475 * k,
                    '422' : 475 * k,
                    '388' : 475 * k,
                    '362' : 475 * k,

                    '304' : 395 * k,
                    '390' : 475 * k
                }
            ]
        }
        // {
        //     'name' : 'F',
        //     'colors' : ['Antartica','Arctic Ice','Beige Fieldstone','Burled Beach','Burled Beach','Cocoa Brown','Cocoa Prima','Cosmos Prima','Dune Prima','Fossil','Gravel','Juniper','Lava Rock','Mineral','Nimbus Prima','Platinum','Rain Cloud','Rosemary','Sagebrush','Sahara','Sandalwood','Savannah','Silver Birch','Sonora','Whitecap','Witch Hazel'],
        //     'price' : 450 * k,
        //     'panel-price': 430 * k,
        //     'washes': [
        //         {
        //             '500' : 380 * k,
        //             '413' : 380 * k,
        //             '422' : 380 * k,
        //             '388' : 380 * k,
        //             '362' : 380 * k,

        //             '304' : 305 * k,
        //             '390' : 380 * k
        //         }
        //     ]
        // },
        // {
        //     'name' : 'G',
        //     'colors' : ['Abalone','Ash Concrete','Carbon Concrete','Deep Black Quartz','Deep Storm','Everest','Neutral Concrete','Silverite'],
        //     'price' : 465 * k,
        //     'panel-price': 445 * k,
        //     'washes': [
        //         {
        //             '500' : 400 * k,
        //             '413' : 400 * k,
        //             '422' : 400 * k,
        //             '388' : 400 * k,
        //             '362' : 400 * k,

        //             '304' : 320 * k,
        //             '390' : 400 * k
        //         }
        //     ]
        // },
    ]
};

brands['Staron'] = {
    'serias' : [
        {
            'name' : 'Solid',
            'colors' : ['bw010','sc052','sf020','sg065','si040','si056','sp011','sq019','ss042','st023','su053','sv041'],
            'price' : 345 * k,
            'panel-price': 320 * k,
            'washes': [
                {
                    '500' : 315 * k,

                    '413' : 250 * k,
                    '422' : 250 * k,
                    '388' : 250 * k,
                    '362' : 250 * k,

                    '304' : 190 * k,
                    '390' : 315 * k
                }
            ]
        },
        {
            'name' : 'Aspen',
            'colors' : ['ab632','ag612','ag614','al650','am633','ap640','as610','as642','as670'],
            'price' : 370 * k,
            'panel-price': 345 * k,
            'washes': [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k
                }
            ]
        },
        {
            'name' : 'Sanded',
            'colors' : ['dn421','sb412','sc433','sg441','si414','sm421','sm453','so423','so446','ss418','ss440','sv430','wp410','sg428'],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes': [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k
                }
            ]
        },
        {
            'name' : 'Pebble',
            'colors' : ['pa860','pb870','pc851','pe814','pg810','pg840','pi811','pk843','pp868','pr850','ps813','ps820','pt857'],
            'price' : 380 * k,
            'panel-price': 355 * k,
            'washes': [
                {
                    '500' : 340 * k,

                    '413' : 265 * k,
                    '422' : 265 * k,
                    '388' : 265 * k,
                    '362' : 265 * k,

                    '304' : 200 * k,
                    '390' : 340 * k
                }
            ]
        },
        {
            'name' : 'Metallic',
            'colors' : ['eb545','ec596','eg595','es558','es581','ey510'],
            'price' : 380 * k,
            'panel-price': 355 * k,
            'washes': [
                {
                    '500' : 340 * k,

                    '413' : 265 * k,
                    '422' : 265 * k,
                    '388' : 265 * k,
                    '362' : 265 * k,

                    '304' : 200 * k,
                    '390' : 340 * k
                }
            ]
        },
        {
            'name' : 'Qarry',
            'colors' : ['qm289','qs287','qs288','to310'],
            'price' : 430 * k,
            'panel-price': 405 * k,
            'washes': [
                {
                    '500' : 380 * k,

                    '413' : 290 * k,
                    '422' : 290 * k,
                    '388' : 290 * k,
                    '362' : 290 * k,

                    '304' : 210 * k,
                    '390' : 380 * k
                }
            ]
        },
        {
            'name' : 'Mosaic',
            'colors' : ['qd212','qn287'],
            'price' : 430 * k,
            'panel-price': 405 * k,
            'washes': [
                {
                    '500' : 380 * k,

                    '413' : 290 * k,
                    '422' : 290 * k,
                    '388' : 290 * k,
                    '362' : 290 * k,

                    '304' : 210 * k,
                    '390' : 380 * k
                }
            ]
        },
        {
            'name' : 'Tempest',
            'colors' : ['fa159','fb147','fb154','fc116','fc156','fc188','fd191','fg144','fg146','fg174','fg196','fh114','fi187','fm111','fp100','fp112','fp142','fr124','fr148','fs115','fs137','fs164','fs198','ft113','fw145','fz184'],
            'price' : 450 * k,
            'panel-price': 425 * k,
            'washes': [
                {
                    '500' : 405 * k,

                    '413' : 320 * k,
                    '422' : 320 * k,
                    '388' : 320 * k,
                    '362' : 320 * k,

                    '304' : 220 * k,
                    '390' : 405 * k
                }
            ]
        },
        {
            'name' : 'Supreme',
            'colors' : ['vb172','vc110','vc118','vd126','vd175','vl155','vm143','vn144','vo171','vr173'],
            'price' : 490 * k,
            'panel-price': 465 * k,
            'washes': [
                {
                    '500' : 420 * k,

                    '413' : 420 * k,
                    '422' : 420 * k,
                    '388' : 420 * k,
                    '362' : 420 * k,

                    '304' : 280 * k,
                    '390' : 420 * k
                }
            ]
        },
    ]
};

brands['Grandex'] = {
    'serias' : [
        {
            'name' : 'Adventure (A)',
            'colors' : ['A-401 Cloudy Mount', 'A-402 Blue Dream', 'A-403 Asphalt Material', 'A-404 Arctic Air', 'A-405 Peach Fruit', 'A-406 Space Galaxy', 'A-407 Grand Canyon', 'A-408 Cacao Tree', 'A-409 South Coast', 'A-410 Cotton Wool', 'A-411 Precious Stone', 'A-412 Citron Blossom', 'A-413 Milky Way', 'A-414 Historical Spot', 'A-415 Endless Desert', 'A-416 Visible Horizon', 'A-417 Global Cruise', 'A-418 Oak Wood', 'A-419 Cromium Atom', 'A-420 Starry Beat', 'A-425 Urban Project'],
            'price' : 375 * k,
            'panel-price': 350 * k,
            'washes': [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k
                }
            ]
        },
        {
            'name' : 'Delicious Edition (D)',
            'colors' : ['D-301 Poppy Seed', 'D-302 Morning Cofee', 'D-303 Raisined Chocolate', 'D-304 Ice-Cream', 'D-305 Melted Butter', 'D-306 Maple Sirup', 'D-307 Aspen Pie', 'D-308 Cubic Mint', 'D-309 Mushroom Soup', 'D-310 Herbal Ash', 'D-318', 'D-313', 'D-321'],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes': [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Explorer (E)',
            'colors' : ['E-601 Roman Coliseum', 'E-602 American Freedom', 'E-603 Snowy Moscow', 'E-604 Taj Mahal', 'E-605 Indian Mantra', 'E-606 Turkish Sauna', 'E-608 Egypt Pyramid', 'E-609 Business Tokio', 'E-610 Tibet Harmony', 'E-611 Spanish Corrida', 'E-613 English Tea', 'E-614 Marrakesh Plaza', 'E-615 Cosmic Particle', 'E-616 Sun Spot', 'E-617 Luna Crater', 'E-618 Saturn Ring', 'E-619 Meteor Shower'],
            'price' : 450 * k,
            'panel-price': 425 * k,
            'washes': [
                {
                    '500' : 395 * k,

                    '413' : 315 * k,
                    '422' : 315 * k,
                    '388' : 315 * k,
                    '362' : 315 * k,

                    '304' : 215 * k,
                    '390' : 395 * k
                }
            ]
        },
        {
            'name' : 'Jewel (J)',
            'colors' : ['J-504 Cut Diamond', 'J-505 Pearl Necklace', 'J-506 Algerian Onyx', 'J-507 Gur Coal', 'J-508 Zultanite Crown', 'V-502 Cambay Stone'],
            'price' : 420 * k,
            'panel-price': 395 * k,
            'washes': [
                {
                    '500' : 370 * k,

                    '413' : 285 * k,
                    '422' : 285 * k,
                    '388' : 285 * k,
                    '362' : 285 * k,

                    '304' : 205 * k,
                    '390' : 370 * k
                }
            ]
        },
        {
            'name' : 'Marble Ocean (M)',
            'colors' : ['M-701_1','M-701_slab','M-702_1','M-702_slab','M-703_1','M-703_slab','M-704_1','M-704_slab','M-705_1','M-705_slab','M-706_1','M-706_slab','M-707_1','M-707_slab','M-708_1','M-708_slab','M-709_1','M-709_slab','M-710_1','M-710_slab','M-711_1','M-711_slab','M-717 A','M-717 B', 'M-720', 'M-723 A'],
            'price' : 490 * k,
            'panel-price': 465 * k,
            'washes': [
                {
                    '500' : 395 * k,

                    '413' : 395 * k,
                    '422' : 395 * k,
                    '388' : 395 * k,
                    '362' : 395 * k,

                    '304' : 260 * k,
                    '390' : 395 * k
                }
            ]
        },
        {
            'name' : 'Pure Color (P)',
            'colors' : ['P-101 Pure Vanilla','P-102 Pure Beige','P-104 Pure White','P-105 Pure Black','P-106 Pure Brown','P-107 Pure Red','P-108 Pure Grey', 'P-110'],
            'price' : 345 * k,
            'panel-price': 320 * k,
            'washes': [
                {
                    '500' : 305 * k,

                    '413' : 245 * k,
                    '422' : 245 * k,
                    '388' : 245 * k,
                    '362' : 245 * k,

                    '304' : 185 * k,
                    '390' : 305 * k
                }
            ]
        },
        {
            'name' : 'Sand and Sky (S)',
            'colors' : ['S-201 Dirty Sand','S-202 Peaceful Night','S-203 Sparkling Sand','S-204 Creamy Sand','S-205 Fair Sky','S-206 Wet Sand','S-207 Clear Sky','S-208 Natural Sand','S-209 Light Sand','S-210 Hot Sand','S-211 Romantic Night','S-212 Thunder Sky','S-213 Sanded Corn','S-214 Sanded Brown','S-215-Sanded-Alps','S-220 Crystal Snowflake'],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes': [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
    ]
};

brands['Hanex'] = {
    'serias' : [
        {
            'name' : 'Bellassimo',
            'colors' : ['BL-002 Celadon','BL-003 Pietra Panna','BL-010 Terracotta','BL-014 Stratus','BL-015 Champagne','BL-016 Cumuous'],
            'price' : 470 * k,
            'panel-price': 445 * k,
            'washes': [
                {
                    '500' : 395 * k,

                    '413' : 315 * k,
                    '422' : 315 * k,
                    '388' : 315 * k,
                    '362' : 315 * k,

                    '304' : 215 * k,
                    '390' : 395 * k
                }
            ]
        },
        {
            'name' : 'Brionne',
            'colors' : ['B-001 Ivory Essence','B-012 Oslo White','B-021 Stone Hedge','B-028 Leche','B-031 Bosque','B-031 Helsinki','B-032 Florida Beach','B-033 Festival Grain','B-034 Daylight Moon','B-035 Chocolate',],
            'price' : 450 * k,
            'panel-price': 425 * k,
            'washes': [
                {
                    '500' : 370 * k,

                    '413' : 285 * k,
                    '422' : 285 * k,
                    '388' : 285 * k,
                    '362' : 285 * k,

                    '304' : 205 * k,
                    '390' : 370 * k
                }
            ]
        },
        {
            'name' : 'Cubic',
            'colors' : ['C-001 White','C-002 Ivory','C-004 Transblanc','C-007 Milk','C-008 Nebulous',],
            'price' : 385 * k,
            'panel-price': 360 * k,
            'washes': [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Duo',
            'colors' : ['D-001 Silverstone','D-003 Goldbrown','D-007 Mist','D-009 Sandbank','D-015 Blackhill','D-019 N-Pinetree','D-024 Silverwhite','D-025 Lightsand','D-027 Merronnier','D-028 Blackbeat','D-937 Dijon Beige','D-218 Desire'],
            'price' : 370 * k,
            'panel-price': 345 * k,
            'washes': [
                {
                    '500' : 305 * k,

                    '413' : 245 * k,
                    '422' : 245 * k,
                    '388' : 245 * k,
                    '362' : 245 * k,

                    '304' : 185 * k,
                    '390' : 305 * k
                }
            ]
        },
        {
            'name' : 'Galeria',
            'colors' : ['G-008 Palermo','GAM-001 Aftersnow','GAM-004 Sandflower','GAP-003 Java Aroma','GAR-006 Desertcastle','GAR-007 Terrasienna','GAR-010 Blackspot',],
            'price' : 410 * k,
            'panel-price': 385 * k,
            'washes': [
                {
                    '500' : 370 * k,

                    '413' : 285 * k,
                    '422' : 285 * k,
                    '388' : 285 * k,
                    '362' : 285 * k,

                    '304' : 205 * k,
                    '390' : 370 * k
                }
            ]
        },
        {
            'name' : 'Glittering',
            'colors' : ['GL-001 Pegasus','GL-002 Aries','GL-003 Libra','GL-004 Andromeda','GL-005 Taurus','GL-006 Cygnus',],
            'price' : 450 * k,
            'panel-price': 425 * k,
            'washes': [
                {
                    '500' : 370 * k,

                    '413' : 285 * k,
                    '422' : 285 * k,
                    '388' : 285 * k,
                    '362' : 285 * k,

                    '304' : 205 * k,
                    '390' : 370 * k
                }
            ]
        },
        {
            'name' : 'Magic',
            'colors' : ['M-002 Fantasia','M-003 Red','M-005 N-Orange','M-006 N-Yellow','M-007 Black',],
            'price' : 350 * k,
            'panel-price': 325 * k,
            'washes': [
                {
                    '500' : 280 * k,

                    '413' : 240 * k,
                    '422' : 240 * k,
                    '388' : 240 * k,
                    '362' : 240 * k,

                    '304' : 175 * k,
                    '390' : 280 * k
                }
            ]
        },
        {
            'name' : 'Nativo',
            'colors' : ['NA-01 Blando','NA-02 Grano','NA-03 Avena','NA-04 Viento','NA-05 Terrono','NA-06 Montes',],
            'price' : 510 * k,
            'panel-price': 485 * k,
            'washes': [
                {
                    '500' : 395 * k,

                    '413' : 395 * k,
                    '422' : 395 * k,
                    '388' : 395 * k,
                    '362' : 395 * k,

                    '304' : 260 * k,
                    '390' : 395 * k
                }
            ]
        },
        {
            'name' : 'Pearl',
            'colors' : ['P-002 Metal Grey','P-004 Solaris','P-005 Night Gleam','P-007 Brown Eyes',],
            'price' : 370 * k,
            'panel-price': 345 * k,
            'washes': [
                {
                    '500' : 305 * k,

                    '413' : 245 * k,
                    '422' : 245 * k,
                    '388' : 245 * k,
                    '362' : 245 * k,

                    '304' : 185 * k,
                    '390' : 305 * k
                }
            ]
        },
        {
            'name' : 'Solo',
            'colors' : ['S-001 R-White','S-004 Ivory','S-006 Grey','S-008 N-White','S-013 Hydra','S-014 Aqueous','S-015 Elixir','S-016 Chalk','S-018 Beige Breeze','S-019 Brown Fever','S-020 H-White',],
            'price' : 350 * k,
            'panel-price': 325 * k,
            'washes': [
                {
                    '500' : 280 * k,

                    '413' : 240 * k,
                    '422' : 240 * k,
                    '388' : 240 * k,
                    '362' : 240 * k,

                    '304' : 175 * k,
                    '390' : 280 * k
                }
            ]
        },
        {
            'name' : 'Stratum',
            'colors' : ['ST-101 Clara','ST-102 Marelinho','ST-103 Nublado','ST-104 Ardosia','ST-105 Moreno','ST-106 Grenicio','ST-201 Romano','ST-202 Walnut','ST-203 Albero','ST-204 Marron','ST-205 Carmel Drizzel','ST-207 Crunch Truffle',],
            'price' : 510 * k,
            'panel-price': 485 * k,
            'washes': [
                {
                    '500' : 395 * k,

                    '413' : 395 * k,
                    '422' : 395 * k,
                    '388' : 395 * k,
                    '362' : 395 * k,

                    '304' : 260 * k,
                    '390' : 395 * k
                }
            ]
        },
        {
            'name' : 'Therapy',
            'colors' : ['RE-01 Snowflake','RE-02 Nuts Crumble','RE-03 Biscotti','RE-04 Ginger Bread','RE-05 Yuri Grey','RE-06 Cacao Umber'],
            'price' : 385 * k,
            'panel-price': 360 * k,
            'washes': [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Trio',
            'colors' : ['T-001 H-Eldorado','T-003 H-Ivory','T-005 H-Grey','T-007 H-Indigoblue','T-012 H-Elegance','T-013 H-Sandcopper','T-020 Sunstar','T-021 Pure Arctic','T-025 Chestnut','T-041 Black Glass','T-042 H-Gravel','T-049 Hazelnut','T-050 Ice Queen','T-068 Rice Cookie','T-098 Goldstone','T-411 Ice Pile'],
            'price' : 385 * k,
            'panel-price': 360 * k,
            'washes': [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        }
    ]
};

brands['Hi-Macs'] = {
    'serias' : [
        {
            'name' : 'Marmo',
            'colors' : ['Aurora Greige M613', 'Aurora Blanc M617'],
            'price' : 495 * k,
            'panel-price': 470 * k,
            'washes' : [
                {
                    '500' : 400 * k,

                    '413' : 400 * k,
                    '422' : 400 * k,
                    '388' : 400 * k,
                    '362' : 400 * k,

                    '304' : 260 * k,
                    '390' : 405 * k
                }
            ]
        },
        {
            'name' : 'Granite',
            'colors' : ['Aqua Granite G24','Arctic Granite G34','Black Granite G31','Celebration Granite G40','Granite G61','Granite G76','Grey Cristal G102','Grey Granite G17','Greystone Granite G60','Mocha Granite G74','Natural Granite G23','Peanut Butter G100','Platinum Granite G07','Rose Granite G18','Srardust Granite G53','White Granite G05'],
            'price' : 375 * k,
            'panel-price': 350 * k,
            'washes' : [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k
                }
            ]
        },
        {
            'name' : 'Lucent',
            'colors' : ['Emerald S305','Opal S302','Ruby S304','Sapphire S303'],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes' : [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Pearl',
            'colors' : ['Almond Peral G08','Black Pearl G10','Brown Pearl G105','Midnight Peral G15','Pebble Pearl G107','Tapioca Pearl G50',],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes' : [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Quartz',
            'colors' : ['Allspice Quartz G63','Atlantic Quartz G51','Aztec Quartz G33','Azure Quartz G39','Confetti Quartz G41','Crystal Beige G101','Ivory Quartz G30','Moonscape Quartz G58','Natural Quartz G19','Rose Quartz G06','Sea Oat Quartz G38','Seafoam Quartz G44','Terra Quartz G29','Tundra Quartz G65','Verde Quartz G43','White Quartz G04',],
            'price' : 375 * k,
            'panel-price': 350 * k,
            'washes' : [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k,
                }
            ]
        },
        {
            'name' : 'Sands',
            'colors' : ['Apple Green Sand G26','Beach Sand G48','Beige Sand G22','Black Sand G09','Blue Sand G201','Desert Sand G01','Garnet Sand G16','Green Sand G20','Grey Sand G02','Lunar Sand G108','Oregano Sand G62','Riviera Sand G106','Turquise Sand G27','Venetian Sand G42',],
            'price' : 365 * k,
            'panel-price': 340 * k,
            'washes' : [
                {
                    '500' : 320 * k,

                    '413' : 255 * k,
                    '422' : 255 * k,
                    '388' : 255 * k,
                    '362' : 255 * k,

                    '304' : 190 * k,
                    '390' : 320 * k
                }
            ]
        },
        {
            'name' : 'Solid',
            'colors' : ['Almond S02','Alpine White S28','Apricot S04','Arctic White S06','Babylon Beige S102','Banana S26','Black S22','Coffe Brown S100','Concrete Grey S103','Cream S09','Fiery Red S25','Grey S05','Ivory White S29','Jasmine Green S101','Orange S27','Rose S03','Sage Green S07','Satin White S01','Sky Blue S203','Toffe Brown S104','Venus Green 204',],
            'price' : 345 * k,
            'panel-price': 320 * k,
            'washes' : [
                {
                    '500' : 305 * k,

                    '413' : 245 * k,
                    '422' : 245 * k,
                    '388' : 245 * k,
                    '362' : 245 * k,

                    '304' : 185 * k,
                    '390' : 305 * k
                }
            ]
        },
        {
            'name' : 'Volcanics',
            'colors' : ['Caldera VL01','Cima VB02','Etna VG01','Frosty VA22','Gemeni VW01','Maui VG21','Mayon VE23','Merapi VB01','Metis VN01','Pacaya VR01','Pinnacles VA21','Santa Ana VA01','Tambora VE01','Taos VB21',],
            'price' : 430 * k,
            'panel-price': 405 * k,
            'washes' : [
                {
                    '500' : 375 * k,

                    '413' : 305 * k,
                    '422' : 305 * k,
                    '388' : 305 * k,
                    '362' : 305 * k,

                    '304' : 210 * k,
                    '390' : 375 * k
                }
            ]
        },
        {
            'name' : 'Intense',
            'colors' : ['Intense Grey S923'],
            'price' : 375 * k,
            'panel-price': 350 * k,
            'washes' : [
                {
                    '500' : 330 * k,

                    '413' : 260 * k,
                    '422' : 260 * k,
                    '388' : 260 * k,
                    '362' : 260 * k,

                    '304' : 195 * k,
                    '390' : 330 * k
                }
            ]
        },
    ]
};

// brands['Montelli'] = {
//     'serias' : [
//         {
//             'name' : 'B',
//             'colors' : ['Amalfi','Bellagio','Carrara','Cortina','Milano','Monte Bianco','Murano','Padova','Palermo','Sanremo','Siracusa','Sorrento',],
//             'price' : 310 * k,
//             'panel-price': 285 * k,
//             'washes' : [
//                 {
//                     '500' : 280 * k,
//                     '413' : 275 * k,
//                     '422' : 275 * k,

//                     '304' : 180 * k
//                 }
//             ]
//         },
//         {
//             'name' : 'C',
//             'colors' : ['Aspromonte','Capri','Cervino','Elba','Ischia','Monte Rosa','Pompei','Portofino','Ravenna','Siena','Stromboli','Taormina',],
//             'price' : 325 * k,
//             'panel-price': 300 * k,
//             'washes' : [
//                 {
//                     '500' : 290 * k,
//                     '413' : 285 * k,
//                     '422' : 285 * k,

//                     '304' : 185 * k
//                 }
//             ]
//         },
//         {
//             'name' : 'D',
//             'colors' : ['Arno','Etna','Stelvio','Tevere','Vesuvio','Vulcano',],
//             'price' : 420 * k,
//             'panel-price': 395 * k,
//             'washes' : [
//                 {
//                     '500' : 410 * k,
//                     '413' : 405 * k,
//                     '422' : 405 * k,

//                     '304' : 235 * k
//                 }
//             ]
//         },
//     ]
// };

brands['Neomarm'] = {
    'serias' : [
        {
            'name' : 'Calacatta NM 201-205',
            'colors' : ['NM-201-Calacatta-Bianco','NM-202-Calacatta-Mare','NM-203-Calacatta-Vaniglia','NM-205-Calacatta-Grigio'],
            'price': 405 * k,
            'panel-price': 380 * k,
            'washes' : [
                {
                    '500' : 335 * k,
                    '304' : 280 * k
                }
            ]
        },
        {
            'name' : 'N',
            'colors' : ['N-010','N-101','N-103','N-159','N-218','N-414','N-420','N-421','N-423','N-430','N-440','N-510','N-539','N-610','N-612','N-810', 'N-811', 'N-820', 'N-840', 'N-857'],
            'price' : 310 * k,
            'panel-price': 290 * k,
            'washes' : [
                {
                    '500' : 270 * k,
                    '304' : 215 * k
                }
            ]
        },
        {
            'name' : 'NM 101-114',
            'colors' : ['NM-101-Snow-Queen','NM-102-Desert-Blow','NM-104-Pearl-Drop','NM-107-Polar-Light','NM-108-Petro-Bloom','NM-109-Mgic-Dust','NM-110-Foggy-Shell','NM-111-Flower-Cloud','NM-112-Granit-Land','NM-113-World-Map','NM-114-River-Sand'],
            'price' : 390 * k,
            'panel-price': 365 * k,
            'washes' : [
                {
                    '500' : 320 * k,
                    '304' : 270 * k
                }
            ]
        },
    ]
};

// brands['Bienstone'] = {
//     'serias' : [
//         {
//             'name' : 'Crystal',
//             'colors' : ['LJ 03', 'LJ 05', 'LJ 07', 'LJ 08', 'LJ 11', 'LJ 14', 'LJ 17'],
//             'price' : 250 * k,
//             'panel-price': 225 * k,
//             'washes': [
//                 {
//                     'K' : 220 * k
//                 }
//             ]
//         },
//         {
//             'name' : 'Line',
//             'colors' : ['GB 02', 'GB 04', 'GB 08', 'GB 15', 'GB 18', 'GB 25', 'GB 101', 'GB 102', 'GB 223', 'GB 230', 'GB 236', 'GB 305', 'GB 332', 'GB 333', 'GB 401', 'GB 409', 'GB 411',  'GB 415',  'GB 421',  'GB 433',  'GB 435',  'GB 440',  'GB 442'],
//             'price' : 275 * k,
//             'panel-price': 200 * k,
//             'washes': [
//                 {
//                     'K' : 240 * k
//                 }
//             ]
//         },
//     ]
// };

// --------------------------------------------------------------------------------------------------------------


//табы
$('.card-body .tabs .tab-4').click(function() {
    $(this).addClass('active');
    $('.card-body .tabs-content .tab-content').hide();
    $('.card-body .tabs-content .tab-content-4').show();
});

$('.card-body .tabs .tab-5').click(function() {
    $(this).addClass('active');
    $('.card-body .tabs-content .tab-content').hide();
    $('.card-body .tabs-content .tab-content-5').show();
});

$('.card-body .tabs .tab-1').click(function() {
    $(this).addClass('active');
    $('.card-body .tabs-content .tab-content').hide();
    $('.card-body .tabs-content .tab-content-1').show();
});

//перемещение по табам по кнопкам
 $('.cross-btn').click(function(){
    btn_id = $(this).attr('data-cross');
    $('.tab-'+btn_id).trigger('click');
 });


//открыть и закрыть верхние выпадающие списки столешницы и стеновой панели нажатием на ссылку
$(document).on('click', '.dropdown .dropdown-content .items a', function() {
    dropdown_id = $(this).parents('.dropdown').attr('data-dropdown');
    $('.card-body .tabs-content .dropdown .dropdown-content .items[data-dropdown="'+dropdown_id+'"]').toggle();
});

//открыть и закрыть выпадающие списки столешницы и стеновой панели нажатием на input

$('.card-body .tabs-content .dropdown .dropdown-content input').click(function () {
    dropdown_id = $(this).parents('.dropdown').attr('data-dropdown');
    $('.card-body .tabs-content .dropdown .dropdown-content .items[data-dropdown="'+dropdown_id+'"]').toggle();
});

//закрыть выпадающие списки по клику вне элемента
$(document).mouseup(function(e){ // событие клика по веб-документу
    dropdown = $('.dropdown'); //тут указываем ID элемента
    dropdown_items = $('.dropdown .items');
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown_items.hide(); // скрываем его
    }
});


/*
* Функция фильтрации списка
* У функции есть один параметр: input_id
*/
function filterDropdown(input_id) {
    input = $('#'+input_id); // в input_id подставился параметр, получилось: $('#brand-input');
    search_text = input.val(); // из инпута мы забрали вводимый текст, получилось: $('#brand-input').val();

    if(search_text) { // если текст не пустой
        search_text = search_text.toUpperCase(); // приводим текст в верхний регистр, получится: SAMSUNG
    }

    input.parents('.dropdown').find('a').each(function() { // от инпута идем по вложенности наверх до .dropdown, далее находим все ссылки, лежащие внутри .dropdwn. Далее методом .each() бежим по ссылкам.

        item = $(this); // теперь в .item хранится объект ссылки текущего шага
        item_text = item.text().toUpperCase(); // мы узнали текст ссылки и привели в верхний регистр

        if (item_text.indexOf(search_text) == 0) { // пример: 'grandex'.indexOf('g') - это ноль, 'grandex'.indexOf('z') - это -1
            item.show(); // если текст, который указал пользователь содержится в ссылке, показываем ее
     }  else {
        item.hide(); // иначе - скрываем
        }

     });
}

// склонение числительных
function num_word(value, words){
    value = Math.abs(value) % 100;
    var num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num == 1) return words[0];
    return words[2];
}

// внесение информации о бренде и коллекции в input
$('.dropdown-1 a').click(function() {
    text = $(this).text();
    $(this).parents('.dropdown').find('input').val(text);

    $('.dropdown-2 .block-overlay').hide();


    // использование массива

    current_brand_name = $('.dropdown-1 input').val();

    current_brand = brands[current_brand_name];

    $('.collection').find('a').remove();

    current_brand['serias'].forEach(function(seria) {

        colors_quantity = seria['colors'].length;
        colors_quantity_description = num_word(colors_quantity, ['цвет', 'цвета', 'цветов']);

        $('.collection').append('<a value="' + seria['name'] + '">' + '<span class="dropdown-name">'+seria['name']+'</span>' + '<span class="colors-number">'+colors_quantity+' '+colors_quantity_description+'</span></a>');
    });
});


$(document).on('click', '.dropdown-2 a', function() {
    text = $(this).children('.dropdown-name').text();
    $(this).parents('.dropdown-2').find('input').val(text);

    $('.dropdown-3 .block-overlay').hide();

    // использование массива
    current_seria_name = $('.dropdown-2 input').val();

    current_brand['serias'].forEach(function(seria) {

        if(seria['name'] == current_seria_name) {

            colors = seria['colors'];
            current_tabletop_price = seria['price'];
            path = '../img/colors/'+$('#brand-input').val()+'/'+seria['name'];

            $('.have-image-color').find('a').remove();
            colors.forEach(function(color) {
                url = path + '/' + color + '.jpg';
                $('.have-image-color').append(`<a value="` + color + `" style="background-image: url('`+url+`')"> <span class="dropdown-name color">`+ color +`</span> <span class="color-price">`+current_tabletop_price+`$/м.п.</span></a>`);
            });

        }

    });

});


// клик на input выбора цвета столешницы
$(document).on('click', '.dropdown-3 a', function(){

    text = $(this).children('.dropdown-name').text();
    $(this).parents('.dropdown-3').find('input').val(text);

    // получаем полное название столешницы
    check_name = $('.dropdown-1 input').val() + ' ' + $('.dropdown-2 input').val() + ' ' + $('.dropdown-3 input').val();
    tabletop_collection_brand_name = $('.dropdown-1 input').val() + ' ' + $('.dropdown-2 input').val();
    tabletop_color_name = $('.dropdown-3 input').val();

    // вносим полное название столешницы в расчет
    $('.check .tabletop-name').html(check_name);
    $('.check .tabletop-brand-collection-name').html(tabletop_collection_brand_name);
    $('.tabletop-color-name').html(tabletop_color_name);

    $('.forma .block-overlay').hide();
    $('.color-present .color-present-checkbox').css('opacity', '1');
    $('.color-present-checkbox input[type=checkbox]').removeAttr('disabled');
});

//акция на цвет
 $('.color-present-checkbox input').change(function(){
    checked_input = $('.color-present-checkbox input:checked');
    if(checked_input.length == 1) {
        $('.color-present-price input').show();
        $('.washer-add .washer-sale').hide();
        $('.item-icons').css('margin-left', '155px');
    } else {
        $('.color-present-price input').hide();
        $('.washer-add .washer-sale').show();
        $('.item-icons').css('margin-left', '0px');
    }

 });


//радио-кнопки генератора
$('.card-body .tabs-content .section .forma .item').click(function() { //клик на радио-кнопку
    $(this).find('input[type="radio"]').prop('checked', true); //найти первую радио-кнопку, у которой свойство сhecked в значениии "true", метод .prop работает только с свойствами
    generator_id = $(this).attr('data-generator');
    $('.current-generator[data-generator="'+generator_id+'"]').show().siblings().hide();
    $('.current-generator[data-generator="'+generator_id+'"] input').val('');
});


//открыть pop-up кружков и половинок
$('.current-generator .circle').click(function() {
    popup_id = $(this).attr('data-popup');
    $('.current-generator .circle-popup-'+popup_id).toggle();
});


//сделать кружки и половинки красными
$('.current-generator .circle-popup .circle-popup-content label').click(function() {
    $(this).parents('.current-generator').find('.circle[data-popup='+popup_id+']').addClass('active');
});


//закрытие pop-up по клику вне этого элемента
$(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( ".card-body .tabs-content .section .generator-wrap .generator .current-generator .circle-popup" ); //тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        div.hide(); // скрываем его
    }
});

// функция проверки, все ли инпуты заполнены в генераторе
function check_generator_for_calculation(generator_id) {

    // по умолчанию думаем, что в генераторе введены все размеры
    ready_for_calculation = 1;

    // узнаем, в каком генераторе произведен ввода размера
    generator_object = $('.current-generator[data-generator='+generator_id+']');

    // ищем все инпуты под ввод размера в этом генераторе
    generator_size_inputs = generator_object.find('input[type=number]:not(:disabled)');

    // бежим по этим инпутам и смотрим, есть ли хотя бы один незаполненный
    generator_size_inputs.each(function() {
        size_input = $(this);
        if(size_input.val() == '') {
            // если есть незаполненный, понимаем, что генератор не готов к расчету
            ready_for_calculation = 0;
        }
    });

    //если это generator-6 проверяем заполнены ли 3 input-а
    if( generator_object.hasClass('generator-6') ) {
        a = $('.generator-6 input[name="a"]').val();
        e = $('.generator-6 input[name="e"]').val();
        c = $('.generator-6 input[name="c"]').val();
        if(a && c && e){
            ready_for_calculation = 1;
        }
    }

    // если генератор готов к расчету
    if(ready_for_calculation) {

        // узнаем его id
        generator_id = generator_object.attr('data-generator');
        // вариант 1
        // if(generator_id == 1) {
        //     calculation_generator_1();
        // } else if(generator_id == 2) {
        //     calculation_generator_2();
        // }

        // вариант 2
        switch(generator_id) {
            // если это генератор 1
            case '1':
                // вызываем функцию расчета для генератора 1
                calculation_generator_1();
                break;
            case '2':
                calculation_generator_2();
                break;
            case '3':
                calculation_generator_3();
                break;
            case '4':
                calculation_generator_4();
                break;
            case '5':
                calculation_generator_5();
                break;
            case '6':
                calculation_generator_6();
                break;
            case '7':
                calculation_generator_7();
                break;
        }

        $('.check .dropdown-size').show();
        $('.check .tabletop-check:nth-of-type(1)').show();

    }

}

// реакция на ввод размера в генератор
$('.current-generator input[type=number]').change(function() {
    generator_id = $(this).parents('.current-generator').attr('data-generator');
    check_generator_for_calculation(generator_id);
    openEdge();
    openRim();
});


// Функция для расчета первого генератора
function calculation_generator_1() {

    // получили сторону А
    a = $('.generator-1 input[name="a"]').val();

    // получили сторону Б
    b = $('.generator-1 input[name="b"]').val();

    if(a == '' || b == '') {
        return;
    }

    // посчитали площадь
    area = a * b;

    // Плата за площадь без скидок

    original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

    console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


    // Акция на цвет (цена в рублях и с коэффициентом)

    action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


    // Расчет платы за площадь со скидками

    if(action_tabletop_price > 0) {

        pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

        console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

        pay_for_tabletop = pay_for_tabletop_sale;

        console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

    } else {
        pay_for_tabletop = original_pay_for_tabletop;
    }


    // внесли размер столешницы в расчет
    $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));

    // внесли стоимость столешницы в расчет
    $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    // внесли размер кромки в расчет
    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();


    // вызвали функцию, которая бежит по всем суммам в расчете и считает общую цену проекта
    calculate_result_price();

}

function calculation_generator_2() {
   a = $('.generator-2 input[name="a"]').val();
   b = $('.generator-2 input[name="b"]').val();
   c = $('.generator-2 input[name="c"]').val();
   d = $('.generator-2 input[name="d"]').val();
   e = $('.generator-2 input[name="e"]').val();
   f = $('.generator-2 input[name="f"]').val();

    if(a && b && c && d && e && f) {
        s1 = (d - f) * c;
        s2 = e * f;
        s3 = (a - e) * b;
        area = s1 + s2 + s3;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {
            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));



    } else if(a && b && c && d) {
        s1 = (d - b) * c;
        s2 = a * b;
        area = s1 + s2;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }


        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));
    }

    // внесли размер кромки в расчет
    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();
    calculate_result_price();

}

function calculation_generator_3() {
    a = $('.generator-3 input[name="a"]').val();
    b = $('.generator-3 input[name="b"]').val();
    c = $('.generator-3 input[name="c"]').val();
    d = $('.generator-3 input[name="d"]').val();
    e = $('.generator-3 input[name="e"]').val();
    f = $('.generator-3 input[name="f"]').val();

    if(a && b && c && d && e && f){
        s1 = (b - f) * c;
        s2 = f * e;
        s3 = (a - e) * d;
        area = s1 + s2 + s3;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));
    } else if(a && b && c && d){
        s1 = (a - c) * d;
        s2 = c * b;
        area = s1 + s2;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));
    }

    // внесли размер кромки в расчет
    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();
    calculate_result_price();
}

function calculation_generator_4() {
    a = $('.generator-4 input[name="a"]').val();
    b = $('.generator-4 input[name="b"]').val();
    c = $('.generator-4 input[name="c"]').val();
    d = $('.generator-4 input[name="d"]').val();
    e = $('.generator-4 input[name="e"]').val();
    f = $('.generator-4 input[name="f"]').val();
    h = $('.generator-4 input[name="h"]').val();
    g = $('.generator-4 input[name="g"]').val();
    q = $('.generator-4 input[name="q"]').val();
    w = $('.generator-4 input[name="w"]').val();

    if(a && b && c && d && e && f && h && g && q && w){
        a = $('.generator-4 input[name="a"]').val();
        b = $('.generator-4 input[name="b"]').val();
        c = $('.generator-4 input[name="c"]').val();
        d = $('.generator-4 input[name="d"]').val();
        e = $('.generator-4 input[name="e"]').val();
        f = $('.generator-4 input[name="f"]').val();
        h = $('.generator-4 input[name="h"]').val();
        g = $('.generator-4 input[name="g"]').val();
        q = $('.generator-4 input[name="q"]').val();
        w = $('.generator-4 input[name="w"]').val();

        s1 = (e - f) * d;
        s2 = h * g;
        s3 = (a - g - w) * f;
        s4 = g * w;
        s5 = (b - q) * c;
        area = s1 + s2 + s3 + s4 + s5;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    } else if(a && b && c && d && e && f && h && g){
        s1 = d * (e - h);
        s2 = h * g;
        s3 = (a - g) * f;
        s4 = c * (b - f);
        area = s1 + s2 + s3 + s4;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    } else if(a && b && c && d && e && f && q && w){
        s1 = d * (e - f);
        s2 = q * w;
        s3 = (a - w) * f;
        s4 = c * (b - q);
        area = s1 + s2 + s3 + s4;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));
    } else if(a && b && c && d && e && f){
        s1 = d * (e - f);
        s2 = (b - f) * c;
        s3 = a * f;
        area = s1 + s2 + s3;

        // Плата за площадь без скидок

        original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

        console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


        // Акция на цвет (цена в рублях и с коэффициентом)

        action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


        // Расчет платы за площадь со скидками

        if(action_tabletop_price > 0) {

            pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

            console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

            pay_for_tabletop = pay_for_tabletop_sale;

            console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

        } else {
            pay_for_tabletop = original_pay_for_tabletop;
        }

        $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
        $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
        $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));
    }

    border_calc();

    wallborder_calc();
    calculate_result_price();
}

function calculation_generator_5() {
    q = $('.generator-5 input[name="q"]').val();

    area = q * q;

    // Плата за площадь без скидок

    original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

    console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


    // Акция на цвет (цена в рублях и с коэффициентом)

    action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


    // Расчет платы за площадь со скидками

    if(action_tabletop_price > 0) {

        pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

        console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

        pay_for_tabletop = pay_for_tabletop_sale;

        console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

    } else {
        pay_for_tabletop = original_pay_for_tabletop;
    }

    $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
    $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    // внесли размер кромки в расчет
    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();
    calculate_result_price();
}

function calculation_generator_6(){
    a = $('.generator-6 input[name="a"]').val();
    e = $('.generator-6 input[name="e"]').val();
    c = $('.generator-6 input[name="c"]').val();
    area = a * (parseFloat(e) + parseFloat(c));

    // Плата за площадь без скидок

    original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

    console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


    // Акция на цвет (цена в рублях и с коэффициентом)

    action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


    // Расчет платы за площадь со скидками

    if(action_tabletop_price > 0) {

        pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

        console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

        pay_for_tabletop = pay_for_tabletop_sale;

        console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

    } else {
        pay_for_tabletop = original_pay_for_tabletop;
    }

    $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
    $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();
    calculate_result_price();
}

function calculation_generator_7(){
    a = $('.generator-7 input[name="a"]').val();
    b = $('.generator-7 input[name="b"]').val();

    area = a * b;

    // Плата за площадь без скидок

    original_pay_for_tabletop = area / 1000000 * current_tabletop_price * course * tabletop_k;

    console.log('Цена без скидок и акций: ' + original_pay_for_tabletop);


    // Акция на цвет (цена в рублях и с коэффициентом)

    action_tabletop_price = $('.color-present .color-present-price input[type=number]').val();


    // Расчет платы за площадь со скидками

    if(action_tabletop_price > 0) {

        pay_for_tabletop_sale = area / 1000000 * action_tabletop_price;

        console.log('Цена за 1 мп при акции на цвет [xxx]: ' + action_tabletop_price);

        pay_for_tabletop = pay_for_tabletop_sale;

        console.log('Цена за столешницу при акции на цвет: ' + pay_for_tabletop);

    } else {
        pay_for_tabletop = original_pay_for_tabletop;
    }

    $('.tabletop-check .tabletop-size').html((area / 1000000).toFixed(2));
    $('.tabletop-check .tabletop-sum').html(Math.round(pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('full-price', Math.round(original_pay_for_tabletop));
    $('.tabletop-check .tabletop-sum').attr('sale-price', Math.round(pay_for_tabletop_sale));

    // внесли размер кромки в расчет
    border_calc();

    //внести размер бортика в расчет
    wallborder_calc();
    calculate_result_price();
}


// функция бежит по всем суммам в расчете и считает общую цену проекта
function calculate_result_price() {

    // по умолчанию цена проекта равна нулю
    result_price = 0;
    benefit = 0;
    result_price_notsale = 0;


    if( $('.color-present-price input').val() ){



        ////////////////////////////////////////////////////////////////
        // Сумма со скидкой

       sums = $('.tab-content-1 .check .check-sum');

        sums.each(function() {

            full_price = $(this).attr('sale-price');

            if(full_price) {
            result_price += parseInt(full_price);
            }

        });

        // вносим посчитанную сумму в расчет
        $('.check .summ').css('display', 'block');
        $('.check .wash-button').css('margin-top', '15px');
        $('.check .price').html(result_price);
        $('.check .price').css('display', 'inline-block');
        $('.check .price-currency').css('display', 'inline-block');


        /////////////////////////////////////////////////////////////////
        // Сумма без скидки

        // бежим по всем суммам проекта
        sums_notsale = $('.tab-content-1 .check .check-sum');

        sums_notsale.each(function() {

            full_price = $(this).attr('full-price');

            if(full_price) {
                result_price_notsale += parseInt(full_price);
            }

        });

        // вносим посчитанную сумму в расчет
        $('.check .sale').css('display', 'inline-block');
        $('.check .sale span:nth-of-type(2)').css('text-decoration', 'line-through');
        $('.check .sale span:nth-of-type(2)').html(result_price_notsale +' руб');


        /////////////////////////////////////////////////////////////////
        // Расчет разницы

        benefit = parseInt(result_price_notsale - result_price);
        $('.check .sale span:nth-of-type(1)').html(benefit +' руб');

    } else {

        // бежим по всем суммам проекта
        sums = $('.tab-content-1 .check .check-sum');

        sums.each(function() {

            full_price = $(this).attr('full-price');

            if(full_price) {
                result_price += parseInt(full_price);
            }

        });

        // вносим посчитанную сумму в расчет
        $('.check .summ').css('display', 'block');
        $('.check .wash-button').css('margin-top', '15px');
        $('.check .price').html(result_price);
        $('.check .price').css('display', 'inline-block');
        $('.check .price-currency').css('display', 'inline-block');

    }

}


// Выбор кромки
$('.modal .modal-body .modal-item').click(function(){
    current_border_name = $(this).attr('data-index');
    $('.card-body .tabs-content .section .kitchen-element .images .image[data-index="'+current_border_name+'"]').addClass('active').siblings().removeClass('active');
    edge_id = $('.card-body .tabs-content .section .kitchen-element .images .active').attr('data-index');
    $('.check .edge-number').html(edge_id);
    $('#exampleModal .btn-close').trigger('click');
    $('.check .tabletop-check:nth-of-type(2)').show();
    $('.washer .block-overlay').hide();
    border_calc();
});


// Выбор кромок под высоту
$('.card-body .tabs-content .section .kitchen-element select[name="tabletop-edge-height"]').change(function(){
    form_value = $(this).val();
    $('.modal .modal-body .col-lg-3').hide();
    $('.modal .modal-body .h'+form_value).show().parents('.col-lg-3').show();
    $('.check .edge-size').html(form_value);
    $('.edge .change-button .block-overlay').hide();

    $('.card-body .tabs .tab').click(function() {
        $(this).addClass('active');
        tab_name = $(this).text();
        $('.card-body .tabs-content .tab-content').hide();
        $('.card-body .tabs-content .tab-content[data-name="'+tab_name+'"]').show();
    });
});

// Функция расчета торцевой кромки
function border_calc(){

    sum_border_width = 0;
    generator_id = $('.forma input[name="radio"]:checked').parents('.item').attr('data-generator');

    $('.generator-'+generator_id+' input[data-border=1]:checked').each(function(){

        current_border = $(this);
        current_border_input_name = current_border.attr('data-input');

        //определение длины
        switch(generator_id){
            case 5:
                current_border_width = 3.14 * $('current-generator .generator-5 input[name='+current_border_input_name+']').val();
            break;

            case 7:
                if(current_border.attr('data-input-plus')) {
                        current_border_plus_name = current_border.attr('data-input-plus'); // 'b'

                        current_border_width = parseFloat($('.current-generator .generator-'+generator_id+' input[name='+current_border_input_name+']').val()); //4

                        current_border_width += parseFloat(2 * $('.current-generator .generator-'+generator_id+' input[name='+current_border_plus_name+']').val()); // 4 + (3*2) = 10
                }
            break;

            default:

                current_border_width = $('.generator-'+generator_id+' input[name="'+current_border_input_name+'"]').val(); //взять значение инпута '3'

                current_border.css('border', '1px solid red');

                if(current_border.attr('data-input-minus-1')) {
                    current_border_input_minus_name_1 = current_border.attr('data-input-minus-1'); //2 взять значение инпута-1
                    current_border_width -= $('.generator-'+generator_id+' input[name='+current_border_input_minus_name_1+']').val(); // 3-2=1 вычесть
                }

                if(current_border.attr('data-input-minus-2')) {
                    current_border_input_minus_name_2 = current_border.attr('data-input-minus-2'); //1
                    current_border_width -= $('.generator-'+generator_id+' input[name='+current_border_input_minus_name_2+']').val(); // 1-1=0
                }

            break;
        }

        sum_border_width += parseFloat(current_border_width); //наращиваю '0' на полученное значение

    });



    if(current_border_name > 9) {

        original_pay_for_border = sum_border_width / 1000 * 40 * course * tabletop_k;

        pay_for_border = original_pay_for_border;

        $('.tabletop-check .edge-sum').attr('full-price', Math.round(original_pay_for_border));

        if(action_tabletop_price) {

             pay_for_border_sale = 0;

             pay_for_border = pay_for_border_sale;

        }

    } else {

        original_pay_for_border = 0;

        pay_for_border = original_pay_for_border;

        $('.tabletop-check .edge-sum').attr('full-price', Math.round(original_pay_for_border));
    }

    if($('.edge .image.active').attr('data-index') > 0 && $('.edge select').val()) {
        $('.tabletop-check .edge-sum').html(Math.round(pay_for_border));
        $('.tabletop-check .edge-sum').attr('sale-price', Math.round(pay_for_border_sale));
        calculate_result_price();
    }

}

// проверить, есть ли хотя бы 1 выбранная кромка в генераторе, и открыть блок 'Выберите кромку'

$('.circle-popup .radio-1').click(function(){

    openEdge();

});

function openEdge() {

    ready_for_calculation = 1;

    // узнаем, в каком генераторе произведен ввода размера
    generator_object = $('.current-generator[data-generator='+generator_id+']');

    // ищем все инпуты под ввод размера в этом генераторе
    generator_size_inputs = generator_object.find('input[type=number]:not(:disabled)');

    // бежим по этим инпутам и смотрим, есть ли хотя бы один незаполненный
    generator_size_inputs.each(function() {
        size_input = $(this);
        if(size_input.val() == '') {
            // если есть незаполненный, понимаем, что генератор не готов к расчету
            ready_for_calculation = 0;
        }
    });


    if( generator_object.hasClass('generator-6') ) {
        a = $('.generator-6 input[name="a"]').val();
        e = $('.generator-6 input[name="e"]').val();
        c = $('.generator-6 input[name="c"]').val();
        if(a && c && e){
            ready_for_calculation = 1;
        } else {
            ready_for_calculation = 0;
        }
    }

    if(ready_for_calculation){
        checked_edge_input = $('.circle-popup .radio-1 input[type="radio"]:checked');

        checked_edge_input.each(function(){

            if( $(this).prop('checked') ) {
                $('.edge-wrap > .block-overlay').hide();
                $('.item-wrap-polishing .block-overlay').hide();
            }

        });
    }

}


// проверить, есть ли хотя бы 1 выбранный бортик в генераторе, и открыть блок 'Выберите бортик'
$('.circle-popup .radio-2').click(function(){
    openRim();
});

function openRim() {
    ready_for_calculation = 1;

    // узнаем, в каком генераторе произведен ввода размера
    generator_object = $('.current-generator[data-generator='+generator_id+']');

    // ищем все инпуты под ввод размера в этом генераторе
    generator_size_inputs = generator_object.find('input[type=number]:not(:disabled)');

    // бежим по этим инпутам и смотрим, есть ли хотя бы один незаполненный
    generator_size_inputs.each(function() {
        size_input = $(this);
        if(size_input.val() == '') {
            // если есть незаполненный, понимаем, что генератор не готов к расчету
            ready_for_calculation = 0;
        }
    });


    if( generator_object.hasClass('generator-6') ) {
        a = $('.generator-6 input[name="a"]').val();
        e = $('.generator-6 input[name="e"]').val();
        c = $('.generator-6 input[name="c"]').val();
        if(a && c && e){
            ready_for_calculation = 1;
        } else {
            ready_for_calculation = 0;
        }
    }

    if(ready_for_calculation){
        checked_rim_input = $('.circle-popup .radio-2 input[type="radio"]:checked');

        checked_rim_input.each(function(){

            if( $(this).prop('checked') ) {
                $('.rim-wrap > .block-overlay').hide();
            }

        });
    }
}

// Выбор бортика
$('.card-body .tabs-content .section .kitchen-element select[name="tabletop-radius"]').change(function(){
    radius_id = $(this).val();
    $('.check .rim-radius').html(radius_id);
});

$('.card-body .tabs-content .section .kitchen-element select[name="tabletop-rim-height"]').change(function(){
    height_id = $(this).val();
    $('.check .rim-height').html(height_id);
});

$('.card-body .tabs-content .section .kitchen-element select[name="tabletop-contiguity"]').change(function(){
    contiguity_id = $(this).val();
    $('.check .rim-contiguity').html(contiguity_id);

    $('.check .tabletop-check:nth-of-type(3)').show();
});


//все селекты заполнены
$('.rim .form-control').change(function(){

    // по умолчанию думаем, что вcе селекты выбраны
    ready_for_calculation = 1;

    // бежим по этим инпутам и смотрим, есть ли хотя бы один незаполненный
    $('.rim .form-control').each(function() {
        if(!$(this).val()) {
            // если есть незаполненный, понимаем, что бортик не готов к расчету
            ready_for_calculation = 0;
        }
    });

    // если бортик готов к расчету
    if(ready_for_calculation) {

        wallborder_calc();

        // вызвали функцию, которая бежит по всем суммам в расчете и считает общую цену проекта
        calculate_result_price();

    }

 });

// Функция расчета бортика
function wallborder_calc(){

    sum_wallborder_width = 0;

    generator_id = $('.forma input[name="radio"]:checked').parents('.item').attr('data-generator');

    wallborder_radius = $('.rim select[name="tabletop-radius"]').val();
    wallborder_contiguity = $('.rim select[name="tabletop-contiguity"]').val();
    wallborder_height = $('.rim select[name="tabletop-rim-height"]').val();

    if(wallborder_radius && wallborder_contiguity && wallborder_height) {

        if(wallborder_contiguity == 'прямой угол') {
            if(wallborder_height <= 50) {
                price_for_one_wall_border_meth = 20;
            } else {
                price_for_one_wall_border_meth = 30;
            }
        } else {
            if(wallborder_height <= 50) {
                price_for_one_wall_border_meth = 50;
            } else {
                price_for_one_wall_border_meth = 60;
            }
        }

        $('.generator-'+generator_id+' input[data-wallborder=1]:checked').each(function() {
            current_wallborder = $(this);
            current_wallborder_input_name = current_wallborder.attr('data-input');
            current_wallborder_width = $('.generator-'+generator_id+' input[name='+current_wallborder_input_name+']').val();
            sum_wallborder_width += parseFloat(current_wallborder_width);
        });

    }

    original_pay_for_wallborder = sum_wallborder_width / 1000 * price_for_one_wall_border_meth * course * tabletop_k;

    if(action_tabletop_price && wallborder_contiguity == 'прямой угол') {
        pay_for_wallborder_sale = 0;
        pay_for_wallborder = pay_for_wallborder_sale;
        $('.tabletop-check .rim-sum').attr('sale-price', Math.round(pay_for_wallborder_sale));

    } else {
        pay_for_wallborder = original_pay_for_wallborder;
        pay_for_wallborder_sale = pay_for_wallborder;
        $('.tabletop-check .rim-sum').attr('sale-price', Math.round(pay_for_wallborder_sale));
    }

    $('.tabletop-check .rim-sum').html(Math.round(pay_for_wallborder));
    $('.tabletop-check .rim-sum').attr('full-price', Math.round(original_pay_for_wallborder));

}

// Полировка столешницы
$('.item-wrap-polishing input[name=polishing]').change(function() {
    if($(this).prop('checked')){
        $('.dropdown-size .tabletop-check:nth-of-type(4)').show();
        pay_for_polishing = $('.polishing-sum').attr('data-price');
        $('.polishing-sum').html(pay_for_polishing);
        $('.polishing-sum').attr('full-price', pay_for_polishing);
        $('.polishing-sum').attr('sale-price', pay_for_polishing);
        calculate_result_price();
    } else {
        $('.dropdown-size .tabletop-check:nth-of-type(4)').hide();
        $('.polishing-sum').empty();
        $('.polishing-sum').attr('full-price', 0);
        $('.polishing-sum').attr('sale-price', 0);
        calculate_result_price();
    }
});




// Выбор мойки
$(document).on('click', '.modal .modal-body .wash', function() {

    current_wash_name = $(this).attr('data-name');
    $('.washer-model').html(current_wash_name);

    washer_height = $(this).attr('data-wash-height');
    $('.washer-items .washer-height').html(washer_height);

    washer_wight = $(this).attr('data-wash-wigth');
    $('.washer-items .washer-wight').html(washer_wight);

    washer_depth = $(this).attr('data-wash-depth');
    $('.washer-items .washer-depth').html(washer_depth);

    pay_for_wash = 0;
    current_brand_name = $('.dropdown-1 input').val();
    current_seria_name = $('.dropdown-2 input').val();
    current_brand = brands[current_brand_name];

    switch(current_wash_name) {
        case '304':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['304'];
            }
        });
        break;
        case '362':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['362'];
            }
        });
        break;
        case '500':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['500'];
            }
        });
        break;
        case '388':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['388'];
            }
        });
        break;
        case '390':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['390'];
            }
        });
        break;
        case 'K':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['K'];
            }
        });
        break;
        case '413':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['413'];
            }
        });
        break;
        case '422':
        current_brand['serias'].forEach(function(seria) {
            if(seria['name'] == current_seria_name) {
                washes = seria['washes'];
                pay_for_wash = washes[0]['422'];
            }
        });
        break;
    }

    $('.washer-add').attr('data-price', pay_for_wash);

    original_pay_for_wash = pay_for_wash * course * options_k;


    // Акция на мойку
    if( $('.washer-sale input[name=wash-action]').prop('checked')){
        pay_for_wash_sale = 18000;
        pay_for_wash = original_pay_for_sale;
    } else{
        pay_for_wash = original_pay_for_wash;
        pay_for_wash_sale = original_pay_for_wash;
    }

    pay_for_wash_print = Math.round(pay_for_wash);
    pay_for_print_add_wash = pay_for_wash.toLocaleString('ru-RU');
    $('.washer-price').html(pay_for_wash_print);
    $('.washer-price').attr('full-price', Math.round(pay_for_wash));
    $('.washer-price').attr('sale-price', Math.round(pay_for_wash_sale));
    $('.washer-add .price').html(pay_for_print_add_wash +' руб');
    calculate_result_price();

    $('.tab-content .washer-add').show();

    // Скрыть модальное окно при клике на мойку
    $('#exampleModal-1 .btn-close').trigger('click');
    $('.check .dropdown-washer').show();
    $('.check .dropdown-washer ul li:nth-of-type(1)').show();
    $('.tab-content-2 .item-wrap .block-overlay').hide();

});

$('.washer-sale input[name="wash-action"]').change(function() {

    pay_for_wash = $('.washer-add').attr('data-price');
    original_pay_for_wash = pay_for_wash * course * options_k;

    // Акция на мойку
    if( $('.washer-sale input[name=wash-action]').prop('checked')){
        pay_for_wash_sale = 18000;
        pay_for_wash = pay_for_wash_sale;
    } else {
        pay_for_wash = original_pay_for_wash;
        pay_for_wash_sale = original_pay_for_wash;
    }


    pay_for_wash_print = Math.round(pay_for_wash);
    pay_for_print_add_wash = pay_for_wash.toLocaleString('ru-RU');
    $('.washer-price').attr('full-price', Math.round(pay_for_wash));
    $('.washer-price').attr('sale-price', Math.round(pay_for_wash_sale));
    $('.washer-price').html(pay_for_wash_print);
    $('.washer-add .price').html(pay_for_print_add_wash +' руб');
    calculate_result_price();

});

 // Удаление мойки
$('.tab-content-2 .item-icons .i-con-trash').click(function(){
    pay_for_wash_sale = 0;
    original_pay_for_wash = 0;
    $('.washer-price').attr('sale-price', Math.round(pay_for_wash_sale));
    $('.washer-price').attr('full-price', Math.round(original_pay_for_wash));
    $('.tab-content-2 .washer-add').hide();
    $('.check .washer-model').empty();
    $('.check .washer-price').empty();
    $('.check .dropdown-washer').hide();
    $('.check .dropdown-washer ul li:nth-of-type(1)').hide();
    calculate_result_price();
    $('.tab-content-2 .item-wrap .block-overlay').show();
});

//Внесение в расчет опций мойки
 $('.washer-items .item input').change(function() {
    wash_input_name = $(this).attr('name');
    wash_price = $(this).parents('.item').find('.price').attr('data-washer-price');
    wash_option_name = $(this).parents('.item').find('.item-title').text();
    if ( $(this).prop('checked')) {
        $('.check span[data-name="'+wash_input_name+'-price"]').html(wash_price+' руб');
        $('.check span[data-name="'+wash_input_name+'-price"]').attr('full-price', wash_price);
        $('.check span[data-name="'+wash_input_name+'-price"]').attr('sale-price', wash_price);
        $('.check span[data-name="'+wash_input_name+'-name"]').html(wash_option_name+', ');
        calculate_result_price();
    } else {
        $('.check span[data-name="'+wash_input_name+'-price"]').empty();
        $('.check span[data-name="'+wash_input_name+'-name"]').empty();
        $('.check span[data-name="'+wash_input_name+'-price"]').attr('full-price', 0);
        $('.check span[data-name="'+wash_input_name+'-price"]').attr('sale-price', 0);
        calculate_result_price();
    }

 });

 //Внесение в расчет опций варочной панели
$('.cook-items .item input').change(function() {

    cook_input_name = $(this).attr('name');
    cook_price = $(this).parents('.item').find('.price').attr('data-cook-price');
    cook_option_name = $(this).parents('.item').find('.item-title').text();
    items_length = $('.cook-items .item input:checked').length;
    console.log('length ='+items_length);
    if ( $(this).prop('checked')) {
        $('.check .dropdown-cook').show();
        $('.check span[data-name="'+cook_input_name+'-price"]').html(cook_price+' руб');
        $('.check span[data-name="'+cook_input_name+'-price"]').attr('full-price', cook_price);
        $('.check span[data-name="'+cook_input_name+'-price"]').attr('sale-price', cook_price);
        $('.check span[data-name="'+cook_input_name+'-name"]').html(cook_option_name+', ');
        calculate_result_price();
    } else {
        $('.check span[data-name="'+cook_input_name+'-price"]').empty();
        $('.check span[data-name="'+cook_input_name+'-name"]').empty();
        $('.check span[data-name="'+cook_input_name+'-price"]').attr('full-price', 0);
        $('.check span[data-name="'+cook_input_name+'-price"]').attr('sale-price', 0);
        calculate_result_price();
        if( items_length < 1 ) {
            $('.check .dropdown-cook').hide();
        }
    }

 });

// Стеновая панель

$('.dropdown-4 a').click(function(){
    panel_brand_name = $(this).text();
    $(this).parents('.dropdown-4').find('input').val(panel_brand_name);

    $('.dropdown-5 .block-overlay').hide();

    // использование массива

    current_brand_name = $('.dropdown-4 input').val();

    current_brand = brands[current_brand_name];

    $('.collection').find('a').remove();

    current_brand['serias'].forEach(function(seria) {

        colors_quantity = seria['colors'].length;
        colors_quantity_description = num_word(colors_quantity, ['цвет', 'цвета', 'цветов']);

        $('.collection').append('<a value="' + seria['name'] + '">' + '<span class="dropdown-name">'+seria['name']+'</span>' + '<span class="colors-number">'+colors_quantity+' '+colors_quantity_description+'</span></a>');
    });
});

$(document).on('click', '.dropdown-5 a', function() {
    panel_collection_name = $(this).children('.dropdown-name').text();
    $(this).parents('.dropdown-5').find('input').val(panel_collection_name);

    $('.dropdown-6 .block-overlay').hide();

    // использование массива
    current_seria_name = $('.dropdown-5 input').val();

    current_brand['serias'].forEach(function(seria) {

        if(seria['name'] == current_seria_name) {

            colors = seria['colors'];
            current_wallpanel_price = seria['panel-price'];
            path = '../img/colors/'+$('#panel-brand-input').val()+'/'+seria['name'];

            $('.have-image-color').find('a').remove();
            colors.forEach(function(color) {
                url = path + '/' + color + '.jpg';
                $('.have-image-color').append(`<a value="` + color + `" style="background-image: url('`+url+`')"> <span class="dropdown-name color">`+ color +`</span> <span class="color-price">`+current_wallpanel_price+`$/м.п.</span></a>`);
            });

        }

    });
});
$(document).on('click', '.dropdown-6 a', function() {
    panel_color_name = $(this).children('.dropdown-name').text();
    $(this).parents('.dropdown-6').find('input').val(panel_color_name);

    // получаем полное название стеновой панели
     wall_panel_brand_name = $('.dropdown-4 input').val();
     wall_panel_collection_color_name = $('.dropdown-5 input').val() + ' ' + $('.dropdown-6 input').val();

    // вносим полное название стеновой панели в расчет
    $('.check .dropdown-wall .wall-panel-brand').html(wall_panel_brand_name);
    $('.check .dropdown-wall .wall-panel-collection-color').html(wall_panel_collection_color_name);

    $('.panel-options .block-overlay').remove();
    $('.add-wall-panel .block-overlay').hide();
});

// т.к. элемент создан после загрузки страницы - используется другой метод обращения
$(document).on('change', '.tab-content-4 input[name="panel-lenght"]', function(e) {
    index = $(this).parents('.panel-option').index() + 1;
    lenght = $(this).val();
    $('.dropdown-wall .drop-content:nth-of-type('+index+') .wall-panel-lenght').html(lenght);
    wallpanel_calc();
    calculate_result_price();
    $('.check .dropdown-wall').show();
});

// т.к. элемент создан после загрузки страницы - используется другой метод обращения
$(document).on('change', '.tab-content-4 input[name="panel-height"]', function(e) {
    index = $(this).parents('.panel-option').index() + 1;
    height = $(this).val();
    $('.dropdown-wall .drop-content:nth-of-type('+index+') .wall-panel-height').html(height);
    wallpanel_calc();
    calculate_result_price();
    $('.check .dropdown-wall').show();
});

function create_panels_in_check() {

    last_drop_content = $('.dropdown-wall .drop-content:last-of-type').html();

    $('.dropdown-wall .drop-contents').append('<div class="drop-content" style="display: block">'+last_drop_content+'</div>');

}

 // Добавить стеновую панель

$('.add-wall-panel .add-btn').click(function() {
    $('.panel-option:last-of-type').clone().insertAfter('.panel-option:last-of-type');
    create_panels_in_check();
    calculate_result_price();
});

// Удалить стеновую панель

$('.add-wall-panel .remove-btn').click(function () {
    index = $('.panel-option:last-of-type').index() + 1;

    if(index == 1) {
        return;
    }

    $('.panel-option:last-of-type').remove();
    $('.dropdown-wall .drop-content:nth-of-type('+index+')').remove();
    calculate_result_price();
});

// Функция расчета стеновой панели

function wallpanel_calc() {

    full_wallpanel_sum = 0;

    $('.panel-option').each(function() {

        index = $(this).index() + 1;

        wallpanel_lenght = $(this).find('input[name=panel-lenght]').val();
        wallpanel_height = $(this).find('input[name=panel-height]').val();
        wallpanel_brand = $('.dropdown-4 input').val();
        wallpanel_seria = $('.dropdown-5 input').val();
        wallpanel_color = $('.dropdown-6 input').val();

        if(wallpanel_lenght > 0 && wallpanel_height > 0 && wallpanel_brand && wallpanel_seria && wallpanel_color) {
            wallpanel_s = wallpanel_height * wallpanel_lenght;
        }
        pay_for_panel = wallpanel_s / 1000000 * current_wallpanel_price * course * tabletop_k;

        full_wallpanel_sum += pay_for_panel;

        full_wallpanel_sum_print = Math.round(full_wallpanel_sum);

        $('.dropdown-wall .drop-content:nth-of-type('+index+') .wall-panel-sum').html(full_wallpanel_sum_print);
        $('.dropdown-wall .drop-content:nth-of-type('+index+') .wall-panel-sum').attr('full-price', full_wallpanel_sum_print);
        $('.dropdown-wall .drop-content:nth-of-type('+index+') .wall-panel-sum').attr('sale-price', full_wallpanel_sum_print);

    });

}

 // Функция расчета доставки/сборки/монтажа

function service_calc() {
    summary_pay = 0;

        delivery_km = $('.delivery-region input[name=delivery-distance]').val();

        if(delivery_km > 20) {
            pay_for_service = delivery_km * 80;
        } else {
            pay_for_service = summary_pay * 10 / 100;
        }

        if(pay_for_service < 5000) {
            pay_for_service = 5000;
        }
}

function delivery_distance_checked() {
    service_calc();
    $('.delivery-price').html(pay_for_service.toLocaleString('ru-RU') +' руб');
    $('.delivery-sum').html(pay_for_service+' руб');
    $('.delivery-sum').attr('full-price', pay_for_service);
    $('.delivery-sum').attr('sale-price', pay_for_polishing);
    calculate_result_price();
}


$('.delivery-region input[name = delivery-distance]').change(function(){
    if($('input[name=delivery]').prop('checked')){
        delivery_distance_checked();
    }
});

$('input[name=delivery]').change(function() {
    if( $(this).prop('checked') ) {
        delivery_distance_checked();
    }  else {
        $('.check .dropdown-delivery').hide();
        $('.delivery-price').empty();
        $('.delivery-sum').empty();
        $('.delivery-region input[name = delivery-distance]').val('');
        service_calc();
        calculate_result_price();
    }
});

 $('.delivery-items .item input').change(function() {
    $('.check .dropdown-delivery').show();
    delivery_input_name = $(this).attr('name');
    delivery_option_name = $(this).parents('.item').find('.item-title').text();
    delivery_price = $(this).parents('.item').find('.price').attr('data-delivery-price');
    items_length = $('.delivery-items .item input:checked').length;
    if ( $(this).prop('checked')) {
        $('.check span[data-name="'+delivery_input_name+'-name"]').html(delivery_option_name+', ');
        $('.check span[data-name="'+delivery_input_name+'-price"]').html(delivery_price+' руб');
        calculate_result_price();
    } else {
        $('.check span[data-name="'+delivery_input_name+'-name"]').empty();
        $('.check span[data-name="'+delivery_input_name+'-price"]').empty();
        calculate_result_price();
        if( items_length < 1 ) {
            $('.check .dropdown-delivery').hide();
        }
    }

 });


// Закругление и скос углов генератора
// генератор-1
//1


$('.card-body .tabs-content .section .generator .generator-1 .circle-popup-5 .circle-popup-content .radio-2').click(function(){
   $(".card-body .tabs-content .section  .generator .generator-1 .slice").addClass('radius-1');
    $('.card-body .tabs-content .section  .generator .generator-1 .slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section  .generator .generator-1 .circle-popup-5 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-5 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .top-left-slice').show();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-6 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").addClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-6 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").removeClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-6 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .top-right-slice').show();
});
//3
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-7 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-7 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-7 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-right-slice').show();
});
//4
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-8 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-8 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice").removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .circle-popup-8 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-1 .slice .bottom-left-slice').show();
});


//генератор-2
//1
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-5 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").addClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-5 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-5 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-left-slice').show();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-6 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").addClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-6 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").removeClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-6 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .top-right-slice').show();
});
//3
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-7 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-7 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice").removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-7 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .main-slice .bottom-right-slice').show();
});
//4
$('.card-body .tabs-content .section .generator-wrap .generator-2 .circle-popup-9 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').addClass('right-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice-square').show().find('input').val(900).removeAttr('disabled');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').removeClass('right-top-corner-cutted');
});
$('.card-body .tabs-content .section .generator-wrap .generator-2 .circle-popup-9 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').removeClass('right-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').removeClass('right-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice-square').hide();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice-square').find('input').val('').attr('disabled', 'disabled');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-9 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').addClass('right-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice').removeClass('right-top-corner-rounded')
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice-square').show().find('input').val(900).removeAttr('disabled');
});
//5
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-11 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice").addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-11 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice").removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-11 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-right-slice').show();
});
//6
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-13 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice").addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-13 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice").removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .circle-popup-13 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-2 .left-slice .bottom-left-slice').show();
});

//генератор-3
//1
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-5 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").addClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-5 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-5 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-left-slice').show();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-6 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").addClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-6 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").removeClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-6 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .top-right-slice').show();
});
//3
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-18 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-18 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-right-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('radius-3');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-18 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-right-slice').hide();
});

//4
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-19 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-left-slice').hide();
});

$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-19 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-left-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('radius-4');
});

$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-19 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice .bottom-left-slice').hide();
});

//5
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-20 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').addClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice-square').show().find('input').val(900).removeAttr('disabled');
});

$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-20 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').addClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice-square').show().find('input').val(900).removeAttr('disabled');
});

$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-19 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice').removeClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice-square').hide();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .right-slice-square').find('input').val('').attr('disabled', 'disabled');
});


//6
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-8 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-8 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice").removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .circle-popup-8 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-3 .main-slice .bottom-left-slice').show();
});

//генератор-4
//1
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-5 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice").addClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-5 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice").removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-5 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-left-slice').show();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-6 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice").addClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-6 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice").removeClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-6 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .main-slice .top-right-slice').show();
});
//3
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-18 .circle-popup-content .radio-2').click(function(){
   $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").addClass('radius-3');
   $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-18 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-right-slice').hide();

});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-18 .circle-popup-content .radio-3').click(function() {
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-right-slice').show();
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").removeClass('radius-3');
});
//4
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-19 .circle-popup-content .radio-2').click(function(){
   $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").addClass('radius-4');
   $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-19 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-19 .circle-popup-content .radio-3').click(function() {
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice .bottom-left-slice').show();
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice").removeClass('radius-4');
});
//5
$('.card-body .tabs-content .section .generator-wrap .generator-4 .circle-popup-20 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').addClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').removeClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice-square').show().find('input').val(900).removeAttr('disabled');
});
$('.card-body .tabs-content .section .generator-wrap .generator-4 .circle-popup-20 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').removeClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').removeClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice-square').hide();
     $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice-square').find('input').val('').attr('disabled', 'disabled');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-20 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').addClass('left-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice').removeClass('left-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .right-slice-square').show().find('input').val(900).removeAttr('disabled');
});
//6
$('.card-body .tabs-content .section .generator-wrap .generator-4 .circle-popup-9 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').addClass('right-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').removeClass('right-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice-square').show().find('input').val(900).removeAttr('disabled');
});
$('.card-body .tabs-content .section .generator-wrap .generator-4 .circle-popup-9 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').removeClass('right-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').removeClass('right-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice-square').hide();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice-square').find('input').val('').attr('disabled', 'disabled');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-9 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').addClass('right-top-corner-cutted');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice').removeClass('right-top-corner-rounded');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice-square').show().find('input').val(900).removeAttr('disabled');
});
//7
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-11 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice").addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-11 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice").removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-11 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-right-slice').show();
});
//8
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-13 .circle-popup-content .radio-2').click(function(){
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice").addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-13 .circle-popup-content .radio-1').click(function() {
    $(".card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice").removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .circle-popup-13 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-4 .left-slice .bottom-left-slice').show();
});
//генератор-6
//1
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-25 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').addClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-25 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-left-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-1');

});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-25 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-left-slice').hide();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-26 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').addClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-26 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-right-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-2');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-26 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-2');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .top-right-slice').hide();
});
//3
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-27 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').addClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-right-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-27 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-right-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-3');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-27 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-3');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-right-slice').hide();
});
//4
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-28 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-28 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-left-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-4');
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .circle-popup-28 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice').removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-6 .main-slice .bottom-left-slice').hide();
});
//генератор-7
//1
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-31 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').addClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .top-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-31 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .top-left-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').removeClass('radius-1');

});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-31 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').removeClass('radius-1');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .top-left-slice').hide();
});
//2
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-32 .circle-popup-content .radio-2').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').addClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .bottom-left-slice').hide();
});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-32 .circle-popup-content .radio-3').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .bottom-left-slice').show();
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').removeClass('radius-4');

});
$('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .circle-popup-32 .circle-popup-content .radio-1').click(function(){
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice').removeClass('radius-4');
    $('.card-body .tabs-content .section .generator-wrap .generator .generator-7 .main-slice .bottom-left-slice').hide();
});

// реакция на выбор радио в попапе
$('.circle-popup label').click(function() {
    generator_id = $(this).parents('.current-generator').attr('data-generator');
    check_generator_for_calculation(generator_id);
});

// Выпадающие списки чек

$('.drop-btn').click(function() {

    dropdown = $(this).parents('.dropdown');
    dropdown_index = dropdown.index();

    $('.check').each(function() {
        check = $(this);
        check.find('.dropdown').eq(dropdown_index).find('.drop-content').toggle();
    });

});

