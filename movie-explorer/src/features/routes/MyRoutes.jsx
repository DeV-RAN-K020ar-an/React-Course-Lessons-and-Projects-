import { Routes, Route } from 'react-router'
import Home from '../home/Home'
import Movie from '../movie/Movie'
import Error from '../error/Error'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Movie />} />

            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MyRoutes