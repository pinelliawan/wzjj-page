import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends React.Component {

  // handleLinkClick = pathname => {
  //   const { changeFilter,changeCompleted } = this.props
  //   //重置
  //   changeFilter('')
  //   changeCompleted('all')
  // }

  render() {
    return <ul className='Sidebar'>
      <li><NavLink to='/houtai/news'>新闻</NavLink></li>
      <li><NavLink to='/houtai/signup'>报名</NavLink></li>
    </ul>
  }
}

export default Sidebar
