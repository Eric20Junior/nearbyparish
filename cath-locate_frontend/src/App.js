import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utilis/PrivateRoute'

import { AdminDashboard, Layout, AdminLogin, Users, DeleteUser, Faq, CreateFaq, UpdateFaq, DeleteFaq } from './dashboard'
import { UserDashboard, UserLayout } from "./dashboard";
import { Homepage, CreateProfile, UpdateProfile, DeletePage, DetailPage, Login, Register, Churches, FAQ, SupportForm } from './pages';
import { useState } from "react";


function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="w-full min-h-screen">
      <AuthProvider>
              {/* <Header /> */}
      <Routes>


        {/* User Dashboard Route */}
        <Route path="/" element={ <Homepage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/faq" element={ <FAQ /> } />
        <Route path="/support" element={ <SupportForm /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <UserLayout /> }>
            <Route path="/dashboard" element={ <UserDashboard /> } />

            <Route path="/dashboard/churches" element={ 

              <Churches />

            } />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin/login" element={ 
        <AuthProvider>
          <AdminLogin /> 
        </AuthProvider> 
        } />

        <Route path="/admin" element={ <Layout /> }> 
            <Route path="" element={ 
              <AuthProvider>
                <AdminDashboard /> 
              </AuthProvider>

              } />
            <Route path="/admin/churches" element={ 
            <PrivateRoute>
              <Churches />
            </PrivateRoute>
            } />
            <Route path="/admin/detailpage/:id" element={ <PrivateRoute>
              <DetailPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </PrivateRoute>
              } />
            <Route path="/admin/delete/:id" element={ 
                        <PrivateRoute>
                          <DeletePage /> 
                        </PrivateRoute> 
                        } />

            <Route path="/admin/users/" element={ 
                            <PrivateRoute>
                              <Users /> 
                            </PrivateRoute>
                        
                            } />

            <Route path="/admin/users/delete/:id" element={ 
                                <PrivateRoute>
                                  <DeleteUser /> 
                                </PrivateRoute>
                          
                              } />

            <Route path="/admin/faq/" element={ 
                                <PrivateRoute>
                                  <Faq /> 
                                </PrivateRoute>
                          
                              } />

            <Route path="/admin/faq/create" element={ 
                                <PrivateRoute>
                                  <CreateFaq /> 
                                </PrivateRoute>
                          
                              } />

            <Route path="/admin/faq/update/:id" element={ 
                                    <PrivateRoute>
                                      <UpdateFaq /> 
                                    </PrivateRoute>           
                                
                                    } />

            <Route path="/admin/faq/delete/:id" element={ 
                                          <PrivateRoute>
                                            <DeleteFaq /> 
                                          </PrivateRoute>
                                        
                                            } />
        </Route>




          {/* users Route */}
        <Route path="/detailpage/:id" element={ 
                    
                          <DetailPage /> 
                      
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
