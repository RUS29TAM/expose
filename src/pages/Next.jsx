'use client'
import '@styles/main.css'
import React, { useState, useEffect } from 'react';

const Nav = () => {
    return (
        <nav aria-hidden="true" className="fake-nav">
            <ul>
                <li>
                    <svg className="bear-logo" viewBox="0 0 793 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100.937 244.397C49.2932 231.644 11 185.005 11 129.422C11 64.0195 64.0195 11 129.422 11C175.508 11 215.445 37.325 235.016 75.7579C273.571 54.9524 317.697 43.1437 364.581 43.1437H428.868C475.541 43.1437 519.48 54.8465 557.912 75.4777C577.534 37.1971 617.389 11 663.362 11C728.765 11 781.785 64.0195 781.785 129.422C781.785 184.782 743.798 231.27 692.469 244.241"
                            stroke="black" strokeWidth="21" strokeLinejoin="round"/>
                        <rect x="253.112" y="228.5" width="284.056" height="42.5905" fill="#FF1E1E"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M613.051 96.1181C670.715 142.386 703.111 215.526 703.111 280.959L504.955 280.959V240.491C504.955 218.952 487.494 201.491 465.955 201.491L324.324 201.491C302.785 201.491 285.324 218.952 285.324 240.491V280.959L88.1448 280.959C88.1448 215.526 120.54 142.386 178.204 96.1181C235.869 49.8504 314.078 23.8574 395.628 23.8574C477.177 23.8574 555.387 49.8504 613.051 96.1181Z"
                              fill="black"/>
                        <circle cx="572.438" cy="364.836" r="25.9698" fill="black"/>
                        <circle cx="223.403" cy="364.836" r="25.9698" fill="black"/>
                        <path
                            d="M464.755 411.776C464.755 438.167 433.036 467.871 397.753 467.871C362.47 467.871 330.751 438.167 330.751 411.776C330.751 385.385 362.47 372.302 397.753 372.302C433.036 372.302 464.755 385.385 464.755 411.776Z"
                            fill="black"/>
                    </svg>
                </li>
                <li>
                    <strong>CodePen</strong>
                </li>
                <li>File</li>
                <li>Edit</li>
                <li>Find</li>
                <li>View</li>
                <li>Tools</li>
                <li>Window</li>
            </ul>
        </nav>
    );
};

const ExposeNav = () => {
    return (
        <nav className="expose" id="nav" data-popover>
            <ul>
                <li>
                    <a href="#home" title="Home">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#projects" title="Projects">
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" title="Contact">
                        <span>Contact</span>
                    </a>
                </li>
                <li>
                    <a href="#writing" title="Writing">
                        <span>Writing</span>
                    </a>
                </li>
                <li>
                    <a href="#links" title="Links">
                        <span>Links</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const Section = ({id, current, children}) => {
    return (
        <section id={id} data-current={current}>
            <div className="section__content">{children}</div>
        </section>
    );
};

const App = () => {
    const [exposed, setExposed] = useState(false);

    useEffect(() => {
        document.body.dataset.exposed = exposed;
    }, [exposed]);

    const launch = (event) => {
        setExposed(event ? event.newState === true : false);
    };

    // useEffect(() => {
    //     document.body.dataset.exposed = exposed;
    // }, [exposed]);
    const hendleBtnClick = () => {
        document.body.dataset.exposed = !exposed;
    }

    const select = (event) => {
        document.querySelectorAll('a').forEach((anchor) => {
            anchor.setAttribute('autofocus', event.currentTarget.href === anchor.href);
        });

        document.querySelectorAll('section').forEach((section) => {
            section.dataset.current = event.currentTarget.getAttribute('href') === section.id;
        });
        document.body.dataset.exposed = exposed;

        launch();
    };

    useEffect(() => {
        document.querySelectorAll('section').forEach((section, index) => {
            section.style.viewTransitionName = `section--${index}`;
        });

        document.querySelectorAll('a').forEach((anchor) => {
            anchor.addEventListener('click', select);
        });

        const popover = document.getElementById('nav');
        popover.addEventListener('beforetoggle', () => launch(popover.dataset.state));

        return () => {
            document.querySelectorAll('a').forEach((anchor) => {
                anchor.removeEventListener('click', select);
            });

            popover.removeEventListener('beforetoggle', () => launch(popover.dataset.state));
        };
    }, []);

    return (
        <>
            <Nav />
            <ExposeNav />
            <Section id="#home" current={'true'}>
                <div className="section__header">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>App Exposé<br /><span>with View Transitions</span></h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Animate grid positions using the View Transitions API. Overlay a nav using the Popover API. Use <kbd>Esc</kbd> to exit exposé mode or choose a "Tab".</p>
                <p>Click the button below!</p>
            </Section>
            <Section id="#projects">
                <div className="section__content">
                    <div className="section__header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Projects</h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Don't forget to show off all of your cool work!</p>
                </div>
            </Section>
            <Section id="#contact">
                <div className="section__content">
                    <div className="section__header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Contact</h2>
                    <p>Maybe throw in a contact form or something.</p>
                </div>
            </Section>
            <Section id="#writing">
                <div className="section__content">
                    <div className="section__header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Writing</h2>
                    <p>Use this section for all your blog posts and stuff.</p>
                </div>
            </Section>
            <Section id="#links">
                <div className="section__content">
                    <div className="section__header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Links</h2>
                    <p>Put all your cool links here for your friends.</p>
                </div>
            </Section>
            <button onClick={hendleBtnClick} popovertarget='nav'>
                <span className="sr-only">Open Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"/>
                    <path
                        d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"/>
                    <path
                        d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"/>
                </svg>
            </button>
        </>
    );
};

export default App;