 export const SHOP_DATA = {
   necklaces: {
        id: 1,
        title: "Necklaces",
        background: 'jwellery-main.jpg',
        route: '/necklaces',
        price: [120, 80, 50],
        images: [
            {
                id: 1,
                name:'ceramics beads',
                photo: 'jwellery-beads.jpg'
            },
            {
                id: 2,
                name:'ceramics rings',
                photo: 'jwellery-rings.jpg'
            },
            {
                id: 3,
                name:'ceramics necklace',
                photo: 'jwellery-necklace.jpg'
            },
        ]
    },
    bowls: {
        id: 2,
        title: "Bowls",
        background: 'bowls-main.jpg',
        route: '/bowls',
        price: [150, 120, 80],
        images: [
            {
                id: 1,
                name:'large bowl',
                photo: 'large-bowl.jpg'
            },
            {
                id: 2,
                name:'medium bowl',
                photo: 'bowls-main.jpg'
            },
            {
                id: 3,
                name:'small bowl',
                photo: 'bowl-small.jpg'
            },
        ]
    },

     mugs: {
        id: 3,
        title: "Mugs",
        background: 'mugs-main.jpg',
        route: '/mugs',
        price: [70, 50, 30],
        images: [
            {
                id: 1,
                name:'Large mugs',
                photo: 'mugs-all2.jpg'
            },
            {
                id: 2,
                name:'Mugs variant',
                photo: 'mugs-main.jpg'
            }
        ]
    },

    covers: {
        id: 4,
        title: "Bowl cover",
        background: 'bowl-with-cover.jpg',
        route: '/covers',
        price: [50, 30, 15],
        images: [
            {
                id: 1,
                name:'Large cover',
                photo: 'bowl-with-cover.jpg'
            }
        ]
    },

    vasas: {
        id: 5,
        title: "Vasas",
        background: 'vasas-main.jpg',
        route: '/vasas',
        price: [120, 80, 60],
        images: [
            {
                id: 1,
                name:'large vasa',
                photo: 'large-vasa-2.jpg'
            },
            {
                id: 2,
                name:'medium vasa',
                photo: 'vasa-medium.jpg'
            },
            {
                id: 3,
                name:'small vasa',
                photo: 'vasa-small.jpg'
            },
        ]
    }
}