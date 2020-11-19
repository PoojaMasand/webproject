package se.kth.sda.skeleton.post;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String textBody;

    private String title;

    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

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

    public Post(Long id, String textBody,String title,String email) {
        this.id = id;
    }


    public void setTextBody(String textBody) {
        this.textBody = textBody;
        this.title = title;
        this.email = email;
    }



    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

}
