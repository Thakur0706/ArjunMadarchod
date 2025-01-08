import {
  Container,
  useColorModeValue,
  VStack,
  Box,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { sucess, message } = await createProduct(newProduct);
    console.log("Sucess:", sucess);
    console.log("Message:", message);
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={"8"}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={"6"}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setnewProduct({ ...newProduct, name: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Price"
              name="Price"
              value={newProduct.price}
              onChange={(e) =>
                setnewProduct({ ...newProduct, price: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setnewProduct({ ...newProduct, image: e.target.value })
              }
            ></Input>
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
