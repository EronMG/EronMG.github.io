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
export default nav;