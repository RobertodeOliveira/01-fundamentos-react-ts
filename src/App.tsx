import './global.css'
import S from './App.module.css'
import { Header } from './components/Header/Header'
import { Post } from './components/Posters/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import { posts } from './mock/posts'

//iteração -> Laços oferrecem uma forma rápida de executar uma ação repetidas vezes. 
//forEach -> método forEach ele percorre o array, porém não possui nenhum retorno.

function App() {

  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <Sidebar />        
        <main>
          {posts.map( post => {
            return (
              <div key={post.id}>
               <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />
              </div>
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
