import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Logo from './components/Logo.js';
import { MainVideo, MainDescription, ProjectList, Portrait } from './components/main';

function App() {

  const [colors, setColors] = useState(randomColors());
  const [screen, setScreen] = useState('small');
  const [project, setProject] = useState('about')

  function randomColors() {
    const rand1 = Math.floor(Math.random() * 100 + 155);
    const rand2 = Math.floor(Math.random() * 100 + 155);
    const rand3 = Math.floor(Math.random() * 100 + 155);

    const color1 = `rgb(${rand1}, ${rand2}, ${rand3})`;

    const randomTwist = Math.floor(Math.random() * 3 + 1);
    let rand4 = rand1 - 75;
    let rand5 = rand2 - 75;
    let rand6 = rand3 - 75;
    if (randomTwist === 1 && rand1 > 155) rand4 = rand1 - 150;
    if (randomTwist === 2 && rand2 > 155) rand5 = rand2 - 150;
    if (randomTwist === 3 && rand3 > 155) rand6 = rand3 - 150;

    const color2 = `rgb(${rand4}, ${rand5}, ${rand6})`

    return [color1, color2]
  }

  useEffect(() => {
    const app = document.querySelector('.app');
    app.style.setProperty('--color-1', colors[0]);
    app.style.setProperty('--color-2', colors[1]);
  }, [colors])

  return (
    <div className='app'>
      <main className='main'>
        <div className='main__inner'>
          <Logo colors={colors} randomColors={randomColors} setColors={setColors} />
          <Nav />

          {project === 'about'
            ? <Portrait screen={screen} />
            : <MainVideo screen={screen} setScreen={setScreen} />
          }
          <MainDescription name={project} screen={screen} />
          <ProjectList screen={screen} setProject={setProject} currentProject={project} />

        </div>
      </main>
    </div>
  );
}

export default App;
