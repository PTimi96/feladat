import Link from "next/link";

const Home = () => {
    return (
        <>
            <Link href="/component/comment"><button>Kommentek</button></Link>
            <Link href="/component/commentwithpics"><button>Kommentek képekkel</button></Link>
        </>
    )
}

export default Home;