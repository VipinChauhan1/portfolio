import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'Koyl healthCare', description: 'Koyl healthcare is healthcare project which help to docter some time docter they dont have time to give diet to patient so by this software docter can share diet with docter using AI .docter can search any symtoms ,dieseses and alergy then diet will provide by AI then docter can send diet easily to patient.docter can do multiple functionality he can share diet ,search for pateint ,check  the past record', link: '#' },
        { title: 'Sailgp Mediahub', description: 'SailGP is an international sailing competition in which teams compete across a season comprising multiple grand prix events held around the world.The SailGP Media Hub serves as the official journal platform where events and news are published.It is a digital press platform where the team or SailGP personnel can update event-related details that will be accessible to journalists. Press conferences may occur after each event.', link: '#' },
        { title: 'Car Rental Application', description: 'Develop a modern and user-friendly car rental web application using React. This application will enable users to browse, search, and rent vehicles from an available fleet of cars.User Registration and Authentication: Implement functionality for user registration and login to securely manage user accountsVehicle Listings: Display a catalog of available vehicles with comprehensive information, including images, specifications, rental rates, and availabilityBooking and Reservation: Enable users to choose a vehicle, specify rental dates, and make reservations. Implement a booking calendar for convenient date selection..', link: '#' },
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
