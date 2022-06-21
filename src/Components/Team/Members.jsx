import React from 'react';

// import data
import { teamData } from '../../data/team';

// import components
import MemberCard from './MemberCard';

const Members = () => {
    return (
        <section className="flex flex-col md:flex-row mt-8 gap-x-4">
            {
                teamData.map(member => <MemberCard data={member} />)
            }
        </section>
    )
}

export default Members