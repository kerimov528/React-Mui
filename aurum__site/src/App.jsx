import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './router'


const App = () => {
  return (
    <Router>
      <Routes>
        {
          routes.map(({ component: Component, path }, keys) => {
            return (
              <React.Fragment key={keys}>
                <Route path={path} element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                } />
              </React.Fragment>
            )
          })
        }
      </Routes>
    </Router>
  )
}

export default App