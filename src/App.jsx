import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen flex flex-col md:gap-28 bg-slate-500 text-slate-50 [&>*]:max-w-7xl [&>*]:mx-auto'>
      <header className='flex justify-between p-4 max-sm:flex-wrap max-sm:gap-4 max-sm:justify-center w-full items-baseline font-bold'>
        <a href='#' className='text-3xl max-sm:text-center'>My Tinerary</a>
        <ul className='flex text-lg [&>*]:p-3 gap-2 hover:[&>*]:brightness-90'>
          <a href="#">Home</a>
          <a href="#">Cities</a>
          <a href="#" className='bg-blue-700 rounded-lg'><i className="fa-solid fa-user pr-2"></i>Login</a>
        </ul>
      </header>
      <main className='p-4 mx-auto'>
        <div className='flex max-sm:flex-wrap-reverse'>
          <div className='flex flex-col sm:w-1/2 justify-between gap-8'>
            <div className='font-bold text-4xl'>Find the perfect destination</div>
            <div className='font-light text-2xl'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
            <div className='flex justify-center'>
              <a href="#" className='hover:brightness-90 text-xl bg-blue-700 rounded-lg flex-grow max-w-sm p-3 text-center'>View More</a>
            </div>
          </div>
          <i className="text-[15rem] sm:w-1/2 m-auto text-right fa-solid fa-image"></i>
        </div>
      </main>
    </div>
  )
}

export default App
