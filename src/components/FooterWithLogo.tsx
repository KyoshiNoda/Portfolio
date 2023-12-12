'use client';

import { Footer } from 'flowbite-react';
import { AiFillGithub } from 'react-icons/ai';
import { footerItems } from '@/constants/constant';
export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <a className='flex gap-2 items-center cursor-pointer' href="https://github.com/KyoshiNoda/portfolio">
            <AiFillGithub size={48} />
            <h1 className='text-xl font-bold'>Repo</h1>
          </a>
          <Footer.LinkGroup className='flex gap-3'>
            {(Object.keys(footerItems) as (keyof typeof footerItems)[]).map((item) => (
              <Footer.Link href={footerItems[item].link} key={item}>
                {footerItems[item].name}
              </Footer.Link>
            ))}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Kyoshi Noda"
          href="#"
          year={2024}
        />
      </div>
    </Footer>
  )
}


