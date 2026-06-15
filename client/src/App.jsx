import { Routes, Route } from 'react-router-dom'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import TitanSize     from './components/Titansize'
import TitansPage    from './pages/TitansPage'
import SoldiersPage  from './pages/SoldiersPage'
import StoryPage     from './pages/StoryPage'
import WallsPage from './pages/WallsPage'
import ChroniclesPage from './pages/ChroniclesPage'
import ExplorePage from './pages/ExplorePage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        {/* Home — existing Hero + TitanSize */}
        <Route path="/" element={
          <>
            <Hero />
            <TitanSize />
          </>
        } />

        <Route path="/titans"    element={<TitansPage />}    />
        <Route path="/soldiers"  element={<SoldiersPage />}  />
        <Route path="/story"     element={<StoryPage />}     />
        <Route path="/walls" element={<WallsPage />} />
        <Route path="/chronicle" element={<ChroniclesPage />}/>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App