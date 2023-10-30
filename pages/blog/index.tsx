import BlogArticleCard from '@/components/blog/BlogArticleCard'
import React from 'react'

const index = () => {
  return <main className='bg-slate-900 text-slate-200'>
    <section className='flex flex-col gap-10 mx-auto md:p-20 lg:w-[800px]'>
        <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-medium'>Lewis' Blog</h1>
            <span className='text-xl text-slate-400'>Ramblings of a full stack engineer</span>
            <span className=' text-slate-600 hover:text-orange-400 hover:cursor-pointer'>About me</span>
        </div>
        
        <section className='flex flex-col gap-4'>
            <BlogArticleCard />
            <BlogArticleCard />
            <BlogArticleCard />
            <BlogArticleCard />
            <BlogArticleCard />
            <BlogArticleCard />
        </section>
    </section>
  </main>
}

export default index