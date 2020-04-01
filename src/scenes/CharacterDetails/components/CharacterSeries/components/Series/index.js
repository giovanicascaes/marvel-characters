import React from "react";
import { List, Skeleton, Button } from "antd";
import Emptiable from "components/Emptiable";
import Serie from "./components/Serie";
import { Footer } from "./styles";

export default function Series({
  isLoading,
  series,
  hasMoreToLoad,
  onLoadMore
}) {
  return (
    <>
      <Skeleton loading={isLoading} active paragraph={false}>
        <h3>Series</h3>
      </Skeleton>
      <Emptiable titleWhenEmpty="Character hasn't appeared in series">
        {(isLoading || series.length) && (
          <List
            itemLayout="horizontal"
            dataSource={series}
            renderItem={({ id, thumbnail, title, descritption }) => (
              <Serie
                isLoading={isLoading && !id}
                imageUrl={
                  thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : ""
                }
                title={title}
                description={descritption}
              />
            )}
            footer={
              hasMoreToLoad && (
                <Footer>
                  <Button type="link" onClick={onLoadMore}>
                    Load More...
                  </Button>
                </Footer>
              )
            }
          />
        )}
      </Emptiable>
    </>
  );
}
