// Render Prop
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import validationSchema from "./validations";
import InputText from "./components/InputText";
import TextArea from "./components/TextArea";
import { Row, Col, Button, Descriptions, message } from "antd";
import { FormContainer } from "./styles";
import { updateCharacter } from "scenes/Home/components/CharacterList/actions";
import { updateCharacterInfo } from "scenes/CharacterDetails/components/CharacterInfo/actions";

export default function Edit({
  id = 0,
  name = "",
  description = "",
  imageUrl = ""
}) {
  const dispatch = useDispatch();

  return (
    <div style={{ width: "100%" }}>
      <Formik
        initialValues={{
          id: id,
          name: name,
          description: description
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateCharacter({ ...values, imageUrl }));
          dispatch(updateCharacterInfo(values));
          setSubmitting(false);
          message.info("Successfully edited");
        }}
      >
        {({ isSubmitting }) => (
          <>
            <h3>Editing Character</h3>
            <Form>
              <FormContainer>
                <div style={{ width: "100%" }}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Descriptions>
                        <Descriptions.Item label="ID">{id}</Descriptions.Item>
                      </Descriptions>
                    </Col>
                    <Col span={12}>
                      <InputText placeholder="Name" name="name" />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <TextArea placeholder="Description" name="description" />
                    </Col>
                  </Row>
                </div>

                <Button htmlType="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormContainer>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
