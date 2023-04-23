import React from 'react'
import { MenuItem } from './components';
import { menu_links } from './constants';
import { Aside, MenuLinks } from './index.style';

export default function Menu() {
  return (
    <Aside>
      <MenuLinks>
        {menu_links.map((item, i) => <MenuItem key={i} {...item} />)}
      </MenuLinks>
    </Aside>
  )
}


