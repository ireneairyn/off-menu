import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

function HomePage() {
  const router = useRouter();

  const handleImageClick = () => {
    router.push('/form')
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Off Menu Dream Meal Generator</title>
      </Head>
      <div>
        <h1>OFF MENU</h1>
        <h2>DREAM MEAL GENERATOR</h2>
        <Image 
          src="/food.svg" 
          alt="Off Menu Podcast Image" 
          width={1000} 
          height={500} 
          onClick={handleImageClick}
        />
        <p>Click on the plate to call the Genie and start your dream menu!</p>
      </div>
    </>
  )
}

export default HomePage
