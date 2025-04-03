import './App.css'
import { UploadJob } from './components/UploadJob'

function App() {
  return (
    <div>
      <h1 className='text-center text-red-400 text-6xl font-bold'>Job Portal</h1>
      <div className='container mx-auto px-4'>
          <div className='flex'>
            <UploadJob/>
          </div>
      </div>
    </div>
  )
}

export default App
