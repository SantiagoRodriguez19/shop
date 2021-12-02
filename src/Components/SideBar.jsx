import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


 const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon:<HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Toda la flota',
    path: '/products',
    icon:<DirectionsCarIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Chicos',
    path: `/category/chicos`,
    icon:<DirectionsCarIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Medianos',
    path: '/category/medianos',
    icon:<DirectionsCarIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Camionetas',
    path: '/category/camionetas',
    icon:<DirectionsCarIcon/>,
    cName: 'nav-text'
  },
];

export default SidebarData