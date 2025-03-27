import React from 'react';
import { Link } from 'react-router-dom';

type FutureLink = {
    id: string;
    title: string;
    path: string;
    description: string;
};

export const HomeContainer: React.FC = () => {
    // TODO: Replace with actual links
    const futureLinks: FutureLink[] = [
        {
            id: '1',
            title: 'Projects',
            path: '/projects',
            description: 'View my portfolio of work and personal projects'
        },
        {
            id: '2',
            title: 'About',
            path: '/about',
            description: 'Learn more about my background and experience'
        },
        {
            id: '3',
            title: 'Blog',
            path: '/blog',
            description: 'Read my thoughts on technology and development'
        },
        {
            id: '4',
            title: 'Contact',
            path: '/contact',
            description: 'Get in touch with me for opportunities or questions'
        }
    ];

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">Portfolio</h1>
            </header>

            <section className="link-section">
                <h2 className="section-title">Explore My Work</h2>
                <ul className="link-list">
                    {futureLinks.map((link) => (
                        <li key={link.id} className="link-item">
                            <Link to={link.path} className="nav-link">
                                <h3>{link.title}</h3>
                                <p>{link.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};