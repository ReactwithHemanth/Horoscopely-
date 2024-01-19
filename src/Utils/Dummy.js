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
export const dummies = [
  'Adopting a healthy lifestyle is on the cards and will lead you to total fitness. Chance for setting out on a pilgrimage may materialise. High rentals may discourage some from shifting residence to someplace decent. A outstanding payment is likely to be received soon and add to your wealth. Your eye for detail and willingness to put in extra hours at work will be richly rewarded on the professional front.',
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
