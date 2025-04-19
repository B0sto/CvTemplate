import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import ContactInfo from '../atoms/ContactInfo'

const ContactsSection = () => {
  return (
    <section className='flex flex-col gap-y-[40px]'>
        <SectionHeader header='Contacts'/>

        <div className="contacts_wrapper flex flex-col gap-y-[20px]">
            <ContactInfo contactIcon='Mobile.svg' contactDesc='500 342 242'/>
            <ContactInfo contactIcon='Email.svg' contactDesc='office@kamsolutions.pl'/>
            <ContactInfo contactIcon='Twitter.svg' contactDesc='Twitter' contactSubDesc='https://twitter.com/wordpress'/>
            <ContactInfo contactIcon='Facebook.svg' contactDesc='Facebook' contactSubDesc='https://www.facebook.com/facebook'/>
            <ContactInfo contactIcon='Skype.svg' contactDesc='Skype' contactSubDesc='kamsolutions.pi'/>
        </div>
    </section>
  )
}

export default ContactsSection