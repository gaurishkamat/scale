source ./scripts/_colors.sh;
source ./scripts/_header.sh;
echo "--------"
echo "--------"
echo "${GREEN}Build Components...${NC}"
echo "--------"
echo "--------"
echo "${GREEN}Build config...${NC}"
yarn workspace @scaleds/config build;
echo "--------"
echo "${GREEN}Build Components...${NC}"
yarn workspace @scaleds/components-telekom build;
echo "--------"
echo "${GREEN}Build React wrappers...${NC}"
yarn workspace @scaleds/components-react-telekom build;
echo "--------"
echo "--------"
