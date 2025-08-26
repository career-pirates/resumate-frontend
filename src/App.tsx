import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<h1>Home</h1>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
