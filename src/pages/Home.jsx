import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {/* <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1> */}
                            <div className="bg-background dark:bg-dark-bg">
                                <div className="flex flex-col  w-full lg:w-6/12 justify-center lg:pt-24 pt-5 items-start text-center lg:text-left mb-5 md:mb-0">
                                    <h1 className="my-4 text-5xl font-bold leading-tight text-primary dark:text-dark-primary">
                                        <span className="text-theme-color">Blogging</span> Online is now
                                        much easier
                                    </h1>
                                    <p className="leading-normal mb-8 text-center lg:text-left text-2.5xl text-primary dark:text-dark-primary font-sans">
                                        Write Blogs on various topics and start your journey as an impactful
                                        Content Creator,
                                         exploring your passions, sharing your knowledge and experiences
                                        with the world.
                                    </p>
                                    <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
                                        <Link to="/signup">
                                            <button className="lg:mx-0 bg-[#434242] text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                                                Join Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
