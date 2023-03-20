import React from 'react';
import bio from '../Maggie-Matson.png';

export default function About() {
    return (
        <div class="container mx-auto p-8">
            <div class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img src={bio} class="w-24 h-24 rounded-full" alt="bio photo" width="384" height="512" />
                <div class="pt-6 space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">My name is Maggie Matson and I currently work at Northwestern University as a Project Manager on a team that develops online health interventions.</p>
                </div >
            </div>

        </div>
    );

}
