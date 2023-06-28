import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '../src/Routes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((routes, index) => {
                        const Page = routes.component;
                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
