export default function Portrait({ screen, img }) {
    return (
        <div className='portrait' screen={screen}>
            <div className='portrait__filter' />
            <div className='portrait__border' />
            <img className='portrait__img' src={img} alt="Portrait" />
        </div>
    )
}