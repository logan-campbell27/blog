import React from 'react';
import Post from'./Post';
import AddPost from './AddPost';
class App extends React.Component{
    state = {
        nextIDnumber: 3,
        posts:[
            {
                postNumber: 0,
                text: "A very interesting blog post about nothing"
            },
            {
                postNumber: 1,
                text: "Star Wars 7-9 flop"
            }, 
            {
                postNumber: 2,
                text: "Why the detroit lions will win the super bowl"
            }
        ]
    }

    deleteBlogPost(toBeDeleted){
        console.log("Going to delete blog post # ",toBeDeleted);
        var postsToDelete = this.state.posts.filter((post)=>{
            console.log(post.postNumber, toBeDeleted);
            return post.postNumber === toBeDeleted;
        });
        this.setState({posts: this.state.posts.filter(
            (post)=>{
                return post !== postsToDelete[0];
            }
        )});
    }

    addNewPost = (t) =>{
        this.setState({nextIDnumber: this.state.nextIDnumber +1});
        var newPost = {
            postNumber: this.state.nextIDnumber,
            text: t
        }
        var newArray = this.state.posts.concat(newPost);
        this.setState({posts: newArray});
    }

    render(){
        const posts = this.state.posts.map(
            (onePost)=> {
                return (<Post onClick = {this.deleteBlogPost} text ={onePost.text} id = {onePost.postNumber} />);
            }
        );
        return (
            <div>
                <AddPost onClick = {this.addNewPost}/>
                {posts}
            </div>
        );
    }
}

export default App;