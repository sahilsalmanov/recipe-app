import React, { useEffect , useState } from 'react';
import "../Home/Home.css";
import axios from 'axios';
import Post from '../../Components/Post/Post';
import Cookies from 'js-cookie';
import BeforeSignHome from '../../Components/BeforeSignHome/BeforeSignHome';
import { useNavigate } from 'react-router-dom';
import ControlledCarousel from '../../Components/Carosel/ControlledCarousel';
import BlogPostCardHome from '../../Components/BlogPostCardHome/BlogPostCardHome';
import { useActiveUserContext } from '../../hooks/useActiveUserContext';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useUsersContext } from '../../hooks/useUsersContext';
import SearchResult from '../../Components/SearchResult/SearchResult';
import Overlay from '../../Components/Overlay/Overlay';
import { useCommentsContext } from '../../hooks/useCommentsContext';
import PageLoader from '../PageLoader/PageLoader';
import { SET_POSTS } from '../../redux/postsSlice';
import Footer from '../../Components/Footer/Footer';

const Home = () => {

  const navigate = useNavigate();
  const {comments, dispatchComments} = useCommentsContext();

  const {posts, dispatch} = usePostsContext(); 
  const {activeUser, dispatchActiceUser} = useActiveUserContext();
  const {users, dispatchUsers} = useUsersContext();
  const [allPosts, setAllPosts] = useState();
  const [cate, setCate] = useState();


  const filterCategory = (category) =>{
    console.log(category)
    setCate(category);
    if(category === "all"){
      setAllPosts(posts);
    }
    else{
      const tempArray = posts.filter((post) => post.category === category);
      setAllPosts(tempArray);
    }
   
  }

  

  useEffect(()=>{
      navigate("/", {replace : true});

      const fetchActiveUser = async () =>{
        try{

          if(Cookies.get("jwt")){
              const res = await axios.post("/api/auth/active-user", {token : Cookies.get("jwt")} );

              if(res.status === 200){
                console.log(res.data.user);
                dispatchActiceUser({type : "GET_ACTIVE_USER", payload : res.data.user});
              }
              
            }
          }
          catch(error){
            console.log(error.message);
          }
      }

        const fetchPosts = async () =>{
          try{
            const res = await axios.get("/api/posts/posts");

            if(res.status === 200){
              setAllPosts(res.data.posts);
              dispatch({type :"SET_POSTS", payload : res.data.posts.reverse()})
            }
            else{
              console.log(res.data.msg)
            }

          }catch(error){
            console.log(error.message);
          }
      }

      const fetchUsers = async () =>{
        try{
          const res = await axios.get("/api/auth/all-users");

          if(res.status === 200){
             dispatchUsers({type : "SET_USERS", payload : res.data.users});
             console.log(users)
          }
        }
        catch(error){
          console.log(error.message);
        }
      }


      const fetchComments = async () =>{
        try{
          const res = await axios.get("/api/comments/all-comments");

          if(res.status === 200){
            dispatchComments({ type : "SET_COMMENTS" , payload : res.data.comments});
          }
        }
        catch(error){
          console.log(error.message);
        }
      }

     fetchPosts();
     fetchActiveUser();
     fetchUsers();
     fetchComments();

  },[dispatch])

  return (
    
  <>
    <div className='home'>

<div className="home_wrapper">
      <div className="leftHome">
            {
            Cookies.get("jwt") && activeUser ? 

            allPosts?.length === 0 ? <p className='posts_not_found'>No Recipes of {cate} Category</p>: 
            allPosts?.map((post)=>{
              return <BlogPostCardHome key={post._id} post={post} />
            })
             
            :
            <BeforeSignHome /> 
          }
      </div>
      {activeUser?
        <div className="rightHome">
           <h2 className='catogory_heading'>Categories</h2>
           <div className="categories_wrapper">
                <span className='category_item' onClick={()=> filterCategory("maindishes")}>Main Dishes</span>
                <span className='category_item' onClick={()=> filterCategory("desserts")}>Desserts</span>
                <span className='category_item' onClick={()=> filterCategory("soups")}>Soups</span>
                <span className='category_item' onClick={()=> filterCategory("salads")}>Salads</span>
                <span className='category_item' onClick={()=> filterCategory("snacks")}>Snacks</span>
                <span className='category_item' onClick={()=> filterCategory("beverages")}>Beverages</span>
                <span onClick={()=> filterCategory("cookie")}>Cookie</span>
                <span className='category_item' onClick={()=> filterCategory("cake")}>Cake</span>
                <span className='category_item' onClick={()=> filterCategory("icecream")}>Ice Cream</span>
                <span className='category_item' onClick={()=> filterCategory("all")}>All</span>
           </div>
      </div>
      :
      ""
      }
      
</div>
 
</div>
  <Footer/>
  </>
  
  )
}

export default Home