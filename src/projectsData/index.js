import { SpotifyDescription, ItemCrushDescription, ColorAppDescription, YelpcampDescription, ProfileDescription, PortfolioDescription } from './descriptions';
import { ProfilePic, spotify, itemcrush, colorapp, yelpcamp, portfolio } from './videos';

export const data = [
    {
        id: 1,
        title: 'Paul Toner',
        name: 'about',
        Description: ProfileDescription,
        skills: ['javascript', 'react', 'front end development'],
        // img: ProfilePic,
        video: portfolio,
        repo: 'portfolio',
        url: '/scrollpainting'
    },
    {
        id: 2,
        title: 'Sort My Spotify Liked',
        name: 'spotifyapp',
        Description: SpotifyDescription,
        skills: ['js', 'nodejs', 'express', 'deployment', 'o-authentication', '3rd party API'],
        video: spotify,
        repo: 'sort-my-liked-spotify',
        url: 'https://www.sort-spotify.com'
    },
    {
        id: 3,
        title: 'Item Crush',
        name: 'itemcrush',
        Description: ItemCrushDescription,
        skills: ['js', 'react', 'session storage'],
        video: itemcrush,
        repo: 'item-crush',
        url: 'http://itemcrush-paultoner.s3-website-us-east-1.amazonaws.com/'
    },
    {
        id: 4,
        title: 'Color Palette Generator',
        name: 'colorapp',
        Description: ColorAppDescription,
        skills: ['js', 'react', 'material UI'],
        video: colorapp,
        repo: 'react-color-app',
        url: 'http://color-palette-generator-paultoner.s3-website-us-east-1.amazonaws.com'
    },
    {
        id: 5,
        title: 'Yelp Camp',
        name: 'yelpcamp',
        Description: YelpcampDescription,
        skills: ['js', 'nodejs', 'express', 'mongodb', 'deployment', 'authorization & authentication', 'cookies'],
        video: yelpcamp,
        repo: 'yelpcamp-webdev-course',
        url: 'http://yelpcamp-env.eba-uc6idz2a.us-east-1.elasticbeanstalk.com/'
    },
    // {
    //     id: 6,
    //     title: 'To Do',
    //     name: 'todo',
    //     Description: () => 'Wanted to practice my knowledge of react and session storage.',
    //     skills: ['js', 'react', 'session storage'],
    //     video: todo,
    //     repo: 'react-todo',
    //     url: null
    // },
    // {
    //     id: 7,
    //     title: 'Portfolio',
    //     name: 'portfolio',
    //     Description: PortfolioDescription,
    //     skills: ['js', 'react', 'video', 'sass', 'deployment'],
    //     video: portfolio,
    //     repo: 'portfolio',
    //     url: '/scrollpainting'
    // },
]