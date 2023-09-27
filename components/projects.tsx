import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { type } from 'os'
import { useScroll } from 'framer-motion';
import Image from 'next/image'
import Project from './project';
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
