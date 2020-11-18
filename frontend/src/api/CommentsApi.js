import Api from "./Api";

class CommentsApi{
    getAllComments() {
        return Api.get('/comments');
    }

    getPostById(id) {
        return Api.get('/comments/'+id);
    }

    createPost(post) {
        return Api.post('/comments', post);
    }

    updatePost(post) {
        return Api.put('/comments', post);
    }

    deletePost(id) {
        return Api.delete('/comments/'+id);
    } 
}

export default new CommentsApi();
