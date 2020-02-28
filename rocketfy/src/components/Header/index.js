import React from 'react';

import { BarChart2 } from 'styled-icons/remix-line/BarChart2';
import { TableChart } from 'styled-icons/material/TableChart';
import { NotificationsNone as Notification } from 'styled-icons/material/NotificationsNone';
import { ChevronDown as Down } from 'styled-icons/boxicons-regular/ChevronDown';
import { Ellipses } from 'styled-icons/open-iconic/Ellipses';

import Avatar from '../../assets/avatar.jpg';

import {
  Container,
  HeaderWrapper,
  HeaderWrapperInfos,
  SpanInfo,
  WrapperInfo,
  WrapperInfoUser
} from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Rocketfy</h1>
      <HeaderWrapper>
        <WrapperInfo>
          <SpanInfo>
            Lista simples de tarefas - <a href="http"> Atualize agora</a>
          </SpanInfo>

          <WrapperInfoUser>
            <Notification
              title="Notificações"
              size={23}
              className="notification"
            />

            <div className="avatar">
              <img src={Avatar} alt="avatar do usuário" />
              <div className="ellipses">
                <Ellipses size={12} />
              </div>
            </div>
          </WrapperInfoUser>
        </WrapperInfo>
        <HeaderWrapperInfos>
          <div className="menuInfo">
            <p title="Visualizar em Kanban" className="active">
              <BarChart2 size={21} className="rotate" />
              Visualizar em Kanban
              <Down size={21} className="down" />
            </p>

            <div className="bottom" />
          </div>
          <div className="report">
            <p title="Relatórios" className="notActive">
              <TableChart size={21} className="notActive" />
              Relatórios
              <Down size={21} className="down" />
            </p>
          </div>
        </HeaderWrapperInfos>
      </HeaderWrapper>
    </Container>
  );
}
