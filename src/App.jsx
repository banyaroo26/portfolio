import Hero from "./Hero.jsx"
import Contact from "./Contact.jsx"
import Education from './Education.jsx'
import Technologies from './Technologies.jsx'
import Technology from './Technology.jsx'
import Activities from "./Activities.jsx"
import Footer from "./Footer.jsx"
import Projects from "./Projects.jsx"

import data from './data.jsx'
import './assets/css/font.css'

const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks;
}

const App = () => {
  return (

    <div className="min-vh-100 bg-light roboto-font">
      <div className="d-flex flex-column vh-100">

        <Hero />
        <Contact />
        <Education />

        <Technologies title="Technologies">
          {
            data.technologies.map((tech) => {
              return (
                <Technology title={tech.title} image={tech.image} key={tech.title} />
              )
            })
          }
        </Technologies>

        <Technologies title="Also Familiar With">
          {
            data.familiar.map((tech) => {
              return (
                <Technology title={tech.title} image={tech.image} key={tech.title} />
              )
            })
          }
        </Technologies>

        <Activities data={data.activities} />

        <Projects projectChunks={chunkArray(data.projects, 2)} />

        <Footer />

      </div>
    </div>

  )
}

export default App