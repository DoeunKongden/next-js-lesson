'use client'
import Link from "next/link"


// error.js reserved file when an error has occur NextJs will pass some props to that error component
// The error prop has some more detail about the error that is occuring
// Note* : we'll try to use error prop when back-end passes and error message
export default function Error({error}){
    return(
        <main className="error">
            <h1>Error Has Occur!</h1>
            <p>Fail to fetch meal data. Please try again later.</p>
            <button><Link href='/'>Back Home</Link></button>
        </main>
    )
}