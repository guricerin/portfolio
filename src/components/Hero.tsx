import React from 'react';
import icon from '../assets/icon.svg';
import '../css/hero-background.css'

export const Hero: React.FC = () => {
    return (
        <section className="hero is-dark is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <br />
                    <img src={icon} width="128" height="128" />
                    <h1 className="title is-1">guricerin's page</h1>
                </div>
            </div>
        </section>
    )
}
