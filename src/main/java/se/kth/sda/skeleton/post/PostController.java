package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.AuthService;


import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    AuthService authService;


    @GetMapping("/posts")
    public List<Post> viewAll() {
        return postService.viewAll();
    }

    @PostMapping("/posts")
    public Post create(@RequestBody Post newPost) {
        System.out.println(newPost);


        System.out.println("User Email ************" + authService.getLoggedInUserEmail());

        newPost.setEmail(authService.getLoggedInUserEmail());
        return postService.create(newPost);
    }


    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable long id) {
        postService.delete(id);
    }

}

