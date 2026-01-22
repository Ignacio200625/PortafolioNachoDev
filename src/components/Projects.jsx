import bootstrap from '../assets/SBUIKit.png'
import StrangerThings from '../assets/StrangerThings.png'
import ZetaBot from '../assets/ZetaBot.png'
function Projects() {

    return (

        <div className="text-center">
            <h1 className="  text-4xl md:text-5xl font-bold">My Projects</h1>
            <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae eum saepe dolor tempore provident quis maiores ipsum cupiditate quas doloremque, atque odio, omnis minima praesentium architecto sit earum totam.</p>
            <div className="flex justify-center w-full gap-10 mt-10">

                <div className='w-[33%] '>
                    <a href="https://github.com/Ignacio200625/BootstrapProject"> <img src={bootstrap} alt="" className='w-full rounded-2xl hover:shadow-orange-500/50 shadow-lg' /></a>
                </div>
                <div className='w-[33%]'>
                    <a href="https://github.com/Ignacio200625/StrangerThings"><img src={StrangerThings} alt="" className='w-full rounded-2xl hover:shadow-orange-500/50 shadow-lg' /></a>
                </div>
                <div className='w-[33%]'>
                    <a href="https://github.com/Ignacio200625/ZetaBot"><img src={ZetaBot} alt="" className='w-full rounded-2xl hover:shadow-orange-500/50 shadow-lg' /></a>
                </div>
            </div>
        </div>

    )

}

export default Projects