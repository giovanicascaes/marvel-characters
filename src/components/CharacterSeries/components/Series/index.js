import React from "react";
import { List, Skeleton } from "antd";
import Emptiable from "components/Emptiable";
import Serie from "./components/Serie";

export default function Series({ isLoading, series }) {
  return (
    <Emptiable titleWhenEmpty="O personagem não apareceu em nenhuma série">
      {(isLoading || series.length) && (
        <>
          <Skeleton loading={isLoading} active paragraph={false}>
            <h3 style={{ fontWeight: "bold" }}>Series</h3>
          </Skeleton>
          <List
            itemLayout="horizontal"
            dataSource={series}
            renderItem={serie => {
              const { thumbnail, title, description } = serie;
              const serieProps = isLoading
                ? {
                    imageUrl: "",
                    name: "",
                    description: ""
                  }
                : {
                    imageUrl: `${thumbnail.path}.${thumbnail.extension}`,
                    title,
                    description
                  };
              return <Serie isLoading={isLoading} {...serieProps} />;
            }}
          />
        </>
      )}
    </Emptiable>
  );
}
