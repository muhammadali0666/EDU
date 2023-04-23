import { MenuLinkItem } from 'components/Menu/index.style'
import React, { useState } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SubLink, SubLinks, SubLinksTitle, SubLinksWrapper } from './index.style'

export default function MenuItem({ sub_links, name, link, Icon }) {
  const [showSubLinks, setShowLinks] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
    >
      <OverlayTrigger
        placement="right"
        show={showSubLinks}
        overlay={sub_links?.length ? (
          <SubLinksWrapper>
            <SubLinksTitle>{name}</SubLinksTitle>
            <SubLinks>
              {sub_links.map((link, i) => (
                <SubLink key={i}>
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </SubLink>
              ))}
            </SubLinks>
          </SubLinksWrapper>
        ) : <></>}
      >
        <MenuLinkItem to={link}>
          <Icon />
          {name}
        </MenuLinkItem>
      </OverlayTrigger>
    </div>
  )
}
