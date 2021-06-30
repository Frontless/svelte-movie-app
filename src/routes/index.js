import Home from "~/routes/Home.svelte"
import About from "~/routes/About.svelte"
import Movie from "~/routes/Movie.svelte"
import NotFound from "~/routes/NotFound.svelte"
const routes = {
    '/': Home,
    '/about': About,
    '/movie/:id': Movie,
    '*': NotFound
}

export default routes