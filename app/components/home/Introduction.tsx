import React from 'react';

const HomeView: React.FC = () => {

    return (
        <section className='mx-auto flex flex-row gap-20 xl:py-32 xl:h-screen xl:w-[1150px]'>
            <section className='w-1/2 flex flex-col justify-between'>
                <section className='flex flex-col gap-20'>
                    <section className='flex flex-col gap-5'>
                        <p className='text-5xl'>Lewis Broadhurst</p>

                        <p className='text-xl pt-[-10px]'>Full Stack Engineer at <span className='text-orange-500 hover:animate-pulse hover:cursor-pointer hover:text-orange-300'>MahiMarkets</span></p>

                        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laboriosam voluptates officiis veniam nihil autem, nisi possimus iste cupiditate fugit tempora commodi consectetur magni omnis! Animi vitae nam iusto.</p>
                    </section>

                    <nav>
                        <ul className='flex flex-col gap-2 text-xl'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Work With Me</li>
                        </ul>
                    </nav>
                </section>
                

                <section>
                    <ul className='flex flex-row gap-2'>
                        <li>EM</li>
                        <li>LI</li>
                        <li>TW</li>
                        <li>YT</li>
                    </ul>
                </section>
            </section>

            <section className='w-1/2 flex flex-col justify-between'>
                <section className='flex flex-col gap-5'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nam maiores voluptates error, ex distinctio eligendi officia molestias minus vero! Nulla dolores veniam reprehenderit ducimus sit sed sunt! Non modi incidunt dolorum ipsa quasi molestiae a quos cupiditate, blanditiis sit voluptas mollitia exercitationem omnis molestias!</p>
                </section>  


                <span className='h-48 w-48 bg-slate-100 self-center rounded-full'></span>
            </section>  
        </section>
    )
}

export default HomeView;