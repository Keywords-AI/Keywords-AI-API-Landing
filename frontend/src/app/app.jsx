import { Navbar } from './components/Navbar/Navbar';
import { Page } from './components/Page/Page';

import { Landing } from './pages/Landing';
export function App() {
  return (
    <div className="bg-gray-black w-screen h-screen">
      <Navbar />
      <Landing />
    </div>
  );
}
export default App;
