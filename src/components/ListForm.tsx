import {
  Box,
  Button,
  chakra,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HTMLChakraProps,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps } from "formik";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import * as Yup from "yup";

interface ListFormProps {
  sendName(name: string): void;
}

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionButtonProps = Merge<
  HTMLChakraProps<"button">,
  HTMLMotionProps<"button">
>;
export const MotionButton: React.FC<MotionButtonProps> = motion(Button);

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
                  marginX="auto"
                  width={{ base: "75%", md: "100%" }}
                >
                  <Input
                    {...field}
                    type="text"
                    name="name"
                    placeholder="Name"
                    borderColor="blackAlpha.500"
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
                  marginX="auto"
                  width={{ base: "75%", md: "100%" }}
                >
                  <Input
                    {...field}
                    type="email"
                    name="email"
                    placeholder="Email"
                    borderColor="blackAlpha.500"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="terms">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.terms && form.touched.terms)}
                  marginBottom={{ md: "1.75rem" }}
                  marginX="auto"
                  width={{ base: "75%", md: "100%" }}
                >
                  <Flex justifyContent="space-between" alignItems="flex-start">
                    <Checkbox
                      {...field}
                      name="terms"
                      checked={field.value}
                      marginRight="0.5rem"
                      marginTop="0.25rem"
                    />
                    <FormLabel
                      htmlFor="terms"
                      marginY="auto"
                      fontWeight="normal"
                    >
                      I agree to the terms{" "}
                      <Box as="span" textColor="white">
                        and I bring nice fika when corona is over ;)
                      </Box>
                    </FormLabel>
                  </Flex>
                  <FormErrorMessage>{form.errors.terms}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex justifyContent={{ base: "center", md: "start" }}>
              {/* <motion.div whileHover={{ scale: 1.1 }}> */}
              {/* <Button
                type="submit"
                background="#357edd"
                color="white"
                _hover={{ background: "#357edd" }}
                paddingX="2rem"
                marginBottom="2rem"
              >
                I'm in, sign me up!
              </Button> */}
              <MotionButton
                type="submit"
                background="#357edd"
                color="white"
                _hover={{ background: "#357edd" }}
                paddingX="2rem"
                marginBottom="2rem"
                whileHover={{ scale: 1.05 }}
              >
                I'm in, sign me up!
              </MotionButton>
              {/* </motion.div> */}
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ListForm;
