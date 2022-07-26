import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import CommentsList from "../comments/CommentsList";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  // console.log("comments");
  const addedCommentHandler = () => {};
  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    // const  loadedComments1 = loadedComments.map((element) => console.log(element.text));
    comments = <CommentsList comments={loadedComments}></CommentsList>;
  }

  if (
    status === "completed" ||
    !loadedComments ||
    loadedComments.length === 0
  ) {
    comments = <p className="centered">no comments were added yet </p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
