import Image from 'next/image'
import React from 'react'
import X from '/components/home/assets/ERC20.webp'

const BlogArticleCard = () => {
    return (
        <section className="flex flex-row justify-between gap-4 p-4 rounded-md bg-slate-800 shadow shadow-slate-500 hover:bg-slate-700 hover:cursor-pointer">
            <div>
                <h2 className="text-xl font-medium">Enter Title Here</h2>
                <span className="text-slate-500">Enter snippet here</span>

                <p className="text-sm pt-2 text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    harum et quis error atque dolore molestias, expedita
                    incidunt, unde animi cumque saepe dolorem hic assumenda.
                </p>
                <p className="pt-2 text-sm text-slate-500">30th October 2023</p>
            </div>

            <Image
                className="rounded-md"
                alt="x"
                src={X.src}
                height={200}
                width={200}
            />
        </section>
    )
}

export default BlogArticleCard
