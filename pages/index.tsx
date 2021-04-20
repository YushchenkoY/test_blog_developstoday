// import styles from '../styles/Home.module.css'
import MainLayout from '../components/MainLayout'



export default function Home() {
  return (
    <MainLayout page={"Home page"}>
      <div >
        <h1>MY BLOG</h1>
        <p>This is a test task for DevelopsToday</p>
      </div>
      <style jsx>{`
        div {
          margin: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        div p{
          font-size: 20px;
        }

      `}
      </style>
    </MainLayout>
  )
}
