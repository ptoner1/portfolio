import portrait from '../videos/portrait.jpg';
import Lauterbrunnen from '../videos/Lauterbrunnen.jpg';

export default function Portrait({ screen }) {

    return (
        <div className='portrait' screen={screen}>
            <div className='portrait__filter' />
            <div className='portrait__border' />
            <img className='portrait__img' src={Lauterbrunnen} />
        </div>
    )
}