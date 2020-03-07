import Vuex from "vuex";
import {DB_URL} from "@/private/keys"
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts;
            },
            addPost(state, post) {
                state.fetchedPosts.push(post);
            },
            updatePost(state, post) {

                // state.fetchedPosts[state.fetchedPosts.findIndex(item=>item.id==post.id)]
                state.fetchedPosts.map((fetchedPost, index) => {
                    if (fetchedPost.id == post.id) {
                        state.fetchedPosts[index] = post;
                    }
                })
            },
            removePost(state,id){
                state.fetchedPosts.splice(state.fetchedPosts.findIndex(post => post.id==id),1);
                
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log("Server üzerinde çalışıyor.");
                }
                return axios.get(DB_URL+"posts.json")
                    .then(response => {
                        let data = response.data;
                        let postArray = [];
                        for (let key in data) {
                            postArray.push({ ...data[key], id: key });

                        }
                        vuexContext.commit("setPosts", postArray);
                    })
            },

            addPost(vuexContext, post) {
                return axios
                    .post(DB_URL+"posts.json", post)
                    .then(res => {
                        vuexContext.commit("addPost", { ...post, id: res.data.name });
                    })
            },
            updatePost(vuexContext, post) {
                return axios.put(DB_URL+"posts/" +
                    post.id +
                    ".json", { title: post.title, subtitle: post.subtitle, author: post.author, text: post.text })
                    .then(res => {
                        vuexContext.commit("updatePost", post);
                    })
            },
            removePost(vuexContext, id) {
                return axios.delete(DB_URL+"posts/" +
                    id +
                    ".json")
                    .then(res=>{
                        vuexContext.commit("removePost",id)
                    })
            }
        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts;
            }
        }
    })
}

export default createStore;