import { marketing_links } from 'pages/Marketing/constants';
import React from 'react'
import styled from 'styled-components'
import { MdContentCopy } from "react-icons/md"
import { AiFillSetting } from 'react-icons/ai';

const LinksContainer = styled.div`
  position: relative;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 2px;
`;

const Links = styled.div`
  background-color: rgb(255, 255, 255);
  overflow: auto;
  height: calc(100vh - 170px);

  &::-webkit-scrollbar {
    cursor: pointer;
    height: 5px;
    width: 5px!important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(223, 227, 246) !important;
    border: 0;
  }

  table {
    margin: 0px;
    width: 100%;
    background: rgb(255, 255, 255);

    thead {
      background-color: rgb(255, 255, 255);
      position: sticky;
      top: 0px;
      box-shadow: rgb(128 116 116 / 5%) 3px 5px 5px 1px
    }

    tr {
      transition: all 0s ease 0s, all 0.3s ease 0s;
      cursor: pointer;

      &:hover {
        background: rgba(228, 230, 239, 0.314);
      }
    }

    th, td {
      border: none;
      color: rgb(51, 51, 51);
      font-style: normal;
      font-weight: normal;
      font-size: 14.7px;
      line-height: 20px;
      padding: 13px 20px;

      img {
        width: 40px;
        object-fit: cover;
      }

      svg {
        font-size: 18px;
      }

      .d-flex {
        gap: 10px
      }

      button {
        transition: .3s
      }

      button:hover {
        color: #009ef7
      }
    }
  }
`

export default function MarketingLinks() {
  return (
    <LinksContainer>
      <Links>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Image</th>
              <th className='text-center'>Web Link</th>
              <th className='text-center'>Bot Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {marketing_links.map((link, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{link.title}</td>
                <td>
                  {link.image_url ? (
                    <img
                      src={link.image_url}
                      alt={link.title}
                    />
                  ) : null}
                </td>
                <td>
                  <div className='d-flex justify-content-end align-items-center'>
                    <span>{link.web_link}</span>
                    <button>
                      <MdContentCopy />
                    </button>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end align-items-center'>
                    <span>{link.bot_link}</span>
                    <button>
                      <MdContentCopy />
                    </button>
                  </div>
                </td>
                <td>
                  <button>
                    <AiFillSetting />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Links>
    </LinksContainer>
  )
}
