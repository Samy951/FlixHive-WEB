import {Movie} from "@/typings";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import MovieCard from "@/pages/components/Movie/MovieCard";
import {useRef, useState} from "react";
interface Props {
    title: string
    movies: Movie[]
}

function MovieList ({title, movies}: Props) {
    const MovieListRef = useRef <HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const handleClick =(direction: string)=> {
        setIsMoved(true)

        if (MovieListRef.current){
            const {scrollLeft, clientWidth}= MovieListRef.current

            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth

            MovieListRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

    return (
        <div className={"h-40 space-y-0.5 md:space-y-2"}>
            <h2 className={"w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl"}>{title}</h2>
            <div className={"group relative md:-ml-2"}>
                <FaChevronLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} onClick={()=> handleClick("left")}/>

                <div ref={MovieListRef} className={"flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md: p-2 scrollbar-hide"}>
                    {movies.map((movie) => (<MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>

                <FaChevronRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} onClick={()=> handleClick("right")}/>
            </div>
        </div>
    );
}

export default MovieList;