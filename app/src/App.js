import './App.css';

import { lazy, Suspense } from 'react';

//import Texto from './Texto';
//import Link from './Link';

const Texto = lazy(() => import('./Texto'));
const Link = lazy(() => import('./Link'));
const Imagem = lazy(() => import('./Imagem'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Obrigada</p>}>
          <Imagem />
        </Suspense>
        
        <Suspense fallback={<p>por</p>}>
          <Texto />
        </Suspense>

        <Suspense fallback={<p>TUDO!!!</p>}>
        <Link />
        </Suspense>
        
      </header>
    </div>
  );
}

export default App;
