import {reactive} from 'vue';
export const data = reactive({
    dataLNavLinks:[
        {
            title: 'home',
            icon: ' fa-house',
        },
    
        {
            title: 'lifestyle',
            icon: ' fa-suitcase',
            arrow: ' fa-chevron-down',

        },
    
        {
            title: 'stories',
            icon: ' fa-book-open-reader',
            arrow: ' fa-chevron-down',

        },
    
        {
            title: 'pages',
            icon: ' fa-book',
            arrow: ' fa-chevron-down',

        },

        {
            title: 'about us',
            icon: ' fa-user',

        },
    ],
    dataLinks:[
        {
            title: 'get started',
            links:[
                {
                    link:'resources',
                },
    
                {
                    link:'tutorials',
                },
    
                {
                    link:'examples',
                },
    
                {
                    link:'docs',
                },
            ]
        },
    
        {
            title: 'about',
            links:[
                {
                    link:'stories',
                },
    
                {
                    link:'community',
                },
    
                {
                    link:'blog',
                },
    
                {
                    link:'brand assets',
                },
            ]
        },
    
        {
            title: 'features',
            links:[
                {
                    link:'overview',
                },
    
                {
                    link:'design',
                },
    
                {
                    link:'code',
                },
    
                {
                    link:'collaborate',
                },
                
                
                
                
            ]
        },
    
        {
            title: 'quick links',
            links:[
                {
                    link:'stories',
                },
    
                {
                    link:'community',
                },
    
                {
                    link:'blog',
                },
    
                {
                    link:'brand assets',
                },
            ]
        },
    ],
    
    dataCarousels:[
        {
            id: 1,
            img: '/healthy-foods.webp',
            data: 'The Best Healthy Foods in 2022',
            smallDate: 'December 26, 2022',
            userIcon: '',
            dateIcon: '',
            text: '',
            tags:[
                {
                    tag1: 'food',
                }
            ]
        },
    
        {
            id: 2,
            img: '/winter.webp',
            data: 'The Best Winter Outfits',
            smallDate: 'December 26, 2022',
            userIcon: '',
            dateIcon: '',
            text: '',
            tags:[
                {
                    tag1: 'fashion',
                }
            ]
        },
    
        {
            id: 3,
            img: '/photographers-mistakes.webp',
            data: 'Beginner Photographer\'s Mistakes',
            smallDate: 'December 26, 2022',
            userIcon: '',
            dateIcon: '',
            text: '',
            tags:[
                {
                    tag1: 'fashion',
                }
            ]
        },
    
        {
            id: 4,
            img: '/ideas-anime.webp',
            data: 'Live Ideas You Might Be Anime',
            smallDate: 'December 26, 2022',
            userIcon: '',
            dateIcon: '',
            text: '',
            tags:[
                {
                    tag1: 'culture',

                    tag2: 'stories',
                },
            ]
        },
    
    ],
    
    secondCarousels:[
        {
            id: 6,
            img: '/anime-fashion.webp',
            data: 'Fashion Trend Now A Days',
            smallDate: 'December 25, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Fashion',
                },
    
                {
                    tag: 'Lifestyle',
                }
            ]
        },
    
        {
            id: 7,
            img: '/travel-alone-300x200.webp',
            data: 'Travelling Alone Is Awesome',
            smallDate: 'December 26, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Stories',
                },
    
                {
                    tag: 'Travel',
                }
            ]
        },
    
        {
            id: 8,
            img: '/best-places.webp',
            data: 'Places For A Road Trip',
            smallDate: 'December 25, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Stories',
                },
    
                {
                    tag: 'Travel',
                }
            ]
        },
    
        {
            id: 9,
            img: '/music-love.webp',
            data: 'Music The Love Of My Life',
            smallDate: 'December 25, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Culture',
                },
    
                {
                    tag: 'Lifestyle',
                }
            ]
        },
    
        {
            id: 10,
            img: '/visit-france.webp',
            data: 'Reasons To Visit France',
            smallDate: 'December 26, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Lifestyle',
                },
    
                {
                    tag: 'Travel',
                }
            ]
        },
    
        {
            id: 11,
            img: '/success-story.webp',
            data: 'The Best Success Stories',
            smallDate: 'December 25, 2022',
            userIcon: 'fa-solid fa-user',
            dateIcon: 'fa-solid fa-calendar-days',
            text: 'demo',
            tags:[
                {
                    tag: 'Culture',
                },
            ]
        },
    
    ],
    dataPosts:[
        {
            img: '/ideas-anime.webp',
            data: 'Live Ideas You Might Be Anime',
            smallDate: 'December 26, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
            tags:[
                {
                    tag: 'Culture',
                },
    
                {
                    tag: 'Stories',
                }
            ]
        },

        {
            img: '/visit-france.webp',
            data: 'Reasons To Visit France',
            smallDate: 'December 26, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
            tags:[
                {
                    tag: 'Lifestyle',
                },
    
                {
                    tag: 'Travel',
                }
            ]
        },

        {
            img: '/travel-alone-300x200.webp',
            data: 'Travelling Alone Is Awesome',
            smallDate: 'December 26, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
            tags:[
                {
                    tag: 'Stories',
                },
    
                {
                    tag: 'Travel',
                }
            ]
        },
    ],
    dataTrailer:[
        {
            position:1,
            img: '/sddefault.webp',
            title: 'Overlord Season 4 - Official',
            trailer: 'Trailer 3 | AniTV',
        },

        {
            position:2,
            img: '/hqdefault (1).jpg', 
            title: 'Rent A Girlfriend Season 2 -',
            trailer: ' Official Trailer | AniTV',
        },

        {
            position:3,
            img: '/rice-ball.webp',
            title: 'Uncle From Another Wolrd -',
            trailer: ' Official Trailer 2 | AniTV',
        },

        {
            position:4,
            img: '/visit-france.webp',
            title: 'Prima Doll -',
            trailer: ' Official Trailer | AniTV',
        },

        {
            position:5,
            img: '/ideas-anime.webp',
            title: 'Shoot! Goal To The Future -',
            trailer: ' Official Trailer 3 | AniTV',
        },

        {
            position:6,
            img: '/winter.webp',
            title: 'Overlord Season 1 -',
            trailer: ' Official Trailer 3 | AniTV',
        },

        {
            position:7,
            img: '/travel-alone.webp',
            title: 'Overlord Season 3 -',
            trailer: ' Official Trailer 3 | AniTV',
        },
    ],
    picturesBottom:[
        {
            img: '/anime-fashion.webp',
            data: 'Fashion',
        },

        {
            img: '/success-story.webp',
            data: 'Culture',
           
        },

        {
            img: '/healthy-foods.webp',
            data: 'Food',
        },

        {
            img: '/visit-france.webp',
            data: 'Lifestyle',
        },

        {
            img: '/travel-alone-300x200.webp',
            data: 'Stories',
           
        },

        {
            img: '/best-places.webp',
            data: 'Travel',
        },
    ]
});


