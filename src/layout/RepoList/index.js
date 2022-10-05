import { useSelector } from "react-redux";
import { RepoCard } from "../../components";

function RepoList() {   
    const repos = useSelector(state => state.repos)
    const loading = useSelector(state => state.loading)
    console.log(repos)


    const renderRepos = repos.map(repo => 
            <RepoCard repository={repo} />
        );
    

    return (
        <>
        {
            loading ? <h2>Loading . . .</h2>
            : <section> { renderRepos } </section>
        }
        </>
    );
}

export default RepoList

