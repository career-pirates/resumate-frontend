import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import RetrospectiveList from './pages/RetrospectiveList'

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<h1>Home</h1>}
          />
          <Route
            path="/retrospectives/:id"
            element={<RetrospectiveList />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
