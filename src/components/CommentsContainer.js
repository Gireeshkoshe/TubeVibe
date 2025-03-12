import React from 'react'
import CommentsList from './CommentsList'
const CommentsContainer = () => {
    const commentsData=[{
        name:"Gireesh",
        text:"hiiiii",
        replies:[
            {
                name:"Gireesh",
                text:"hiiiii",
                replies:[{
                    name:"Gireesh",
                text:"hiiiii",
                replies:[
                    {
                        name:"Gireesh",
                text:"hiiiii",
                replies:[
                    {
                        name:"Gireesh",
                text:"hiiiii",
                replies:[]
                    }
                ]
                    }
                ]
                }]   
            }
        ]
    },{
        name:"Gireesh",
        text:"hiiiii",
        replies:[
            {
                name:"Gireesh",
                text:"hiiiii",
                replies:[{name:"Gireesh",
                    text:"hiiiii",
                    replies:[
                        {
                            name:"Gireesh",
                text:"hiiiii",
                replies:[]
                        }
                    ]}] 
            }
        ]
    },{
        name:"Gireesh",
        text:"hiiiii",
        replies:[
            {
                
            }
        ]
    }]
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl mb-3'>Comments :</h1>
      <CommentsList comments={commentsData}/>

    </div>
  )
}

export default CommentsContainer
