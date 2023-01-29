import { colorlist } from "../colors";

export default function Logo({ colors, setColors }) {

    function changeColors() {
        const link = document.getElementById('favicon');
        let num = Number(link.href.slice(-5, -4));
        if (num === 10) num = 0;
        link.href = `/favicon${num + 1}.svg`
        setColors(colorlist[num]);
    }

    return (
        <svg viewBox='0 0 100 100' className="P_logo" onClick={changeColors}>
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                    <stop stopColor={colors[0]} offset='30%' />
                    <stop stopColor={colors[1]} offset='100%' />
                </linearGradient>
            </defs>
            <path style={{ fill: 'url(#gradient)' }}
                d="M 10 10 
                C 80 10, 135 40, 40 60 
                C 50 50, 115 40, 10 10" />
            <path style={{ fill: 'url(#gradient)' }}
                d="M 25 20
                L 25 90
                L 45 90"/>
        </svg>
    )
}