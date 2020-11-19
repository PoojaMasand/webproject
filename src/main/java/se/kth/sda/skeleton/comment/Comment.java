package se.kth.sda.skeleton.comment;
import se.kth.sda.skeleton.post.Post;
import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String body;
    private String email;

    @ManyToOne
    private Post post;


    public Comment() {
    }

    public Comment(Long id, String body, Post post, String email) {
        this.id = id;
        this.body = body;
        this.post = post;
        this.email = email;
    }

    public Post getPost() {
        return post;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
    public void setPost(Post post) {
        this.post = post;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
