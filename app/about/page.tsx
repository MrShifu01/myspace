export const dynamic = 'force-static'

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About us",
    description: "We are a social media company!",
}

export default async function Blog() {

    return (
        <main>
            <h1 style={{color: "black"}}>About</h1>
            <p style={{color: "black"}}>We are a social media company!</p>
        </main>
    )
}