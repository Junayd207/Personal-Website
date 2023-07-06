import React, { useCallback } from 'react'
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import './Particles.css'

export default function PARTICLES() {
	const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

	return (
        <div className="main">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: '#000000',
                    },
                    fpsLimit: 10,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 1080
                            },
                            limit: 0,
                            value: 500,
                        },
                        opacity: {
                            animation: {
                            enable: true,
                            minimumValue: 0.5,
                            speed: 1,
                            sync: false,
                            },
                            random: {
                            enable: true,
                            minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: 'circle',
                
                        },
                        size: {
                            random: {
                            enable: true,
                            minimumValue: 1.5
                            },
                            value: 1
                        }
                    }
                }}
            />  
        </div>
	)
}

