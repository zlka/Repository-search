import { useSelector } from "react-redux";
import { RepoCard } from "../../components";
import { UserCard } from '../'
import './style.css'

function RepoList() {   
    const repos = useSelector(state => state.repos)
    const loading = useSelector(state => state.loading)


    const renderRepos = repos.map((repo,idx) => 
            <RepoCard repository={repo} key={idx} />
        );
    

    return (
        <>
        {
            loading ? <h2>Loading . . .</h2>
            :
            <> 
            <UserCard />
            <section id ='repoCards'> { renderRepos } </section>
            </>
        }
        </>
    );
}

export default RepoList

