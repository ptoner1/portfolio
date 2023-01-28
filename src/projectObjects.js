import test from './videos/test.mp4';
import Lauterbrunnen from './videos/Lauterbrunnen.jpg';
import { SpotifyDescription, ItemCrushDescription, ColorAppDescription, YelpcampDescription, ProfileDescription } from './descriptions';

export const data = [
    {
        id: 1,
        title: 'Paul Toner',
        name: 'about',
        Description: ProfileDescription,
        skills: ['javascript', 'react', 'front end development'],
        img: Lauterbrunnen,
        repo: 'https://www.github.com/ptoner1',
        url: null
    },
    {
        id: 2,
        title: 'Sort My Spotify Liked',
        name: 'spotifyapp',
        Description: SpotifyDescription,
        skills: ['js', 'nodejs', 'express', 'deployment', 'o-authentication', '3rd party API'],
        video: test,
        repo: 'sort-my-liked-spotify',
        url: 'https://www.sort-spotify.com'
    },
    {
        id: 3,
        title: 'Item Crush',
        name: 'itemcrush',
        Description: ItemCrushDescription,
        skills: ['js', 'react', 'session storage'],
        video: test,
        repo: 'item-crush',
        url: null
    },
    {
        id: 4,
        title: 'Color App',
        name: 'colorapp',
        Description: ColorAppDescription,
        skills: ['js', 'react', 'material UI'],
        video: test,
        repo: 'react-color-app',
        url: null
    },
    {
        id: 5,
        title: 'Yelp Camp',
        name: 'yelpcamp',
        Description: YelpcampDescription,
        skills: ['js', 'nodejs', 'express', 'mongodb', 'deployment', 'authorization & authentication', 'cookies'],
        video: test,
        repo: 'yelpcamp-webdev-course',
        url: null
    },
    {
        id: 6,
        title: 'To Do',
        name: 'todo',
        Description: () => 'Wanted to practice my knowledge of react and session storage.',
        skills: ['js', 'react', 'session storage'],
        video: test,
        repo: 'react-todo',
        url: null
    },
    {
        id: 7,
        title: 'Portfolio',
        name: 'portfolio',
        Description: () => 'Learned about html videos for this website. Had fun styling everything.',
        skills: ['js', 'react', 'video', 'sass', 'deployment'],
        video: test,
        repo: 'react-todo',
        url: 'localhost:3000/portrait-animation#s'
    },
]