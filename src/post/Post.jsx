import './post.css';
export default function Post() {
    return (
        <div>
            <div className="post">
                <img 
                    src="./images/img-3.jpg" 
                    alt="" 
                />
                <div className="postInfo">
                    <div className="postCategories">
                        <span className="postCategory">Music</span>
                        <span className="postCategory">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet
                    </span>
                </div>
            </div>
        </div>
    )
}
