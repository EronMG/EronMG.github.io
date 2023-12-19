import about1 from '../assets/about-1.png';
import about2 from '../assets/about-2.png';
import about3 from '../assets/about-3.png';
import about4 from '../assets/about-4.png';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import coffeeSlider1 from '../assets/coffee-slider-1.png';
import coffeeSlider2 from '../assets/coffee-slider-2.png';
import coffeeSlider3 from '../assets/coffee-slider-3.png';
import clock from '../assets/clock.svg';
import phone from '../assets/phone.svg';
import pin from '../assets/pin-alt.svg';
import coffe1 from '../assets/coffee-1.png';
import coffe2 from '../assets/coffee-2.png';
import coffe3 from '../assets/coffee-3.png';
import coffe4 from '../assets/coffee-4.png';
import coffe5 from '../assets/coffee-5.png';
import coffe6 from '../assets/coffee-6.png';
import coffe7 from '../assets/coffee-7.png';
import coffe8 from '../assets/coffee-8.png';
import tea1 from '../assets/tea-1.png';
import tea2 from '../assets/tea-2.png';
import tea3 from '../assets/tea-3.png';
import tea4 from '../assets/tea-4.png';
import dessert1 from '../assets/dessert-1.png';
import dessert2 from '../assets/dessert-2.png';
import dessert3 from '../assets/dessert-3.png';
import dessert4 from '../assets/dessert-4.png';
import dessert5 from '../assets/dessert-5.png';
import dessert6 from '../assets/dessert-6.png';
import dessert7 from '../assets/dessert-7.png';
import dessert8 from '../assets/dessert-8.png';

const nav = [{
        id: 0,
        name: 'Favorite coffee',
    },
    {
        id: 1,
        name: 'About',
    },
    {
        id: 2,
        name: 'Mobile app',
    },
    {
        id: 3,
        name: 'Contact us',
    },
];

export const slider = [{
    id: 0,
    name: 'S’mores Frappuccino',
    title: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
    cost: '$5.50',
    icon: coffeeSlider1,
}, {
    id: 1,
    name: 'Caramel Macchiato',
    title: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with the addition of delicate cream under whipped thick foam.',
    cost: '$5.00',
    icon: coffeeSlider2,
}, {
    id: 2,
    name: 'Ice coffee',
    title: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
    cost: '$4.50',
    icon: coffeeSlider3,
}, ];

export const about = [{
        id: 0,
        img: about1
    },
    {
        id: 1,
        img: about2
    },
    {
        id: 2,
        img: about3
    },
    {
        id: 3,
        img: about4
    }
]

export const contact = [{
    id: 0,
    icon: pin,
    title: '8558 Green Rd., LA',
}, {
    id: 1,
    icon: phone,
    title: '+1 (603) 555-0123',
}, {
    id: 2,
    icon: clock,
    title: 'Mon-Sat: 9:00 AM – 23:00 PM',
}, ]

export const links = [{
        id: 0,
        icon: twitter
    },
    {
        id: 1,
        icon: instagram
    },
    {
        id: 2,
        icon: facebook
    },
]

export const coffe = [{
    id: 0,
    img: coffe1,
    name: 'Irish coffee',
    title: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    cost: 7.00,
}, {
    id: 1,
    img: coffe2,
    name: 'Kahlua coffee',
    title: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    cost: 7.00,
}, {
    id: 2,
    img: coffe3,
    name: 'Honey raf',
    title: 'Espresso with frothed milk, cream and aromatic honey',
    cost: 5.50,
}, {
    id: 3,
    img: coffe4,
    name: 'Ice cappuccino',
    title: 'Cappuccino with soft thick foam in summer version with ice',
    cost: 5.00,
}, {
    id: 4,
    img: coffe5,
    name: 'Espresso',
    title: 'Classic black coffee',
    cost: 4.50,
}, {
    id: 5,
    img: coffe6,
    name: 'Latte',
    title: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    cost: 5.50,
}, {
    id: 6,
    img: coffe7,
    name: 'Latte macchiato',
    title: 'Espresso with frothed milk and chocolate',
    cost: 5.50,
}, {
    id: 7,
    img: coffe8,
    name: 'Coffee with cognac',
    title: 'Fragrant black coffee with cognac and whipped cream',
    cost: 6.50,
}, ]

export const tea = [{
    id: 0,
    img: tea1,
    name: 'Moroccan',
    title: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    cost: 4.50,
}, {
    img: tea2,
    id: 1,
    name: 'Ginger',
    title: 'Original black tea with fresh ginger, lemon and honey',
    cost: 5.00,
}, {
    img: tea3,
    id: 2,
    name: 'Cranberry',
    title: 'Invigorating black tea with cranberry and honey',
    cost: 5.00,
}, {
    id: 3,
    img: tea4,
    name: 'Sea buckthorn',
    title: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    cost: 5.50,
}, ]

export const dessert = [{
    id: 0,
    img: dessert1,
    name: 'Marble cheesecake',
    title: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    cost: 3.50,
}, {
    img: dessert2,
    id: 1,
    name: 'Red velvet',
    title: 'Layer cake with cream cheese frosting',
    cost: 4.00,
}, {
    img: dessert3,
    id: 2,
    name: 'Cheesecakes',
    title: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    cost: 4.50,
}, {
    id: 3,
    img: dessert4,
    name: 'Creme brulee',
    title: 'Delicate creamy dessert in a caramel basket with wild berries',
    cost: 4.00,
}, {
    id: 4,
    img: dessert5,
    name: 'Pancakes',
    title: 'Tender pancakes with strawberry jam and fresh strawberries',
    cost: 4.50,
}, {
    id: 5,
    img: dessert6,
    name: 'Honey cake',
    title: 'Classic honey cake with delicate custard',
    cost: 4.50,
}, {
    id: 6,
    img: dessert7,
    name: 'Chocolate cake',
    title: 'Cake with hot chocolate filling and nuts with dried apricots',
    cost: 5.50,
}, {
    id: 7,
    img: dessert8,
    name: 'Black forest',
    title: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    cost: 6.50,
}, ]


export default nav;