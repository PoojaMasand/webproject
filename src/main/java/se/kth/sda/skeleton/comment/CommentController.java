package se.kth.sda.skeleton.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/comments")
    public List<Comment> viewAll() {
        return commentService.viewAll();
    }

    @PostMapping("/comments")
    public Comment create(@RequestBody Comment newComment)
    {
        return commentService.create(newComment);
    }
}
