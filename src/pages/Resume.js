import React from 'react';

const Resume = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <div class="p-8 ...">
                    <h1 className="p-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resume</h1>
                    <h2 class="text-xl font-bold">Proficiencies</h2>
                    <ul class="p-6 ...">
                        <li>HTML, CSS, JavaScript</li>
                        <li>MySQL database, Node.js</li>
                        <li>Progressive Web Applications, React</li>
                    </ul>
                    <button className="block w-half rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={onButtonClick}>Download Resume</button>
                </div>
            </center>
\        </>

    );
};

export default Resume;
