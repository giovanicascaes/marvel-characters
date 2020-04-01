import React from "react";
import { StyledCard as Card, CardContent } from "./styles";
import { MoreOutlined } from "@ant-design/icons";
import { CARD_WIDTH } from "scenes/Home/components/CharacterList/components/List/components/Card";

export default function LoadMoreCard({ onClick }) {
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{
        width: CARD_WIDTH,
        height: "100%",
        borderRadius: 10
      }}
    >
      <CardContent>
        <MoreOutlined style={{ fontSize: CARD_WIDTH * 0.5 }} rotate={90} />
      </CardContent>
    </Card>
  );
}
