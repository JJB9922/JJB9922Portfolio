import './App.css'
import LandingCard from './components/LandingCard';
import VerticalTimeline from './components/VerticalTimeline';

function App() {
  return(
    <div className ="scroll-smooth bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-blue-800 h-screen overflow-auto" style={{ overscrollBehavior: 'auto' }}>
      <LandingCard />
      <VerticalTimeline/>
    </div>
  );
}

export default App
