"use client";
import React from 'react'
import { podcastData } from '@/constants'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PodcastCard from '@/components/PodcastCard'


const Home = () => {
  // const tasks = useQuery(api.tasks.get);

  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        <div className="flex text-white-1 min-h-screen flex-col items-center justify-between p-24">
          {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
        </div>
        <div className='podcast_grid'>
          {podcastData.map(({id, imgURL, description, title}) => (
            <PodcastCard key={id} 
            imgUrl={imgURL} 
            description={description} 
            title={title}
            podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home