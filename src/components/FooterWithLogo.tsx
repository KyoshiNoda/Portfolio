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
            <Footer.Link href="https://docs.google.com/document/d/e/2PACX-1vTZVdaSPed1psqgoEL0pVTVQpLVjWlptDNA0Dk23DLGez_5K_YejmD_JDt0hOAiJsvqJss0FiPxS5KJ/pub">
              Resume
            </Footer.Link>
            <Footer.Link href="https://devpost.com/KyoshiNoda">
              Devpost
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/kyoshi-noda/">
              Linkedin
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


