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
            element={<h1>홈페이지 뷰 퍼블리싱 예정</h1>}
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
