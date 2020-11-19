package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepository repo;

    public List<Post> viewAll()
    {
        return repo.findAll();
    }

    public Post create(Post newPost)
    {
        return repo.save(newPost);
    }

    public void delete(long id) {
        repo.deleteById(id);
    }
}


