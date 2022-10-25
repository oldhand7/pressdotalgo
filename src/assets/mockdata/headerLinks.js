const headerLinks = [
  {
    title: 'Home',
    link: '/',
    hasSubmenu: false,
  },
  {
    title: 'Science',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Regions',
          children: [
            {
              text: 'Africa',
              link: '/'
            },
            {
              text: 'Asia',
              link: '/'
            },
            {
              text: 'Canada',
              link: '/'
            },
            {
              text: 'China',
              link: '/'
            },
            {
              text: 'Europe',
              link: '/'
            },
            {
              text: 'Latin America',
              link: '/'
            },
            {
              text: 'Middle East',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Economy',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'World Video',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'News',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Economy',
              link: '/'
            },
            {
              text: 'Law',
              link: '/'
            },
            {
              text: 'Politics',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'WSJNoted',
              link: '/'
            },
            {
              text: 'U.S.Video',
              link: '/'
            },
            {
              text: `What's News podcast`,
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Culture',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'Politics Video',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Columns',
          children: [
            {
              text: 'Washington Wire',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Poetry',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'WSJ Pro',
          children: [
            {
              text: 'Bankruptcy',
              link: '/'
            },
            {
              text: 'Central Banking',
              link: '/'
            },
            {
              text: 'Private Equity',
              link: '/'
            },
            {
              text: 'Venture Capital',
              link: '/'
            },
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'Economic Forecasting Survey',
              link: '/'
            },
            {
              text: 'Economy Video',
              link: '/'
            },
          ]
        }
      ],
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Capital Account',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Religion',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Management',
              link: '/'
            },
            {
              text: 'The Future of Everything',
              link: '/'
            },
            {
              text: 'Obituaries',
              link: '/'
            },
            {
              text: 'Tech/WSJ.D',
              link: '/'
            },
          ]
        },
        {
          subTitle: 'Industries',
          children: [
            {
              text: 'Aerospace & Defense',
              link: '/'
            },
            {
              text: 'Autos & Transportation',
              link: '/'
            },
            {
              text: 'Commercial Real Estate',
              link: '/'
            },
            {
              text: 'Consumer Products',
              link: '/'
            },
            {
              text: 'Energy',
              link: '/'
            },
            {
              text: 'Entrepreneurship',
              link: '/'
            },
            {
              text: 'Financial Services',
              link: '/'
            },
            {
              text: 'Food & Services',
              link: '/'
            },
            {
              text: 'Health Care',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          children: [
            {
              text: 'Hospitality',
              link: '/'
            },
            {
              text: 'Law',
              link: '/'
            },
            {
              text: 'Manufacturing',
              link: '/'
            },
            {
              text: 'Media & Marketing',
              link: '/'
            },
            {
              text: 'Natural Resources',
              link: '/'
            },
            {
              text: 'Retail',
              link: '/'
            }
          ]
        },
        {
          subTitle: 'C-Suite',
          children: [
            {
              text: 'CFO Journal',
              link: '/'
            },
            {
              text: 'CIO Journal',
              link: '/'
            },
            {
              text: 'CMO Today',
              link: '/'
            },
            {
              text: 'Logistics Report',
              link: '/'
            },
            {
              text: 'Risk & Compliance',
              link: '/'
            },
            {
              text: 'The Workplace Report',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Columns',
          children: [
            {
              text: 'Heard on the Street',
              link: '/'
            }
          ]
        },
        {
          subTitle: 'WSJ Pro',
          children: [
            {
              text: 'Bankruptcy',
              link: '/'
            },
            {
              text: 'Central Banking',
              link: '/'
            },
            {
              text: 'Cybersecurity',
              link: '/'
            },
            {
              text: 'Private Equity',
              link: '/'
            },
            {
              text: 'Sustainable Business',
              link: '/'
            },
            {
              text: 'Venture Capital',
              link: '/'
            }
          ]
        },
        {
          subTitle: 'More',
          children: [
            {
              text: 'Business Video',
              link: '/'
            },
            {
              text: 'Journal Report',
              link: '/'
            },
            {
              text: 'Business Podcast',
              link: '/'
            },
            {
              text: 'Space & Science',
              link: '/'
            }
          ]
        }
      ],
    ]
  },
  {
    title: 'Life',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'CIO Journal',
              link: '/'
            },
            {
              text: 'The Future of Everything',
              link: '/'
            },
            {
              text: 'Personal Tech',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Columns',
          children: [
            {
              text: 'Christopher Mims',
              link: '/'
            },
            {
              text: 'Joanna Stern',
              link: '/'
            },
            {
              text: 'Julie Jargon',
              link: '/'
            },
            {
              text: 'Nicole Nguyen',
              link: '/'
            },
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'Tech Video',
              link: '/'
            },
            {
              text: 'Tech Podcast',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Comedy',
    link: '/',
    hasSubmenu: true,
    hasSearchBtn: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Bonds',
              link: '/'
            },
            {
              text: 'Commercial Real Estate',
              link: '/'
            },
            {
              text: 'Commodities & Futures',
              link: '/'
            },
            {
              text: 'Stocks',
              link: '/'
            },
            {
              text: 'Personal Finance',
              link: '/'
            },
            {
              text: 'WSJ Money',
              link: '/'
            },
            {
              text: 'Streetwise',
              link: '/'
            },
            {
              text: 'Intelligent Investor',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Columns',
          children: [
            {
              text: 'Heard on the Street',
              link: '/'
            },
            {
              text: 'Greg Ip',
              link: '/'
            },
            {
              text: 'Jason Zweig',
              link: '/'
            },
            {
              text: 'Laura Saunders',
              link: '/'
            },
            {
              text: 'James Mackintosh',
              link: '/'
            }
          ]
        },
        {
          subTitle: 'Market Data',
          children: [
            {
              text: 'Market Data Home',
              link: '/'
            },
            {
              text: 'U.S. Stocks',
              link: '/'
            },
            {
              text: 'Currencies',
              link: '/'
            },
            {
              text: 'Companies',
              link: '/'
            },
            {
              text: 'Commodities',
              link: '/'
            },
            {
              text: 'Bonds & Rates',
              link: '/'
            },
            {
              text: 'Mutual Funds & ETFs',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'CFO Journal',
              link: '/'
            },
            {
              text: 'Markets Video',
              link: '/'
            },
            {
              text: 'Your Money Briefing Podcast',
              link: '/'
            },
            {
              text: 'Secrets of Wealthy Women Podcast',
              link: '/'
            },
            {
              text: 'Search Quotes and Companies',
              link: '/',
              isSearch: true
            },
          ]
        }
      ]
    ]
  },
  {
    title: 'Food',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Columnists',
          children: [
            {
              text: 'Gerard Baker',
              link: '/'
            },
            {
              text: 'Sadanand Dhume',
              link: '/'
            },
            {
              text: 'James Freeman',
              link: '/'
            },
            {
              text: 'William A. Galston',
              link: '/'
            },
            {
              text: 'Daniel Henninger',
              link: '/'
            },
            {
              text: 'Holman W. Jenkins',
              link: '/'
            },
            {
              text: 'Andy Kessler',
              link: '/'
            },
            {
              text: 'William McGurn',
              link: '/'
            },
            {
              text: 'Walter Russell Mead',
              link: '/'
            },
            {
              text: 'Peggy Noonan',
              link: '/'
            },
            {
              text: `Mary Anastasia O'Grady`,
              link: '/'
            },
            {
              text: 'Jason Riley',
              link: '/'
            },
            {
              text: 'Joseph Sternberg',
              link: '/'
            },
            {
              text: 'Kimberley A. Strassel',
              link: '/'
            },
            {
              text: 'Allysia Finley',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'Editorials',
              link: '/'
            },
            {
              text: 'Commentary',
              link: '/'
            },
            {
              text: 'Future View',
              link: '/'
            },
            {
              text: 'Houses of Worship',
              link: '/'
            },
            {
              text: 'Cross Country',
              link: '/'
            },
            {
              text: 'Letters to the Editor',
              link: '/'
            },
            {
              text: 'The Weekend Interview',
              link: '/'
            },
            {
              text: 'Potomac Watch Podcast',
              link: '/'
            },
            {
              text: 'Foreign Edition Podcast',
              link: '/'
            },
            {
              text: 'Free Expression Podcast',
              link: '/'
            },
            {
              text: 'Opinion Video',
              link: '/'
            },
            {
              text: 'Notable & Quotable',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Art',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Reviews',
          children: [
            {
              text: 'Film',
              link: '/'
            },
            {
              text: 'Television',
              link: '/'
            },
            {
              text: 'Theater',
              link: '/'
            },
            {
              text: 'Masterpiece Series',
              link: '/'
            },
            {
              text: 'Music',
              link: '/'
            },
            {
              text: 'Dance',
              link: '/'
            },
            {
              text: 'Opera',
              link: '/'
            },
            {
              text: 'Exhibition',
              link: '/'
            },
            {
              text: 'Cultural Commentary',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Arts',
              link: '/'
            },
            {
              text: 'Books',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'WSJ Puzzles',
              link: '/'
            },
            {
              text: 'Life Video',
              link: '/'
            },
            {
              text: 'Arts Video',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'History',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Commercial Real Estate',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'Real Estate Video',
              link: '/'
            }
          ]
        }
      ]
    ]
  },
  {
    title: 'Sociology',
    link: '/',
    hasSubmenu: true,
    children: [
      [
        {
          subTitle: 'Sections',
          children: [
            {
              text: 'Cars',
              link: '/'
            },
            {
              text: 'Careers',
              link: '/'
            },
            {
              text: 'Food & Drink',
              link: '/'
            },
            {
              text: 'Home & Design',
              link: '/'
            },
            {
              text: 'Ideas',
              link: '/'
            },
            {
              text: 'Personal Finance',
              link: '/'
            },
            {
              text: 'Recipes',
              link: '/'
            },
            {
              text: 'Travel',
              link: '/'
            },
            {
              text: 'Wellness',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'Columns',
          children: [
            {
              text: 'Your Health',
              link: '/'
            },
            {
              text: 'Work & Life',
              link: '/'
            },
            {
              text: 'Carry On',
              link: '/'
            },
            {
              text: 'Bonds',
              link: '/'
            },
            {
              text: 'Turning Points',
              link: '/'
            },
            {
              text: 'On Wine',
              link: '/'
            },
            {
              text: 'On The Clock',
              link: '/'
            }
          ]
        }
      ],
      [
        {
          subTitle: 'More',
          children: [
            {
              text: 'WSJ Puzzles',
              link: '/'
            },
            {
              text: 'Space & Science',
              link: '/'
            }
          ]
        }
      ]
    ]
  }
]

export default headerLinks