/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import S from './Post.module.css'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {  ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

 interface Author { 
  name: string
  role: string
  avatarUrl: string;
}

 interface Content {
  type: 'paragraph' | 'link'
  content: string 
}

 interface PostProps {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({ author, publishedAt, content }: PostProps) {

  const publishedDateFormatted = format(publishedAt,  "dd 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  })
  //Variável que irá receber a informação de data. A mesma armazenará e aplicará o método

  //A forma a baixo é o método de exbição da data relativa a dara atual.. Ou seja: ex -> a cerca de 2 dias.
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  }) 

  const [comment, setComment] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState('')
  console.log(newCommentText)
  // useEffect(() =>{ },[newCommentText])

  const handlNewComment = (event: FormEvent) => {
    event.preventDefault()
   
    setComment([...comment, newCommentText])
    setNewCommentText('')
  }
  console.log(comment)
  const handleNewCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => { 
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  const deleteComment = (commentToDelete: string ) => {
    const commentWithouDeleteOne = comment.filter(comment => {
      return comment ==! commentToDelete
    })
    
    setComment(commentWithouDeleteOne)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    console.log(event.target.setCustomValidity("Este campo é obrigatório"))
  } 

  const newCommentEmpity = newCommentText.length === 0

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>  
          <Avatar hasBorder src={author.avatarUrl}/> 
          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={S.content}>
        {content.map((line, index) => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return  <p key={index}><a href="">{line.content}</a></p>
        }
      })}
      </div>
      <form onSubmit={handlNewComment} className={S.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          onChange={handleNewCommentText} 
          value={newCommentText} 
          name='input' 
          placeholder='Deixe seu comentário' 
          onInvalid={handleNewCommentInvalid}
          required
          />
        <footer>
          <button type='submit' disabled={newCommentEmpity}> 
            Publicar
          </button>
        </footer>
      </form>
      <div>
      {comment.map(comment => {
          return <Comment onDeleteComment={deleteComment} key={comment} content={comment} />
        })}
      </div>
    </article>
  )
}

//date fns ou intl
