import {
  AppleIcon,
  EmailIcon,
  FacebookIcon,
  PhoneIcon,
} from '../Components/SvgComponent';

// Hardcode Data
export const Methods = [
  {
    id: 0,
    title: 'Mobile Number',
    textColor: 'white',
    nav: 'NumberSignUp',
    icon: <PhoneIcon />,
  },
  {
    id: 0,
    title: 'Email Address',
    textColor: 'white',
    nav: 'EmailSignUp',
    icon: <EmailIcon />,
  },
  {
    id: 0,
    title: 'Sign In With Google',
    textColor: 'grey',
    nav: 'EmailSignUp',
    icon: <PhoneIcon />,
  },
  {
    id: 0,
    title: 'Sign In With Facebook',
    textColor: 'white',
    nav: 'EmailSignUp',
    icon: <FacebookIcon />,
  },
  {
    id: 0,
    title: 'Sign In With Apple',
    textColor: 'darkslategrey',
    nav: 'EmailSignUp',
    icon: <AppleIcon />,
  },
];

export const data = [
  {id: '1', label: 'nameInput'},
  {id: '2', label: 'emailInput'},
  {id: '3', label: 'numberInput'},
  {id: '4', label: 'DOB'},
  {id: '5', label: 'TOB'},
  {id: '6', label: 'Gender'},
  {id: '7', label: 'RelationShip'},
  {id: '8', label: 'push'},
];
export const genderArray = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];
export const RelationShipStatus = [
  {label: 'single', value: 'single'},
  {label: 'Married', value: 'Married'},
  {label: 'Engaged', value: 'Engaged'},
  {label: 'InRelationship', value: 'In a Relationship'},
];

export const menuList = [
  {id: 0, sub: 'Sun sign', zodiac: 'Capricorn'},
  {id: 1, sub: 'Zodiac sign', zodiac: 'Aries'},
  {id: 2, sub: 'Modality', zodiac: 'Fixed'},
  {id: 3, sub: 'Moon sign', zodiac: 'Leo'},
  {id: 4, sub: 'Element', zodiac: 'Air'},
  {id: 5, sub: 'Ascedant', zodiac: 'Capricorn'},
];
export const tableData = [
  ['10', 'Capricorn', '54.1'],
  ['12', 'sagittarius', '54.1'],
  ['1', 'Aries', '54.1'],
  ['2', 'Leo', '54.1'],
  ['3', 'Capricorn', '24.1'],
  ['4', 'sagittarius', '24.1'],
  ['5', 'Aries', '24.1'],
  ['6', 'Leo', '24.1'],
  ['7', 'Aries', '24.1'],
  ['8', 'Leo', '54.1'],
];
export const tableData2 = [
  ['Sun', '54.1', 'Capricorn', '10'],
  ['Moon', '54.1', 'sagittarius', '12'],
  ['Mercury', '54.1', 'Aries', '1'],
  ['Venus', '54.1', 'Leo', '2'],
  ['Mars', '24.1', 'Capricorn', '3'],
  ['Jupiter', '24.1', 'sagittarius', '4'],
  ['Saturn', '24.1', 'Aries', '5'],
  ['Uranus', '24.1', 'Leo', '6'],
  ['Neptune', '24.1', 'Aries', '7'],
  ['Pluto', '54.1', 'Aries', '8'],
];

export const Pack = [
  {id: 0, price: 'Trial', daysFree: 7, isActive: true},
  {id: 1, price: '9.99', daysFree: 4, isActive: false},
  {id: 2, price: '15.89', daysFree: 30, isActive: false},
];

export const sectionNames = [
  {value: 1, text: 'Section 1'},
  {value: 2, text: 'Section 2'},
  {value: 3, text: 'Section 2'},
  {value: 4, text: 'Section 2'},
  {value: 5, text: 'Section 2'},
  {value: 6, text: 'Section 2'},
  {value: 7, text: 'Section 2'},
  {value: 8, text: 'Section 2'},
  {value: 9, text: 'Section 2'},
];
export const FooterItem = [
  {id: 1, value: 'Home', label: 'HOME'},
  {id: 2, value: 'Compatibility', label: 'COMPATIBILITY'},
  {id: 3, value: 'Remedy', label: 'REMEDY'},
  {id: 4, value: 'More', label: 'MORE'},
];
export const Remedy = [
  {
    id: 0,
    remedy: 'Health',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#14C17B', Color2: '#30D2C2'},
  },
  {
    id: 1,
    remedy: 'Careers',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#446FFE', Color2: '#0ACDFF'},
  },
  {
    id: 2,
    remedy: 'Love',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#FF6BBA', Color2: '#FE3D91'},
  },
  {
    id: 3,
    remedy: 'Health',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#FFDA72', Color2: '#D4A63D'},
  },
  {
    id: 4,
    remedy: 'Health',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#FF736E', Color2: '#EF4040'},
  },
  {
    id: 5,
    remedy: 'Health',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
malesuada ullamcorper`,
    grd: {Color1: '#B442EC', Color2: '#833DFE'},
  },
];
export const dummyText = `You may have had trouble communicating in early life. Perhaps
you suffer from feelings of inadequacy. You overcome these
feelings through sheer necessity, for you have determination in
achieving your goals and purposes in life. You will have strong
likes and dislikes, and can be very reserved and dignified,
though when vexed you are apt to be sharp and sarcastic if not
actually cruel. Avoid pride, cultivate sympathy and endeavour to
see things from others standpoints as well as your own.`;

export const traits = `You will have strong likes and dislikes, and can be very
reserved and dignified, though when vexed you are apt to be
sharp and sarcastic if not actually cruel. Avoid pride,
cultivate sympathy and endeavour to see things from others
standpoints as well as your own.`;
export const dummies = [
  `Adopting a healthy lifestyle is on the cards and will lead you to total fitness.Chance for setting out on a pilgrimage may materialise. High rentals may discourage some from shifting residence to someplace decent. A outstanding payment is likely to be received soon and add to your wealth. Your eye for detail and willingness to put in extra hours at work will be richly rewarded on the professional front.`,
];
export const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
malesuada ullamcorper lorem, in tempor lectus accumsan sed.
Pellentesque dictum nunc a viverra placerat. Fusce eget luctus est,
nec aliquam neque. Maecenas nec magna velit. Donec sollicitudin ex
sit amet magna lobortis feugiat. Phasellus interdum porta pulvinar.
Proin in arcu libero. Nunc consequat, metus at scelerisque
sollicitudin, arcu ipsum blandit ante, vel consequat urna lectus non
enim. Fusce feugiat felis felis, non sollicitudin magna aliquet non.
Proin eget eleifend libero. Quisque et ex suscipit, faucibus ante
eget, dictum lorem. Sed a gravida lectus. Praesent et enim laoreet,
laoreet massa ut, commodo risus. Vivamus eget vehicula dui. Aliquam
a ipsum mi. Pellentesque semper id sem vel sollicitudin. Morbi vitae
nunc tellus. Suspendisse hendrerit nibh eu commodo tristique.
Vestibulum rhoncus malesuada est`;
