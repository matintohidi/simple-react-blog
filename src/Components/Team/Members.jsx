import React from 'react';
import { v1 as uuid } from 'uuid';

// import data
import { teamData } from '../../data/team';

// import components
import MemberCard from './MemberCard';

const Members = () => {
    return (
        <section className="flex flex-col md:flex-row mt-8 gap-y-4 md:gap-x-4">
            {
                teamData.map(member => <MemberCard key={uuid()} data={member} />)
            }
        </section>
    )
}

export default Members