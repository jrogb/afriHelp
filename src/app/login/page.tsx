import Image from "next/image"

const LoginPage = () => {
  return (
    <div className='flex flex-col md:flex-row sm:flex-row bg-gradient-to-tr from-slate-900 to-red-600 items-center'>
      {/* Left Side */}
      <div className="w-2/5 h-screen flex flex-col items-center justify-center">
        {/* Login Form */}
        <div className="bg-white bg-opacity-5 rounded-md px-10 py-10 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-afrired rounded-full flex items-center justify-center shadow-xl">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="w-14 h-14"
              />
            </div>
          </div>
          <form action="">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-white font-semibold text-xl">Login</h2>
              <div className="flex flex-col gap-4 mt-4">
                <input className="w-full items-center bg-white rounded-full px-4 py-2 shadow-md outline-none" type="text" placeholder="Username" />
                <input className="w-full items-center bg-white rounded-full px-4 py-2 shadow-md outline-none" type="password" placeholder="Password" />
              </div>
              <div className="bg-afrired p-4 mt-5 rounded-md">
                <button className="h-5 w-[200px] text-white">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-3/5 h-screen sm:flex-row md:flex-row flex flex-1 justify-center items-center">
      </div>
    </div>
  )
}

export default LoginPage