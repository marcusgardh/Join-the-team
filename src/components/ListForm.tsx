import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps } from "formik";
import React from "react";
import * as Yup from "yup";

interface ListFormProps {
  sendName(name: string): void;
}

export const ListForm: React.FC<ListFormProps> = ({
  sendName,
}: ListFormProps) => {
  const initialValues = {
    name: "",
    email: "",
    terms: false,
  };

  const FormValidation = Yup.object().shape({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    terms: Yup.boolean().isTrue("Must be checked!"),
  });

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={FormValidation}
        onSubmit={(values, { setSubmitting }) => {
          sendName(values.name);
        }}
      >
        {() => (
          <Form>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.name && form.touched.name)}
                  marginY="0.5rem"
                >
                  <Input
                    {...field}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.email && form.touched.email)}
                  marginBottom="0.5rem"
                >
                  <Input
                    {...field}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="terms">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.terms && form.touched.terms)}
                  marginBottom="0.5rem"
                >
                  <Box display="flex" justifyContent="space-between">
                    <Checkbox
                      {...field}
                      name="terms"
                      checked={field.value}
                      marginRight="0.5rem"
                    />
                    <FormLabel htmlFor="terms" margin="0" fontWeight="normal">
                      I agree to the terms{" "}
                      <Box as="span" textColor="white">
                        and I bring nice fika when corona is over ;)
                      </Box>
                    </FormLabel>
                  </Box>
                  <FormErrorMessage>{form.errors.terms}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              background="#357edd"
              color="white"
              paddingX="2rem"
            >
              I'm in, sign me up!
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ListForm;
