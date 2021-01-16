import React from 'react';
import { useSpring, animated } from 'react-spring'

import Image from './image';
import "./parallax-card.css";

const calc = (x, y) => [-(y - window.innerHeight * 0.5) / 30, ((x) - window.innerWidth * 0.75) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ParallaxCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 280, friction: 30 } }));

    return (
        <animated.div
            className="parallax-card mx-auto p-6 relative"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}>
            <Image style={{ borderRadius: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <p className="mt-3">Thierry Schmidt</p>
            <p>Medizininformatik</p>
            <div className="mx-auto my-3 h-0.5 bg-pink-700 rounded"></div>
            <p>HTML, CSS & JS</p>
            <div className="absolute inset-x-0 bottom-0">
            <button className="w-full px-4 py-2">Kontaktieren</button>
            </div>

        </animated.div>
    );
}

export default ParallaxCard;