source ./scripts/_colors.sh;
source ./scripts/_header.sh;
echo "--------"
echo "${GREEN}Build Components...${NC}"
echo "--------"
echo "${GREEN}Build Components...${NC}"
yarn workspace @scaleds/telekom-components build;
echo "--------"
echo "${GREEN}Build React wrappers...${NC}"
yarn workspace @scaleds/telekom-components-react build;
echo "--------"
