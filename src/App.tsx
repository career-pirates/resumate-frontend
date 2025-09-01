import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import RetrospectiveList from './pages/RetrospectiveList'
import RetrospectiveDetail from './pages/RetrospectiveDetail'

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<h1>홈페이지 뷰 퍼블리싱 예정</h1>}
          />
          <Route>
            <Route
              path="/retrospectives/:folderId"
              element={<RetrospectiveList />}
            />
            <Route
              path="/retrospectives/:folderId/:retroId"
              element={<RetrospectiveDetail />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
