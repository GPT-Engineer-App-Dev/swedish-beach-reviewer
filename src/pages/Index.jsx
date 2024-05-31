import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const Index = () => {
  const [reviews, setReviews] = useState([]);
  const [beachName, setBeachName] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { beachName, reviewerName, rating, comments };
    setReviews([...reviews, newReview]);
    setBeachName("");
    setReviewerName("");
    setRating("");
    setComments("");
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={6} borderRadius="md">
        <Heading size="lg">Sweden Beach Reviews</Heading>
      </Flex>

      <VStack spacing={8}>
        <Box w="100%">
          <Heading size="md" mb={4}>Beach Reviews</Heading>
          {reviews.length === 0 ? (
            <Text>No reviews yet. Be the first to add one!</Text>
          ) : (
            reviews.map((review, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold">{review.beachName}</Text>
                  <Text>{'⭐'.repeat(review.rating)}</Text>
                </HStack>
                <Text mt={2}><strong>Reviewer:</strong> {review.reviewerName}</Text>
                <Text mt={2}>{review.comments}</Text>
              </Box>
            ))
          )}
        </Box>

        <Box w="100%">
          <Heading size="md" mb={4}>Submit a Review</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Beach Name</FormLabel>
                <Input
                  value={beachName}
                  onChange={(e) => setBeachName(e.target.value)}
                  placeholder="Enter the beach name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Reviewer Name</FormLabel>
                <Input
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="Enter your name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Rating</FormLabel>
                <Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Select rating"
                >
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Comments</FormLabel>
                <Textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Enter your comments"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Submit Review
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;