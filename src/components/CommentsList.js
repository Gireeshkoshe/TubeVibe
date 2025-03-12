import React from 'react'
import Comments from './Comments'

const CommentsList = ({comments}) => {
  return comments.map((comment,index)=>(
    <div className='' key={index}>
         <Comments  info={comment} />
         <div className='ml-5 pl-5 border border-l-black'>
         {comment.replies && comment.replies.length > 0 && (
          <CommentsList comments={comment.replies} />
        )}
        </div>
    </div>
  ))
}

export default CommentsList
