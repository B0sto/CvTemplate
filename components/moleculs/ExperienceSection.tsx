import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import ExperienceDesc from '../atoms/ExperienceDesc'

const ExperienceSection = () => {
    return (
        <section className='flex flex-col gap-y-[40px]'>
            <SectionHeader header='Experience' />

            <div>
                <ExperienceDesc place='Google' years='2013-2014' role='Front-end developer / php programmer' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil' />

                <ExperienceDesc place='Twitter' years='2012' role='Web Developer' description='Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim' />

            </div>

        </section>
    )
}

export default ExperienceSection