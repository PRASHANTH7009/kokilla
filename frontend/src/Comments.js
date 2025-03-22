import React, { useState } from 'react';

function Comment({ comment, onReply }) {
  const [reply, setReply] = useState('');

  function handleReplyClick() {
    onReply(comment, reply);
    setReply(''); // Clear reply input after adding reply
  }

  return (
    <div>
      {comment.value}
      <button onClick={handleReplyClick}>Reply</button>
      <input type='text' value={reply} onChange={(e) => setReply(e.target.value)} />
      {/* Render replies */}
      {comment.reply && comment.reply.map(reply => (
        <div key={reply.id}>
          {reply.value}
        </div>
      ))}
    </div>
  );
}

function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function handleComment() {
    if (comment.trim() !== '') {
      setComments([...comments, {
        id: Date.now(),
        value: comment,
        reply: []
      }]);
      setComment(''); // Clear comment input after adding comment
    }
  }

  function handleReply(comment, replyText) {
    if (replyText.trim() !== '') {
      comment.reply.push({
        id: Date.now(),
        value: replyText,
        reply: []
      });
      setComments([...comments]); // Trigger rerender by updating state
    }
  }

  return (
    <div>
      <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleComment}>Comment</button>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} onReply={handleReply} />
      ))}
    </div>
  );
}

export default Comments;
