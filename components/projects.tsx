import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { type } from 'os'
import Image from 'next/image'
export default function Projects() {
    return (
        <section>
            <SectionHeading>My Projects </SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
                }
            </div>
        </section>
    )
}

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }) {
    return <section>
        {title}
        {description}
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tags}</li>
            ))}
            <Image  src={imageUrl} alt="Projects i worked on " quality={95} />
        </ul>
    </section>;
}
