import { ThumbsUp, Trash } from 'phosphor-react'
import S from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment }: CommentProps){ 

  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  } 

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  } 

  return( 
    <div className={S.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/110266894?v=4" alt="" />
        <div className={S.commentWrapper}>
          <div className={S.commentBox}>
            <div className={S.commentContent}>
              <header>
                <div>
                  <p className={S.author}>Roberto Melo (você)</p>
                  <p className={S.time}>Cerca de 2h</p> 
                </div>
                <button onClick={handleDeleteComment} title='Detelar comentário'>
                <Trash size={15} />
                </button>
              </header>
              <div className={S.commentMessage}>
                <p>{content}</p>
              </div>
            </div>  
          </div> 
            <div className={S.buttonInteractive} onClick={handleLikeComment}>  
              <button> 
                <div style={{display: 'flex', cursor: 'pointer'}} >
                  <ThumbsUp  size={20} />Apaudir<span>{likeCount}</span>
                </div>
              </button>
            </div> 
        </div>
    </div>
  )
}