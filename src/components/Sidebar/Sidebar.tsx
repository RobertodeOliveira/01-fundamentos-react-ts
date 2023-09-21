import { Avatar } from '../Avatar/Avatar'
import S from './Sidebar.module.css'
import {PencilSimpleLine} from 'phosphor-react'

export function Sidebar() {
  return (
    <>
    <aside className={S.sidebar}>
    <img className={S.cover} src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />
    <div className={S.profile}>
      <Avatar hasBorder src="https://avatars.githubusercontent.com/u/92532306?v=4" />
      <strong>Roberto Oliveira</strong>
      <span>Web Developer</span>
    </div>
      <footer>
        <a href=""> <PencilSimpleLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
    </>
  )
} 