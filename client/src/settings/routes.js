/* Pages */
import Music from '../pages/Music';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Main from '../pages/Main';
import SinglePage from '../pages/Single';
import AlbumPage from '../pages/Album';


export const routes = [
    {link: '/music', component: Music},
    {link: '/about', component: About},
    {link: '/contacts', component: Contacts},
    {link: '/single', component: SinglePage},
    {link: '/album/:albumId', component: AlbumPage},
    {link: '/', component: Main},
];