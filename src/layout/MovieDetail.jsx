import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react'
import {AiOutlineHeart} from 'react-icons/ai'
import YouTube from 'react-youtube'


function MovieDetail() {
    const [currentMovie, setCurrenttMovie] = useState();
    const { types , id } = useParams();

    const [castRef, emblaApi] = useEmblaCarousel({slidesToScroll: 'auto' , loop: false})
    const [backdropRef] = useEmblaCarousel({slidesToScroll: 'auto' , loop: false})
    const [posterRef] = useEmblaCarousel({slidesToScroll: 'auto' , loop: false})
    
    useEffect(() => {
      window.scrollTo(0,0)
    },[])

    useEffect(() => {
      const fetchMovie = async () => {
        const request = await axios.get(`/${types}/${id}?api_key=da18bcc962a30b615ed38969455bbbcb&append_to_response=credits,videos,images&include_image_language=en,null&language=en-US`);
        setCurrenttMovie(request.data);
        
      
      }
      fetchMovie();
    },[])

    const renderTrailer = () => {
      const trailer = currentMovie.videos.results.find(vid => vid.name === 'Official Trailer')
      const key = trailer ? trailer.key : currentMovie.videos.results[0].key

      return (
        <YouTube
          videoId={key}
          className="w-full h-[600px] mt-4"
          opts={{
          width: '100%',
          height: '100%'
          }}
        /> 
      )
    }
  return (
    <>
    <div className="flex flex-col items-center w-full max-w-7xl px-4 z-10 mt-[150px] mx-auto ">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start overflow-x-hidden">
        <div className="w-[342px] h-[513px] lg:w-2/5 lg:h-full ]">
          <img src={`https://www.themoviedb.org/t/p/original${currentMovie?.poster_path}`} alt={currentMovie?.title} className="object-cover w-full h-full shrink-0 shadow-2xl" />
        </div>
        <div className="flex flex-col w-full mt-4 lg:ml-8 lg:w-3/5">
          <h1 className="font-bold">{currentMovie?.title  || currentMovie?.name}</h1>
          <div className="flex gap-2 my-6">
            {currentMovie?.genres.map(gen => {
              return (
                <div key={gen.id} className="bg-red-600 text-white p-2 px-4 rounded-full ">{gen.name}</div>
              )
            })}
          </div>
          <p className="text-white lg:text-xl">{currentMovie?.overview}</p>
          <div className=" flex flex-col">
            <div className="my-6 flex items-center">
              <AiOutlineHeart size={30}style={{color: 'red'}}/>
              <button className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md text-white ml-10">Watch Trailer</button>
            </div>
            <h2 className="font-bold">Cast</h2>
            <div ref={castRef} className="overflow-hidden my-6"> 
              <div className="flex ">
                {currentMovie?.credits.cast.map((cast,index) => {
                  return (
                    <div key={index} className="shrink-0 grow-0 basis-1/2 lg:basis-1/4 min-w-0 ml-2">
                      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cast.profile_path}`} alt="" className="w-full h-full"/>
                    </div>
                  )
                })}
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="w-full my-16">
        <h2>Trailer</h2>
        {currentMovie?.videos ? renderTrailer() : null }
      </div>
      <div className="mb-16">
        <h2 className="mb-4">BackDrop</h2>
        <div ref={backdropRef} className="overflow-hidden">
            <div className="flex">
                {currentMovie?.images.backdrops.slice(0,10).map((img,index) => {
                  return (
                    <div key={index} className="shrink-0 grow-0 basis-full">
                      <img src={`https://www.themoviedb.org/t/p/original${img.file_path}`} alt="" className="w-full h-full" />
                    </div>
                  )
                })}
            </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-4">Poster</h2>
        <div ref={posterRef} className="overflow-hidden">
            <div className="flex">
                {currentMovie?.images.posters.slice(0,10).map((img,i) => {
                  return (
                    <div key={i} className="shrink-0 grow-0 basis-1/2  md:basis-1/3 lg:basis-1/4">
                      <img src={`https://www.themoviedb.org/t/p/original${img.file_path}`} alt="" className="w-full h-full" />
                    </div>
                  )
                })}
            </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default MovieDetail