package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.auth.*;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;


import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;


    @GetMapping("/posts")
    public List<Post> viewAll() {
        return postService.viewAll();
    }

    //get specific task by ID
    @GetMapping("posts/{id}")
    public Post getById(@PathVariable Long id){
        return postService.getById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/posts")
    public Post create(@RequestBody Post newPost) {
        System.out.println(newPost);


        System.out.println("User Email ************" + authService.getLoggedInUserEmail());

        newPost.setEmail(authService.getLoggedInUserEmail());
        return postService.create(newPost);
    }

    @GetMapping("/currentUser")
    public User getCurrentUser() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);

    }
    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable long id) {
        postService.delete(id);
    }

}

