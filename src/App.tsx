import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import RetrospectiveList from './pages/RetrospectList'
import RetrospectiveDetail from './pages/RetrospectDetail'
import EmptyLayout from './layouts/EmptyLayout'
import RetrospectCreate from './pages/RetrospectCreate'

function App() {
  return (
    <>
      <Routes>
        <Route element={<EmptyLayout />}>
          <Route
            path="/retrospectives/new"
            element={<RetrospectCreate />}
          />
        </Route>

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
