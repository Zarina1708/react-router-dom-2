
import React, { useEffect, useState } from "react"


const url = 'https://jsonplaceholder.typicode.com/photos ';

export default function Main () {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(url).then(response =>response.json()).then(post => setPost(post))}, [])
    

    return (
        <>
            <h3 style={{
                textAlign: 'center',
                color: 'blueviolet',
                fontSize: '32px',
            }}>Posts</h3>

            {
                post.map(item => <div>
                    <h1>title: {item.title}</h1>
                    <img src={item.url} alt="" />
                    <h4>id: {item.id}</h4>
                    <p>-----------------------------------------</p> 
                </div>)
            }
            
        </>
    )
}