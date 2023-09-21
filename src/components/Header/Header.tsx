import S from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <div className={S.header}>
      <img src={igniteLogo} alt="Logo tipo do Ignite" />
    </div>
  );
}