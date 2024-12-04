import Link from "next/link";

export default function GetStarted() {
    return (
        <div className=" w-full h-screen flex flex-wrap items-center justify-around  lg:flex-row">
            <img src="/getstarted.png" alt="getstarted_image" className="w-[80%] md:w-[40%]" />
            <div className="flex flex-col items-center w-[80%] lg:w-[40%]">
                <p className="text-primary font-sans font-semibold text-3xl lg:text-4xl text-center">👋Welcome to TaskEase!</p>
                <p className="font-sans font-medium text-xl lg:text-2xl text-center mt-5">
                    ✨ Stay organized, boost productivity, and achieve your goals effortlessly.
                    Let TaskEase guide you to a more productive and stress-free day! 🚀
                </p>
                <div className=" mt-10 mb-5">
                    <Link href='/sign-in' className="bg-highlight rounded-lg shadow-md  hover:bg-[#ffdb4d] py-4 px-8 text-2xl lg:py-5 lg:px-14 font-serif font-medium lg:text-3xl text-black">
                    Get Started
                </Link>
                </div>
                <p className="font-sans font-bold text-[10px] text-greyText mt-1">
                    Already have an account? 
                    <Link href="./sign-in"
                        className="underline text-greyText hover:text-gray-600 pl-[2px]">
                         Sign in
                    </Link>
                </p>
            </div>
        </div>)
}