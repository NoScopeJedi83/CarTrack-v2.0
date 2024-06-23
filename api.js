
const carsCollection = {
    'mercedes': [
        {
            id: 1,
            name: 'S-Class',
            model: 'S-Class',
            year: 2021,
            img: 'https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg?w=976&h=549',
            description: 'A luxurious and technologically advanced flagship sedan.'
        },
        {
            id: 2,
            name: '770 ',
            model: '770 ',
            year: 2020,
            img: 'https://live.staticflickr.com/8242/8648445145_578a711386_b.jpg',
            description: 'I mean, is there anyone who isnt familiar with this vengeful jew murderer?'
        },
        {
            id: 3,
            name: 'G-Class',
            model: 'G-Class',
            year: 2022,
            img: 'https://www.livemint.com/lm-img/img/2023/09/28/600x338/amg_f_1695880706668_1695880713124.jpg',
            description: 'An iconic and rugged luxury SUV known for its off-road capability and opulent interior.'
        },
        {
            id: 4,
            name: 'Maybach S-Class',
            model: 'Maybach S-Class',
            year: 2021,
            img: 'https://media.architecturaldigest.com/photos/5a831b50498fd76f3be3d4f4/16:9/w_2560%2Cc_limit/18C0032_02-source.jpg',
            description: 'An ultra-luxurious variant of the S-Class sedan with bespoke features and exquisite craftsmanship.'
        },
        {
            id: 5,
            name: 'AMG GT',
            model: 'AMG GT',
            year: 2020,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2015-2017_Mercedes-AMG_GT_%28C_190%29_S_coupe_%282017-07-15%29_01.jpg/420px-2015-2017_Mercedes-AMG_GT_%28C_190%29_S_coupe_%282017-07-15%29_01.jpg',
            description: 'A high-performance sports car with breathtaking acceleration and dynamic handling.'
        }
    ],
    'bmw': [
        {
            id: 6,
            name: '7 Series',
            model: '7 Series',
            year: 2020,
            img: 'https://media.whatcar.com/wc-image/2019-01/2019_bmw_7_series_front.jpg',
            description: 'An elegant and luxurious executive sedan offering advanced technology and comfort.'
        },
        {
            id: 7,
            name: '5 Series',
            model: '5 Series',
            year: 2021,
            img: 'https://th.bing.com/th/id/OIP.P6UDILT_T040oyEBb6ubVwAAAA?rs=1&pid=ImgDetMain',
            description: 'A sophisticated midsize luxury sedan with exceptional performance and refinement.'
        },
        {
            id: 8,
            name: 'X7',
            model: 'X7',
            year: 2022,
            img: 'https://images.carexpert.com.au/crop/1600/1067/app/uploads/2022/07/2023-BMW-X7-13.jpg',
            description: 'A spacious and luxurious three-row SUV with upscale amenities and commanding presence.'
        },
        {
            id: 9,
            name: 'M8',
            model: 'M8',
            year: 2020,
            img: 'https://wallpaperaccess.com/full/1741358.jpg',
            description: 'BMW M3 GTR: V8 beast, rivals tremble, engine growl.',
        },
        {
            id: 10,
            name: 'i8',
            model: 'i8',
            year: 2021,
            img: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/08/BMW-I8-M-open-doors.jpg',
            description: 'An innovative plug-in hybrid sports car combining electrifying performance with eco-friendly technology.'
        }
    ],
    'audi': [
        {
            id: 11,
            name: 'PB18 E-tron',
            model: 'PB18 E-tron',
            year: 2024,
            img: 'https://autonxt.net/wp-content/uploads/2019/09/Audi-AI-RACE5-1024x614.jpg',
            description: 'A sophisticated high-performance electric car with advanced technology and refined interior.'
        },
        {
            id: 12,
            name: 'P12',
            model: 'P12',
            year: 2021,
            img: 'https://www.kbb.com/wp-content/uploads/2023/04/2023-audi-rs-e-tron-gt.jpg?w=918',
            description: 'Behold! The Audi P12! The abodminable snowplow! A legend car!'
        },
        {
            id: 13,
            name: 'RS7',
            model: 'RS7',
            year: 2023,
            img: 'https://cdn.motor1.com/images/mgl/Kqv8l/s1/2020-audi-rs7-sportback.jpg',
            description: 'A high performancesports car offering impressive performance.'
        },
        {
            id: 14,
            name: 'R8',
            model: 'R8',
            year: 2023,
            img: 'https://cdn.motor1.com/images/mgl/Mk30Gp/s1/2023-audi-r8-v10-gt-rwd.jpg',
            description: 'A high-performance luxury sportback with thrilling acceleration and agile handling.'
        },
        {
            id: 15,
            name: 'R8 LMS GT2',
            model: 'R8 LMS GT2',
            year: 2020,
            img: 'https://www.supercars.net/blog/wp-content/uploads/2020/10/carpixel.net-2019-audi-r8-lms-gt2-94411-hd.jpg',
            description: 'An exotic supercar blending breathtaking performance with exquisite style.'
        }
    ],
    'bugatti': [
        {
            id: 16,
            name: 'Chiron Super Sport 300+',
            model: 'Chiron Super Sport 300+',
            year: 2023,
            img: 'https://th.bing.com/th/id/R.af0261c8f2ff75acd7e2c8ce9f6da450?rik=X1zG2y2wb7Ryfw&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f705000%2f200%2f705208.jpg&ehk=MUmKKf57xq7x3UkNCgVNW%2bYr%2bVb11li5X0ayROx%2fcxE%3d&risl=&pid=ImgRaw&r=0',
            description: 'A limited-edition model that exceeds 300 mph, and is a masterpiece of function and aerodynamics.'
        },
        {
            id: 17,
            name: 'La Voiture Noire',
            model: 'La Voiture Noire',
            year: 2019,
            img: 'https://car-images.bauersecure.com/pagefiles/86665/voiture_noire_050.jpg',
            description: 'A tribute to the missing fourth ATLANTIC, represents an iconic blend of speed, luxury, and automotive haute couture.'
        },
        {
            id: 18,
            name: 'Divo',
            model: 'Divo',
            year: 2021,
            img: 'https://hdqwalls.com/download/bugatti-divo-in-paris-france-tc-3840x2160.jpg',
            description: 'BUGATTI’s first coach-built hyper sports car, featuring a captivating design, remarkable driving dynamics, and powerful performance.'
        },
        {
            id: 19,
            name: 'Centodieci',
            model: 'Centodieci',
            year: 2022,
            img: 'https://cdn.carbuzz.com/gallery-images/2020-bugatti-centodieci-front-angle-view-carbuzz-617747-1600.jpg',
            description: 'The CENTODIECI is a complete high-performance tour-de-force, accelerating from 0 to 100 km/h in just 2.4 seconds'
        },
        {
            id: 20,
            name: 'Bolide',
            model: 'Bolide',
            year: 2021,
            img: 'https://www.automotivetestingtechnologyinternational.com/wp-content/uploads/2023/04/01BUGATTI_Bolide-Design-e1682418612808.jpg',
            description: 'Lightweight, extreme and uncompromising. The BOLIDE is BUGATTIs track-only hypercar built around the iconic W16 engine.'
        }
    ],
    'porsche': [
        {
            id: 21,
            name: '911 GT3 RS',
            model: '911 GT3 RS',
            year: 2024,
            img: 'https://car-images.bauersecure.com/pagefiles/99415/911gt3_100.jpg',
            description: 'The Porsche 911 GT3 RS is a high-performance sports car with a 4.0-litre naturally aspirated engine and lightweight construction.'
        },
        {
            id: 22,
            name: '918 Spyder',
            model: '918 Spyder',
            year: 2021,
            img: 'https://www.hdcarwallpapers.com/walls/2013_porsche_918_spyder_prototype-wide.jpg',
            description: 'A plug-in hybrid powered by a naturally aspirated 4.6 L (4,593 cc) V8 engine, developing 447 kW (608 PS; 599 hp) at 8,700 RPM'
        },
        {
            id: 23,
            name: '963',
            model: '963',
            year: 2023,
            img: 'https://www.carscoops.com/wp-content/uploads/2022/09/2023-Porsche-963-Daytona-test-10.jpg',
            description: 'The Porsche 963 (Type 9R0) is an LMDh sports prototype racing car designed by Porsche to compete in 24 hrs of Le Mans 2023.'
        },
        {
            id: 24,
            name: 'Carrera GT',
            model: 'Carrera GT',
            year: 2006,
            img: 'https://www.carscoops.com/wp-content/uploads/2020/11/porsche-carrera-gt-0.jpg',
            description: 'The Porsche Carrera GT is a blast into the past. It is a carbon-fibre, mid-engined super car with a 612PS V10 engine.'
        },
        {
            id: 25,
            name: '911',
            model: '911',
            year: 2006,
            img: 'https://i.kym-cdn.com/entries/icons/facebook/000/042/773/sallyfromcars.jpg',
            description: 'Look mommy!! Look! Everyone knows this car. P.S. its Sally from Cars, Lightning McQueens girlfriend heehee'
        }
    ],
    'rollsroyce': [
        {
            id: 26,
            name: 'Phantom',
            model: 'Phantom',
            year: 2023,
            img: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/09/Rolls-Royce-Phantom-Series-II-Featured.jpg',
            description: 'An ultra-luxurious and handcrafted flagship sedan offering unparalleled comfort and prestige.'
        },
        {
            id: 27,
            name: 'Ghost',
            model: 'Ghost',
            year: 2020,
            img: 'https://media.autoexpress.co.uk/image/private/s--vWd8qMSJ--/v1598954380/autoexpress/2020/09/Rolls-Royce%20Ghost%202020%20-4.jpg',
            description: 'A luxurious and refined sedan known for its whisper-quiet ride and opulent interior.'
        },
        {
            id: 28,
            name: 'Wraith Mansory',
            model: 'Wraith Mansory',
            year: 2022,
            img: 'https://th.bing.com/th/id/R.caa582e18b363c614ec364f728c0f9be?rik=QHYejQrrWIxq6A&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2fmansory_rolls_royce_wraith_palm_edition_999-HD.jpg&ehk=ZMsmFHn5uGXXK9ukvJXOpTUGwDXYH7x1zZEARztolwE%3d&risl=1&pid=ImgRaw&r=0',
            description: 'A stylish and powerful grand tourer with a sumptuous interior and effortless performance.'
        },
        {
            id: 29,
            name: 'Cullinan',
            model: 'Cullinan',
            year: 2021,
            img: 'https://4.bp.blogspot.com/-m00rw2mkszc/WvQsvl4wfII/AAAAAAAAFRA/gHr7oAMnWdE4mZQFUvCDJKJ8ps8RGH6bgCLcBGAs/s1600/Rolls-Royce-Cullinan%2B%252811%2529.jpg',
            description: 'An exquisite and capable luxury SUV offering opulence and off-road capability in equal measure.'
        }
    ],
    'koenigsegg': [
        {
            id: 30,
            name: 'Agera RS',
            model: 'Agera RS',
            year: 2018,
            img: 'https://media.autoexpress.co.uk/image/private/s--7OSLhllK--/v1562245742/autoexpress/2018/01/5_agera_rs.jpg',
            description: 'It holds the undefeated top speed record for a homologated production car on a public road in Nevada, USA set on 4th Nov 2017 with a customer-owned car'
        },
        {
            id: 31,
            name: 'Jesko',
            model: 'Jesko',
            year: 2021,
            img: 'https://www.hdcarwallpapers.com/walls/koenigsegg_jesko_prototype_2019_5-HD.jpg',
            description: 'It has a carbon-fiber monocoque, a nine-speed multi-clutch transmission, and a top speed of 278 mph'
        },
        {
            id: 32,
            name: 'Regera',
            model: 'Regera',
            year: 2022,
            img: 'https://th.bing.com/th/id/R.c6749a8b0aff9eb2db791df1ad069cfe?rik=f2zzTS2wNgAiww&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2017_koenigsegg_regera_4k-HD.jpg&ehk=UW2%2fH2vDfzSJ%2bqJ6Bx66y31C4JUzpuEt3OHeAHSUDDI%3d&risl=1&pid=ImgRaw&r=0',
            description: 'The Koenigsegg Regera is a hybrid hypercar with 1500 horsepower and a world record zero-249 mph-zero time. '
        }
    ],
    'astonmartin': [
        {
            id: 33,
            name: 'Vulcan',
            model: 'Vulcan',
            year: 2016,
            img: 'https://th.bing.com/th/id/R.8b33406c4c6c7ec5b451761a060c3582?rik=feZl5%2bHCDEGNZQ&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2018_aston_martin_vulcan_amr_pro-HD.jpg&ehk=0gI7Q68Za7EIs96UPX1gS829L6KqvCkZRXunNzhPXOc%3d&risl=1&pid=ImgRaw&r=0',
            description: 'It is a track-only hypercar that uses a version of the V-12 engine from the One-77 and has carbon-fiber bodywork and carbon-ceramic brakes.'
        },
        {
            id: 34,
            name: 'Valhalla',
            model: 'Valhalla',
            year: 2021,
            img: 'https://www.jamesbondlifestyle.com/sites/default/files/ckeditor/images/news/200220-aston-martin-reviews-valhalla-silverstone-2.jpg',
            description: 'Valhalla is Aston Martins first V8, mid-engine, hybrid supercar, with 1,012PS and a top speed of 217mph. '
        },
        {
            id: 35,
            name: 'DBS Superleggera',
            model: 'DBS Superleggera',
            year: 2022,
            img: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/06/67314f1aeebb1417f399a92ac973c81d/dbs_superleggera_1.jpg',
            description: 'A sleek and athletic sports car with striking design and exhilarating performance.'
        },
        {
            id: 36,
            name: 'DB5',
            model: 'DB5',
            year: 1964,
            img: 'https://th.bing.com/th/id/R.9837bb31f8cb9ee7b5ad2d4cdbcf5da6?rik=zXoV77SxVmdD8A&riu=http%3a%2f%2f1.bp.blogspot.com%2f_FoXyvaPSnVk%2fTAUirGgdbqI%2fAAAAAAAC6HM%2fKJhrGlBnP3Q%2fs1600%2fJames-Bond-1964-Aston-Martin-DB5-69.jpg&ehk=Idzl3luNbclZG6tEfs%2bBaXm8boMg2myvO%2b6oVVxHv64%3d&risl=&pid=ImgRaw&r=0',
            description: 'The iconic Aston Martin DB5, released in 1963, is a luxury grand tourer, mostly popular for being extensively featured in the James Bond movies.'
        }
    ],
    'ferrari': [
        {
            id: 37,
            name: '250 GTO',
            model: '250 GTO',
            year: 1962,
            img: 'https://silodrome.com/wp-content/uploads/2019/06/Ferrari-250-GTO-Side.jpg',
            description: 'The Ferrari 250 GTO is widely regarded as one of the rarest and most valuable Ferraris ever built with only 39 units produced between 1962 and 1964'
        },
        {
            id: 38,
            name: 'SF90 Stradale',
            model: 'SF90 Stradale',
            year: 2024,
            img: 'https://thedriver.it/listini/foto/ferrari-sf90-stradale-39002_coupe-2-porte-ferrari-sf90-stradale-2019-front-side.jpg',
            description: 'Ferrari SF90 Stradale, first series production PHEV (Plug-in Hybrid Electric Vehicle): V8 turbo, 1000cv maximum power, weightpower ratio of 1.57 kgcv.'
        },
        {
            id: 39,
            name: 'Francesco Bernoulli',
            model: 'Francesco Bernoulli',
            year: 2012,
            img: 'https://th.bing.com/th/id/R.16b5e1140aff2be0f6845a6f7b20cabe?rik=FhbyFsDgHIuPRQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_7FKhywEafEI%2fTVDRp6D7b2I%2fAAAAAAAAABU%2ftPm1NxxtQVU%2fs1600%2fFrancesco%2bBernoulli%2bcars%2b2.jpg&ehk=y7M8Z%2fH7FlQYwxFFNZDq6%2bNQEtHU7EHySP6S40jWx00%3d&risl=&pid=ImgRaw&r=0',
            description: 'Francesco is familiar with this reaction to Francesco. Francesco is triple speed.Oh-ho! Francesco likes this. Its really getting him into the zone! '
        },
        {
            id: 40,
            name: 'LaFerrari Aperta',
            model: 'LaFerrari Aperta',
            year: 2017,
            img: 'https://th.bing.com/th/id/R.8f3b351afcf31b1011bd18116daccdd2?rik=KcaOj1kTsReA5A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f11%2fDesktop-Pictures-Ferrari-Laferrari-3840x2400.jpg&ehk=qKQwtq6aMG7x5xLIxrI%2bb%2feodUV6mJp9%2fHWc9PQ3%2fGg%3d&risl=&pid=ImgRaw&r=0',
            description: 'The LaFerrari is a hybrid exotic sports car with a V-12 engine and an electric motor that produces 950 hp.'
        }
    ],
    'lamborghini': [
        {
            id: 41,
            name: 'Aventador SVJ Roadster',
            model: 'Aventador SVJ Roadster',
            year: 2022,
            img: 'https://images.hdqwalls.com/wallpapers/2018-lamborghini-aventador-svj-rear-upper-view-mz.jpg',
            description: 'The SVJ Roadster is a limited edition of 800 units with a 770 hp V12 engine and advanced aerodynamics. '
        },
        {
            id: 42,
            name: 'Huracán Performante',
            model: 'Huracán Performante',
            year: 2022,
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-performante/header-huracan-performante.jpg',
            description: 'The Performante is a track-focused version of the Huracán with more power, weight, and aerodynamics. It accelerates hard, grips well, and sounds like magic.'
        },
        {
            id: 43,
            name: 'Revuelto',
            model: 'Revuelto',
            year: 2024,
            img: 'https://gtspirit.com/wp-content/uploads/2023/03/GTspirit-Lamborghini-Revuelto-Studio-11.jpg',
            description: 'Revuelto is the first HPEV (High Performance Electrified Vehicle) hybrid super sports car by Lamborghini, with a powertrain that delivers 1015 CV total.'
        },
        {
            id: 44,
            name: 'Sián Roadster',
            model: 'Sián FKP 37',
            year: 2022,
            img: 'https://www.hdwallpapers.in/download/lamborghini_sian_roadster_2020_4k_5k_hd-3840x2160.jpg',
            description: 'The Lamborghini Sián Roadster is a futuristic and spectacular design that combines the iconic V12 engine with the most powerful hybrid technology ever made.'
        },
        {
            id: 45,
            name: 'Countach',
            model: 'Countach LPI 800-4',
            year: 2023,
            img: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/08/16033503/Lamborghini-Countach_LPI_800-4-2022-1600-02-e1629066312725.jpg',
            description: 'Inspired by the past, made for the future. The daring, disruptive design that has inspired generations of supercars lives on in this commemorative version.'
        }
    ],
    'ford': [
        {
            id: 46,
            name: 'GT40 MkII',
            model: 'GT40 MkII',
            year: 1966,
            img: 'https://www.alastairbols.com/wp-content/uploads/2022/10/Superformance-GT40-MKII-427-Ken-Miles-1-of-4.jpg',
            description: 'The Ford GT40 was born out of a determined pursuit to challenge Ferraris dominance in European long-distance sports car racing, particularly the prestigious 24 Hours of Le Mans race. '
        },
        {
            id: 47,
            name: 'Shelby Mustang GT500',
            model: 'Shelby Mustang GT500',
            year: 2022,
            img: 'https://s3.amazonaws.com/the-drive-staging/message-editor/1547395309159-dsc08854_driving_silver_c1.jpg',
            description: 'The Shelby GT500 is the most powerful Mustang ever, with a supercharged 760-hp V-8 and a rapid-shifting automatic transmission.'
        }
    ],
    'special_cars': [
        {
            id: 48,
            name: 'Lightning McQueen',
            model: 'Lightning McQueen',
            year: 2006,
            img: 'https://wallpapercave.com/wp/wp2211889.jpg',
            description: 'I mean, is there even a description necessary? Come on man!!'
        },
        {
            id: 49,
            name: 'Tow Mater',
            model: 'Tow Mater',
            year: 2006,
            img: 'https://www.wallpaperama.com/post-images/forums/201107/09p-8438-mater-wallpaper.jpg',
            description: 'The worlds greatest friend. But is he also the worlds greatest secret agent?'
        },
        {
            id: 50,
            name: 'Finn McMissile',
            model: 'Finn McMissile',
            year: 2012,
            img: 'https://th.bing.com/th/id/R.ec2f682004f695e26f1c9631ce0c1b2c?rik=zVOx0kjyeQJV7g&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20101117220803%2fpixar%2fimages%2f6%2f61%2fFinn_2.jpg&ehk=7ZIFThARihhcq8BXFT5YIPiz%2f7BsvQll00T7Ji0SSI8%3d&risl=&pid=ImgRaw&r=0',
            description: 'Mater found dead in a ditch somewhere. Also, james Bond dreams of being as good as Finn Mc-fing-Missile.'
        }, 
        {
            id: 51,
            name: 'Mini (Mr. Bean)',
            model: 'Mini (Mr. Bean)',
            year: 2024,
            img: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/11/mrbean3.jpg',
            description: 'The greatest car ever made. Period.'
        },
        {
            id: 52,
            name: 'Blue Car from Mr. bean',
            model: 'Blue Car from Mr. bean',
            year: 2024,
            img: 'https://live.staticflickr.com/3938/34009304245_038b51e067_b.jpg',
            description: 'i think we can all collectively agree that we HATE THIS CAR.'
        },
        {
            id: 52,
            name: 'Rickroll',
            model: 'Rickroll',
            year: 1990,
            img: 'https://149367133.v2.pressablecdn.com/wp-content/uploads/2021/02/rick-astley-never-gonna-give-you-up-4k.jpg',
            description: 'Never gonna give you up. Never gonna let you down. ever gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you'
        },

    ]
}

export default carsCollection;
