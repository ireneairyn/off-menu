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
        <title>OFF MENU</title>
      </Head>
      <div style={{ backgroundImage: "url('/background.png')" }}>
    </div>
    <div className="whiteBlock"></div>
      <div className="background">
        <div className="header">
          <h1>OFF MENU</h1>
          <h2>DREAM MEAL GENERATOR</h2>
        </div>
  
        <div className="content">
          <div className="image-container" onClick={handleImageClick}>
          <p>Click on the plate!</p>
            <Image 
              src="/food.svg" 
              alt="plate knife and fork" 
              width={200} 
              height={200} 
            />
            <p>to call the Genie!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
