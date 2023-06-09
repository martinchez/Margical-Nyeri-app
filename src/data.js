import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  { id: 5, href: '#tours', text: 'Sites' },
]
export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/anmartdevelopers',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com/anmartdevs',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.instagram.com/anmartdevs',
    icon: 'fab fa-instagram',
  },
]
// handling data for the 
export const services = [
    { id: 1, icon: 'fas fa-wallet fa-fw' ,title:"Game Drive", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    { id: 2, icon: 'fas fa-tree fa-fw', title:"Forest Trails", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    { id: 3, icon: 'fas fa-wallet fa-fw', title:"Water Falls", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
 ]
//  handling Tours Data
export const tours = [
  {
    id: 1,
    img: tour1,
    tDate: 'august 26th, 2020',
    tTitle: 'Archives',
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    state: 'Town',
    days: '6 days',
    price: '2100',
  },
  {
    id: 2,
    img: tour2,
    tDate: 'august 25th, 2020',
    tTitle: 'chania falls',
    text: 'lorem ipsum dolor sit amet',
    state: 'Mathira',
    days: '6 days',
    price: '2100',
  },
  {
    id: 3,
    img: tour3,
    tDate: 'august 27th, 2020',
    tTitle: 'samak dam',
    text: 'lorem ipsum dolor sit amet, con',
    state: 'Nyeri',
    days: '6 days',
    price: '2100',
  },
  {
    id: 4,
    img: tour4,
    tDate: 'august 27th, 2020',
    tTitle: 'chnga dams',
    text: 'lorem ipsum dolor sit amet',
    state: 'Nyeri',
    days: '6 days',
    price: '100',
  },
  {
    id: 5,
    img: tour5,
    tDate: 'august 26th, 2020',
    tTitle: 'ZXaina Falls',
    text: 'lorem ipsum lorem ipsum',
    state: 'KImathi',
    days: '6 days',
    price: '2100',
  },
  {
    id: 5,
    img: tour6,
    tDate: 'august 26th, 2020',
    tTitle: 'RangeLands',
    text: 'lorem ipsum',
    state: 'Chieni',
    days: '6 days',
    price: '2100',
  },
]