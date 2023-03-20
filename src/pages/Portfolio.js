import React from 'react';
import deckbuilder from '../deckbuilder-screenshot.png';
import fitness from '../fitness-tracker.png';
import password from '../password-generator-screenshot.png';
import refactor from '../refactor-code-screenshot.png';
import planner from '../daily-planner-screenshot.png';
import weather from '../weather-dashboard-screenshot.png';
import { FaGithub } from "react-icons/fa";

const project = [
    {
        id: 1,
        name: 'Fitness Tracker',
        imageSrc: fitness,
        imageAlt: "fitness tracker",
        github: 'https://github.com/mvc-mvps/fitnessTracker',
        site: 'https://mvc-mvps-fitness-tracker.herokuapp.com/',
    },
    {
        id: 2,
        name: 'Deckbuilder Application',
        imageSrc: deckbuilder,
        imageAlt: "deckbuilder application",
        github: 'https://github.com/MtgGroupProject/DeckBuilders',
        site: 'https://mtggroupproject.github.io/DeckBuilders/',
    },
    {
        id: 3,
        name: 'Weather Dashboard',
        imageSrc: weather,
        imageAlt: "weather dashboard",
        github: 'https://github.com/mmmatson/weather-dashboard',
        site: 'https://mmmatson.github.io/weather-dashboard/',
    },
    {
        id: 4,
        name: 'Daily Planner',
        imageSrc: planner,
        imageAlt: "daily planner",
        github: 'https://github.com/mmmatson/daily-planner',
        site: 'https://mmmatson.github.io/daily-planner/',
    },
    {
        id: 5,
        name: 'Password Generator',
        imageSrc: password,
        imageAlt: "password generator",
        github: 'https://github.com/mmmatson/password-generator',
        site: 'https://mmmatson.github.io/password-generator/',
    },
    {
        id: 6,
        name: 'Refactoring Code',
        imageSrc: refactor,
        imageAlt: "site with refactored html",
        github: 'https://github.com/mmmatson/refactor-code',
        site: 'https://mmmatson.github.io/refactor-code/',
    },
]

export default function Portoflio() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Portfolio</h1>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {project.map((project) => (
                        <div key={project.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                            {project.name}
                                    </h3>
                                    <a className="mt-1 text-sm text-gray-500" href={project.site}>Deployed Application Link</a>
                                </div>
                                <a href={project.github}><FaGithub /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
