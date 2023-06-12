import React from 'react';
import CODE from '@/assets/PixelMeBlue.png'
import { GithubOutlined, LinkedinFilled, LinkedinOutlined, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';

const HomeView: React.FC = () => {

    return (
        <section className='mx-auto flex flex-row gap-20 xl:py-32 xl:h-screen xl:w-[1150px]'>
            <section className='w-1/2 flex flex-col justify-between'>
                <section className='flex flex-col gap-20'>
                    <section className='flex flex-col gap-4'>
                        <p className='text-5xl'>Lewis Broadhurst</p>

                        <p className='text-2xl'>Full Stack Engineer at 
                            <a href='https://mahimarkets.com/' className='text-orange-500 transition-colors duration-500 hover:cursor-pointer hover:text-orange-300'> MahiMarkets</a>
                        </p>

                        <p className='text-slate-400 w-2/3'>I build full stack websites and applications that have tangible benefits for users.</p>
                    </section>

                    
                    <ul className='flex flex-col gap-2 text-xl items-start'>
                        <li className='basicOrangeHoverableText'>Blog</li>
                        <li className='basicOrangeHoverableText'>Work With Me</li>
                    </ul>
                </section>
                

                
                <ul className='flex flex-row gap-4 text-3xl'>
                    <li className='basicOrangeHoverableIcon'><LinkedinFilled /></li>
                    <li className='basicOrangeHoverableIcon'><GithubOutlined /></li>
                    <li className='basicOrangeHoverableIcon'><YoutubeFilled /></li>
                    <li className='basicOrangeHoverableIcon'><TwitterSquareFilled /></li>
                </ul>
            </section>

            <section className='w-1/2 flex flex-col justify-between'>
                <section className='flex flex-col gap-5'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>
                </section>  
            </section>  
        </section>
    )
}

export default HomeView;