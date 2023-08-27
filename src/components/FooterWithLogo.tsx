'use client';

import { Footer } from 'flowbite-react';
import { AiFillGithub } from 'react-icons/ai';
export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className='flex gap-2 items-center'>
            <AiFillGithub size = {48}/>
            <h1 className='text-xl font-bold'>Repo</h1>
          </div>
          <Footer.LinkGroup className='flex gap-3'>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Kyoshi Noda"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
  )
}


