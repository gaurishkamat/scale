source ./scripts/_colors.sh;
echo "This will build icons, components and then Storybook"
echo "--------"
echo "${GREEN}Building Icons...${NC}"
yarn workspace @scaleds/icons-telekom build;
echo "--------"
echo "${GREEN}Building Components...${NC}"
yarn workspace @scaleds/components-telekom build;
echo "--------"
echo "${GREEN}Building Storybook...${NC}"
yarn workspace @scaleds/storybook-vue build;
