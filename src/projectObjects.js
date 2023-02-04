import { SpotifyDescription, ItemCrushDescription, ColorAppDescription, YelpcampDescription, ProfileDescription } from './descriptions';
import { ProfilePic, spotify, itemcrush, colorpicker, yelpcamp, portfolio, todo } from './videos';
import { itemcrushSubtitles, spotifySubtitles, portfolioSubtitles, colorappSubtitles, todoSubtitles, yelpcampSubtitles } from './videos/subtitles';

export const data = [
    {
        id: 1,
        title: 'Paul Toner',
        name: 'about',
        Description: ProfileDescription,
        skills: ['javascript', 'react', 'front end development'],
        img: ProfilePic,
        repo: 'https://www.github.com/ptoner1',
        url: '/scrollpainting'
    },
    {
        id: 2,
        title: 'Sort My Spotify Liked',
        name: 'spotifyapp',
        Description: SpotifyDescription,
        skills: ['js', 'nodejs', 'express', 'deployment', 'o-authentication', '3rd party API'],
        video: spotify,
        subtitles: spotifySubtitles,
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
        subtitles: itemcrushSubtitles,
        repo: 'item-crush',
        url: null
    },
    {
        id: 4,
        title: 'Color Palette Generator',
        name: 'colorapp',
        Description: ColorAppDescription,
        skills: ['js', 'react', 'material UI'],
        video: colorpicker,
        subtitles: colorappSubtitles,
        repo: 'react-color-app',
        url: null
    },
    {
        id: 5,
        title: 'Yelp Camp',
        name: 'yelpcamp',
        Description: YelpcampDescription,
        skills: ['js', 'nodejs', 'express', 'mongodb', 'deployment', 'authorization & authentication', 'cookies'],
        video: yelpcamp,
        subtitles: yelpcampSubtitles,
        repo: 'yelpcamp-webdev-course',
        url: null
    },
    {
        id: 6,
        title: 'To Do',
        name: 'todo',
        Description: () => 'Wanted to practice my knowledge of react and session storage.',
        skills: ['js', 'react', 'session storage'],
        video: todo,
        subtitles: todoSubtitles,
        repo: 'react-todo',
        url: null
    },
    {
        id: 7,
        title: 'Portfolio',
        name: 'portfolio',
        Description: () => 'Learned about html videos for this website. Had fun styling everything.',
        skills: ['js', 'react', 'video', 'sass', 'deployment'],
        video: portfolio,
        subtitles: portfolioSubtitles,
        repo: 'react-todo',
        url: '/scrollpainting'
    },
]