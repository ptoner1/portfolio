import { useEffect, useState } from 'react';

import { Nav, Logo } from './components/header';
import { MainVideo, MainDescription, ProjectList, Portrait } from './components/main';
import { Email } from './components/footer';

import { colorlist } from './styles/colors';
import { data } from './projectsData';

function App() {

  const [colors, setColors] = useState(['rgb(189, 158, 177)', 'rgb(114, 8, 102)']);
  const [screen, setScreen] = useState('small');
  const [project, setProject] = useState('about');
  const projectData = data.filter(p => p.name === project)[0];

  // On mount, choose a random set of colors from our colorlist array and initialize styling.
  useEffect(() => {
    const num = Math.floor(Math.random() * colorlist.length);
    const link = document.getElementById('favicon');
    link.href = `/favicon${num + 1}.svg`
    setColors(colorlist[num])
  }, [])

  // We need this part of the process separated because we also need it to run when the 
  // LOGO component changes our color state
  useEffect(() => {
    const app = document.querySelector('.app');
    app.style.setProperty('--color-1', colors[0]);
    app.style.setProperty('--color-2', colors[1]);
  }, [colors])


  return (
    <div className='app'>
      <main className='main'>
        <div className='main__inner'>

          <div className='main__inner__header'>
            <Logo colors={colors} setColors={setColors} />
            <Nav />
          </div>

          {/* {project === 'about'
            ? <Portrait screen={screen} img={projectData.img} />
            : <MainVideo screen={screen} setScreen={setScreen} project={projectData} />
          } */}

          <MainVideo screen={screen} setScreen={setScreen} project={projectData} />


          <MainDescription project={projectData} screen={screen} />

          <ProjectList screen={screen} setProject={setProject} currentProject={project} />

          <Email />

        </div>
      </main>
    </div>
  );
}

export default App;