import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utilis/PrivateRoute'

import { Header } from './components'
import { Homepage, Dashboard, CreateProfile, UpdateProfile, DeletePage, DetailPage, Login, Register } from './pages';

function App() {
  return (
    <div className="w-full min-h-screen">
      <AuthProvider>
        <Header />
          <Routes>
              <Route path="/" element={ <Homepage /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/dashboard" element={ 
                <PrivateRoute>
                  <Dashboard /> 
                </PrivateRoute> 
                } />

              <Route path="/detailpage/:id" element={ 
                              <PrivateRoute>
                                <DetailPage /> 
                              </PrivateRoute> 
                              } />

              <Route path="/create" element={ 
                <PrivateRoute>
                  <CreateProfile /> 
                </PrivateRoute> 
                } />

              <Route path="/update/:id" element={ 
                              <PrivateRoute>
                                <UpdateProfile /> 
                              </PrivateRoute> 
                              } />

              <Route path="/delete/:id" element={ 
                              <PrivateRoute>
                                <DeletePage /> 
                              </PrivateRoute> 
                              } />
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
