package se.kth.sda.skeleton.post;

import javax.persistence.*;
import java.util.List;
import se.kth.sda.skeleton.comment.Comment;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String textBody;

    @OneToMany
    private List<Comment> comments;

    public Post() {
    }

    public Post(Long id, String textBody) {
        this.id = id;
        this.textBody = textBody;
    }

    public Long getId() {
        return id;
    }

    public String getTextBody() {
        return textBody;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }



    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

}
