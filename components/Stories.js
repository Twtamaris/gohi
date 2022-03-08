import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: 'Saurab Baral',
        src: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/71580676_695148307641109_832239197380149248_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fgH9NE1-x84AX9inrrR&_nc_ht=scontent.fbir1-1.fna&oh=00_AT9qzls_huDnfUhQUJX83TaZ_fXTJAiUSz_24e4IPp2CcA&oe=62422940',
        profile: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/65909562_2296905333893971_3067165123941498880_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kHD6BvJAMU4AX8rJfCY&_nc_ht=scontent.fbir1-1.fna&oh=00_AT_qmMW8nNORNTLHX633TrXF22WnY5YiJbfjXqRoK1Hwkg&oe=6242E64F',
    },
    {
        name: 'Elon Musk',
        src: 'https:/links.papareact.com/4zn',
        profile: 'https:/links.papareact.com/kxk',
    },
    {
        name: 'Jeff Bezoz',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p',
    },
    {
        name: 'Mark Zukerberg',
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf',
    },
    {
        name: 'Bill Gates',
        src: 'https:/links.papareact.com/4u4',
        profile: 'https:/links.papareact.com/zvy',
    },

]

function Stories() {
  return (
    <div className='flex justify-center space-x-3
    mx-auto'>
        {stories.map((story) =>(
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}

        

    </div>
  )
}

export default Stories