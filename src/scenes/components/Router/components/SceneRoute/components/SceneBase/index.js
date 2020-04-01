import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "antd";
import { LogoWrapper, SceneWrapper, NoWrap } from "./styles";

export default function SceneBase({
  title,
  subtitle,
  routes = [],
  onBack,
  history,
  children
}) {
  const breadcrumbItemRender = route => (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );

  return (
    <>
      <PageHeader
        title={title && <NoWrap>{title}</NoWrap>}
        subTitle={subtitle && <NoWrap>{subtitle}</NoWrap>}
        breadcrumb={{
          routes: [
            {
              path: "/",
              breadcrumbName: "Home"
            },
            ...routes
          ],
          itemRender: breadcrumbItemRender
        }}
        onBack={onBack && (() => onBack(history))}
        style={{ border: "1px solid rgb(235, 237, 240)" }}
      >
        <LogoWrapper>
          <img
            src="res/img/marvel-logo.png"
            alt="Marvel Logo"
            style={{ height: 50 }}
          />
        </LogoWrapper>
      </PageHeader>
      <SceneWrapper>{children}</SceneWrapper>
    </>
  );
}
