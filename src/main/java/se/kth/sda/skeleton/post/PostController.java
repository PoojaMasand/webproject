package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.skeleton.auth.AuthRequest;
import se.kth.sda.skeleton.auth.AuthResponse;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostService service;


    @GetMapping("/posts")
    public List<Post> viewAll() {
        return service.viewAll();
    }

    @PostMapping("/posts")
    public Post create(@RequestBody Post newPost)
    {
        return service.create(newPost);
    }



}
