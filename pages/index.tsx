import Link from "next/link";

const Home = () => {
    return(
        <>
            <Link href="/kommentek"><button>Kommentek</button></Link>
            <Link href="/kommentekKeppel"><button>Kommentek képekkel</button></Link>
        </>
    )
}

export default Home;