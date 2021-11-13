import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {useState,useEffect} from 'react';
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export default function Feed({username}) {
    const [posts,setPosts] = useState([])
    const {user} = useContext(AuthContext)            
    console.log(`Came in feed`)
    
    useEffect(()=>{

        const fetchPosts = async  ()=>{
            
            
            const response =username
            ?
            await axios.get("/posts/profile/"+username)
            :await axios.get("/posts/timeline/"+user._id)


            setPosts(response.data.sort((p1,p2)=>{
                return new Date(p2.createdAt)-new Date(p1.createdAt);
            }))
            
        }
        fetchPosts()
    },[username,user._id])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
        
                {(!username||username===user.username) && <Share/>}
                {
                    posts.map(p=>(
                        
                        <Post key={p._id} post={p} />
                    )
                        
                        
                        )
                }
            </div>
        </div>
    )
}
