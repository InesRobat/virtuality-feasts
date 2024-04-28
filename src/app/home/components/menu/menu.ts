export interface Menu {
    id: number;
    title: string;
    submenu: Submenu[];
}

export interface Submenu {
    src: string;
    subtitle: string;
    description: string;
    price: string;
}

export const MENU_MOCK = [
    {
        title: `Start Your Adventure`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-18188572.jpg`,
                subtitle: `VR Roller Coaster Nuggets`,
                description: `Bite-sized thrills! These crispy nuggets will take your taste buds on a wild ride, just like our virtual roller coaster experience. Hold on tight!`,
                price: `$4`
            },
            {
                src: `./assets/images/pexels-photo-691159.jpeg`,
                subtitle: `Space-Time Continuum Soup`,
                description: `A swirling vortex of flavors! This soup will transport you through the cosmos and back in time. Careful not to create any paradoxes!`,
                price: `$5`
            }
        ]
    },
    {
        title: `The Main Event`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-1199956.jpg`,
                subtitle: `Interdimensional Burger`,
                description: `A burger that defies gravity! Packed with flavors from alternate realities, this burger will have you questioning the laws of physics... and craving seconds.`,
                price: `$14`
            },
            {
                src: `./assets/images/pexels-photo-5792329.jpeg`,
                subtitle: `Enchanted Forest Pizza`,
                description: `Made with ingredients from mythical realms, this pizza is a magical blend of flavors. Beware of wandering unicorns stealing your slices!`,
                price: `$18`
            },
            {
                src: `./assets/images/pexels-photo-4958641.jpg`,
                subtitle: `Alien Invasion Tacos`,
                description: `Taco 'bout a close encounter! These tacos are filled with spicy surprises from galaxies far, far away. Watch out for the extraterrestrial salsa!`,
                price: `$12`
            }
        ]
    },
    {
        title: `Add Some Zing to Your Adventure`,
        submenu: [
            {
                src: `./assets/images/free-photo-of-diner-repas-bol-fromage.jpeg`,
                subtitle: `Time-Traveling Fries`,
                description: `Crispy fries that teleport you to different eras! Dip them in our secret sauce for a flavor explosion that transcends time.`,
                price: `$5`
            },
            {
                src: `./assets/images/quinoa-1250021_1280.jpg`,
                subtitle: `Quantum Quinoa Salad`,
                description: `A salad that's here, there, and everywhere! Made with quinoa from parallel dimensions, it's the healthiest way to explore the multiverse.`,
                price: `$8`
            }
        ]
    },
    {
        title: `Sweet Endings to Your Journey`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-11485219.jpg`,
                subtitle: `Black Hole Brownie Sundae`,
                description: `A dessert so decadent, it creates its own gravitational pull! Dive into this black hole of chocolatey goodness.`,
                price: `$6`
            },
            {
                src: `./assets/images/pexels-photo-6463660.jpg`,
                subtitle: `Mystical Milkshake Madness`,
                description: `Shake things up with our magical milkshakes! Choose from flavors like Unicorn Dreams and Cosmic Caramel Crunch.`,
                price: `$6`
            }
        ]
    },
    {
        title: `Quench Your Thirst Across Dimensions`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-4667180.jpg`,
                subtitle: `Time-Warp Tea`,
                description: `Sip slowly... or you might find yourself in a different century! This tea is brewed with herbs from the time vortex.`,
                price: `$3`
            },
            {
                src: `./assets/images/pexels-photo-4667182.jpg`,
                subtitle: `Parallel Universe Punch`,
                description: `A punch that packs a punch! Made with fruits from alternate realities, it's a taste explosion across dimensions.`,
                price: `$8`
            }
        ]
    },
    {
        title: `Little Adventurers' Delights`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-14686443.jpeg`,
                subtitle: `Dino-Nugget Dino Bites`,
                description: `Nuggets shaped like dinosaurs! These bite-sized creatures are perfect for young explorers on a prehistoric adventure.`,
                price: `$5`
            },
            {
                src: `./assets/images/food-4305743_1280.jpg`,
                subtitle: `Magic Potion Mac 'n' Cheese`,
                description: `Our twist on a classic! This cheesy delight is mixed with a sprinkle of pixie dust for extra enchantment.`,
                price: `$5`
            }
        ]
    },
    {
        title: `Dare to Be Different`,
        submenu: [
            {
                src: `./assets/images/pexels-photo-461198.jpg`,
                subtitle: `Big Bang Burrito`,
                description: `Start your day with a bang! This burrito is filled with flavors that rival the birth of the universe.`,
                price: `$15`
            },
            // {
            //     src: `https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80`,
            //     subtitle: `Epic Quest Enchiladas`,
            //     description: `A quest for your taste buds! These enchiladas are stuffed with treasures from mythical lands.`,
            //     price: `$5`
            // }
        ]
    }
];








