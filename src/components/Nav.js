import github_white from './icons/nav-icons/github_white.png';
import linkedin from './icons/nav-icons/linkedin.png';
import instagram from './icons/nav-icons/instagram.png';

export default function Nav() {

    return (
        <nav>
            <a href='https://github.com/ptoner1' target='_blank'>
                <img src={github_white} alt='Github Logo' className='github-logo' />
            </a>
            <a href='https://www.linkedin.com/in/paul-toner-88b4aa65/' target='_blank'>
                <img src={linkedin} alt='LinkedIn Logo' />
            </a>
            <a href='https://www.instagram.com/_pauly_wauly/' target='_blank'>
                <img src={instagram} alt='Instagram Logo' />
            </a>
        </nav>
    )
}