import background from '../Images/background.jpg';
import logo from '../Images/logo.png'
import about from '../Images/about.jpg'
import phone from '../Images/phone.svg'
import envelope from '../Images/envelope.svg'



const Home = () => {
    return (
        <div className=''>

            <div className="  backdrop-contrast-0 bg-cover bg-center " style={{ backgroundImage: `url(${background})` }}>
                <div className='w-3/4 m-auto'>

                    <nav className="flex items-center justify-between py-4 px-6 bg-transperant">
                        <img src={logo} alt="Logo" className="h-48 w-50" />
                        <ul className="flex space-x-8 text-white bg-gray-500 p-4 text-xl">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li className="cursor-pointer">Features</li>
                        </ul>
                    </nav>
                    <div className='text-left text-white '>
                        <p className='text-4xl font-extrabold'>CSKnowHow</p>
                        <p className='text-2xl font-bold pt-3'>Your guide to Computer Science Essentials</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>

            <div className=' bg-white '>
                <div className='pt-10 pb-10 flex w-3/4 m-auto'>

                    <img src={about} alt="About" className="w-50 h-80" />
                    <div className='text-black ml-3 '>

                        <p className='text-3xl font-extrabold'>Explore CS Domain with Us</p>
                        <br></br>
                        <p className='font-normal text-lg'>If you're new to computer science and feeling unsure about
                            which domain to choose, don't worry. We're here to help
                            you navigate through this confusion and find the right path
                            for you. With our expertise and guidance, we can assist
                            you in exploring various domains and understanding their
                            potential, enabling you to make an informed decision that
                            aligns with your interests and goals. Let's embark on this
                            exciting journey together!</p>
                        <br></br>
                        <a  href="about" className='bg-blue-400 p-2 ml-3 w-24'>Read More</a>
                    </div>
                </div>
            </div>
            <div className='bg-blue-400'>
                <div className='text-center pt-10 pb-10 w-3/4 m-auto'>
                    <p className='font-bold text-4xl'>Testimonials</p>
                    <p className='font-semibold text-2xl'>See what others are saying about us!</p>
                    <div className='flex space-x-3 pt-3'>
                        <div className='bg-white '>
                            <p className=' font-normal'>
                                CSKnowHow has been an incredible resource for me as a beginner in computer science. The website provides clear explanations and practical examples that have helped me grasp complex concepts easily. Highly recommended!
                            </p>
                            <p className='text-center font-bold'>
                                Samantha Anderson
                            </p>
                        </div>
                        <div className='bg-white'>
                            <p>
                                I stumbled upon CSKnowHow while searching for computer science learning materials, and I'm so glad I did! The website offers a comprehensive range of topics, from algorithms to data structures, all presented in a user-friendly manner. It has been a valuable companion in my journey to becoming a proficient programmer.
                            </p>
                            <p className='text-center font-bold'>
                                Benjamin Ramirez
                            </p>
                        </div>
                        <div className='bg-white'>
                            <p>
                                CSKnowHow is a hidden gem in the world of computer science education. The content is well-structured, and the interactive exercises have been invaluable for reinforcing my understanding. Whether you're a student or a professional looking to upskill, CSKnowHow is definitely worth exploring."
                            </p>
                            <p className='text-center font-bold'>
                                Emily John
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-black text-white'>
                <div className='w-3/4 m-auto pt-10 pb-10'>
                    <div className='flex'>
                        <div className='flex space-x-16'>

                            <div>
                                <p className='font-bold text-3xl'>Contact Us</p>
                                <p className='text-xl font-semibold'>Send Us a message</p>
                            </div>
                            <div>
                                <p className='font-bold text-3xl'>Site Us</p>
                                <p className='text-xl font-semibold'>All our Pages</p>
                            </div>
                        </div>
                        <div className="flex-row ml-20 space-y-3">
                            <img src={logo} alt="Logo" className="h-48 w-50" />
                            <div className="ml-4">
                                <span className="flex items-center">
                                    <img src={phone} alt="Phone Icon" className="h-6 w-6" />
                                    <span className="ml-2">+91 9869884799</span>
                                </span>
                            </div>
                            <div className="ml-4">
                                <span className="flex items-center">
                                    <img src={envelope} alt="Mail Icon" className="h-6 w-6" />
                                    <span className="ml-2">contactus123@gmail.com</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <form>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-40 px-3 py-2 border border-gray-300  focus:outline-none  text-black"
                                    placeholder="Full Name" required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="w-40 px-3 py-2 border border-gray-300  focus:outline-none  text-black"
                                    placeholder="Email" required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className=" h-50 w-auto px-3 py-2 border border-gray-300  focus:outline-none  text-black"
                                    placeholder="Description" required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-lg font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                            > Submit
                            </button>
                        </form>


                    </div>
                </div>

            </div>
            <footer className='bg-gray-500'>
                <p className='text-center pt-2 text-3xl font-bold'>&#169; Copyright 2023 All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;
